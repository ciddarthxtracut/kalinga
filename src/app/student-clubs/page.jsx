import React from "react";
import StudentClubsClient from "./StudentClubsClient";

export const metadata = {
  title: "Student Clubs | Academic & Creative Societies | Kalinga University",
  description:
    "Join the vibrant student clubs at Kalinga University. From technology and law to arts and humanities, our clubs foster leadership, creativity, and professional skills in a collaborative environment.",
  keywords: [
    "Student Clubs",
    "University Societies",
    "Academic Clubs",
    "Vibrant Campus Life",
    "Student Leadership",
    "Extra-curricular Activities",
    "Student Organizations Raipur",
  ],
  alternates: {
    canonical: "https://kalingauniversity.ac.in/student-clubs/",
  },
};

const clubSections = [
  {
    id: 4,
    title: "Arts & Humanities",
    clubs: [
      {
        name: "Behavioral Club",
        image: "https://cdn.kalingauniversity.ac.in/student-clubs/Behavioural+Club.webp",
        description: "It organises various camps, workshops, and sessions on important topics like emotional well-being, gender sensitivity, and child rights. It makes students aware of social issues and develops the values of respect, kindness, and equality."
      },
      {
        name: "Literary Club",
        image: "https://cdn.kalingauniversity.ac.in/student-clubs/Literary+Club.webp",
        description: "Students who are passionate about reading, writing, poetry, storytelling, or debate can join the literary club and participate in various events and competitions."
      },
      {
        name: "Bhoomi Club",
        image: "https://cdn.kalingauniversity.ac.in/student-clubs/Bhoomi+Club.webp",
        description: "It promotes community welfare and social responsibility by organising donation camps, cleanliness camps, and volunteer programs that support the underprivileged and develop a spirit of service towards society."
      },
    ],
  },
  {
    id: 1,
    title: "Commerce & Management",
    clubs: [
      {
        name: "Finance Club – Bull",
        image: "https://cdn.kalingauniversity.ac.in/student-clubs/Finance+Club+%E2%80%93+Bull.webp",
        description: "The club is named after the symbol of optimism in financial markets. The Bull Club is dedicated to developing financial literacy and analytical acumen among students. Activities include stock market simulations, budget planning & analysis, financial modelling sessions, guest lectures by financial analysts, and quizzes on banking and investment."
      },
      {
        name: "Marketing Club – Mercadeo",
        image: "https://cdn.kalingauniversity.ac.in/student-clubs/Marketing+Club+-+Mercadeo.webp",
        description: "The name of the marketing club is derived from “Mercadeo” (a Spanish word for marketing). Mercadeo provides a vibrant platform for students interested in brand building, digital marketing, and consumer behaviour. The club conducts ad-mad shows, marketing case study competitions, social media campaigns, business idea/plan competition - Ideathon, and brainstorming sessions on current market trends."
      },
      {
        name: "HR Club – Sapiens",
        image: "https://cdn.kalingauniversity.ac.in/student-clubs/HR+Club+-+Sapiens.webp",
        description: "The HR Club - Sapiens of our department of management studies organises workshops, role plays, HR quizzes, mock interviews, personality development sessions, and seminars on emerging HR practices. The club organises panel discussions and invites industry HRs to bridge classroom learning with real-world HR dynamics."
      },
    ],
  },
  {
    id: 3,
    title: "Education",
    clubs: [
      {
        name: "Educraft Club",
        image: "https://cdn.kalingauniversity.ac.in/student-clubs/images-1.webp",
        description: "It is a platform that combines creativity, experiential learning, inclusive education, and holistic development of students. This club provides them with a real world insight into different teaching methods by organizing various activities and projects that supplement the course curriculum while improving their communication and leadership skills."
      },
    ],
  },
  {
    id: 7,
    title: "Information Technology",
    clubs: [
      {
        name: "Infinity Club",
        image: "https://cdn.kalingauniversity.ac.in/student-clubs/Infinity+Club.webp",
        description: "We just don’t talk about technology, but we believe in creating it. Join the Infinity Club and turn your curiosity into powerful tech. Explore coding, cybersecurity, artificial intelligence, data science, machine learning, Internet of Things (IoT), and Robotics & Automation through practical projects and conducted by the club. Take advantage of the resources and expert mentorship, and learn to debug the most complex problems."
      },
    ],
  },
  {
    id: 8,
    title: "Law",
    clubs: [
      {
        name: "Moot Court Club",
        image: "https://cdn.kalingauniversity.ac.in/student-clubs/Moot+Court+Club.webp",
        description: "We have a well-furnished moot court on our campus that provides invaluable opportunities to our law students in developing advocacy skills in a practical setting. From researching legal cases, preparing petitions, or presenting arguments, our students get a complete understanding of the courtroom proceedings from the best private law colleges of India. Here, students learn how to present their arguments, and they even get the opportunity to participate in moot court competitions."
      },
      {
        name: "Legal Aid Clinic",
        image: "https://cdn.kalingauniversity.ac.in/student-clubs/Legal+Aid+Clinic.webp",
        description: "The Legal Aid Clinic is a community-based initiative that provides support to people who are unable to afford legal services. It aims to promote justice, raise legal awareness, and assist underprivileged individuals with legal matters."
      },
      {
        name: "Pro Bono Club",
        image: "https://cdn.kalingauniversity.ac.in/student-clubs/Pro+Bono+Club.webp",
        description: "A Pro Bono Club is a student or community-based organisation that provides free legal services to people who cannot afford to pay for legal representation. The club's goal is to provide legal services to the underserved while giving our students real-world exposure."
      },
    ],
  },
  {
    id: 2,
    title: "Pharmacy",
    clubs: [
      {
        name: "Pharma Club",
        image: "https://cdn.kalingauniversity.ac.in/student-clubs/Pharmacy.webp",
        description: "Our Pharma Club gives students a platform where they can learn and present their talents in our department of pharmaceutical sciences. With activities like workshops, competitions, real project work, and industrial visits, our students build exceptional practical skills in the pharmacy industry. The club promotes a friendly learning space where they can perform experiments, share ideas, expand their network, and develop innovative healthcare solutions."
      },
    ],
  },
  {
    id: 5,
    title: "Science",
    clubs: [
      {
        name: "The Microbiologists Society, India (MBSI) Student Chapter",
        image: "https://cdn.kalingauniversity.ac.in/student-clubs/(MBSI)+Student+Chapter.webp",
        description: "The club brings together students who are interested in microbiology and life sciences. Students explore, discover, and participate in workshops that connect them with experts. It organises microbiological research activities to generate curiosity among students, apart from textbook learning."
      },
      {
        name: "Green Club",
        image: "https://cdn.kalingauniversity.ac.in/student-clubs/Green+Club.webp",
        description: "The Green club turns students’ eco-conscious ideas into action. It conducts events, workshops, and guest lectures where students explore new sustainable solutions that can solve environmental challenges, and they apply this knowledge in developing eco-friendly practices."
      },
    ],
  },
  {
    id: 6,
    title: "Technology",
    clubs: [
      {
        name: "Spark Club (Electrical Engineering)",
        image: "https://cdn.kalingauniversity.ac.in/student-clubs/Spark+Club+(Electrical+Engineering).webp",
        description: "Do you like power systems, microelectronics, smart grids, or high-voltage engineering? At Spark Club, you will live what you have studied in your textbooks. From working on complex circuits to power systems, get the freedom to explore and innovate with projects that will prepare you for the future."
      },
      {
        name: "Avishkar Club (Civil Engineering)",
        image: "https://cdn.kalingauniversity.ac.in/student-clubs/Avishkar+Club+(Civil+Engineering).webp",
        description: "Have you heard about eco-friendly structures, innovative construction techniques, or carbon-neutral buildings? Well, at Avishkar Club, you will get real-world engineering knowledge that will set you apart from other civil engineers. You will not only learn about designing urban construction but also know its positive impact on the environment."
      },
      {
        name: "Royal Mechanical Club (Mechanical Engineering)",
        image: "https://cdn.kalingauniversity.ac.in/student-clubs/Royal+Mechanical+Club+(Mechanical+Engineering).webp",
        description: "Curious about knowing the working mechanics of machines? Implement your theoretical learning into mechanical concepts, and experience a real transition. Royal Club will make you challenge your mechanical skills by giving you practical experience through workshops and projects. Join the Royal Club and turn your passion into an innovation!"
      },
      {
        name: "Standard Club under BIS (Mechanical and Mining Engineering)",
        image: "https://cdn.kalingauniversity.ac.in/student-clubs/Standard+Club+under+BIS+(Mechanical+and+Mining+Engineering).webp",
        description: "Do you know how standards impact industries and innovation? Standardisation plays a key role in maintaining product quality and safety. Our Standard Club of the faculty of technology is giving you a platform to explore its influence through workshops, seminars, quiz competitions, and debates. With the Bureau of Indian Standards' support and expert mentorship, you’ll learn to redefine quality and set new trends."
      }
    ],
  },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Student Clubs - Kalinga University",
    "description": "Information about various academic and creative student clubs at Kalinga University.",
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
      <StudentClubsClient clubSections={clubSections} />
    </>
  );
}
