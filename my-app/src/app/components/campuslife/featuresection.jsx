"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const imageSets = [
    ["./student.jpg", "/img2.jpg", "/img3.jpg"],
    ["/img4.jpg", "/img5.jpg", "/img6.jpg"],
    ["./student.jpg", "/img2.jpg", "/img3.jpg"],
    ["/img4.jpg", "/img5.jpg", "/img6.jpg"],
    ["./student.jpg", "/img2.jpg", "/img3.jpg"],
    ["/img4.jpg", "/img5.jpg", "/img6.jpg"],
  ];

  const [indexes, setIndexes] = useState([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const t = setInterval(() => {
      setIndexes((prev) =>
        prev.map((val, i) => (val + 1) % imageSets[i].length)
      );
    }, 3000);
    return () => clearInterval(t);
  }, []);

  const SandalButton = (
    <button className="group bg-[var(--button-red)] h-[45px] px-2 rounded-xl shadow-lg text-white font-semibold transition-all flex items-center justify-between">
      <p className="px-3">Apply Now</p>
      <span className="bg-white rounded-lg p-1 px-2 flex items-center">
        <svg width="25" height="25" viewBox="0 0 16 16" fill="none">
          <path
            d="M4 12L12 4M12 4H6M12 4V10"
            stroke="var(--button-red)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );

  const RedButton = (
    <button className="group bg-[var(--background)] text-[var(--button-red)] h-[45px] px-2 ml-[100px] rounded-xl shadow-lg font-semibold transition-all flex items-center justify-between">
      <p className="px-3">Apply Now</p>
      <span className="bg-[var(--button-red)] rounded-lg p-1 px-2 flex items-center">
        <svg width="25" height="25" viewBox="0 0 16 16" fill="none">
          <path
            d="M4 12L12 4M12 4H6M12 4V10"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-20 flex flex-col gap-32">

      {[
        { type: "sandal", title: "Academic Infrastructure", desc: "Kalinga University offers state-of-the-art academic infrastructure with smart classrooms, digital learning tools, and well-equipped labs that promote innovation and practical learning." },
        { type: "red", title: "Transportation", desc: "Our fully furnished hostels for boys and girls provide a safe and comfortable environment with all essential amenities. We ensure our residents enjoy a homely atmosphere with round-the-clock security." },
        { type: "sandal", title: "Mess", desc: "In collaboration with Sodexo Food Solutions India Pvt. Ltd., our mess facilities for boys and girls serve four nutritious, hygienic meals daily — breakfast, lunch, high tea, and dinner." },
        { type: "red", title: "Canteen & Cafeteria", desc: "Partnered with Sodexo Food Solutions India Pvt. Ltd., our canteen and cafés serve a variety of delicious meals, snacks, and beverages, giving students multiple dining choices at affordable prices." },
        { type: "sandal", title: "Transportation", desc: "With 30+ buses and 4-wheelers, our transport service offers convenient, safe, and affordable pick-up and drop facilities across Raipur, covering up to 70 km each way." },
        { type: "red", title: "Hostel & Facilities", desc: "Lorem ipsum…" },
      ].map((sec, index) => (
        
        <div
          key={index}
          className="relative w-full min-h-[380px] 
                     md:min-h-[380px] 
                     flex flex-col md:block"
        >

          {sec.type === "sandal" ? (
            // IMAGE RIGHT
            <div
              className="
                absolute md:bottom-[150px] md:left-[550px] md:w-[40%]
                w-full static md:absolute 
              "
            >
              <div className="relative h-[200px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg w-full z-10">
                <img
                  src={imageSets[index][indexes[index]]}
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>

              <div className="mt-3 w-full flex justify-center gap-2 z-20">
                {imageSets[index].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full ${
                      i === indexes[index]
                        ? "bg-[#F2A33A] w-12"
                        : "bg-gray-300 w-4"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          ) : (
            // IMAGE LEFT
            <div
              className="
                absolute md:-top-[60px] md:left-[100px] md:w-[40%] z-20
                w-full static md:absolute
              "
            >
              <div className="relative h-[200px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg w-full">
                <img
                  src={imageSets[index][indexes[index]]}
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>

              <div className="mt-3 w-full flex justify-center gap-2">
                {imageSets[index].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full ${
                      i === indexes[index]
                        ? "bg-[#F2A33A] w-12"
                        : "bg-gray-300 w-4"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          )}

          {/* CONTENT BOXES */}
          {sec.type === "sandal" ? (
            <div
              className="
              bg-[#F9E7D1] rounded-2xl p-8 shadow-md w-full md:w-[45%] 
              min-h-[280px] md:min-h-[280px]
              md:left-[180px] 
              mt-6 md:mt-0 relative
            "
            >
              <h1 className="text-2xl font-regular mt-[40px] mb-3">{sec.title}</h1>
              <p className="text-sm text-black/70 leading-relaxed mb-4 w-[338px]">{sec.desc}</p>
              {SandalButton}
            </div>
          ) : (
            <div
              className="
              bg-[#8D2221] text-white rounded-2xl p-8 shadow-md 
              w-full md:w-[45%] min-h-[280px]
              md:absolute md:right-[180px] md:top-[80px]
              mt-6 md:mt-0
            "
            >
              <h2 className="text-2xl font-regular mb-3 mt-8 md:pl-[100px]">
                {sec.title}
              </h2>
              <p className="text-sm leading-relaxed mb-4 md:pl-[100px]">
                {sec.desc}
              </p>
              {RedButton}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
