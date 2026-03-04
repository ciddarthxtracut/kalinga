import AcademicsClient from "./AcademicsClient";
import { fetchAllDepartments, fetchDepartmentCompleteDetail, parseHtmlToText, fetchDepartmentCourseCounts } from '@/app/lib/api';

export const metadata = {
  title: "Academics at Kalinga University | Excellence in Education",
  description: "Explore the academic excellence at Kalinga University. Discover our diverse range of UG, PG, and PhD programs, industry-aligned curriculum, and world-class faculty.",
  keywords: "Academics Kalinga University, courses in Raipur, higher education Chhattisgarh, university programs India",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/academics",
  },
};

const PLACEHOLDER_IMAGE = "https://cdn.kalingauniversity.ac.in/academics/arts.webp";

// Generate slug from department name if slug is not available
const generateSlug = (name) => {
  if (!name) return '';
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export default async function AcademicsPage() {
  let departments = [];
  try {
    const [departmentsList, courseCountsData] = await Promise.all([
      fetchAllDepartments(),
      fetchDepartmentCourseCounts().catch(() => [])
    ]);

    const courseCountMap = new Map();
    if (Array.isArray(courseCountsData)) {
      courseCountsData.forEach(item => {
        if (item.id && item.course_count !== undefined) {
          courseCountMap.set(item.id, item.course_count);
        }
      });
    }

    departments = await Promise.all(
      departmentsList.map(async (dept) => {
        try {
          const completeDetail = await fetchDepartmentCompleteDetail(dept.id);
          const aboutImage = completeDetail?.about_sections?.[0]?.image ||
            completeDetail?.banners?.[0]?.image ||
            completeDetail?.banners?.[0]?.image_url ||
            PLACEHOLDER_IMAGE;

          const overviewText = parseHtmlToText(completeDetail?.about_sections?.[0]?.content || '');
          const programsCount = courseCountMap.get(dept.id) ??
            dept.course_count ??
            completeDetail?.department_courses?.length ??
            0;

          const courseCountItem = Array.isArray(courseCountsData)
            ? courseCountsData.find(item => item.id === dept.id)
            : null;
          const deptSlug = courseCountItem?.slug ||
            dept.slug ||
            completeDetail?.slug ||
            generateSlug(completeDetail?.name || dept.name);

          return {
            id: dept.id,
            title: completeDetail?.name || dept.name,
            img: aboutImage,
            summary: overviewText,
            fullSummary: overviewText,
            programs: programsCount.toString(),
            scholarships: "Know More",
            slug: deptSlug,
            departmentId: dept.id,
          };
        } catch (err) {
          const fallbackCount = courseCountMap.get(dept.id) ?? dept.course_count ?? 0;
          return {
            id: dept.id,
            title: dept.name,
            img: PLACEHOLDER_IMAGE,
            summary: '',
            fullSummary: '',
            programs: fallbackCount.toString(),
            scholarships: "Know More",
            slug: dept.slug || generateSlug(dept.name),
            departmentId: dept.id,
          };
        }
      })
    );

    departments.sort((a, b) => (a.title || '').localeCompare(b.title || ''));

    // Add static PhD
    departments.push({
      id: 'static-phd',
      title: 'Ph.D.',
      img: "https://cdn.kalingauniversity.ac.in/phd/Phd-BannerImage.webp",
      summary: "Pursuing a doctoral program can be a transformative step for the growth of your career...",
      fullSummary: "Pursuing a doctoral program can be a transformative step for the growth of your career and to earn a name and recognition in society. It will not just provide you with in-depth knowledge, but you will also get an opportunity to contribute to research and development. A Ph.D. degree will make you stand out in both the academic and corporate worlds.",
      programs: "Research",
      scholarships: "Know More",
      slug: "phd",
      departmentId: 'static-phd',
    });
    departments.sort((a, b) => (a.title || '').localeCompare(b.title || ''));

  } catch (error) {
    console.error("Error fetching academics data:", error);
  }

  const quickLinks = [
    {
      id: 1,
      icon: "https://cdn.kalingauniversity.ac.in/academics/icons/Programs.svg",
      title: "Student Clubs",
      description: "Our vibrant clubs motivate students to learn and grow with confidence inside and outside their classrooms.",
      link: "/student-clubs"
    },
    {
      id: 2,
      icon: "https://cdn.kalingauniversity.ac.in/academics/icons/teachings.svg",
      title: "Value Added Courses",
      description: "Explore a wide range of short-term value-added certification courses conducted by industry experts at the University. ",
      link: "/value-added-course"
    },
    {
      id: 3,
      icon: "https://cdn.kalingauniversity.ac.in/academics/icons/Curriculum.svg",
      title: "Industrial Visits",
      description: "To understand the industry dynamics, we conduct industrial visits where students interact with industry professionals and explore real-world applications.",
      link: "/news-and-events#industrial-visits"
    },
    {
      id: 4,
      icon: "https://cdn.kalingauniversity.ac.in/icons/Industrial+Visits.svg",
      title: "Internships & Placement",
      description: "Get an on-campus or off-campus internship opportunity and get placed in top companies through our Campus Placement Drives.",
      link: "/training-and-placements"
    },
    {
      id: 5,
      icon: "https://cdn.kalingauniversity.ac.in/admission/elgbility.svg",
      title: "Academic Facilities",
      description: "Our top-notch academic facilities will support your dreams by giving an all-around practical exposure at every step of your journey.",
      link: "/academic-facilities"
    },
    {
      id: 6,
      icon: "https://cdn.kalingauniversity.ac.in/academics/icons/Events.svg",
      title: "Conferences & Events",
      description: "Discover various National and International conferences held at Kalinga University, offering a dynamic platform for knowledge sharing.",
      link: "/conferences-and-events"
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Academics - Kalinga University",
    "description": "Discover our academic programs, departments, and research opportunities.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Academics", "item": "https://kalingauniversity.ac.in/academics" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AcademicsClient departments={departments} quickLinks={quickLinks} />
    </>
  );
}
