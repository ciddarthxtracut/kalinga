// Force static generation so robots.txt is built and served in production
export const dynamic = "force-static";

export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/private/", "/admin/"],
        },
        sitemap: "https://kalingauniversity.ac.in/sitemap.xml",
        host: "https://kalingauniversity.ac.in",
    };
}
