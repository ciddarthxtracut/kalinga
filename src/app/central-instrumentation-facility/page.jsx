import CIFClient from "./CIFClient";

export const metadata = {
  title: "Central Instrumentation Facility (CIF) | Research Hub | Kalinga University",
  description: "Discover the state-of-the-art Central Instrumentation Facility at Kalinga University. Supporting high-end research and analytical needs for faculty and external researchers.",
  keywords: "CIF Kalinga University, research facilities Raipur, analytical instrumentation Chhattisgarh, university research hub India",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/central-instrumentation-facility",
  },
};

export default function CIFPage() {
  const videoItems2 = [
    { id: 1, name: "SGS Technical Services Pvt Ltd ", videoUrl: "https://www.youtube.com/watch?v=-j_ul0UUj1E", thumbnail: "https://img.youtube.com/vi/-j_ul0UUj1E/maxresdefault.jpg", description: "Sohini Bhattacharya - Assistant Professor" },
    { id: 2, name: "9M India Limited", videoUrl: "https://www.youtube.com/watch?v=qnV_wuXlbCc", thumbnail: "https://img.youtube.com/vi/qnV_wuXlbCc/maxresdefault.jpg", description: "Advanced Surveying Techniques Total Station" },
    { id: 3, name: "Hirojet Campus Drive", videoUrl: "https://www.youtube.com/watch?v=uX-P1WLZWfE", thumbnail: "https://img.youtube.com/vi/uX-P1WLZWfE/maxresdefault.jpg", description: "Protien estimation & Biochemistry Analyser" },
    { id: 4, name: "Airtel Campus Drive", videoUrl: "https://www.youtube.com/watch?v=52vkXJDg22Q", thumbnail: "https://img.youtube.com/vi/52vkXJDg22Q/maxresdefault.jpg", description: "Xray Diffractometer (XRD)" },
    { id: 5, name: "Airtel Campus Drive", videoUrl: "https://www.youtube.com/watch?v=mJXzd43KriE", thumbnail: "https://img.youtube.com/vi/mJXzd43KriE/maxresdefault.jpg", description: "Protien estimation & Biochemistry Analyser" },
    { id: 6, name: "Recruiter Testimonial", videoUrl: "https://www.youtube.com/watch?v=I1CyXT1Y09k", thumbnail: "https://img.youtube.com/vi/I1CyXT1Y09k/maxresdefault.jpg", description: "3D Printer" },
  ];

  const quickLinks = [
    { id: 1, icon: "https://cdn.kalingauniversity.ac.in/icons/facility-management.svg", title: "Advanced Instrumentation Access", description: "CIF at KU offers access to modern instruments that support advanced research work." },
    { id: 2, icon: "https://cdn.kalingauniversity.ac.in/icons/Extensive+Research+Facilities.svg", title: "Quick And Reliable Results", description: "Our time-tested machines minimise the time in delivering outcomes while maintaining accuracy." },
    { id: 3, icon: "https://cdn.kalingauniversity.ac.in/academics/icons/Curriculum.svg", title: "Customised Research Solutions", description: "We provide personalised research support and guidance in complex data analysis." },
    { id: 4, icon: "https://cdn.kalingauniversity.ac.in/kif/Trainings+%26+Workshops.svg", title: "Skill Development Programs", description: "We conduct workshops, certification courses, and training programs to promote research culture." },
    { id: 5, icon: "https://cdn.kalingauniversity.ac.in/icons/Experienced+Faculties.svg", title: "Dedicated CIF Experts", description: "Our committed research faculty members and coordinators work rigorously to provide researchers with complete guidance." },
    { id: 6, icon: "https://cdn.kalingauniversity.ac.in/kif/Build+Networks.svg", title: "Collaborative Research Partnerships", description: "We partner with researchers across various industries to work on a joint project." },
  ];

  const items = [
    { text: "To motivate students to pursue research work by providing them with highly advanced instruments." },
    { text: "To assist research scholars, faculty members, and UG/PG/PhD students in their projects." },
    { text: "To promote academics and industry collaboration." },
    { text: "To provide reliable research outcomes that can be used for patenting and publishing." },
  ];

  const cifTestimonials = [
    { id: 1, name: "Sandeep Rajak", role: "Bilaspur, CG", quote: "Thank you for a great training session.", image: "https://cdn.kalingauniversity.ac.in/CIF/chart+(4).webp", theme: "orange" },
    { id: 2, name: "Priya Jyoti", role: "Bilaspur, CG", quote: "They helped a lot throughout the program.", image: "https://cdn.kalingauniversity.ac.in/CIF/chart+(3).webp", theme: "red" },
  ];

  const allPositions = [
    { title: "Google SketchUp for 3D Developments", startDate: "20 - 09 - 2025", price: "INR 1,000/-" },
    { title: "SEM & Microscopy", startDate: "27 - 09 - 2025", price: "INR 1,000/-" },
    { title: "Mastering the Art of Literature Review", startDate: "04-10-2025", price: "INR 1,000/-" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "CIF - Kalinga University",
    "description": "State-of-the-art instrumentation facility for advanced research and analysis.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "CIF", "item": "https://kalingauniversity.ac.in/central-instrumentation-facility" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CIFClient
        videoItems2={videoItems2}
        quickLinks={quickLinks}
        items={items}
        cifTestimonials={cifTestimonials}
        processedPositions={allPositions}
      />
    </>
  );
}