"use client";

import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import MainIntro from '../components/about/main_intro'
import PublicationGrid from '../components/research/publication-grid'
import DeptHeadIntro from '../components/department/dept_head_intro'
import ISOCertificateSection from '../components/iqac/iso_certificate_section'
import ContactSection from '../components/cif/contact_section'
import AdmissionCareer from '../components/general/admission_cta'
import IQACTabSection from '../components/iqac/iqac_tab_section'
import QuickLinks from "../components/general/quick_links";
import StudentActivities from "@/app/components/department/student_activities";
import Gallery from "@/app/components/general/gallery";
const IQACPage = () => {
  const pathname = usePathname();



  const MentorIntroProps = [
    {
      id: 1,
      title: "Dr. Vijayalaxmi Biradar",
      subtitle: "A Message From the Director",
      department: "Director, IQAC",
      quote:
        "Quality is built daily through reflection, feedback, and continuous improvement.",
      message: `
        <p>Kalinga University's Internal Quality Assurance Cell is committed to maintaining and improving the quality of teaching practices, learning, and research work through continuous audits, teacher training programs, and feedback from students. Through open communication between university members and students, we keep a close watch on the overall performance of the institute. Our team members perform some of the main functions, like quality checks in academic and administrative activities, organise workshops and seminars, and closely monitor the university's infrastructure resources.</p>
        
        <p>The IQAC is committed to ensuring the effectiveness of the curriculum in terms of industry requirements and technology through its regular updation and evaluation. We also ensure compliance with the accreditation standards to maintain the credibility of the university. With all these measures, the IQAC of KU becomes one of the most important components that meet institutional progress and enrich its students' educational experience.</p>

        <h3 class="text-xl font-bold mt-4 mb-2">Objectives Of IQAC</h3>
        <ul class="list-disc pl-5 space-y-1">
          <li>To ensure continuous improvement in the entire operations of the University.</li>
          <li>To build confidence among stakeholders, including students, parents, staff members, funding agencies, and society, regarding the dedication of the university towards quality and integrity.</li>
        </ul>

        <h3 class="text-xl font-bold mt-4 mb-2">Functions Of IQAC</h3>
        <ul class="list-disc pl-5 space-y-1">
          <li>To propose policies and strategies for significant contributions to the overall development of the University.</li>
          <li>To collect and organise feedback responses from students, faculty members, alumni, and recruiters to improve quality-related institutional processes.</li>
          <li>To develop and apply innovative practices in various programs/activities to enhance the educational standards.</li>
          <li>To check various parameters under academic and administrative activities through regular visits to classrooms and organising meetings with students and faculty members.</li>
          <li>To monitor class work and activities related to academics.</li>
          <li>To conduct periodic visits to different departments and do departmental audits.</li>
          <li>To verify and review the effectiveness of quality parameters.</li>
          <li>To implement suggestions that are put forward in the meetings by the committee members of the IQAC, after taking necessary approvals from the management.</li>
          <li>To review the teaching-learning processes and methods of operation from time to time.</li>
          <li>To document the various programs/activities that contribute to quality improvement and educational excellence.</li>
        </ul>

        <h3 class="text-xl font-bold mt-4 mb-2">Strategies Of IQAC</h3>
        <ul class="list-disc pl-5 space-y-1">
          <li>IQAC of Kalinga University will adopt a participatory approach among the staff of the University.</li>
          <li>IQAC proposes to meet the quality and effectiveness of all the functions of the university.</li>
          <li>
            IQAC will develop its mechanisms and procedures to:
            <ul class="list-disc pl-5 mt-1 space-y-1">
              <li>Ensure timely, efficient, and progressive performance of academic, administrative, and financial tasks.</li>
              <li>Maintain relevance and standards of academic and research programs.</li>
              <li>Ensure equitable access and affordability of our academic programs for various sections of society.</li>
              <li>Optimise and integrate modern teaching and learning methodologies.</li>
              <li>Maintain a comprehensive Student Information System.</li>
              <li>Improve the transparency and credibility of evaluation procedures.</li>
              <li>Ensure the adequacy, maintenance, and functioning of the support systems and services.</li>
              <li>Improve research activities and networking with other institutions in India and abroad.</li>
            </ul>
          </li>
        </ul>

        <h3 class="text-xl font-bold mt-4 mb-2">Benefits Of IQAC</h3>
        <ul class="list-disc pl-5 space-y-1">
          <li>Brings clarity and focus to various institutional functions, improving the quality of higher education.</li>
          <li>Improves the coordination among various activities of the institute and establishes effective practices to maintain the standards.</li>
          <li>Provides a strong foundation for informed decision-making at every step.</li>
          <li>Promotes innovation and research activities for academic advancement.</li>
          <li>Enhances the internal communication among different departments and stakeholders to ensure transparency at all levels.</li>
        </ul>
      `,
      logos: [
        {
          src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/naac.webp",
          alt: "NAAC",
          name: "NAAC",
          width: 120,
          height: 80
        },
        {
          src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/nirf-details.png",
          alt: "NIRF",
          name: "NIRF",
          width: 120,
          height: 80
        }
      ],
      contentWrapperClassName: "lg:!pt-0",
    },
  ];

  const publicationStats = [
    {
      id: 1,
      title: "Publications",
      value: "100+",

    },
    {
      id: 2,
      title: "Journals",
      value: "50+",
    },
    {
      id: 3,
      title: "Books",
      value: "30+",
    },
    {
      id: 4,
      title: "Patents",
      value: "510+",
    },
  ]

  const relatedInitiativesLinks = [
    {
      id: 1,
      icon: "",
      title: "UBA",
      description: "Unnat Bharat Abhiyan (UBA) was launched by the Ministry of Education in 2014, which aims to address pressing challenges of rural India and connect them with higher education institutions for their holistic growth and development. Inspired by Gandhiji’s vision in Hind Swaraj, UBA supports the growth of self-sustained villages using eco-friendly and community-based technologies. The conceptualisation of Unnat Bharat Abhiyan started with the initiative of a group of dedicated faculty members of the Indian Institute of Technology (IIT) Delhi, working for a long time in the area of rural development and appropriate technology. India’s 70% of the population lives in rural areas, and this initiative will meet their needs of life, like food, energy, sanitation, education, health, and livelihood, reducing their migration towards their cities and improving growth and job opportunities in their areas.",
      href: "/unnat-bharat-abhiyan"
    },
    {
      id: 2,
      icon: "",
      title: "IIC",
      description: "In 2018, the Ministry of Education (MoE), through the MoE’s Innovation Cell (MIC), launched the Institution’s Innovation Council (IIC) in collaboration with AICTE for Higher Educational Institutions (HEIs) to promote the culture of innovation and start-up ecosystem in educational institutions. The main objective of IIC is to engage a large number of faculty members and students in various entrepreneurship and innovation-related activities. It includes IPR, Ideathon, Proof of Concept Development, Design Thinking, and project handling and management at the pre-incubation level. The IIC model enables HEIs to address key challenges such as limited people’s involvement, occasional or unplanned Innovation and Entrepreneurship (I&E) activities, limited engagement of top leaders, poor coordination, weak resource planning, and underutilization of students’ creative potential.",
      href: "/institution-innovation-council"
    },
    {
      id: 3,
      icon: "",
      title: "Kalinga Journal",
      description: "Kalinga Journal is a peer-reviewed academic publication that showcases research, scholarly articles, and academic contributions from faculty members and researchers, promoting academic excellence and knowledge dissemination.",
      href: "/research"
    }
  ]
  return (
    <>
      <MainIntro
        title="About IQAC"
        description={["In pursuance of the National Action Plan of the National Assessment and Accreditation Council (NAAC) for performance evaluation, assessment and accreditation, and quality upgradation of institutions of higher education, NAAC proposes that every accredited institution should have an Internal Quality Assurance Cell (IQAC) as a post-accreditation quality sustenance measure. With this aim, Kalinga University established its internal quality assurance cell on 5th July 2016.",
          "The primary motto of our IQAC is to continuously monitor and improve the quality of every activity and propose new improvements with the cooperation of all the stakeholders. It will channelise the overall performance of the institute towards academic excellence. Our IQAC produces quality reports on various institutional activities, enabling committee members to take rational and informed decisions for continuous improvement."
        ]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/banner.webp"
        imageAlt="IQAC"
        descriptionClassName="text-[var(--foreground)]"
      />
      {/* <PublicationGrid stats={publicationStats} /> */}
      <DeptHeadIntro items={MentorIntroProps} className="pt-10 pb-20" />
      <IQACTabSection />
      <ISOCertificateSection description="Kalinga University is committed to maintaining the highest standards of quality in all its academic and administrative processes. Our ISO 9001:2015 certification demonstrates our dedication to continuous improvement and excellence in education, ensuring that we meet international quality benchmarks and provide the best possible learning experience to our students" />
      <QuickLinks
        slider={true}
        links={relatedInitiativesLinks}
        title="Related Initiatives"
        titleClassName="!text-white"
        showReadMore={true}
        showDescriptionReadMore={true}
        description=""
      />
      <ContactSection mail="iqac@kalingauniversity.ac.in" />
      <StudentActivities
        title="News & Events"
        fallbackToGlobal={true}
      />
      <Gallery title="Glimpse" />
      <AdmissionCareer />
    </>
  )
}

export default IQACPage