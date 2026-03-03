"use client";

import { useState, useEffect, useMemo } from "react";
import MainIntro from "@/app/components/about/main_intro";
import PublicationGrid from "@/app/components/research/publication-grid";
import ProgramsOffered from "@/app/components/department/programs-offered";
import DeptHeadIntro from "@/app/components/department/dept_head_intro";
import Facility from "@/app/components/admissions/facility";
import StudentActivities from "@/app/components/department/student_activities";
import Specialization from "@/app/components/course/specialization";
import Placements from "@/app/components/home/placements";
import FAQ from "@/app/components/general/faq";
import AdmissionCareer from "@/app/components/general/admission_cta";
import Gallery from "@/app/components/general/gallery";
import CareerPath from "@/app/components/course/career_path";
import DataTable from "@/app/components/general/data-table";
import SectionHeading from "@/app/components/general/SectionHeading";
import UpcomingConference from "@/app/components/research/upcoming_conference";
import WeStandOut from "@/app/components/department/we_stand_out";
import Link from "next/link";
import GlobalArrowButton from "@/app/components/general/global-arrow_button";
import { fetchDepartmentCompleteDetail, fetchAllDepartmentsCourses, fetchDesignations, fetchCollegePictures, parseHtmlToText } from "@/app/lib/api";

export default function DepartmentClientPage({ slug, initialData }) {
    const [departmentData, setDepartmentData] = useState(initialData);
    const [loading, setLoading] = useState(!initialData);
    const [error, setError] = useState(null);
    const [departmentCourses, setDepartmentCourses] = useState([]);
    const [designations, setDesignations] = useState([]);
    const [galleryImages, setGalleryImages] = useState([]);

    useEffect(() => {
        if (initialData) return;
        const loadData = async () => {
            try {
                setLoading(true);
                const data = await fetchDepartmentCompleteDetail(slug);
                setDepartmentData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, [slug, initialData]);

    useEffect(() => {
        if (!slug) return;
        fetchAllDepartmentsCourses(null, slug).then(data => {
            if (data?.courses) setDepartmentCourses(data.courses);
        }).catch(console.warn);
        fetchDesignations().then(setDesignations).catch(console.warn);
        fetchCollegePictures().then(data => {
            if (data) {
                const allImages = data.flatMap(item => item.images || []).map(img => ({
                    id: img.id, image: img.image, alt: img.alt || "Glimpse"
                }));
                setGalleryImages(allImages);
            }
        }).catch(console.warn);
    }, [slug]);

    useEffect(() => {
        if (departmentData) {
            document.title = departmentData.meta_title || departmentData.name || "Department";
        }
    }, [departmentData]);

    if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--button-red)]"></div></div>;
    if (!departmentData) return <div className="min-h-screen flex items-center justify-center">Department not found</div>;

    // Mapping logic (simplified)
    const mainIntroContent = departmentData.about_sections?.[0] ? {
        title: departmentData.about_sections[0].heading,
        description: departmentData.about_sections[0].content,
        imageUrl: departmentData.about_sections[0].image,
        imageAlt: departmentData.about_sections[0].alt,
    } : null;

    const programsOffered = (departmentCourses.length > 0 ? departmentCourses : (departmentData.department_courses || [])).map(course => ({
        id: course.id,
        title: course.name,
        shortName: course.short_name,
        duration: `${course.duration} Year${course.duration > 1 ? 's' : ''}`,
        level: "UG",
        slug: course.slug
    }));

    const placementData = {
        placement_info: departmentData.placement_info || [],
        placement_statistics: departmentData.placement_statistics || [],
        placement_student_photos: departmentData.placement_student_photos || [],
    };

    return (
        <div>
            {mainIntroContent && <MainIntro {...mainIntroContent} showKnowMore={true} extraContent={
                (departmentData.name.toUpperCase().includes("COMMERCE") || departmentData.name.toUpperCase().includes("MANAGEMENT")) && (
                    <div className="mt-8 flex flex-wrap gap-4">
                        <GlobalArrowButton as={Link} href="/departments/management" className="!rounded-xl">Department of Management</GlobalArrowButton>
                        <GlobalArrowButton as={Link} href="/departments/commerce" className="!rounded-xl">Department of Commerce</GlobalArrowButton>
                    </div>
                )
            } />}
            {departmentData.milestones?.length > 0 && <PublicationGrid stats={departmentData.milestones.map(m => ({ title: m.heading, value: `${m.number} ${m.symbol}`, description: m.description }))} />}
            {programsOffered.length > 0 && <ProgramsOffered programs={programsOffered} title="Programs Offered" description={departmentData.programs_offered_overview} />}
            <Placements placementData={placementData} title="Placements" />
            <Facility subtitle="Campus Facilities" title="Step into a World-Class Infrastructure" />
            <WeStandOut cards={(departmentData.how_we_stand_items || []).map(item => ({ id: item.id, text: item.description }))} />
            <StudentActivities departmentId={departmentData.id} />
            <Gallery title="Glimpses" images={galleryImages} />
            <AdmissionCareer />
        </div>
    );
}
