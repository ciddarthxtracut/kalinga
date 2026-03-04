import ChairmanMessage from "../components/leadership/chairman_message";

export const metadata = {
  title: "Vice-Chancellor's Message | Kalinga University Raipur",
  description: "Read the message from Dr. R. Shridhar, Vice-Chancellor of Kalinga University. Discover our commitment to global education standards and research innovation.",
  keywords: "Vice-Chancellor Kalinga University, Dr. R. Shridhar, University leadership messages, Higher education standards India",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/vice-chancellor",
  },
};

export default function ViceChancellorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Vice-Chancellor's Message - Kalinga University",
    "description": "Official message from the Vice-Chancellor of Kalinga University.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Vice-Chancellor", "item": "https://kalingauniversity.ac.in/vice-chancellor" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChairmanMessage
        imageSrc="https://cdn.kalingauniversity.ac.in/about/Leadership/Shridhar.png"
        imageAlt="Dr. R. Shridhar"
        name="Dr. R. Shridhar"
        title="Vice-Chancellor"
        messageHeading="Vice-Chancellor's Message"
        quote="Education is not preparation for life; it is the awakening of purpose within it."
        message={[
          "It is a matter of honour and immense pleasure to lead Kalinga University.",
          "KU aims to offer high-quality education to students and a scholastic learning environment that encourages research and innovation with an urge to achieve academic excellence. Our highly qualified and experienced faculty members have enriched the university over the years. The primary objective of the university is to provide higher education that meets global standards, and hence, we have designed industry-relevant programs that focus on current industry scenarios.",
          "We continuously develop new pedagogical techniques through research and development, faculty development programs, and by establishing national and international tie-ups. By nurturing the goals and ambitions of our students, we have provided them a platform where they meet ample opportunities to grow and explore their interests to their full potential. Whether they choose engineering, science, arts & humanities, technology, law, or commerce and management, our academic initiatives will make them well-rounded professionals. Internship opportunities, conferences, workshops, seminars, and hands-on training programs ensure that our students turn into professional graduates and have all the necessary skills and potential to make a positive change in the world.",
          "Keeping every student’s learning requirements in mind, we focus on giving them the best of everything. From digital classrooms and laboratories to offering a personalised learning experience, we support them at every stage of their journey.",
          "Feel free to approach and speak with your teachers and mentors, and share your suggestions and feedback on how we can make your experience even more enriching.",
          "May your coming days be filled with wonderful moments and joy!"
        ]}
      />
    </>
  );
}
