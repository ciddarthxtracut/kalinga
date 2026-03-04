import { fetchDepartmentCompleteDetail, fetchAllDepartmentsCourses } from "@/app/lib/api";
import CommerceClient from "./CommerceClient";

const facultySlug = "faculty-of-commerce-and-management";

export const metadata = {
    title: "Department of Commerce | Kalinga University Raipur",
    description: "Explore the Department of Commerce at Kalinga University. Offering B.Com, M.Com, and PhD programs with industry-relevant training, diverse clubs, and excellent placement opportunities.",
    keywords: "Kalinga University Raipur, Private university in Chhattisgarh, UG courses in Raipur, PG courses in Raipur, B.Com admission 2026, M.Com in Raipur, commerce colleges in Chhattisgarh",
    alternates: {
        canonical: "/departments/commerce/",
    },
};

export default async function CommerceDepartmentPage() {
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
        console.error("Error loading Commerce department data:", error);
    }

    const clubsData = (departmentData?.clubs || [])
        .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
        .map(club => ({
            id: club.id,
            title: club.name || "",
            description: club.description || "",
            image: club.logo || null,
            category: "Clubs",
        }));

    const sourceData = (departmentCourses && departmentCourses.length > 0)
        ? departmentCourses
        : (departmentData?.department_courses || []);

    const programsOffered = sourceData
        .filter(course => {
            const name = (course.name || "").toUpperCase();
            const shortName = (course.short_name || "").toUpperCase();
            return (shortName.includes("BBA") ||
                shortName.includes("BCOM") ||
                shortName.includes("MCOM") ||
                name.includes("COMMERCE")) &&
                !shortName.includes("MBA");
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
    const programsOverview = programSyllabusImage?.programs_offered_overview || departmentData?.programs_offered_overview || "Explore our commerce programs designed to empower your professional journey.";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Kalinga University Department of Commerce",
        "description": "Offering top-tier commerce education including B.Com and M.Com programs in Raipur, Chhattisgarh.",
        "url": "https://www.kalingauniversity.ac.in/departments/commerce/",
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
            <CommerceClient
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
