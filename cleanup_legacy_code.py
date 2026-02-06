import os
import re

app_dir = r"c:\Users\Admin\Documents\Github\kalinga\my-app\src\app"

def find_matching_brace(content, start_index):
    count = 0
    for i in range(start_index, len(content)):
        if content[i] == '{':
            count += 1
        elif content[i] == '}':
            count -= 1
            if count == 0:
                return i
    return -1

def cleanup_file(full_path):
    with open(full_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    original_content = content
    
    # 1. Look for useEffect that sets window.__breadcrumbData
    search_index = 0
    while True:
        ue_match = re.search(r'useEffect\(\(\) => \{', content[search_index:])
        if not ue_match:
            break
        
        start_idx = search_index + ue_match.start()
        brace_start = search_index + ue_match.end() - 1
        end_brace = find_matching_brace(content, brace_start)
        
        if end_brace != -1:
            ue_block = content[start_idx : end_brace + 1]
            if "window.__breadcrumbData" in ue_block or "breadcrumbData" in ue_block:
                remainder = content[end_brace + 1 :].strip()
                if remainder.startswith(','):
                    dep_match = re.search(r',\s*\[.*?\]\s*\);', remainder)
                    if dep_match and dep_match.start() == 0:
                        total_end = end_brace + 1 + dep_match.end()
                        content = content[:start_idx] + content[total_end:]
                        search_index = start_idx
                        continue
                elif remainder.startswith(');'):
                    content = content[:start_idx] + content[end_brace + 1 + 2:]
                    search_index = start_idx
                    continue
        search_index += ue_match.end()

    # 2. Look for top-level breadcrumbData variable
    # Match: const breadcrumbData = { ... }
    search_index = 0
    while True:
        var_match = re.search(r'(const|let|var)\s+breadcrumbData\s*=\s*\{', content[search_index:])
        if not var_match:
            break
        
        start_idx = search_index + var_match.start()
        brace_start = search_index + var_match.end() - 1
        end_brace = find_matching_brace(content, brace_start)
        
        if end_brace != -1:
            # Check if there is a trailing semicolon
            end_total = end_brace + 1
            if end_total < len(content) and content[end_total] == ';':
                end_total += 1
            content = content[:start_idx] + content[end_total:]
            search_index = start_idx
            continue
        search_index += var_match.end()

    # 3. Look for window.__breadcrumbData registration outside of useEffect
    # Match: if (typeof window !== "undefined") { window.__breadcrumbData = ... }
    # Or just: window.__breadcrumbData = ...
    content = re.sub(r'if\s*\(typeof\s+window\s*!==\s*"undefined"\)\s*\{\s*window\.__breadcrumbData\s*=\s*breadcrumbData;?\s*\}', "", content)
    content = re.sub(r'window\.__breadcrumbData\s*=\s*breadcrumbData;?', "", content)

    # 4. Clean up imports and unused variables
    if content != original_content:
        cleaned_content = content
        
        # Check and remove unused pathname
        if "pathname" not in cleaned_content:
            cleaned_content = re.sub(r'const\s+pathname\s*=\s*usePathname\(\);?\s*', "", cleaned_content)
        
        # Remove imports if they are now unused in the file
        react_hooks = ["useEffect", "useState", "useRef", "useMemo", "useCallback"]
        for hook in react_hooks:
            if hook not in cleaned_content:
                # Remove from { ..., hook, ... }
                cleaned_content = re.sub(rf'{hook}\s*,?\s*', "", cleaned_content)

        next_hooks = ["usePathname", "useRouter", "useSearchParams"]
        for hook in next_hooks:
            if hook not in cleaned_content:
                cleaned_content = re.sub(rf'{hook}\s*,?\s*', "", cleaned_content)

        # Final cleanup of broken import lines
        cleaned_content = cleaned_content.replace("{ ,", "{").replace(", }", "}").replace(", ,", ",")
        cleaned_content = re.sub(r'import\s+\{\s*\}\s*from\s*"[^"]+";?\s*', "", cleaned_content)
        
        # Clean up double newlines and comments
        cleaned_content = re.sub(r'// Breadcrumb configuration\s*', "", cleaned_content)
        cleaned_content = re.sub(r'// Register breadcrumb data globally\s*', "", cleaned_content)
        
        with open(full_path, "w", encoding="utf-8") as f:
            f.write(cleaned_content)
        return True
    return False

stats = {"cleaned": 0, "skipped": 0}
for root, dirs, files in os.walk(app_dir):
    for name in files:
        if name in ["page.jsx", "page.js", "page.tsx"]:
            full_path = os.path.join(root, name)
            try:
                if cleanup_file(full_path):
                    stats["cleaned"] += 1
                else:
                    stats["skipped"] += 1
            except Exception as e:
                print(f"Error cleaning {full_path}: {e}")
                stats["skipped"] += 1

print(f"Cleanup finished. Cleaned: {stats['cleaned']}, Skipped: {stats['skipped']}")
