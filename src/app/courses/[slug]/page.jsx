import { fetchAllCourses, fetchCourseCompleteDetail } from "@/app/lib/api";
import CourseClientPage from "./CourseClientPage";

/**
 * Static Generation for Course Pages
 */
export async function generateStaticParams() {
  try {
    const courses = await fetchAllCourses();
    return courses.map((course) => ({
      slug: course.slug,
    }));
  } catch (error) {
    console.error("Error generating static params for courses:", error);
    return [];
  }
}

export default async function Page({ params }) {
  const { slug } = await params;
  let initialData = null;

  try {
    initialData = await fetchCourseCompleteDetail(slug);
  } catch (error) {
    console.error(`Error fetching initial data for course ${slug}:`, error);
  }

  return <CourseClientPage slug={slug} initialData={initialData} />;
}
