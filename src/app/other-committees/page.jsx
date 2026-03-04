import OtherCommitteesClient from "./OtherCommitteesClient";

export const metadata = {
  title: "Statutory Committees & Grievance Redressal | Kalinga University",
  description: "Explore the various statutory committees at Kalinga University, including the Internal Complaint Committee, Women Cell, and SC/ST Cell, ensuring a safe academic environment.",
  keywords: "University committees Raipur, Grievance redressal Chhattisgarh, Women cell university India, SC ST cell academic governance",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/other-committees",
  },
};

export default function OtherCommitteesPage() {
  const internalComplaintCommittee = {
    id: 1,
    title: "Internal Complaint Committee",
    columns: [
      { key: "slNo", label: "S.No.", width: "w-16" },
      { key: "name", label: "Name Of Member", width: "flex-1" },
      { key: "position", label: "", width: "flex-1" },
    ],
    data: [
      { slNo: "1", name: "Dr. Rahul Mishra", position: "Dean, Academic Affairs - Chairperson of the Committee" },
      { slNo: "2", name: "Lt. Vibha Chandrakar", position: "In-Charge Dean, Student Welfare" },
      { slNo: "3", name: "Mrs. Saloni Tyagi", position: "In-Charge HoD, Faculty of Law" },
      { slNo: "4", name: "Dr. Shilpi Shrivastava", position: "HoD, Chemistry" },
      { slNo: "5", name: "Mr. Manish Singh", position: "Chief Warden" },
      { slNo: "6", name: "Dr. A. Vijayanand", position: "Chief Proctor" },
      { slNo: "7", name: "Dr. Naresh Kumar Khunte", position: "Assistant Professor, Faculty of Technology" },
      { slNo: "8", name: "Dr. Lincy Roy", position: "Head HR" },
    ],
  };

  const grievanceRedressalCommittee = {
    id: 2,
    title: "Grievance Redressal Committee",
    columns: [
      { key: "slNo", label: "S.No", width: "w-16" },
      { key: "name", label: "Name of Member", width: "flex-1" },
      { key: "position", label: "", width: "flex-1" },
    ],
    data: [
      { slNo: "1", name: "Dr. Rahul Mishra", position: "Dean, Academic Affairs – Chairperson of the Committee" },
      { slNo: "2", name: "Dr. Lincy Roy", position: "Deputy Registrar" },
      { slNo: "3", name: "Dr. C. P. Jawahar", position: "Dean, Faculty of Technology" },
      { slNo: "4", name: "Dr. Shilpi Bhattacharya", position: "Dean, Faculty of Arts & Humanities" },
      { slNo: "5", name: "Dr. A. Vijayanand", position: "Chief Proctor" },
      { slNo: "6", name: "Dr. Shilpi Shrivastava", position: "HoD, Dept. of Chemistry" },
      { slNo: "7", name: "Ms. Mariyam Ahmed", position: "Student Representative" },
      { slNo: "8", name: "Mrs. Shilpi Nishant Tanwani", position: "Academic Officer" },
    ],
  };

  const womenCellCommittee = {
    id: 3,
    title: "Women Cell / Prevention of Sexual Harassment (POSH) Committee",
    columns: [
      { key: "slNo", label: "S.No.", width: "w-16" },
      { key: "name", label: "Name", width: "flex-1" },
      { key: "position", label: "Position", width: "flex-1" },
      { key: "designation", label: "Designation", width: "flex-1" },
    ],
    data: [
      { slNo: "1", name: "Dr. Lincy Roy", position: "Head of the Committee", designation: "Deputy Registrar & Head HR, Administration" },
      { slNo: "2", name: "Dr. A. Vijayanand", position: "Member", designation: "Chief Proctor" },
      { slNo: "3", name: "Ms. Saloni Tyagi", position: "Member", designation: "Assistant Professor, Faculty of Law" },
      { slNo: "4", name: "Ms. Mariyam Ahmed", position: "Member", designation: "Assistant Professor, Faculty of C&M" },
      { slNo: "5", name: "Mrs. Shilpi N. Tanwani", position: "Member", designation: "Academic Officer, Administration" },
      { slNo: "6", name: "Ms. Ankita Nihlani", position: "Member", designation: "Assistant Registrar, Administration" },
      { slNo: "7", name: "Ms. Alishiba Mahanand", position: "Member", designation: "Student Representative from B.Com." },
      { slNo: "8", name: "Ms. Arti Sinha", position: "Member", designation: "Student Representative from B.Ed." },
      { slNo: "9", name: "Dr. Naresh Sharma", position: "Member", designation: "Lawyer" },
    ],
  };

  const scStCell = {
    id: 4,
    title: "SC/ST Cell",
    columns: [
      { key: "slNo", label: "S.No.", width: "w-16" },
      { key: "name", label: "Name", width: "flex-1" },
      { key: "designation", label: "Position", width: "flex-1" },
      { key: "area", label: "Area", width: "w-32" },
    ],
    data: [
      { slNo: "1", name: "Dr. Nuresh Khunte", designation: "Head of the Committee", area: "Faculty" },
      { slNo: "2", name: "Dr. Harsha Patil", designation: "Member", area: "Faculty" },
      { slNo: "3", name: "Mr. Arun Kumar Lahre", designation: "Member", area: "Faculty" },
      { slNo: "4", name: "Mr. Aayush Gondale", designation: "Member", area: "Faculty" },
      { slNo: "5", name: "Mr. Sobharam Sonekar", designation: "Member", area: "Non-Teaching" },
      { slNo: "6", name: "Ms. Nikita Joshi", designation: "Member", area: "Assistant DSW" },
    ],
  };

  const obcCell = {
    id: 5,
    title: "OBC Cell",
    columns: [
      { key: "slNo", label: "S.No.", width: "w-16" },
      { key: "name", label: "Name", width: "flex-1" },
      { key: "designation", label: "Position", width: "flex-1" },
      { key: "area", label: "Area", width: "w-32" },
    ],
    data: [
      { slNo: "1", name: "Mr. Omprakash Dewangan", designation: "Head of the Committee", area: "Faculty" },
      { slNo: "2", name: "Dr. D. M. Sahu", designation: "Member", area: "Faculty" },
      { slNo: "3", name: "Dr. Sanjeev Yadav", designation: "Member", area: "Faculty" },
      { slNo: "4", name: "Mr. Gaurav Tamrakar", designation: "Member", area: "Faculty" },
      { slNo: "5", name: "Mr. Rajesh Vishwakarma", designation: "Member", area: "Non-Teaching" },
      { slNo: "6", name: "Ms. Anita Sahu", designation: "Member", area: "Non-Teaching" },
    ],
  };

  const minorityCell = {
    id: 6,
    title: "Minority Cell",
    columns: [
      { key: "slNo", label: "S.No.", width: "w-16" },
      { key: "name", label: "Name", width: "flex-1" },
      { key: "designation", label: "Position", width: "flex-1" },
      { key: "area", label: "Area", width: "w-32" },
    ],
    data: [
      { slNo: "1", name: "Dr. Mohd Nasir", designation: "Head of the Committee", area: "Head of Library" },
      { slNo: "2", name: "Dr. Dhananjay Jain", designation: "Member", area: "Faculty" },
      { slNo: "3", name: "Dr. Manoj Matthew", designation: "Member", area: "Faculty" },
      { slNo: "4", name: "Mrs. Sarvaree Bano", designation: "Member", area: "Faculty" },
      { slNo: "5", name: "Ms. Harleen Kaur", designation: "Member", area: "Faculty" },
      { slNo: "6", name: "Mrs. Nausheen", designation: "Member", area: "Non-Teaching" },
      { slNo: "7", name: "Mr. Thasbin Basheer", designation: "Member", area: "Non-Teaching" },
    ],
  };

  const studentCouncil = {
    id: 7,
    title: "Student Council",
    columns: [
      { key: "slNo", label: "S.No.", width: "w-16" },
      { key: "post", label: "Post", width: "w-32" },
      { key: "name", label: "Name of Elected Candidate", width: "flex-1" },
      { key: "fathersName", label: "Father's Name", width: "flex-1" },
      { key: "course", label: "Course", width: "w-32" },
      { key: "yearSem", label: "Year/ Sem", width: "w-24" },
      { key: "remarks", label: "Remarks", width: "w-32" },
    ],
    data: [
      { slNo: "1", post: "President", name: "Ms. Mariyam Ahmed", fathersName: "Mr. Ainuddin Ahmed", course: "Ph.D.", yearSem: "2nd Yr.", remarks: "-" },
      { slNo: "2", post: "Vice President", name: "Ms. Lavanya Bilesiya", fathersName: "Mr. Prakash Bilesiya", course: "MBA", yearSem: "3rd Sem", remarks: "-" },
      { slNo: "3", post: "Secretory", name: "Mr. Surendra Sahu", fathersName: "Mr. Joidha Ram", course: "B.P.Ed.", yearSem: "3rd Sem", remarks: "-" },
      { slNo: "4", post: "Joint Secretary", name: "Ms. Muskan Singh", fathersName: "Mr. Ashok Singh", course: "MBA", yearSem: "3rd Sem", remarks: "Reserved for Girl Student" },
    ],
  };

  const tableSections = [
    internalComplaintCommittee,
    grievanceRedressalCommittee,
    womenCellCommittee,
    scStCell,
    obcCell,
    minorityCell,
    studentCouncil,
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "University Committees - Kalinga University",
    "description": "Details about various academic and administrative committees and councils at Kalinga University.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Committees", "item": "https://kalingauniversity.ac.in/other-committees" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OtherCommitteesClient tableSections={tableSections} faqItems={[]} />
    </>
  );
}
