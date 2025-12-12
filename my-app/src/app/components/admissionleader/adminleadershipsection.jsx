"use client";

import Image from "next/image";

const leadershipData = [
  {
    id: 1,
    name: "Dr. Rajeev Kumar",
    title: "Chairmhdhdan",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=400&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Dr. Sandeep Arora",
    title: "Chancellor",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Mr. Sajjan Singh",
    title: "Pro-Chancellor",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Dr. R. Shridhar",
    title: "Vice-Chancellor",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=400&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Dr. Byju John",
    title: "Vice-Chancellor",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "Dr. Sandeep Gandhi",
    title: "Registrar",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=400&fit=crop&crop=face",
  },
];

const LeadershipCard = ({ leader }) => {
  return (
    <div className="relative bg-[#FFEBD0] rounded-[10px] overflow-hidden group w-full max-w-[332px] min-h-[350px] sm:min-h-[386px] mx-auto mt-8 ">
      {/* IMAGE */}
      <div className="relative w-full h-[220px] sm:h-[240px] md:h-[260px] flex items-center justify-center pt-4 mt-1">
        <Image
          src={leader.image}
          width={300}
          height={400}
          alt={leader.name}
          className="w-[85%] h-[180px] sm:h-[210px] md:h-[240px] object-cover rounded-[7px]"
        />
      </div>

      {/* CONTENT */}
      <div className="relative px-4 pb-6 mt-4 ml-2">
        <h3 className="font-medium text-[#191919] text-[18px] sm:text-[22px] md:text-[24px] leading-tight mb-1 font-stix">
          {leader.name}
        </h3>

        <p className="text-[#4D4C4C] text-[14px] sm:text-[15px] md:text-[17px] font-plus-jakarta-sans font-medium">
          {leader.title}
        </p>

        {/* BADGE */}
        <div className="mt-[-38px] flex justify-end mr-2">
          <button
            type="button"
            className="inline-flex h-8 w-8 sm:h-9 sm:w-10 items-center justify-center rounded-[7px] bg-[#9e2f21] text-white transition hover:bg-[#7f2419]"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 sm:w-3.5 sm:h-3.5"
            >
              <path
                d="M0.468827 12.8047C0.1771 12.513 0.17711 12.0399 0.468827 11.7482L10.4733 1.74375H2.40646C1.99408 1.7436 1.65931 1.40902 1.65931 0.996596C1.65932 0.584181 1.99408 0.24959 2.40646 0.249438L12.2763 0.250128C12.6888 0.250075 13.0228 0.584059 13.0227 0.996596L13.0234 0.997286V10.8664C13.0234 11.2789 12.6888 11.6136 12.2763 11.6136C11.8638 11.6134 11.5292 11.2788 11.5291 10.8664L11.5298 3.4038V2.80027L1.52534 12.8047C1.23371 13.0964 0.760573 13.0962 0.468827 12.8047Z"
                fill="white"
                stroke="#972B28"
                strokeWidth="0.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const AdminLeadershipSection = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-normal text-black tracking-wide font-stix">
            Administration & Leadership
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {leadershipData.map((leader) => (
            <LeadershipCard key={leader.id} leader={leader} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminLeadershipSection;
