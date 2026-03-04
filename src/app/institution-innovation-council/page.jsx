import IICClient from "./IICClient";

export const metadata = {
  title: "Institution's Innovation Council (IIC) | Kalinga University",
  description: "Fostering a culture of innovation and entrepreneurship at Kalinga University. Our IIC promotes startups, IPR, and design thinking through MIC and AICTE initiatives.",
  keywords: "Institution Innovation Council Raipur, IIC Kalinga University, Startup ecosystem Chhattisgarh, Innovation and entrepreneurship India HEIs, MIC AICTE initiatives",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/institution-innovation-council",
  },
};

export default function InstitutionInnovationCouncilPage() {
  const objectives = [
    { text: "To conduct various innovation and entrepreneurship-related activities prescribed by MIC." },
    { text: "Identify and reward innovations and share success stories." },
    { text: "Organise periodic workshops/seminars/interactions with entrepreneurs, investors, professionals and create a mentor pool for student innovators." },
    { text: "Network with peers and national entrepreneurship development organisations." },
    { text: "Create an Institution’s Innovation portal to highlight innovative projects carried out by the institution’s faculty and students." },
    { text: "Organise Hackathons, Ideathons, idea competitions, innovative project expo, mini-challenges, etc." },
  ];

  const innovationParagraph = "Institution’s Innovation Council (IIC) at Kalinga University was established during 2018-19 with a mission of incorporating an innovative mindset among students, researchers, and faculty members across various disciplines. It aims to encourage, nurture, and inspire individuals by supporting their ideas and transforming them into practical solutions. We regularly organise activities and programs that develop problem-solving skills, leading to impactful solutions.";

  const iicCommitteeTable = [
    { memberType: "Director IQAC", role: "IIC President & ARIIA Coordinator" },
    { memberType: "Director KIF", role: "Vice President" },
    { memberType: "Assistant Professor", role: "Convener" },
    { memberType: "Assistant Professor", role: "Start-Up Activity Coordinator" },
    { memberType: "Director Admission", role: "Social Media Convener" },
    { memberType: "Assistant Professor", role: "Innovation Activity Coordinator" },
    { memberType: "TPO", role: "Internship Activity Coordinator" },
    { memberType: "Research Associate", role: "IPR Activity Coordinator" },
    { memberType: "Assistant Registrar", role: "NIRF Coordinator" },
    { memberType: "Student", role: "Social Media Convener" },
    { memberType: "Student", role: "Innovation Activity Coordinator" },
    { memberType: "Student", role: "Innovation Coordinator, Member" },
    { memberType: "Student", role: "Innovation Coordinator, Member" },
    { memberType: "Student", role: "IPR Activity Coordinator" },
    { memberType: "Student", role: "Member, Innovation Cell" },
    { memberType: "Student", role: "Start-Up Activity Coordinator" },
    { memberType: "External Member", role: "Member" },
    { memberType: "External Member", role: "Member" },
    { memberType: "Student", role: "Internship Activity Coordinator" },
    { memberType: "Student", role: "Member" },
    { memberType: "Student", role: "Member" },
  ];

  const certificates = [
    { id: 1, src: "https://cdn.kalingauniversity.ac.in/IIC/chart+(5).png", alt: "IIC Star Rating 2022-23" },
    { id: 2, src: "https://cdn.kalingauniversity.ac.in/IIC/chart+(6).png", alt: "IIC Star Rating 2023-24" },
  ];

  const annualReportButtons = [
    { id: 1, text: "2021-22", href: "https://cdn.kalingauniversity.ac.in/IIC/IIC_Appreciation_Letter_AY_2021_22.+(2).pdf" },
    { id: 2, text: "2022-23", href: "https://cdn.kalingauniversity.ac.in/IIC/IIC_Appreciation_Letter_AY_2022_23.pdf" },
    { id: 3, text: "2023-24", href: "https://cdn.kalingauniversity.ac.in/IIC/IIC_Appreciation_Letter_AY_2023_24+(1).pdf" },
  ];

  const iicTrainingAchievements = [
    { id: 1, image: "https://cdn.kalingauniversity.ac.in/IIC/chart+(7).png", alt: "IIC Training Achievement 1" },
    { id: 2, image: "https://cdn.kalingauniversity.ac.in/IIC/chart+(8).png", alt: "IIC Training Achievement 2" },
    { id: 3, image: "https://cdn.kalingauniversity.ac.in/IIC/chart+(9).png", alt: "IIC Training Achievement 3" },
    { id: 4, image: "https://cdn.kalingauniversity.ac.in/IIC/chart+(10).png", alt: "IIC Training Achievement 4" },
  ];

  const iicfound = [
    { id: 1, image: "https://cdn.kalingauniversity.ac.in/found-1.png", alt: "Foundation 1", overlayText: "Foundation level" },
    { id: 2, image: "https://cdn.kalingauniversity.ac.in/found-2.png", alt: "Foundation 2", overlayText: "Foundation level" },
    { id: 3, image: "https://cdn.kalingauniversity.ac.in/found-3.png", alt: "Foundation 3", overlayText: "Foundation level" },
  ];

  const iicfounds = [
    { id: 4, image: "https://cdn.kalingauniversity.ac.in/found-4.png", alt: "Foundation 4", overlayText: "Advanced level" },
    { id: 5, image: "https://cdn.kalingauniversity.ac.in/found-5.png", alt: "Foundation 5", overlayText: "Advanced level" },
    { id: 6, image: "https://cdn.kalingauniversity.ac.in/found-6.png", alt: "Foundation 6", overlayText: "Advanced level" },
  ];

  const annualReportButtons2 = [
    { id: 1, text: "Session - 1", href: "https://cdn.kalingauniversity.ac.in/IIC/Report-on-IIC-Impact-Lecture-Series-I-(Session-1)-(2)+(2)+(1).pdf" },
    { id: 2, text: "Session - 2", href: "https://cdn.kalingauniversity.ac.in/IIC/Report-on-IIC-Impact-Lecture-Series-I-(Session-1)-(2)+(2).pdf" },
  ];

  const events2024 = [
    { date: "16-09-2022", name: "Building an Innovation Repository as Part of the YUKTI" },
    { date: "23-09-2022", name: "National Education Policy" },
    { date: "19-09-2022 to 22-09-2022", name: "Barklays Life Skills Training Program" },
    { date: "13-10-2022", name: "Workshop on Research Paper Writing" },
    { date: "14-10-2022", name: "College Making – Science for Sustainable Development" },
    { date: "14-10-2022", name: "Research Policy Orientation" },
    { date: "20-10-2022", name: "Seminar on Artificial Intelligence, Law and Future" },
    { date: "21-10-2022", name: "How to Write a Research Article" },
    { date: "04-11-2022 to 05-11-2022", name: "VJ Hackathon 2022 (Victory & Joint Innovation)" },
    { date: "14-11-2022", name: "Ideathon 2.0" },
    { date: "23-11-2022", name: "CII – YI Annual Meet 2022" },
    { date: "12-01-2023", name: "National Youth Day Poster Making Competition" },
    { date: "16-01-2023", name: "National Start-up Day – Promoting Innovation & Entrepreneurship at Kalinga University" },
    { date: "01-02-2023 & 02-02-2023", name: "Workshop on Design Thinking, Critical Thinking and Innovation Design" },
    { date: "03-02-2023", name: "Field Visit to Pre-Incubation Units such as Gita Fab Lab, Makers Space, Design Centre, D.P. Works Cluster, Workshop, etc." },
    { date: "11-02-2023", name: "Pride of India Event" },
    { date: "12-02-2023", name: "National Pollution Control Day" },
    { date: "28-02-2023", name: "National Science Day" },
    { date: "03-03-2023 to 04-03-2023", name: "Smart City Hackathon – 2023" },
    { date: "16-03-2023", name: "Expert Talk on Process of Innovative Development, Technology Readiness Level (TRL), Commercialization of Technologies and Tech Transfer" },
    { date: "20-03-2023", name: "Science Model and Poster Exhibition" },
    { date: "13-04-2023", name: "Attitude and Behaviour for Being a Successful Entrepreneur" },
    { date: "17-04-2023", name: "Global Peace and Sustainable Development Summit, 2023" },
    { date: "21-04-2023", name: "Webinar on Creativity and Innovation During Modern Business" },
    { date: "26-04-2023", name: "Impact of Artificial Intelligence on Intellectual Property Rights" },
    { date: "26-04-2023", name: "Research Methodology" },
    { date: "28-04-2023 & 29-04-2023", name: "Role of IQAC in Achieving Quality and Excellence in Higher Education by Promoting Research, Innovation and Extension Activities" },
    { date: "11-05-2023", name: "Debate Competition on the topic 'Does Technology make People Lazy' on the occasion of National Technology Day" },
    { date: "21-06-2023", name: "International Yoga Day Celebration" },
    { date: "22-06-2023 & 23-06-2023", name: "Science & Technology Project Exhibition" },
    { date: "04-07-2023", name: "Start-Up Talk on Innovations" },
    { date: "12-07-2023 & 13-07-2023", name: "Workshop on Machine Learning for Optimal Process Design and Development – Techniques and Tools in Python" },
    { date: "10-08-2023 & 11-08-2023", name: "KU Hackathon" },
    { date: "15-08-2023", name: "Independence Day" },
    { date: "25-08-2023 & 26-08-2023", name: "Expert Talk & Panel Discussion on Innovations" }
  ];

  const events2023 = [
    { date: "15-09-2023", name: "Celebration of Engineer’s Day by the Faculty of Technology" },
    { date: "27-10-2023", name: "Exposure and Field Visit for Problem Identification in Slums" },
    { date: "09-11-2023", name: "Entrepreneurship and Innovation as Career Opportunity" },
    { date: "16-11-2023", name: "Slogan Symposium: Harmonising Education for National Education Day" },
    { date: "21-11-2023", name: "Poster Making Competition on the theme 'Harmony with Nature: Cultivating a Greener Tomorrow'" },
    { date: "21-11-2023", name: "One-day online guest lecture on 'MATLAB Applications in Engineering'" }
  ];

  const events2022 = [
    { date: "11-12-2023", name: "Viksit Bharat @ 2047 Utsav" },
    { date: "14-12-2023", name: "Poster Making Competition" },
    { date: "04-01-2024", name: "भ्रमणशील तारामंडल प्रदर्शनी" },
    { date: "12-01-2024", name: "National Youth Day" },
    { date: "22-02-2024", name: "Craft & DIY" },
    { date: "22-02-2024 to 23-02-2024", name: "2-Day Visit to SFSL, Raipur" },
    { date: "26-02-2024", name: "Cyber Security of Power Network" }
  ];

  const events2021 = [
    { date: "19-10-2024", name: "Master Class on IPR with Kalinga University" },
    { date: "19-09-2024", name: "One-day Industrial Visit at Sarda Energy & Minerals Limited, Raipur" },
    { date: "15-11-2024", name: "Poster Presentation Competition" },
    { date: "14-11-2024", name: "Workshop on Entrepreneurship & Innovation as a Career Opportunity" },
    { date: "22-11-2024 to 23-11-2024", name: "Ideathon 4.0" },
    { date: "01-10-2024", name: "Guest Lecture on Start-up Ideas" },
    { date: "14-10-2024", name: "Alumni Talk – Pathways to Success: Alumni Share Their Journey" }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Institution's Innovation Council (IIC) - Kalinga University",
    "description": "Details about the innovation ecosystem, IIC committee, achievements, and activities at Kalinga University.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "IIC", "item": "https://kalingauniversity.ac.in/institution-innovation-council" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IICClient
        objectives={objectives}
        innovationParagraph={innovationParagraph}
        iicCommitteeTable={iicCommitteeTable}
        certificates={certificates}
        annualReportButtons={annualReportButtons}
        iicTrainingAchievements={iicTrainingAchievements}
        iicfound={iicfound}
        iicfounds={iicfounds}
        annualReportButtons2={annualReportButtons2}
        events2024={events2024}
        events2023={events2023}
        events2022={events2022}
        events2021={events2021}
        events2020={[]}
        events2019={[]}
      />
    </>
  );
}
