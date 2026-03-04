import CSRClient from "./CSRClient";
import Image from "next/image";

export const metadata = {
  title: "Corporate Social Responsibility (CSR) | Social Initiative | Kalinga University",
  description: "Explore the CSR initiatives at Kalinga University. Our commitment to community welfare, sustainable development, and social impact through education and empowerment.",
  keywords: "CSR initiatives Kalinga University, social welfare Raipur, sustainable development Chhattisgarh, community empowerment India",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/csr",
  },
};

export default function CSRPage() {
  const Items = [
    { id: 1, text: "To provide skill development and industry-aligned trainings" },
    { id: 2, text: "To provide training in technical and vocational education" },
    { id: 3, text: "To plant trees for environmental improvement" },
    { id: 4, text: "To organise social, cultural, and religious programs " },
    { id: 5, text: "To develop rural areas" },
  ];

  const targetGroups = [
    { title: "Students", icon: "Global.svg" },
    { title: "Youth", icon: "Holistic+Development.svg" },
    { title: "Women", icon: "Emotional+Well-Being.svg" },
    { title: "Underprivileged Communities", icon: "Community+Services.svg" },
    { title: "School Students", icon: "Career+Counseling.svg" },
    { title: "Industry Partners", icon: "Networking+Opportunities.svg" },
  ];

  const villagesAdopted = [
    { title: "Kotni", icon: "university.svg" },
    { title: "Palaud", icon: "facility-management.svg" },
    { title: "Tandul", icon: "Industrial+Visits.svg" },
    { title: "Kotara Bhantha", icon: "campus+life.svg" },
    { title: "Parsada", icon: "Educational+Tours.svg" },
    { title: "Kuhera", icon: "Extensive+Research+Facilities.svg" },
  ];

  const whyStudyItems = [
    { id: 1, title: 'STEM Education', body: 'Introducing STEM education to girls in rural areas.', variant: 'gray', image: 'https://cdn.kalingauniversity.ac.in/icons/Extensive+Research+Facilities.svg' },
  ];

  const aboutQuickLinks = [
    { id: 1, title: "Transport Subsidy", description: "Subsidised rates for students.", icon: "https://cdn.kalingauniversity.ac.in/admission/transport.svg", href: "/campus-life" },
  ];

  const renderCardGrid = (items) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
      {items.map((item, idx) => (
        <div key={idx} className="bg-[var(--card-skin)] p-6 rounded-xl flex flex-col items-center text-center gap-4 hover:shadow-lg transition-all duration-300 group cursor-pointer border border-transparent hover:border-[var(--button-red)]/20">
          <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
            <Image
              src={`https://cdn.kalingauniversity.ac.in/icons/${item.icon}`}
              alt={item.title}
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
          </div>
          <span className="font-semibold text-[var(--foreground)] text-lg leading-tight">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "CSR - Kalinga University",
    "description": "Our commitment to social welfare and community development.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "CSR", "item": "https://kalingauniversity.ac.in/csr" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CSRClient
        Items={Items}
        whyStudyItems={whyStudyItems}
        aboutQuickLinks={aboutQuickLinks}
        targetGroups={targetGroups}
        villagesAdopted={villagesAdopted}
        FAQItems={[]}
        renderCardGrid={renderCardGrid}
      />
    </>
  );
}