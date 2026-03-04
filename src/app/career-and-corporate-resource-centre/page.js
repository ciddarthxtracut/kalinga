import CCRCHubClient from "./CCRCHubClient";

export const metadata = {
  title: "Career and Corporate Resource Centre (CCRC) | Placements | Kalinga University",
  description: "Explore the Career and Corporate Resource Centre at Kalinga University. We provide training, career guidance, internships, and placement support for all students.",
  keywords: "CCRC Kalinga University, university placements Raipur, career guidance Chhattisgarh, student internships India, corporate training India",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/career-and-corporate-resource-centre",
  },
};

export default function CCRCPage() {
  const cards = [
    { title: "Corporate Training and Consultancy Division (CTCD)", description: "CTCD helps businesses effectively utilise their most valuable asset through experiential tools.", imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/ctcd.png", logoSrc: "https://cdn.kalingauniversity.ac.in/ccrc/logo-ctcd.svg", subtitle: "CORPORATE TRAINING & CONSULTANCY DIVISION", href: "/corporate-training-and-consultancy-division" },
    { title: "Corporate Social Responsibility (CSR) ", description: "The CSR initiatives at Kalinga assisting organisations in staying ahead in sustainable and social welfare.", imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/csr.png", logoSrc: "", subtitle: "CORPORATE TRAINING & CONSULTANCY DIVISION", href: "/csr" },
    { title: "Kalinga Incubation Foundation (KIF)", description: "KIF was established in 2023, where students' bold and unique ideas are supported.", imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/IMG-20250409-WA0026-Picsart-AiImageEnhancer.webp", logoSrc: "https://cdn.kalingauniversity.ac.in/ccrc/logo-kif.svg", subtitle: "CORPORATE TRAINING & CONSULTANCY DIVISION", href: "/kalinga-incubation-foundation" },
    { title: "Training & Placements", description: "CCRC is a hub for career guidance, training, and corporate partnerships.", imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/placement.png", logoSrc: "", subtitle: "CORPORATE TRAINING & CONSULTANCY DIVISION", href: "/training-and-placements" },
  ];

  const sliderItems = [
    { id: 1, image: "https://cdn.kalingauniversity.ac.in/ccrc/hear-clients-1.webp", text: "Goeld" },
    { id: 2, image: "https://cdn.kalingauniversity.ac.in/ccrc/Jayaswal+Neco+Industries+Ltd.webp", text: "Jayaswal Neco Industries Ltd" },
    { id: 3, image: "https://cdn.kalingauniversity.ac.in/ccrc/hear-clients-3.webp", text: "पुलिस प्रशिक्षण विद्यालय" },
    { id: 4, image: "https://cdn.kalingauniversity.ac.in/ccrc/hear-clients-4.webp", text: "Real Ispat and Power Ltd." },
    { id: 5, image: "https://cdn.kalingauniversity.ac.in/ccrc/Ramkrishna+Care+Hospitals.webp", text: "Ramkrishna Care Hospitals " },
    { id: 6, image: "https://cdn.kalingauniversity.ac.in/ccrc/Sarda+Energy+%26+Minerals+Ltd..webp", text: "Sarda Energy & Minerals Ltd." },
    { id: 7, image: "https://cdn.kalingauniversity.ac.in/ccrc/TMC.webp", text: "TMC" },
    { id: 8, image: "https://cdn.kalingauniversity.ac.in/ccrc/94.3+MY+FM.webp", text: "94.3 MY FM" },
    { id: 9, image: "https://cdn.kalingauniversity.ac.in/ccrc/Technoviz+Automation.webp", text: "Technoviz Automation" },
    { id: 10, image: "https://cdn.kalingauniversity.ac.in/ccrc/from-clients-12.webp", text: "छत्तीसगढ़ पर्यावरण संरक्षण मंडल" },
    { id: 11, image: "https://cdn.kalingauniversity.ac.in/ccrc/sing.webp", text: "Singhal Steel and Power Pvt. Ltd." },
    { id: 12, image: "https://cdn.kalingauniversity.ac.in/ccrc/simba.webp", text: "Simba Brewery" },
  ];

  const ccrcBenefitsData = [
    { icon: "https://cdn.kalingauniversity.ac.in/icons/Networking+Opportunities.svg", title: "Collaborative", description: "Industry + Academia Expertise" },
    { icon: "https://cdn.kalingauniversity.ac.in/admission/Value+addition.svg", title: "Customized", description: "Solutions for the Industry" },
    { icon: "https://cdn.kalingauniversity.ac.in/kif/Entrepreneurial+Thinking.svg", title: "Result-Oriented", description: "Turn Key Execution" },
    { icon: "https://cdn.kalingauniversity.ac.in/icons/Holistic+Development.svg", title: "Comprehensive", description: "Single Window Solution" }
  ];

  const blueItems = [
    { imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/industry/abbott.png", imageAlt: "abbott" },
    { imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/industry/ag-enterprise.png", imageAlt: "ag-enterprise" },
    { imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/industry/central+bank+of+india.png", imageAlt: "central bank of india" },
    { imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/industry/cisco.png", imageAlt: "cisco" },
    { imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/industry/denso.png", imageAlt: "denso" },
    { imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/industry/edunet.png", imageAlt: "edunet" },
    { imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/industry/glenmarl.png", imageAlt: "glenmarl" },
    { imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/industry/godwari.png", imageAlt: "godwari" },
    { imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/industry/Group+75.png", imageAlt: "CCRC Logo-9" },
    { imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/industry/Group+83.png", imageAlt: "CCRC Logo-10" },
    { imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/industry/paytm.png", imageAlt: "paytm" },
    { imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/industry/saint-gobin.png", imageAlt: "saint-gobin" },
    { imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/industry/subros.png", imageAlt: "subros" },
    { imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/industry/suzuki.png", imageAlt: "suzuki" },
    { imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/industry/techonviz.png", imageAlt: "techonviz" },
    { imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/industry/veterans.png", imageAlt: "veterans" },
  ];

  const redItems = [
    { imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/mou/agenterprise.png", imageAlt: "agenterprise" },
    { imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/mou/care.png", imageAlt: "care" },
    { imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/mou/central+bank+of+india.png", imageAlt: "central bank of india" },
    { imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/mou/cisco.png", imageAlt: "cisco" },
    { imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/mou/edunet.png", imageAlt: "edunet" },
    { imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/mou/eduskills.png", imageAlt: "eduskills" },
    { imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/mou/godwari.png", imageAlt: "godwari" },
    { imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/mou/ibm.png", imageAlt: "ibm" },
  ];

  const videoItems = [
    { id: 1, title: "Rajiv Chawla", description: "Integrated Association of MSME of India", thumbnail: "https://img.youtube.com/vi/Fy4fnnqU238/maxresdefault.jpg", videoUrl: "https://www.youtube.com/watch?v=Fy4fnnqU238" },
    { id: 2, title: "Dr. Sumit Mitra", description: "Global Business Services & Tesco Bengal", thumbnail: "https://img.youtube.com/vi/lflHA63O7FQ/maxresdefault.jpg", videoUrl: "https://www.youtube.com/watch?v=lflHA63O7FQ" },
    { id: 3, title: "Amar Pathak", description: "Resource Person", thumbnail: "https://img.youtube.com/vi/6otNYEFKnek/maxresdefault.jpg", videoUrl: "https://www.youtube.com/watch?v=6otNYEFKnek" },
    { id: 4, title: "Prateek Singh", description: "Lead Corporate Affairs & Media Relations", thumbnail: "https://img.youtube.com/vi/hi2yJ5OPM5k/maxresdefault.jpg", videoUrl: "https://www.youtube.com/watch?v=hi2yJ5OPM5k" },
  ];

  const MentorIntroProps = [
    {
      imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/kif/Mr.+Pankaj+Tiwari.webp",
      title: "Mr. Pankaj Tiwari",
      subtitle: "Message from CCRC Head",
      department: "Director, Career & Corporate Resource Centre",
      message: "CCRC is a platform where learning meets leadership...",
      quote: "Where Learning Transforms into Leadership and Skills Drive Corporate Success.",
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "CCRC - Kalinga University",
    "description": "Connecting students with corporate opportunities through training and placements.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "CCRC", "item": "https://kalingauniversity.ac.in/career-and-corporate-resource-centre" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CCRCHubClient
        cards={cards}
        sliderItems={sliderItems}
        ccrcBenefitsData={ccrcBenefitsData}
        blueItems={blueItems}
        redItems={redItems}
        videoItems={videoItems}
        MentorIntroProps={MentorIntroProps}
      />
    </>
  );
}