import React from "react";
import PodcastClient from "./PodcastClient";

export const metadata = {
  title: "Kalinga Podcast | Big Ideas & Bold Voices | Kalinga University",
  description:
    "Listen to inspiring conversations, expert talks, and student stories on the Kalinga University Podcast. A platform for students, faculty, alumni, and industry leaders to share bold ideas.",
  keywords: [
    "Kalinga Podcast",
    "University Podcast",
    "Educational Podcast India",
    "Student Voices",
    "Academic Conversations",
    "Industry Leader Interviews",
    "Student Media Kalinga",
  ],
  alternates: {
    canonical: "https://kalingauniversity.ac.in/podcast/",
  },
};

const videoItems = [
  {
    id: 1,
    title: "Dr. Sunayana Shukla",
    description: "ICF Certified Coach, NLP Trainer, Child Psychologist, Career Counsellor",
    videoUrl: "https://www.youtube.com/watch?v=WdKMix0cahA",
    thumbnail: "https://cdn.kalingauniversity.ac.in/podcast/podcast-2.png",
  },
  {
    id: 2,
    title: "Dr. Sandeep Gandhi",
    description: "Registrar, Kalinga University",
    videoUrl: "https://www.youtube.com/watch?v=eSTWPTAJ-N8",
    thumbnail: "https://cdn.kalingauniversity.ac.in/podcast/podcast-3.png",
  },
  {
    id: 3,
    title: "Saurabh Banwar",
    description: "Manager, CTCD",
    videoUrl: "https://www.youtube.com/watch?v=gwcT3TN_5iM",
    thumbnail: "https://cdn.kalingauniversity.ac.in/podcast/podcast-4.png",
  },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Kalinga University Podcast",
    "description": "Podcast platform featuring voices from Kalinga University community.",
    "publisher": {
      "@type": "University",
      "name": "Kalinga University",
      "url": "https://kalingauniversity.ac.in/"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PodcastClient videoItems={videoItems} />
    </>
  );
}