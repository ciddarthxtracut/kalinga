import os
import re

app_dir = r"c:\Users\Admin\Documents\Github\kalinga\my-app\src\app"
results = {}

def get_slug(root):
    relative = os.path.relpath(root, app_dir)
    if relative == ".":
        return "/"
    return "/" + relative.replace("\\", "/")

def find_val(content, key):
    pattern = rf'{key}\s*:\s*[`"\'](.*?)[`"\']'
    match = re.search(pattern, content, re.DOTALL | re.IGNORECASE)
    if match:
        val = match.group(1).strip()
        val = val.replace("\\\n", "").replace("\n", "").strip()
        return val
    return None

for root, dirs, files in os.walk(app_dir):
    for name in files:
        if name in ["page.jsx", "page.js", "page.tsx"]:
            full_path = os.path.join(root, name)
            slug = get_slug(root)
            try:
                with open(full_path, "r", encoding="utf-8") as f:
                    content = f.read()
                if "breadcrumbData =" in content or "window.__breadcrumbData =" in content:
                    title = find_val(content, "pageTitle")
                    banner = find_val(content, "heroImage")
                    label = find_val(content, "breadcrumbLabel")
                    pos = find_val(content, "imageposition") # Extracting image position
                    
                    results[slug] = {
                        "slug": slug,
                        "title": title or "",
                        "banner": banner or "",
                    }
                    if label:
                        results[slug]["breadcrumbLabel"] = label
                    if pos:
                        results[slug]["imagePosition"] = pos
            except Exception:
                pass

with open(r"c:\Users\Admin\Documents\Github\kalinga\page_data_final.txt", "w", encoding="utf-8") as f:
    f.write("export const pageDataMap: Record<string, PageData> = {\n")
    for slug, data in sorted(results.items()):
        if not data["title"] and not data["banner"] and len(slug.split('/')) > 3:
            continue
        f.write(f'  "{slug}": {{\n')
        f.write(f'    slug: "{data["slug"]}",\n')
        f.write(f'    title: "{data["title"]}",\n')
        if "breadcrumbLabel" in data:
            f.write(f'    breadcrumbLabel: "{data["breadcrumbLabel"]}",\n')
        f.write(f'    banner: "{data["banner"]}",\n')
        if "imagePosition" in data:
            f.write(f'    imagePosition: "{data["imagePosition"]}",\n')
        f.write('  },\n')
    f.write("};\n")
print("Done")
