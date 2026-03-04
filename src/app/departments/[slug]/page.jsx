import { fetchAllDepartments, fetchDepartmentCompleteDetail } from "@/app/lib/api";
import DepartmentClientPage from "./DepartmentClientPage";

/**
 * Metadata Generation for Department Pages
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  let data = null;

  try {
    data = await fetchDepartmentCompleteDetail(slug);
  } catch (error) {
    console.error("Error fetching metadata for department:", error);
  }

  if (data) {
    return {
      title: data.meta_title || `${data.name} | Kalinga University`,
      description: data.meta_description || `Learn about ${data.name} at Kalinga University. Explore our programs, faculty, and facilities.`,
      keywords: data.keywords || data.meta_keywords, // API might use either
      authors: data.author ? [{ name: data.author }] : [{ name: "Kalinga University" }],
      alternates: {
        canonical: data.canonical_url || `https://kalingauniversity.ac.in/departments/${slug}`,
      },
      // Ensure we don't auto-append brand if meta_title exists
      title: {
        absolute: data.meta_title || `${data.name} | Kalinga University`,
      }
    };
  }

  return {
    title: "Department | Kalinga University",
  };
}

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
