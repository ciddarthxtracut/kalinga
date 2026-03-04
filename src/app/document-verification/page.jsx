import DocumentVerificationClient from "./DocumentVerificationClient";
import Image from 'next/image';

export const metadata = {
  title: "Document Verification | Student Services | Kalinga University",
  description: "Request and complete document verification at Kalinga University. A streamlined process for verifying academic records and certificates for students and alumni.",
  keywords: "Document verification Kalinga University, degree verification Raipur, transcript verification Chhattisgarh, university certificate verification India",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/document-verification",
  },
};

export default function DocumentVerificationPage() {
  const tableSections = [
    { id: 1, title: "Step-1: Submission", answer: "You can send the duly filled application form along with other required documents through speed post." },
    { id: 2, title: "Step-2: Review", answer: "Once the documents are received, our experts will carefully review each document to ensure authenticity and accuracy." },
    { id: 3, title: "Step-3: Confirmation", answer: "Upon successful verification, you will receive an official confirmation certifying the authenticity of your documents." },
  ];

  const faqContent = [
    { id: 1, question: "How can I submit my documents for verification?", answer: "You can send the duly filled application form along with other required documents through speed post." },
  ];

  const boxItems = [
    { title: "Effortless Verification", description: "Our process is hassle-free, and you will get a quick verification result.", icon: <Image src="https://cdn.kalingauniversity.ac.in/document-verification/verification.svg" alt="Effortless Verification" width={40} height={40} /> },
    { title: "Accuracy", description: "With our step-wise verification process, you’ll get precise results.", icon: <Image src="https://cdn.kalingauniversity.ac.in/document-verification/calibration.svg" alt="Accuracy" width={40} height={40} /> },
    { title: "Confidentiality", description: "Your personal information and documents will be safe and secure.", icon: <Image src="https://cdn.kalingauniversity.ac.in/document-verification/secret-file.svg" alt="Confidentiality" width={40} height={40} /> },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Document Verification - Kalinga University",
    "description": "Streamlined academic record and certificate verification process.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Document Verification", "item": "https://kalingauniversity.ac.in/document-verification" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DocumentVerificationClient
        tableSections={tableSections}
        faqContent={faqContent}
        boxItems={boxItems}
      />
    </>
  );
}