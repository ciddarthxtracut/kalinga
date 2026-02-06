import { getPageData } from './pageData';

export interface BreadcrumbItem {
    label: string;
    href: string;
}

/**
 * Generates an array of breadcrumb items from a URL path.
 */
export async function generateBreadcrumbs(path: string): Promise<BreadcrumbItem[]> {
    const segments = path.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];

    // Always start with Home
    breadcrumbs.push({ label: 'Home', href: '/' });

    let accumulatedPath = '';

    for (const segment of segments) {
        accumulatedPath += `/${segment}`;
        const pageData = await getPageData(accumulatedPath);

        breadcrumbs.push({
            label: pageData.breadcrumbLabel || pageData.title,
            href: accumulatedPath,
        });
    }

    return breadcrumbs;
}
