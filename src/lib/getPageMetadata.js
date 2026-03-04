/**
 * Parses the "static" metadata string from metadata_export.json (JS object literal style)
 * into a Next.js metadata object. Extracts title, description, keywords, alternates.canonical, robots.
 */
function parseStaticMetaString(staticStr) {
  if (!staticStr || typeof staticStr !== "string") return null;
  const s = staticStr.replace(/\r\n/g, " ").replace(/\n/g, " ");
  const meta = {};
  const titleMatch = s.match(/title\s*:\s*["']((?:[^"\\]|\\.)*)["']/);
  if (titleMatch) meta.title = titleMatch[1].trim();
  const descMatch = s.match(/description\s*:\s*["']((?:[^"\\]|\\.)*)["']/);
  if (descMatch) meta.description = descMatch[1].trim();
  const keywordsMatch = s.match(/keywords\s*:\s*["']((?:[^"\\]|\\.)*)["']/);
  if (keywordsMatch) meta.keywords = keywordsMatch[1].trim();
  const canonicalMatch = s.match(/canonical\s*:\s*["']((?:[^"\\]|\\.)*)["']/);
  if (canonicalMatch) {
    meta.alternates = { canonical: canonicalMatch[1].trim() };
  }
  const robotsIndex = s.match(/robots\s*:\s*\{\s*index\s*:\s*(false|true)/);
  const robotsFollow = s.match(/follow\s*:\s*(false|true)/);
  if (robotsIndex || robotsFollow) {
    meta.robots = {
      index: robotsIndex ? robotsIndex[1] === "true" : true,
      follow: robotsFollow ? robotsFollow[1] === "true" : true,
    };
  }
  return Object.keys(meta).length ? meta : null;
}

/**
 * Maps a pathname (e.g. "/contact-us", "/") to possible metadata_export.json keys.
 * Export uses keys like "contact-us\\page.jsx" or "alumini\\page.js".
 */
function pathnameToKeys(pathname) {
  const normalized = pathname.replace(/\/$/, "") || "/";
  if (normalized === "/") return ["page.js"];
  const segment = normalized.slice(1);
  const base = segment.split("/").join("\\");
  return [base + "\\page.jsx", base + "\\page.js"];
}

/**
 * Returns Next.js metadata for the given pathname from metadata_export.json data.
 * Merges page-specific meta (from "static" entry) with default. Skips "dynamic" entries (use page's own generateMetadata).
 * @param {string} pathname - e.g. "/contact-us", "/"
 * @param {object} metadataExport - parsed metadata_export.json (must have "default" and page keys)
 * @returns {object} Next.js metadata object
 */
export function getPageMetadata(pathname, metadataExport) {
  if (!metadataExport || !metadataExport.default) return null;
  const defaultMeta = metadataExport.default;
  const keys = pathnameToKeys(pathname);
  let entry;
  for (const key of keys) {
    if (metadataExport[key]) {
      entry = metadataExport[key];
      break;
    }
  }
  if (!entry) return defaultMeta;
  if (entry.dynamic) return defaultMeta;
  const pageMeta = parseStaticMetaString(entry.static);
  if (!pageMeta) return defaultMeta;
  return {
    ...defaultMeta,
    ...pageMeta,
    openGraph: {
      ...defaultMeta.openGraph,
      title: pageMeta.title ?? defaultMeta.openGraph?.title,
      description: pageMeta.description ?? defaultMeta.openGraph?.description,
    },
  };
}
