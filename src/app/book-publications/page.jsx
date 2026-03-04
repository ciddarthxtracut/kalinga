import BookPublicationsClient from "./BookPublicationsClient";

export const metadata = {
  title: "Book Publications | Faculty Research | Kalinga University",
  description: "Discover the books authored and published by the faculty of Kalinga University. Explore our contribution to global research and literature across disciplines.",
  keywords: "Book publications Kalinga University, faculty authors Raipur, university research books Chhattisgarh",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/book-publications",
  },
};

export default function BookPublicationsPage() {
  const books = [
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(1).webp", title: "Beyond the Womb", author: "Snehashish Sarkar", designation: "Assistant Professor", faculty: "Faculty of Arts and Humanities" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(2).webp", title: "Protection Of Plant Varieties & Farmers' Rights", author: "Ms. Akanksha Chaudhary", designation: "Assistant Professor", faculty: "Faculty of Law" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(27).webp", title: "NARI SHAKTI: The Catalyst For A Vikshit Bharat", author: "Mr. Tushar Ranjan Barik", designation: "Assistant Professor", faculty: "Faculty of Commerce & Management" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(28).webp", title: "NARI SHAKTI: The Catalyst For A Vikshit Bharat", author: "Dr. Deepti Pattnaik", designation: "Assistant Professor", faculty: "Faculty of Commerce & Management" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(29).webp", title: "Cybersecurity Essentials", author: "Mr. Kamlesh Kumar Yadav", designation: "Assistant Professor", faculty: "Faculty of CS & IT" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(3).webp", title: "Protection Of Plant Varieties & Farmers' Rights", author: "Ms.Surbhi Agarwal", designation: "Assistant Professor", faculty: "Faculty of Law" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(31).webp", title: "Synchronous and Induction Machines", author: "Mr. Sandeep Roy", designation: "Assistant Professor", faculty: "Faculty of Engineering and Technology" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(32).webp", title: "Cybersecurity Essentials", author: "Mrs. Ashu Nayak", designation: "Assistant Professor", faculty: "Faculty of CS & IT" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(4).webp", title: "Protection Of Plant Varieties & Farmers' Rights", author: "Ms. Srishti Shriwastava", designation: "Associate Professor", faculty: "Faculty of Law" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(5).webp", title: "Protection Of Plant Varieties & Farmers' Rights", author: "Ms. Itishri Upadhyay", designation: "Assistant Professor", faculty: "Faculty of Law" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(6).webp", title: "Protection Of Plant Varieties & Farmers' Rights", author: "Mr. Soumyadeep Chakrabarti", designation: "Assistant Professor", faculty: "Faculty of Law" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(7).webp", title: "Protection Of Plant Varieties & Farmers' Rights", author: "Mr. Ranjan Kumar Ray", designation: "Assistant Professor", faculty: "Faculty of IT" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(8).webp", title: "Research Methodology", author: "Dr. D. Kalidoss", designation: "Associate Professor cum Director Sports", faculty: "" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(9).webp", title: "Micro Economics", author: "Dr. Chandra Bhoosan Singh", designation: "Assistant Professor", faculty: "Faculty of Commerce and Management" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(10).webp", title: "Technical Analysis", author_1: "Dr. Chandra Bhoosan Singh", author_2: "Dr. Deepti Pattnaik", designation: "", faculty: "Faculty of Commerce and Management" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(11).webp", title: "Taxation and GST in India", author: "Dr. Chandra Bhoosan Singh", designation: "Assistant Professor", faculty: "Faculty of Commerce and Management" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(13).webp", title: "Synchronous and Induction Machines", author: "Dr. Manoj Kumar Nigam", designation: "Professor and Head", faculty: "Faculty of Engineering and Technology" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(14).webp", title: "Geography of Bharat", author: "Dr. A. Rajshekar", designation: "Professor", faculty: "Faculty of Arts and Humanities" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(15).webp", title: "Cybersecurity Essentials", author: "Dr. Anupa Sinha", designation: "Assistant Professor", faculty: "Faculty of CS & IT" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(16).webp", title: "Nai Talim: An Experiential Learning", author_1: "Dr. Lubhawani Tripathi", author_2: "Dr. Harsha Sharma", designation_1: "Associate Professor", designation_2: "Assistant Professor", faculty: "Faculty of Education" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(17).webp", title: "Research Methodology", author: "Dr. Lubhawani Tripathi", designation: "Associate Professor", faculty: "Faculty of Education" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(18).webp", title: "Whispers of Wonderland", author: "Dr. Papri Mukhopadhyay", designation: "Assistant Professor", faculty: "Faculty of Arts & Humanities" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(19).webp", title: "", author: "Dr. Shraddha Hirkane", designation: "Associate Professor", faculty: "Faculty of Arts & Humanities" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(20).webp", title: "Railway Engineering", author_1: "Dr. Ruchi Chandrakar", author_2: "Dr. Swati Agarwal", author_3: "Dr. Akshit Lamba", author_4: "Ashutosh Pandey", designation_1: "Assistant Professor", designation_2: "Assistant Professor", designation_3: "Assistant Professor", designation_4: "Assistant Professor", faculty: "Faculty of Technology" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(21).webp", title: "Wisdom of the Ages", author: "Dr. Amit Joshi", designation: "Assistant Professor", faculty: "Faculty of Science" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(22).webp", title: "Gender and Society", author: "Esha Chatterjee", designation: "Assistant Professor", faculty: "Faculty of Arts and Humanities" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(23).webp", title: "Innovative Education strategies", author_1: "Dr. Shraddha Verma", author_2: "Dr. Saroj Nayyar", designation_1: "Dean", designation_2: "Assistant Professor", faculty: "Faculty of Education" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(24).webp", title: "Next Generation Biotechnology", author_1: "Dr. R. Jayakumar", author_2: "Dr. Megha Chaturvedi", designation_1: "Professor & Dean", designation_2: "Assistant Professor", faculty: "Faculty of Science" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(25).webp", title: "Exam Hand Pharmacist and Drug Inspector", author: "Dr. Sandip prasad Tiwari", designation: "Principal", faculty: "Faculty of Pharmacy" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(26).webp", title: "Challenges of NEP-2020", author: "Dr. Saroj Nayyar", designation: "Assistant Professor", faculty: "Faculty of Education" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(30).webp", title: "Cybersecurity and Essentials", author: "Mr. Omprakash Dewangan", designation: "Hod(Incharge)", faculty: "Faculty of CS & IT" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(33).webp", title: "Indian Contract Act", author: "Mrs. Saloni Tyagi Shrivastava", designation: "Assistant Professor", faculty: "Faculty of Law" },
    { img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(12).webp", title: "Starlit Blueprint", author: "Dr. Satvik Jain", designation: "Assistant Professor", faculty: "Faculty of Commerce & Management" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Book Publications - Kalinga University",
    "description": "Distinguished books authored by our faculty, contributing to various academic fields.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Book Publications", "item": "https://kalingauniversity.ac.in/book-publications" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BookPublicationsClient books={books} />
    </>
  );
}
