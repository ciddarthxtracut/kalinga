import { fetchAllCourses, fetchCourseCompleteDetail } from "@/app/lib/api";
import CourseClientPage from "./CourseClientPage";

/**
 * Metadata Generation for Course Pages
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  let data = null;

  try {
    data = await fetchCourseCompleteDetail(slug);
  } catch (error) {
    console.error("Error fetching metadata for course:", error);
  }

  if (data) {
    return {
      title: data.meta_title || `${data.name} | Kalinga University`,
      description: data.meta_description || `Enroll in ${data.name} at Kalinga University. Check eligibility, fee structure, and career opportunities.`,
      keywords: data.keywords || data.meta_keywords,
      authors: data.author ? [{ name: data.author }] : [{ name: "Kalinga University" }],
      alternates: {
        canonical: data.canonical_url || `https://kalingauniversity.ac.in/courses/${slug}`,
      },
      title: {
        absolute: data.meta_title || `${data.name} | Kalinga University`,
      }
    };
  }

  return {
    title: "Course | Kalinga University",
  };
}

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
