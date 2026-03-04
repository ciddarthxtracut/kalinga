import React from "react";
import Image from "next/image";
import KIFClient from "./KIFClient";

export const metadata = {
  title: "Kalinga Incubation Foundation (KIF) | Startup Incubation Centre",
  description:
    "Kalinga Incubation Foundation (KIF) is a leading startup incubation centre at Kalinga University. We provide mentorship, funding support, workspace, and legal guidance for budding entrepreneurs.",
  keywords: [
    "KIF",
    "Kalinga Incubation Foundation",
    "Startup Incubation",
    "Entrepreneurship",
    "Mentorship",
    "Business Incubator India",
    "Kalinga University",
    "Seed Funding",
    "Venture Capital",
    "MSME Host Institute",
  ],
  alternates: {
    canonical: "https://kalingauniversity.ac.in/kalinga-incubation-foundation/",
  },
};

export default function Page() {
  const visionMissionData = [
    {
      visionTitle: "Vision",
      missionTitle: "Mission",
      visionText: "Kalinga University's incubation centre promotes an incubation ecosystem for new-age entrepreneurs who are contributing to the social and economic development of India. The primary vision is to facilitate a resource-rich platform for our budding entrepreneurs so that they can commence their startup business at minimum risk. Our multidisciplinary incubators, technological assistance, and research facilitations encourage young enthusiasts to take advantage of our full-fledged startup ecosystem.   ",
      missionText: [
        "We empower the next-gen entrepreneurs in solving the pressing challenges of our society.",
        "KIF significantly contributes to supporting student-led startups, employment generation, designing sustainable business models, and economic growth.",
        "We facilitate extensive networking opportunities, connecting young entrepreneurs with highly knowledgeable people.",
        "We identify and nurture unique business ideas of students with all the necessary resources, tools, and mentorship.",
      ],
      imageAlt: "Vision and Mission",
      className: "",
      showImage: false,
    },
  ];

  const boxItems = [
    {
      title: "Startup Incubation",
      description: "Got an idea? We’ll turn it into a successful company.",
      icon: (
        <Image src="https://cdn.kalingauniversity.ac.in/kif/incubator.svg" alt="Startup Incubation" width={40} height={40} className="h-10 w-10" />
      ),
    },
    {
      title: "Expert Mentorship",
      description: "Get insider tips from our experienced team members and industry experts.",
      icon: (
        <Image src="https://cdn.kalingauniversity.ac.in/kif/Expert+Mentorship.svg" alt="Expert Mentorship" width={40} height={40} className="h-10 w-10" />
      ),
    },
    {
      title: "Prototype Development Lab",
      description: "Plan, design, test, and experiment with your ideas in our incubation lab. ",
      icon: (
        <Image src="https://cdn.kalingauniversity.ac.in/kif/Prototype+Development+Lab.svg" alt="Prototype Development Lab" width={40} height={40} className="h-10 w-10" />
      ),
    },
    {
      title: "Funding Support",
      description: "Learn to pitch your ideas to industry experts and get financial assistance.",
      icon: (
        <Image src="https://cdn.kalingauniversity.ac.in/kif/Funding+Support.svg" alt="Funding Support" width={40} height={40} className="h-10 w-10" />
      ),
    },
    {
      title: "Co-Working Space",
      description: "Work on your startup ideas in our buzzing workspace with strong Wi-Fi connectivity.",
      icon: (
        <Image src="https://cdn.kalingauniversity.ac.in/kif/Co-Working+Space.svg" alt="Co-Working Space" width={40} height={40} className="h-10 w-10" />
      ),
    },
    {
      title: "Marketing Assistance",
      description: "Learn useful tips related to branding and promotion, and launch your startup like a pro.",
      icon: (
        <Image src="https://cdn.kalingauniversity.ac.in/kif/Marketing+Assistance.svg" alt="Marketing Assistance" width={40} height={40} className="h-10 w-10" />
      ),
    },
    {
      title: "Technology Support",
      description: "Unsure about tech? We’ll help you choose the right tools and guide you through each step.",
      icon: (
        <Image src="https://cdn.kalingauniversity.ac.in/kif/Technology+Support.svg" alt="Technology Support" width={40} height={40} className="h-10 w-10" />
      ),
    },
    {
      title: "Legal & Compliance",
      description: "From registration to IP rights, we’ll make your paperwork process stress-free.  ",
      icon: (
        <Image src="https://cdn.kalingauniversity.ac.in/kif/Legal+%26+Compliance.svg" alt="Legal & Compliance" width={40} height={40} className="h-10 w-10" />
      ),
    },
  ];

  const boxItems1 = [
    {
      title: "Diverse Ecosystem",
      description: "Whether it’s technology, healthcare, medicine, sustainable products, or social impact, KIF supports startups across different domains. Our ecosystem prompts cross-pollination of ideas and innovation.",
      icon: (
        <Image src="https://cdn.kalingauniversity.ac.in/kif/incubator.svg" alt="Startup " width={40} height={40} className="h-10 w-10" />
      ),
    },
    {
      title: "Commitment to Innovation",
      description: "We embrace fresh ideas of our champions, offering resources and mentorship to turn them into a powerful business.",
      icon: (
        <Image src="https://cdn.kalingauniversity.ac.in/kif/Technology+Support.svg" alt="Technology Support" width={40} height={40} className="h-10 w-10" />
      ),
    },
    {
      title: "Passionate Team of Incubators",
      description: "Our passionate team members, who come from different backgrounds, will constantly support you in your dreams at each step in your new journey.  ",
      icon: (
        <Image src="https://cdn.kalingauniversity.ac.in/kif/Legal+%26+Compliance.svg" alt="Legal & Compliance" width={40} height={40} className="h-10 w-10" />
      ),
    },
  ];

  const testimonials = [
    { id: 1, name: "Nitish Jha", role: "Master G Academy NIIRA Educom", quote: "Kalinga Incubation Centre gave me a perfect platform where I turned my business idea into a successful startup, apart from my course curriculum. I have received an outstanding mentorship from them until I execute my plan. I am extremely grateful for their guidance and support. ", image: "https://cdn.kalingauniversity.ac.in/kif/testimonial-1.webp", theme: "red" },
    { id: 2, name: "Shubham Bhartiya", role: "Graeon.ai", quote: "I am running a successful startup business just because of the guidance of experts at Kalinga University. From idea generation to its execution, I have received great support from them. They also conducted workshops, seminars, and guest lectures from time to time, which gave me a broader perspective and detailed knowledge about my business. Their personalised mentorship was truly a game-changer for me.", image: "https://cdn.kalingauniversity.ac.in/kif/testimonial-2.webp", theme: "red" },
    { id: 3, name: "Shrey Singh", role: "Graeon.ai", quote: "I sincerely thank KIF team members, as they have helped me in establishing my startup business by working with me in planning and providing me with valuable industry insights. Their resources were extremely helpful for me in refining my business strategies.", image: "https://cdn.kalingauniversity.ac.in/kif/testimonial-3.webp", theme: "red" },
  ];

  const kifSteps = [
    { id: 1, stepNumber: "01", title: "Step 1", description: "Brainstorm Unique Ideas", image: "https://cdn.kalingauniversity.ac.in/common/step1.png" },
    { id: 2, stepNumber: "02", title: "Step 2", description: "Polish Your Startup Plan", image: "https://cdn.kalingauniversity.ac.in/common/step1.png" },
    { id: 3, stepNumber: "03", title: "Step 3", description: "Build a Solid Business Plan", image: "https://cdn.kalingauniversity.ac.in/common/step1.png" },
    { id: 4, stepNumber: "04", title: "Step 4", description: "Develop Your Product", image: "https://cdn.kalingauniversity.ac.in/common/step1.png" },
    { id: 5, stepNumber: "05", title: "Step 5", description: "Get Expert Mentorship", image: "https://cdn.kalingauniversity.ac.in/common/step1.png" },
    { id: 6, stepNumber: "06", title: "Step 6", description: "Test & Improve", image: "https://cdn.kalingauniversity.ac.in/common/step1.png" },
    { id: 7, stepNumber: "07", title: "Step 7", description: "Launch Your Product/Service", image: "https://cdn.kalingauniversity.ac.in/common/step1.png" },
    { id: 8, stepNumber: "08", title: "Step 8", description: "Pitch and Raise Funds", image: "https://cdn.kalingauniversity.ac.in/common/step1.png" },
  ];

  const links = [
    { id: 1, icon: "https://cdn.kalingauniversity.ac.in/kif/Entrepreneurial+Thinking.svg", title: "Entrepreneurial Thinking ", description: "We’re here to put your entrepreneurial ideas into action. Here, you will not just dream but build something real that solves people's problems." },
    { id: 2, icon: "https://cdn.kalingauniversity.ac.in/kif/Backed+By+Powerful+Resources.svg", title: "Backed By Powerful Resources", description: "You won’t need to hassle anywhere to build your company; get complete support under one roof. From brainstorming ideas to product selling, you are free to utilise our in-house resources at any time." },
    { id: 3, icon: "https://cdn.kalingauniversity.ac.in/kif/Build+Networks.svg", title: "Build Networks", description: "We organise industrial visits, seminars, guest lectures, and industrial talks every week, which help our young minds build new connections and clarity in launching their businesses." },
    { id: 4, icon: "https://cdn.kalingauniversity.ac.in/kif/Trainings+%26+Workshops.svg", title: "Trainings & Workshops", description: "To develop an entrepreneurial spirit among young students, we organise various hands-on training programs where they learn to build a plan, product, learn selling and marketing tactics, and lead like a true leader. " },
    { id: 5, icon: "https://cdn.kalingauniversity.ac.in/kif/Fundraising.svg", title: "Fundraising", description: "At Kalinga, you’ll not just learn to raise money but also to pitch ideas with power and purpose in our fundraising master class sessions. " },
    { id: 6, icon: "https://cdn.kalingauniversity.ac.in/kif/Business+Plan+Development.svg", title: "Business Plan Development", description: "We will guide you in building a strategic business plan from the idea stage to the launch stage, helping you grow the right way." },
  ];

  const centres = [
    { id: 1, name: "Siyaa Organics", title: "", image: "https://cdn.kalingauniversity.ac.in/kif/Siyaa+Organics.webp" },
    { id: 2, name: "Shree Sudarshan Drone", title: "", image: "https://cdn.kalingauniversity.ac.in/kif/Shree+Sudarshan+Drone.webp" },
    { id: 3, name: "SQ7 Communications Pvt.Ltd.", title: "", image: "https://cdn.kalingauniversity.ac.in/kif/SQ7+Communications+Pvt.+Ltd.webp" },
    { id: 4, name: "Insight Catalyst India Pvt.Ltd.", title: "", image: "https://cdn.kalingauniversity.ac.in/kif/Insight+Catalyst+India+Pvt+Ltd.webp" },
    { id: 5, name: "Nyson AI Solutions", title: "", image: "https://cdn.kalingauniversity.ac.in/kif/Nyson+AI+Solutions.webp" },
    { id: 6, name: "Master G Academy NIIRA Educom", title: "", image: "https://cdn.kalingauniversity.ac.in/kif/Master+G+Academy+NIIRA+Educom.webp" },
    { id: 7, name: "Graeon.ai", title: "", image: "https://cdn.kalingauniversity.ac.in/kif/Graeon.ai.webp" },
  ];

  const activities = [
    { id: 1, imageSrc: "https://cdn.kalingauniversity.ac.in/kif/image-1.png", imageAlt: " Events and Activities", title: "Startup Day Celebration 16th January 2025", buttonText: "Read More", date: "August 25 - 2025" },
    { id: 2, imageSrc: "https://cdn.kalingauniversity.ac.in/kif/image-2.png", imageAlt: " Events and Activities", title: "Visit by Dr. Laxmikant Dwivedi, President, Sanskar Bharti Chhattisgarh", buttonText: "Read More", date: "August 25 - 2025" },
    { id: 3, imageSrc: "https://cdn.kalingauniversity.ac.in/kif/image-3.png", imageAlt: " Events and Activities", title: "FDP Organised by AICTE & the Ministry of Education’s Innovation Cell", buttonText: "Read More", date: "August 25 - 2025" },
    { id: 4, imageSrc: "https://cdn.kalingauniversity.ac.in/kif/chart+(18).webp", imageAlt: " Events and Activities", title: "Evaluation of the Screening Session of CSVTU for MSME Ideathon", buttonText: "Read More", date: "August 25 - 2025" },
    { id: 5, imageSrc: "https://cdn.kalingauniversity.ac.in/kif/chart+(21).webp", imageAlt: " Events and Activities", title: "Kalinga Incubation Stall at SEML Establishment Day", buttonText: "Read More", date: "August 25 - 2025" },
    { id: 6, imageSrc: "https://cdn.kalingauniversity.ac.in/kif/chart+(19).webp", imageAlt: " Events and Activities", title: "Field visit to Incubation Centre Under IIC Activity @ NIT Raipur", buttonText: "Read More", date: "August 25 - 2025" },
    { id: 7, imageSrc: "https://cdn.kalingauniversity.ac.in/kif/chart+(20).webp", imageAlt: " Events and Activities", title: "TOT Program on Entrepreneur Development organised with CSIDC & EDII, Gandhi Nagar & CSIDC C.G", buttonText: "Read More", date: "August 25 - 2025" },
  ];

  const kifAdditionalContent = [
    "Our incubation managers and support members transform their raw ideas into real ventures. With expert guidance, research-related infrastructure, pitch trainings, workshops, guest lectures, industrial visits, and presentation trainings, our incubation centre will guide you at every stage of your startup journey. In line with the Startup India Policy and the Chhattisgarh State Startup & Incubation Policy, KIF ensures that its incubation model is closely aligned with both national and regional priorities. Through industrial insights, networking opportunities, and seed funding support, KIF will fast-track your entrepreneurial journey. Whether you are building a new app or solving a real-world problem, it will provide you with an environment where your innovative ideas will be executed in the right direction.",
  ];

  const galleryImages = [
    { id: 1, src: "https://cdn.kalingauniversity.ac.in/kif/k1.jpg", alt: "KIF Gallery Image 1" },
    { id: 2, src: "https://cdn.kalingauniversity.ac.in/kif/k2.jpg", alt: "KIF Gallery Image 2" },
    { id: 3, src: "https://cdn.kalingauniversity.ac.in/kif/k3.jpg", alt: "KIF Gallery Image 3" },
    { id: 4, src: "https://cdn.kalingauniversity.ac.in/kif/k4.jpg", alt: "KIF Gallery Image 4" },
    { id: 5, src: "https://cdn.kalingauniversity.ac.in/kif/k5.jpg", alt: "KIF Gallery Image 5" },
    { id: 6, src: "https://cdn.kalingauniversity.ac.in/kif/k6.jpg", alt: "KIF Gallery Image 6" },
    { id: 7, src: "https://cdn.kalingauniversity.ac.in/kif/k7.jpg", alt: "KIF Gallery Image 7" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Kalinga Incubation Foundation (KIF)",
    "description": "Kalinga Incubation Foundation (KIF) is a leading startup incubation centre at Kalinga University, providing resources and mentorship for entrepreneurs.",
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
      <KIFClient
        visionMissionData={visionMissionData}
        boxItems={boxItems}
        boxItems1={boxItems1}
        testimonials={testimonials}
        links={links}
        kifSteps={kifSteps}
        centres={centres}
        activities={activities}
        galleryImages={galleryImages}
        kifAdditionalContent={kifAdditionalContent}
      />
    </>
  );
}