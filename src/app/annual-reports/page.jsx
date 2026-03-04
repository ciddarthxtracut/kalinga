import AnnualReportsClient from "./AnnualReportsClient";

export const metadata = {
  title: "Annual Reports | Transparency | Kalinga University",
  description: "View the annual reports of Kalinga University. Discover our institutional progress, financial reports, and academic achievements over the years.",
  keywords: "Annual reports Kalinga University, university performance Raipur, institutional reports Chhattisgarh",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/annual-reports",
  },
};

export default function AnnualReportsPage() {
  const annualReportButtons = [
    { id: 1, text: "Annual Report 2022–23 (Volume I)", href: "https://cdn.kalingauniversity.ac.in/annual-reports/Annual-Report-2022-23-(Vol-1).pdf" },
    { id: 2, text: "Annual Report 2022–23 (Volume II)", href: "https://cdn.kalingauniversity.ac.in/annual-reports/Annual+Report+2022-23+(Vol.+2).pdf" },
    { id: 3, text: "Annual Report 2021–22 (Volume I)", href: "https://cdn.kalingauniversity.ac.in/annual-reports/Annual+Report-2021-22+(Vol.+1).pdf" },
    { id: 4, text: "Annual Report 2021–22 (Volume II)", href: "https://cdn.kalingauniversity.ac.in/annual-reports/Annual-Report-2021-22-(Vol-2).pdf" },
    { id: 5, text: "Annual Report 2020–21", href: "https://cdn.kalingauniversity.ac.in/annual-reports/Annual-Report-2020-21.pdf" },
    { id: 6, text: "Annual Report 2019–20", href: "https://cdn.kalingauniversity.ac.in/annual-reports/FINAL+ANNUAL+REPORT+2019-20_09-01-2021.pdf" },
    { id: 7, text: "Annual Report 2018–19", href: "https://cdn.kalingauniversity.ac.in/annual-reports/FINAL+ANNUAL+REPORT+2018-19_15-01-2021.pdf" },
    { id: 8, text: "Annual Report 2017–18", href: "https://cdn.kalingauniversity.ac.in/annual-reports/FINAL+ANNUAL+REPORT+2017-18_18-01-2021.pdf" },
    { id: 9, text: "Annual Report 2016–17", href: "https://cdn.kalingauniversity.ac.in/annual-reports/FINAL+ANNUAL+REPORT_2016-17_18-01-2021.pdf" },
    { id: 10, text: "Annual Report 2015–16", href: "https://cdn.kalingauniversity.ac.in/annual-reports/FINAL+ANNUAL+REPORT_2015-16_18-01-2021.pdf" },
    { id: 11, text: "Annual Report 2014–15", href: "https://cdn.kalingauniversity.ac.in/annual-reports/FINAL+ANNUAL+REPORT_2014-15_18-01-2021.pdf" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Annual Reports - Kalinga University",
    "description": "Comprehensive annual reports showcasing our institutional growth and transparency.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Annual Reports", "item": "https://kalingauniversity.ac.in/annual-reports" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnnualReportsClient annualReportButtons={annualReportButtons} />
    </>
  );
}
