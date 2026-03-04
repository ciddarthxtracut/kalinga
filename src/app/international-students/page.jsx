import InternationalStudentsClient from "./InternationalStudentsClient";

export const metadata = {
  title: "International Students Admissions | Kalinga University Raipur",
  description: "Join Kalinga University, a global learning hub with students from 29+ countries. Explore UG, PG, and PhD programs for international students in India.",
  keywords: "International student admission India, Study in India for foreign students, Kalinga University international collaborations, NRI admissions 2026",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/international-students",
  },
};

export default function InternationalStudentsPage() {
  const newsConferences = [
    { id: 1, title: "Annual Research Symposium 2025", date: "November 10 · 2025", category: "Research & Innovation", description: "Join us for our annual research symposium featuring cutting-edge research presentations, keynote speakers, and networking opportunities for researchers and academics.", image: "https://cdn.kalingauniversity.ac.in/common/student.jpg" },
    { id: 2, title: "International Education Summit", date: "December 05 · 2025", category: "Education", description: "A global gathering of educators, policymakers, and thought leaders to discuss the future of higher education and innovative teaching methodologies.", image: "https://cdn.kalingauniversity.ac.in/common/student.jpg" },
    { id: 3, title: "Technology & Innovation Conference", date: "January 20 · 2026", category: "Technology", description: "Explore the latest trends in technology, artificial intelligence, and digital transformation in education and industry applications.", image: "https://cdn.kalingauniversity.ac.in/common/student.jpg" },
  ];

  const videoItems = [
    { id: 1, title: "David Giir Riiny", description: "B.tech Student", videoUrl: "https://cdn.kalingauniversity.ac.in/international-students/REEL_AIML_TESTOMONIAL_02.mp4", thumbnail: "https://cdn.kalingauniversity.ac.in/international-students/david.png" },
    { id: 2, title: "Salima Naguago", description: "Pharmacy Student", videoUrl: "https://cdn.kalingauniversity.ac.in/international-students/REEL_PHARMA_TESTIMONIALS_01.mp4", thumbnail: "https://cdn.kalingauniversity.ac.in/international-students/REEL_PHARMA_TESTIMONIALS_01.mp4" },
    { id: 3, title: "Khazi lupiya", description: "Pharmacy Student", videoUrl: "https://cdn.kalingauniversity.ac.in/international-students/REEL_PHARMA_TESTIMONIALS_04.mp4", thumbnail: "https://cdn.kalingauniversity.ac.in/international-students/REEL_PHARMA_TESTIMONIALS_04.mp4" },
    { id: 4, title: "Palchin Upadhyay", description: "BA Gen Student", videoUrl: "https://cdn.kalingauniversity.ac.in/international-students/REEL_TESTIMONIAL_BJMC_01.mp4", thumbnail: "https://cdn.kalingauniversity.ac.in/international-students/REEL_TESTIMONIAL_BJMC_01.mp4" },
    { id: 5, title: "Issac", description: "BSW Student", videoUrl: "https://cdn.kalingauniversity.ac.in/international-students/REEL_TESTIMONIAL_BJMC_02.mp4", thumbnail: "https://cdn.kalingauniversity.ac.in/international-students/REEL_TESTIMONIAL_BJMC_02.mp4" },
  ];

  const boxItems = [
    { id: 1, title: "Warm & Welcoming Society", description: "Indian people offer outstanding hospitality and a safe, welcoming, and respectful environment to their international students." },
    { id: 2, title: "Affordable Quality Education", description: "From tuition fees to living expenses, India offers world-class education and excellent academic standards at a significantly lower cost compared to Western countries." },
    { id: 3, title: "English-Taught Programs", description: "Academic Programs in Indian Universities are mostly taught in English, enabling every international student prepare for global careers." },
    { id: 4, title: "Diverse Programs", description: "With a strong focus on a practical learning approach, Indian Universities offer a wide range of programs in Engineering, Technology, IT, Science, Pharmacy, commerce, management, Law, and more." },
    { id: 5, title: "Tech & Innovation Hub", description: "With strong government policies, booming startup culture, a tech-savvy workforce, and the establishment of MNCs, India is setting new benchmarks on the global tech map." },
    { id: 6, title: "Globally Recognised Institutions", description: "Indian Universities are recognised by National and International Accreditation Bodies, and degrees are respected worldwide." },
    { id: 7, title: "Rich Cultural Experience", description: "Studying in India means experiencing different cultures & traditions, festivals, cuisines, languages, and historical landmarks." },
    { id: 8, title: "Explorative Learning Approach", description: "Experience a 360-degree learning designed to provide practical exposure to students outside the classroom, through interactive workshops, conferences, seminars, hands-on training programs, industrial visits, and project works." },
  ];

  const internationalStudentsFeatureCards = [
    { id: 1, title: 'From Pre-Arrival to Post-Arrival Support', body: 'From pre-arrival guidance on visa, travel planning, and admissions to post-arrival assistance with pickup, documentation, campus tours, and inductions, our International Students Cell will ensure that your journey is hassle-free.', image: 'https://cdn.kalingauniversity.ac.in/international-students/counselling.svg', variant: 'gray' },
    { id: 2, title: 'Career Counselling', body: 'Our primary aim is to navigate your journey towards the right direction by providing career guidance and support, helping you select your dream career.', image: 'https://cdn.kalingauniversity.ac.in/international-students/customer-service.svg', variant: 'amber' },
    { id: 3, title: 'Holistic Development And Explorative Learning', body: 'With our 360-degree learning approach, your learning will not be limited to just classroom-based studies, but you will also learn practical skills through interactive workshops, hands-on training programs, industrial visits, project work, and case studies.', image: 'https://cdn.kalingauniversity.ac.in/icons/Holistic+Development.svg', variant: 'gray' },
    { id: 4, title: 'Choose From Diverse Programs', body: 'Our programs are designed to provide updated industry-relevant knowledge to our students. From Fashion Designing to Biotechnology, choose from unlimited career options.', image: 'https://cdn.kalingauniversity.ac.in/icons/Wide+Range+of+Programs.svg', variant: 'amber' },
    { id: 5, title: 'English Is Our Primary Language', body: 'English is one of the widely spoken languages in the world, and at Kalinga, you will not face any language barrier. All our programs are taught in English by highly qualified professors, and your friends from all around the Globe will even communicate with you in English.', image: 'https://cdn.kalingauniversity.ac.in/icons/Global.svg', variant: 'gray' },
    { id: 6, title: 'Co-curricular And Extracurricular Activities', body: 'Participate in competitions, workshops, events, seminars, National and International conferences, training programs, tribal fests, and more. The University also offers indoor and outdoor sports facilities and even conducts sports competitions.', image: 'https://cdn.kalingauniversity.ac.in/icons/Cultural+Celebrations.svg', variant: 'amber' },
    { id: 7, title: 'Extensive Research Facilities', body: "With 90 + Labs, including IT Labs and CIF labs, we're Chhattisgarh's No. 1 institute, committed to innovation and groundbreaking research facilities.", image: 'https://cdn.kalingauniversity.ac.in/icons/Extensive+Research+Facilities.svg', variant: 'gray' },
    { id: 8, title: 'Build Networks And Lifelong Connections', body: "Here, you'll not just study but collaborate, meet industry leaders, make new connections, learn new languages, participate in multi-cultural programs, and grow together.", image: 'https://cdn.kalingauniversity.ac.in/icons/Networking+Opportunities.svg', variant: 'amber' },
    { id: 9, title: 'Multicultural Environment', body: 'With students from different countries, our campus buzzes with high energy, new cultures, ideas, friendships, and celebrations.', image: 'https://cdn.kalingauniversity.ac.in/icons/Cultural+Celebrations.svg', variant: 'gray' },
    { id: 10, title: 'Unmatched Support and Guidance', body: 'We let our students enjoy their academic journey without any obstacles, as our international student cell guides them at every step. From enrollment in a program till the convocation ceremony, we ensure that they get a seamless experience.', image: 'https://cdn.kalingauniversity.ac.in/icons/Mentor-Mentee+System.svg', variant: 'amber' },
    { id: 11, title: 'Residential Facilities', body: 'We have well-furnished separate hostels for both boys and girls for our international students where all their needs are properly taken care of and they can live comfortably in a supportive environment.', image: 'https://cdn.kalingauniversity.ac.in/icons/campus+life.svg', variant: 'gray' },
    { id: 12, title: 'Enjoy an Economical Lifestyle', body: 'Enjoy a vibrant lifestyle at a feasible rate in Raipur, Chhattisgarh. From affordable shopping markets to transportation systems, enjoy a rich culture and diversity.', image: 'https://cdn.kalingauniversity.ac.in/icons/Community+Services.svg', variant: 'amber' },
    { id: 13, title: 'Mentor-Mentee System', body: 'Our faculty members build one-on-one connections with every student so that their issues can be identified and solved early.', image: 'https://cdn.kalingauniversity.ac.in/icons/Mentor-Mentee+System.svg', variant: 'gray' },
    { id: 14, title: 'Emotional Well-Being', body: 'To cope with academic stress, mental health issues, and social anxiety, we organise well-being programs for our students according to their needs so that their voices can be heard and acted upon.', image: 'https://cdn.kalingauniversity.ac.in/international-students/emotional-regulation.svg', variant: 'amber' },
  ];

  const publicationStats = [
    { id: 3, title: "Countries", value: "29+", description: "" },
    { id: 6, title: "Recruitment Partners", value: "400+", description: "" },
    { id: 7, title: "Research Publications", value: "3360+", description: "" },
    { id: 8, title: "Patents", value: "510 +", description: "" },
    { id: 9, title: "Sponsored Research Projects", value: "160 +", description: "" },
    { id: 10, title: "Consultancy Projects", value: "130 +", description: "" },
    { id: 11, title: "MoUs Signed", value: "200 +", description: "" },
    { id: 12, title: "Centres of Excellence", value: "7", description: "" },
    { id: 13, title: "Laboratories", value: "90 +", description: "" },
  ];

  const internationalAdmissionSteps = [
    { id: 1, icon: "https://cdn.kalingauniversity.ac.in/admission/step-2.svg", stepNumber: "01", title: "Step 1", description: "Document Verification", backDescription: "Document Verification" },
    { id: 2, icon: "https://cdn.kalingauniversity.ac.in/admission/step-4.svg", stepNumber: "02", title: "Step 2", description: "Offer letter", backDescription: "Offer letter will be issued after checking the eligibility" },
    { id: 3, icon: "https://cdn.kalingauniversity.ac.in/admission/step-1.svg", stepNumber: "03", title: "Step 3", description: "Registration fee", backDescription: "Registration fee of USD 300 is to be paid to the University, and share the proof of payment with us over email" },
    { id: 4, icon: "https://cdn.kalingauniversity.ac.in/admission/step-5.svg", stepNumber: "04", title: "Step 4", description: "Admission and Visa Letter", backDescription: "Admission Letter and Visa Letter will be issued by the University. You need to contact the nearest Indian Embassy / High Commission to initiate the Student Visa Process" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "International Students Admissions - Kalinga University",
    "description": "Comprehensive admission guide for international students at Kalinga University Raipur.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "International Students", "item": "https://kalingauniversity.ac.in/international-students" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InternationalStudentsClient
        newsConferences={newsConferences}
        videoItems={videoItems}
        boxItems={boxItems}
        internationalStudentsFeatureCards={internationalStudentsFeatureCards}
        publicationStats={publicationStats}
        internationalAdmissionSteps={internationalAdmissionSteps}
      />
    </>
  );
}