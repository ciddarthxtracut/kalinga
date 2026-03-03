import { fetchAllDepartments, fetchDepartmentCompleteDetail } from "@/app/lib/api";
import DepartmentClientPage from "./DepartmentClientPage";

/**
 * Static Generation for Department Pages
 */
export async function generateStaticParams() {
  try {
    const departments = await fetchAllDepartments();
    // Some departments might use 'slug' if from the list, or we use name conversion
    return departments.map((dept) => ({
      slug: dept.slug || dept.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''),
    }));
  } catch (error) {
    console.error("Error generating static params for departments:", error);
    return [];
  }
}

export default async function Page({ params }) {
  const { slug } = await params;
  let initialData = null;

  try {
    initialData = await fetchDepartmentCompleteDetail(slug);
  } catch (error) {
    console.error(`Error fetching initial data for department ${slug}:`, error);
  }

  return <DepartmentClientPage slug={slug} initialData={initialData} />;
}
