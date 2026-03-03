"use client";

import { useState, useEffect } from "react";
import MainIntro from "@/app/components/about/main_intro";
import PublicationGrid from "@/app/components/research/publication-grid";
import EligibilityCriteria from "@/app/components/course/eligibility_criteria";
import CareerPath from "@/app/components/course/career_path";
import Specialization from "@/app/components/department/specialization";
import OrganogramOfKalinga from "@/app/components/about/organogram_of_kalinga";
import CourseNavigation from "@/app/components/general/course-navigation";
import { useFlipbook } from "@/app/components/general/FlipbookContext";
import { fetchCourseCompleteDetail, fetchDepartmentCompleteDetail, parseHtmlToText, parseHtmlListItems, fetchClubs, fetchClubDetail } from "@/app/lib/api";
import FacilitySlider from "@/app/components/course/facility-slider";
import FAQ from "@/app/components/general/faq";
import AdmissionCareer from "@/app/components/general/admission_cta";
import Link from "next/link";
import GlobalArrowButton from "@/app/components/general/global-arrow_button";

// Helper function to format duration
const formatDuration = (duration, semester) => {
    if (duration && semester) {
        return `${duration} Year${duration > 1 ? 's' : ''} (${semester} Semester${semester > 1 ? 's' : ''})`;
    }
    return "3 Years (6 Semesters)";
};

export default function CourseClientPage({ slug, initialData }) {
    const [courseData, setCourseData] = useState(initialData);
    const [loading, setLoading] = useState(!initialData);
    const [error, setError] = useState(null);
    const [departmentData, setDepartmentData] = useState(null);
    const [metadataLoaded, setMetadataLoaded] = useState(false);
    const [clubsData, setClubsData] = useState([]);
    const { openFlipbook } = useFlipbook();

    useEffect(() => {
        if (initialData) return;

        const loadData = async () => {
            try {
                setLoading(true);
                const data = await fetchCourseCompleteDetail(slug);
                setCourseData(data);

                if (data.department) {
                    const deptId = typeof data.department === 'object' ? data.department.id : data.department;
                    if (deptId) {
                        fetchDepartmentCompleteDetail(deptId).then(setDepartmentData).catch(console.error);
                    }
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, [slug, initialData]);

    // Fetch clubs data
    useEffect(() => {
        const loadClubsData = async () => {
            try {
                const clubsList = await fetchClubs();
                const detailedClubs = await Promise.all(
                    clubsList.map(async (club) => {
                        try {
                            const detail = await fetchClubDetail(club.id);
                            const description = typeof detail === 'object' ? parseHtmlToText(detail.description) : parseHtmlToText(detail);
                            const link = (typeof detail === 'object' && detail.link) ? detail.link : "#";
                            return { ...club, longDescription: description, link: link };
                        } catch (err) {
                            return { ...club, longDescription: "", link: "#" };
                        }
                    })
                );
                setClubsData(detailedClubs);
            } catch (err) {
                console.error("Failed to load clubs data:", err);
            }
        };
        loadClubsData();
    }, []);

    // Update SEO metadata
    useEffect(() => {
        if (!courseData) return;
        if (courseData.meta_title) document.title = courseData.meta_title;
        else if (courseData.name) document.title = courseData.name;
        setMetadataLoaded(true);
    }, [courseData]);

    if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--button-red)]"></div></div>;
    if (error || !courseData) return <div className="min-h-screen flex items-center justify-center">Course not found</div>;

    // Mapping logic (simplified for brevity, derived from original)
    const mainIntroContent = courseData?.about_sections?.[0] ? {
        title: courseData.about_sections[0].heading,
        description: courseData.about_sections[0].content,
        imageUrl: courseData.about_sections[0].image,
        imageAlt: courseData.about_sections[0].alt,
    } : null;

    const publicationStats = (() => {
        const milestones = (courseData?.milestones?.length > 0 ? courseData.milestones : departmentData?.milestones) || [];
        return milestones.slice().sort((a, b) => (a.display_order || 0) - (b.display_order || 0)).map(m => ({
            title: m.heading || "",
            value: `${m.number || ""} ${m.symbol || ""}`.trim(),
            description: m.description || "",
        }));
    })();

    const eligibilityContent = courseData?.eligibility_criteria?.[0] ? {
        imageUrl: courseData.eligibility_criteria[0].image || courseData.image || "https://cdn.kalingauniversity.ac.in/course/course_page.webp",
        imageAlt: courseData.eligibility_criteria[0].image_alt || "Students",
        duration: formatDuration(courseData?.duration, courseData?.semester),
        title: "Eligibility Criteria",
        criteria: parseHtmlListItems(courseData.eligibility_criteria[0].eligibility_criteria),
        admissionTitle: "Your Next Big Chapter Starts With One Click",
        admissionButtonLabel: "Admission Open",
        href: "https://admissions.kalingauniversity.ac.in/",
        additionalButtons: [
            { label: "Fees", href: "/ku-fees" },
            { label: "Scheme & Syllabus", href: "#syllabus" }
        ]
    } : null;

    const careerPathContent = courseData?.career_info?.length > 0 ? {
        title: "Career Pathways",
        description: parseHtmlToText(courseData.career_pathway || ""),
        careers: courseData.career_info.slice().sort((a, b) => (a.display_order || 0) - (b.display_order || 0)).map(c => ({
            id: c.id,
            title: c.heading || "",
            description: parseHtmlToText(c.description) || "",
            imageUrl: c.icon_image || null,
        }))
    } : null;

    const specializationContent = courseData?.specializations?.length > 0 ? {
        sectionTitle: "Specialisation",
        sectionDescription: "Choose a specialisation of your choice and master what’s trending.",
        items: courseData.specializations.slice().sort((a, b) => (a.display_order || 0) - (b.display_order || 0)).map((s, i) => ({
            title: s.heading || "",
            body: parseHtmlToText(s.career_opportunities) || "",
            image: s.icon || s.icon_url || null,
            duration: s.duration || "",
            fees: s.fee || "",
            eligibility: s.eligibility_criteria || "",
        }))
    } : null;

    const navigationTabs = [
        { id: 'about', label: 'About' },
        { id: 'eligibility', label: 'Eligibility Criteria' },
        { id: 'career', label: 'Career Pathways' },
        { id: 'specialization', label: 'Specialization' },
        { id: 'facilities', label: 'Facilities' },
        { id: 'activities', label: 'Events and Activities' }
    ];

    return (
        <div>
            <CourseNavigation tabs={navigationTabs} />
            {mainIntroContent && <div id="about"><MainIntro {...mainIntroContent} showKnowMore={true} /></div>}
            {publicationStats.length > 0 && <PublicationGrid stats={publicationStats} />}
            {eligibilityContent && <div id="eligibility"><EligibilityCriteria {...eligibilityContent} /></div>}
            {careerPathContent && <div id="career"><CareerPath {...careerPathContent} /></div>}
            {specializationContent && <div id="specialization"><Specialization title={specializationContent.sectionTitle} subtitle={specializationContent.sectionDescription} items={specializationContent.items.map(item => ({
                title: item.title,
                careerOpportunities: [item.body],
                imageUrl: item.image,
                duration: item.duration,
                fees: item.fees,
                eligibility: item.eligibility
            }))} /></div>}
            {['bachelor-of-arts-bachelor-of-law', 'bachelor-of-business-administration-and-bachelor-of-law', 'bachelor-of-law', 'master-of-law'].includes(slug) && <FacilitySlider />}
            <div id="facilities"><AdmissionCareer /></div>
        </div>
    );
}
