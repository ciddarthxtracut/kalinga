import { fetchDepartmentCompleteDetail, fetchAllDepartmentsCourses } from "@/app/lib/api";
import ManagementClient from "./ManagementClient";

const facultySlug = "faculty-of-commerce-and-management";

export const metadata = {
    title: "Department of Management | Kalinga University Raipur",
    description: "Discover the Department of Management at Kalinga University. Offering MBA, BBA, and specialized management programs with a focus on leadership, innovation, and industry readiness.",
    keywords: "Kalinga University Raipur, Private university in Chhattisgarh, MBA admission 2026, BBA in Raipur, management colleges in Chhattisgarh, business studies, leadership training",
    alternates: {
        canonical: "/departments/management/",
    },
};

export default async function ManagementDepartmentPage() {
    let departmentData = null;
    let departmentCourses = [];
    let loading = false;

    try {
        const [details, coursesData] = await Promise.all([
            fetchDepartmentCompleteDetail(facultySlug),
            fetchAllDepartmentsCourses(null, facultySlug).catch(() => ({ courses: [] }))
        ]);
        departmentData = details;
        if (coursesData && coursesData.courses) {
            departmentCourses = coursesData.courses;
        }
    } catch (error) {
        console.error("Error loading Management department data:", error);
    }

    const sourceData = (departmentCourses && departmentCourses.length > 0)
        ? departmentCourses
        : (departmentData?.department_courses || []);

    const programsOffered = sourceData
        .filter(course => {
            const name = (course.name || "").toLowerCase();
            const shortName = (course.short_name || "").toUpperCase();
            return (name.includes("management") ||
                shortName.includes("MBA") ||
                shortName.includes("PGDM")) &&
                !shortName.includes("BBA");
        })
        .map(course => {
            let level = "UG";
            if (course.program_type) {
                const type = course.program_type.toLowerCase();
                if (type === "pg" || type === "postgraduate") level = "PG";
                else if (type === "phd" || type === "doctorate") level = "PhD";
                else if (type === "diploma") level = "Diploma";
            }
            const dNum = parseInt(course.duration);
            const duration = !isNaN(dNum) ? `${dNum} Year${dNum > 1 ? 's' : ''}` : (course.duration || "3 Years");
            return {
                id: course.id,
                title: course.name || "",
                shortName: course.short_name || "",
                duration: duration,
                level: level,
                slug: course.slug || null,
            };
        });

    const programSyllabusImage = departmentData?.program_syllabus_images?.[0];
    const programsImage = programSyllabusImage?.image || programSyllabusImage?.image_url || departmentData?.programs_image;
    const programsOverview = programSyllabusImage?.programs_offered_overview || departmentData?.programs_offered_overview || "Explore our management programs designed to empower your professional journey.";

    const clubsData = (departmentData?.clubs || [])
        .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
        .map(club => ({
            id: club.id,
            title: club.name || "",
            description: club.description || "",
            image: club.logo || null,
            category: "Clubs",
        }));

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Kalinga University Department of Management Studies",
        "description": "Providing excellence in management education including MBA and BBA programs in Raipur, Chhattisgarh.",
        "url": "https://www.kalingauniversity.ac.in/departments/management/",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Raipur",
            "addressRegion": "Chhattisgarh",
            "addressCountry": "India"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ManagementClient
                departmentData={departmentData}
                programsOffered={programsOffered}
                programsOverview={programsOverview}
                programsImage={programsImage}
                clubsData={clubsData}
                loading={loading}
            />
        </>
    );
}
