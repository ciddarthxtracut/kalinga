import ChairsClient from "./ChairsClient";

export const metadata = {
    title: "Chairs and Their Activities | Academic Leadership | Kalinga University",
    description: "Discover the various Academic Chairs at Kalinga University and their diverse activities. Promoting scholarly research, academic discourse, and leadership in specialized fields.",
    keywords: "Academic Chairs Kalinga University, scholarly research Raipur, academic leadership Chhattisgarh, university discourse India",
    alternates: {
        canonical: "https://kalingauniversity.ac.in/chairs-and-their-activities",
    },
};

export default function ChairsPage() {
    const chairsData = [
        { slNo: 1, chair: "Shaheed Veer Narayan Singh Chair", inCharge: "Dr. Ajay Shukla" },
        { slNo: 2, chair: "Amartya Sen Chair", inCharge: "Dr. Chandra Bhooshan Singh" },
        { slNo: 3, chair: "Weng Ming Hui Chair", inCharge: "Dr. Kali doss" },
    ];

    const activitiesData = [
        {
            slNo: 1,
            title: "Role of Industrial Sector in Viksit Bharat",
            coordinator: "Dr. Chandra Bhooshan Singh",
            date: "31-01-2025",
            time: "2:30 P.M. to 03:30 P.M.",
            type: "Guest Lecture",
            venue: "Kalinga University, Naya Raipur",
            objective: "To enable participants understand the role of the industrial sector...",
            outcome: "Developed an in-depth understanding of the industrial sector’s role in Viksit Bharat..."
        }
    ];

    const tableSections = [
        {
            id: 1,
            title: "Chairs",
            data: chairsData,
            columns: [
                { key: "slNo", label: "S.No.", width: "w-16" },
                { key: "chair", label: "Chair", width: "w-1/2" },
                { key: "inCharge", label: "In-charge", width: "w-1/3" },
            ]
        },
        {
            id: 2,
            title: "Details & Activities",
            answer: `
                <div class="space-y-4">
                  <h4 class="font-bold text-lg">Amartya Sen Chair</h4>
                  <p><strong>About the Chair -</strong> In collaboration with Hira Group...</p>
                </div>
            `
        },
        {
            id: 3,
            title: "Activities",
            data: activitiesData,
            columns: [
                { key: "slNo", label: "S.No", width: "w-12" },
                { key: "title", label: "Title of Program", width: "min-w-[200px]" },
                { key: "coordinator", label: "Faculty Coordinator", width: "min-w-[150px]" },
                { key: "date", label: "Date of Event", width: "min-w-[100px]" },
                { key: "time", label: "Time of Event", width: "min-w-[150px]" },
                { key: "type", label: "Event Type", width: "min-w-[120px]" },
                { key: "venue", label: "Venue", width: "min-w-[150px]" },
                { key: "objective", label: "Objective", width: "min-w-[300px]" },
                { key: "outcome", label: "Program Outcome", width: "min-w-[300px]" },
            ]
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Chairs and Their Activities - Kalinga University",
        "description": "Scholarly chairs advancing research and knowledge in specialized fields.",
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
                { "@type": "ListItem", "position": 2, "name": "Chair Activities", "item": "https://kalingauniversity.ac.in/chairs-and-their-activities" }
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ChairsClient
                chairsData={chairsData}
                activitiesData={activitiesData}
                tableSections={tableSections}
            />
        </>
    );
}
