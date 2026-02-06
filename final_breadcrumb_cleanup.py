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
    
    # 1. Remove useBreadcrumbData(...) calls
    # Pattern: useBreadcrumbData(anything);
    content = re.sub(r'useBreadcrumbData\(.*?\);?\s*', "", content)

    # 2. Remove const breadcrumbData = { ... } blocks
    search_index = 0
    while True:
        var_match = re.search(r'(const|let|var)\s+breadcrumbData\s*=\s*\{', content[search_index:])
        if not var_match:
            break
        
        start_idx = search_index + var_match.start()
        brace_start = search_index + var_match.end() - 1
        end_brace = find_matching_brace(content, brace_start)
        
        if end_brace != -1:
            end_total = end_brace + 1
            if end_total < len(content) and content[end_total] == ';':
                end_total += 1
            content = content[:start_idx] + content[end_total:]
            search_index = start_idx
            continue
        search_index += var_match.end()

    # 3. Clean up imports
    if content != original_content:
        cleaned_content = content
        
        # Remove useBreadcrumbData from imports
        # Case 1: import { useBreadcrumbData } from '...';
        cleaned_content = re.sub(r'import\s+\{\s*useBreadcrumbData\s*\}\s*from\s*["\'].*?["\'];?\s*', "", cleaned_content)
        # Case 2: import { something, useBreadcrumbData } from '...';
        cleaned_content = re.sub(r'useBreadcrumbData\s*,\s*', "", cleaned_content)
        cleaned_content = re.sub(r',\s*useBreadcrumbData', "", cleaned_content)
        
        # Remove empty imports
        cleaned_content = re.sub(r'import\s+\{\s*\}\s*from\s*["\'].*?["\'];?\s*', "", cleaned_content)

        # Fix double newlines left by removals
        cleaned_content = re.sub(r'\n\s*\n\s*\n', '\n\n', cleaned_content)

        with open(full_path, "w", encoding="utf-8") as f:
            f.write(cleaned_content)
        return True
    return False

stats = {"cleaned": 0, "skipped": 0}
for root, dirs, files in os.walk(app_dir):
    for name in files:
        if name.endswith((".jsx", ".js", ".tsx")):
            full_path = os.path.join(root, name)
            try:
                if cleanup_file(full_path):
                    stats["cleaned"] += 1
                else:
                    stats["skipped"] += 1
            except Exception as e:
                print(f"Error cleaning {full_path}: {e}")
                stats["skipped"] += 1

print(f"Final Cleanup finished. Cleaned: {stats['cleaned']}, Skipped: {stats['skipped']}")
