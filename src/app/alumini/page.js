import AlumniClient from "./AlumniClient";

export const metadata = {
  title: "Alumni Association | Global Network | Kalinga University",
  description: "Join the Kalinga University Alumni Association. Connect with our global network of successful professionals, share experiences, and stay updated with university news.",
  keywords: "Kalinga University alumni Raipur, university graduates network Chhattisgarh, alumni association India, KU alumni success stories",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/alumini",
  },
};

export const dynamic = 'force-dynamic';

export default function AlumniPage() {
  const videoItems = [
    {
      id: 1,
      name: "Video 1",
      title: "Ms. Vaishali Baghel",
      videoUrl: "https://cdn.kalingauniversity.ac.in/alumini/Vaishali+Baghel+Reel.mp4",
      thumbnail: "https://cdn.kalingauniversity.ac.in/alumini/image-test-2.webp",
    },
    {
      id: 2,
      name: "Video 2",
      title: "Ms. Kajal Pandey",
      thumbnail: "https://cdn.kalingauniversity.ac.in/alumini/Kajal+Pandey_01.webp",
      videoUrl: "https://cdn.kalingauniversity.ac.in/alumini/kajal+Pandey+Final.mp4",
    },
    {
      id: 3,
      name: "Video 3",
      title: "Mr. Ayush Khare",
      videoUrl: "https://cdn.kalingauniversity.ac.in/alumini/Mr.+Ayush+Khare+Reel.mp4",
      thumbnail: "https://cdn.kalingauniversity.ac.in/alumini/Ayush+Khare_01.webp",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Shubham Sharma",
      year: "B.Tech (2015-19)",
      role: "Senior Software Developer,Oracle India Pvt. Ltd",
      quote: "Shubham Sharma, an alumnus of Kalinga University, was a passionate engineering student, and his placement at Oracle India Pvt. Ltd. as a Senior Software Developer is truly inspiring.",
      image: "https://cdn.kalingauniversity.ac.in/alumini/Shubham+Sharma.webp",
      theme: "orange"
    },
    {
      id: 2,
      name: "Nitin Yadav",
      year: "MBA (2021-23)",
      role: "Wanfeng Aluminum Wheels Ltd. as Executive HR",
      quote: "By pursuing an MBA from Kalinga, Nitin developed excellent communication skills and a strong understanding of people, which made him land his dream job.",
      image: "https://cdn.kalingauniversity.ac.in/alumini/Nitin+Yadav.webp",
      theme: "orange"
    },
    {
      id: 3,
      name: "Kajal Pandey",
      year: "LLM (2022-24)",
      role: "Awarded the Golden Globe Eminence Award for Holding 13 World Records ",
      quote: "Kajal was always known for her unstoppable determination. During her time at the University, she explored new ideas and took up challenges.",
      image: "https://cdn.kalingauniversity.ac.in/alumini/Kajal+Pandey_01.webp",
      theme: "orange"
    },
    {
      id: 4,
      name: "Nitish Rana ",
      year: "BA (2013-16)",
      role: "Indian Cricketer, IPL, Player of Team KKR",
      quote: "Nitish, our former student, had always shown a passion for cricket apart from his academic studies.",
      image: "https://cdn.kalingauniversity.ac.in/alumini/NITISH+RANA.webp",
      theme: "orange"
    },
    {
      id: 5,
      name: "Prateek Singh Thakur",
      year: "MBA (2016-18)",
      role: "International Medalist in Wushu & Kickboxing",
      quote: "Prateek Singh Thakur, an MBA alumnus of Kalinga University, has won various medals in National and International competitions.",
      image: "https://cdn.kalingauniversity.ac.in/alumini/PRATEEK+SINGH+THAKUR.webp",
      theme: "orange"
    },
    {
      id: 6,
      name: "Shreya Mallick ",
      year: "B.Tech (2015-19)",
      role: "First Prize Winner – International Dance Competition, Dubai (2017)",
      quote: "Apart from her engineering studies, Shreya has always followed her passion for Indian classical dance.",
      image: "https://cdn.kalingauniversity.ac.in/alumini/Shreya+Mallik.webp",
      theme: "orange"
    },
    {
      id: 7,
      name: "Sumit Nagal",
      year: "BA (2017-20)",
      role: "Indian Tennis Player – Tokyo Olympics",
      quote: "From the classroom to the global tennis court, Sumit has proved what true dedication and spirit can achieve.",
      image: "https://cdn.kalingauniversity.ac.in/alumini/Sumit+Nagal.webp",
      theme: "orange"
    },
    {
      id: 8,
      name: "Pallavi Bareth ",
      year: "B.Sc. FD (2018-21)",
      role: "Assistant Costume Designer & Stylist – The Kapil Sharma Show",
      quote: "An innovative fashion artist and trendsetter, Pallavi has beaten all the odds.",
      image: "https://cdn.kalingauniversity.ac.in/alumini/Pallvi+Bareth.webp",
      theme: "orange"
    },
    {
      id: 9,
      name: "Vaishali Baghel",
      year: "LLB (2022-24)",
      role: "Cleared the Chhattisgarh Judiciary Exam",
      quote: "Vaishali Baghel was a dedicated student of her batch and during her academic year, she developed a strong understanding of Law.",
      image: "https://cdn.kalingauniversity.ac.in/alumini/Vaishali++baghel.webp",
      theme: "orange"
    },
    {
      id: 10,
      name: "Ayush Khare",
      year: "M.Tech (2018-20)",
      role: "Selected in UPSC - 2019, Rank 267",
      quote: "Ayush secured an outstanding rank in the UPSC exam in 2019.",
      image: "https://cdn.kalingauniversity.ac.in/alumini/Ayush+Khare_01.webp",
      theme: "orange"
    },
    {
      id: 11,
      name: "Ashita Verma",
      year: "LLB (2018-20)",
      role: "Senior Manager at Zepto ",
      quote: "Ashita has carved a niche for herself in the corporate world.",
      image: "https://cdn.kalingauniversity.ac.in/alumini/Ashita+Verma.webp",
      theme: "orange"
    },
    {
      id: 12,
      name: "Shringee Sharma",
      year: "MBA (2019-21)",
      role: "Represented India at the World Cup Woodball Championship 2019",
      quote: "Shringee’s journey at Kalinga University was filled with determination and competitive spirit.",
      image: "https://cdn.kalingauniversity.ac.in/alumini/Shringee+Sharma.webp",
      theme: "orange"
    }
  ];

  const newsConferences = [
    {
      id: 1,
      title: "Inspiring Career Guidance Session by Diksha",
      date: "December 14 · 2025",
      category: "Career Development & Entrepreneurship",
      description: "Diksha conducted an inspiring session for the students of Kalinga University.",
      image: "https://cdn.kalingauniversity.ac.in/alumini/Alumni+Talk%2C+Ms.+Diksha+Bhimte.png"
    },
    {
      id: 2,
      title: "Career Guidance Session by Nabodita Sarma",
      date: "December 16 · 2025",
      category: "Engineering Career Development",
      description: "Nabodita Sarma conducted an insightful session for the students of Kalinga University.",
      image: "https://cdn.kalingauniversity.ac.in/alumini/Alumni+Talk%2C+MS.+NABODITA+SARMAs.png"
    }
  ];

  const galleryImages = [
    { id: 1, image: "https://cdn.kalingauniversity.ac.in/alumini/alumni-Glimpse1.webp", alt: "alumni-Glimpse1" },
    { id: 2, image: "https://cdn.kalingauniversity.ac.in/alumini/alumni-Glimpse2.webp", alt: "alumni-Glimpse2" },
    { id: 3, image: "https://cdn.kalingauniversity.ac.in/alumini/alumni-Glimpse3.webp", alt: "alumni-Glimpse3" },
    { id: 4, image: "https://cdn.kalingauniversity.ac.in/alumini/alumni-Glimpse4.webp", alt: "alumni-Glimpse4" },
    { id: 5, image: "https://cdn.kalingauniversity.ac.in/alumini/alumini-Glimpse5.webp", alt: "alumini-Glimpse5" },
    { id: 6, image: "https://cdn.kalingauniversity.ac.in/alumini/alumini-Glimpse6.webp", alt: "alumini-Glimpse6" },
    { id: 7, image: "https://cdn.kalingauniversity.ac.in/alumini/alumini-Glimpse7.webp", alt: "alumini-Glimpse7" },
    { id: 8, image: "https://cdn.kalingauniversity.ac.in/alumini/alumini-Glimpse9.webp", alt: "alumini-Glimpse9" },
  ];

  const Items = [
    { id: 1, text: "To share knowledge and experiences with current students and support them in their professional journey." },
    { id: 2, text: "To organise mentorship programs and alumni talks to prepare students for future careers." },
    { id: 3, text: "To recognise the academic and professional achievements of alumni." },
    { id: 4, text: "To encourage the students to always be involved in research work, workshops, startups, and social and cultural events." },
    { id: 5, text: "To encourage alumni to participate in events and share ideas and expertise." },
    { id: 6, text: "To inspire students to get involved in community development projects and social service actively." }
  ];

  const visionMissionData = [{
    visionTitle: "Vision",
    missionTitle: "Mission",
    visionText: "To create an alumni community that empowers current students towards academic and professional excellence.",
    missionText: "To actively engage our alumni and current students through events and programs, while supporting knowledge exchange, academic and professional growth, and lifelong learning.",
    imageAlt: "Vision and Mission",
    className: "",
    showImage: false,
  }];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Alumni Association - Kalinga University",
    "description": "Connecting graduates and current students for professional growth and networking.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Alumni", "item": "https://kalingauniversity.ac.in/alumini" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AlumniClient
        videoItems={videoItems}
        testimonials={testimonials}
        newsConferences={newsConferences}
        galleryImages={galleryImages}
        Items={Items}
        visionMissionData={visionMissionData}
      />
    </>
  );
}