import { fetchAllDepartments, fetchAllCourses, fetchNewsEvents } from '@/app/lib/api';
import { BASE_URL, LAST_MOD, staticPages, EXCLUDED_DEPT_SLUGS } from '@/lib/sitemap-data';

// Revalidate sitemap every hour so live sitemap.xml includes API-driven pages (departments, courses, news)
export const revalidate = 3600;

export default async function sitemap() {
    // ── 1. Static pages ───────────────────────────────────────────────────────────
    const staticEntries = staticPages.map(({ url, priority, changefreq }) => ({
        url: `${BASE_URL}${url}`,
        lastModified: LAST_MOD,
        changeFrequency: changefreq,
        priority,
    }));

    // ── 2. Dynamic department pages (from API) ────────────────────────────────────
    let departmentEntries = [];
    try {
        const departments = await fetchAllDepartments();
        if (Array.isArray(departments)) {
            departmentEntries = departments
                .filter((dept) => dept?.slug && !EXCLUDED_DEPT_SLUGS.has(dept.slug))
                .map((dept) => ({
                    url: `${BASE_URL}/departments/${dept.slug}`,
                    lastModified: LAST_MOD,
                    changeFrequency: 'monthly',
                    priority: 0.8,
                }));
        }
    } catch (e) {
        console.warn('[sitemap] Departments API failed:', e?.message || e);
    }

    // ── 3. Dynamic course pages (from API) ────────────────────────────────────────
    let courseEntries = [];
    try {
        const courses = await fetchAllCourses();
        if (Array.isArray(courses)) {
            courseEntries = courses
                .filter((course) => course?.slug)
                .map((course) => ({
                    url: `${BASE_URL}/courses/${course.slug}`,
                    lastModified: LAST_MOD,
                    changeFrequency: 'monthly',
                    priority: 0.7,
                }));
        }
    } catch (e) {
        console.warn('[sitemap] Courses API failed:', e?.message || e);
    }

    // ── 4. Dynamic news & events pages (from API) ──────────────────────────────────
    let newsEntries = [];
    try {
        const newsResponse = await fetchNewsEvents({ is_published: true });
        const news = newsResponse?.results || (Array.isArray(newsResponse) ? newsResponse : []);
        if (Array.isArray(news)) {
            newsEntries = news
                .filter((item) => item?.slug)
                .map((item) => ({
                    url: `${BASE_URL}/news-and-events/${item.slug}`,
                    lastModified: LAST_MOD,
                    changeFrequency: 'weekly',
                    priority: 0.6,
                }));
        }
    } catch (e) {
        console.warn('[sitemap] News/events API failed:', e?.message || e);
    }

    const total = staticEntries.length + departmentEntries.length + courseEntries.length + newsEntries.length;
    if (process.env.NODE_ENV !== 'test') {
        console.info(`[sitemap] Generated ${total} URLs (static: ${staticEntries.length}, departments: ${departmentEntries.length}, courses: ${courseEntries.length}, news: ${newsEntries.length})`);
    }

    return [...staticEntries, ...departmentEntries, ...courseEntries, ...newsEntries];
}
