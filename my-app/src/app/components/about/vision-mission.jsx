"use client";
import Image from "next/image";
import { useState } from "react";

// ReadMoreParagraphs component
function ReadMoreParagraphs({ paragraphs }) {
  const [showAll, setShowAll] = useState(false);
  
  return (
    <div className="space-y-3">
      <p className="text-[var(--foreground)] leading-relaxed text-sm">
        {paragraphs[0]}
        {!showAll && paragraphs.length > 1 && (
          <button
            type="button"
            className="text-[var(--foreground)] !text-sm font-semibold underline underline-offset-4 hover:text-[var(--button-red)] transition-colors ml-1"
            onClick={() => setShowAll(!showAll)}
          >
            {" Read More"}
          </button>
        )}
      </p>
      {showAll && paragraphs.length > 1 && (
        <p className="text-[var(--foreground)] leading-relaxed text-sm">
          {paragraphs[1]}
          <button
            type="button"
            className="text-[var(--foreground)] !text-sm font-semibold underline underline-offset-4 hover:text-[var(--button-red)] transition-colors ml-1"
            onClick={() => setShowAll(!showAll)}
          >
            {" Show Less"}
          </button>
        </p>
      )}
    </div>
  );
}

const defaultVision = `
  Kalinga University aims to be an outstanding institution for Talent Development and Knowledge Creation for a vibrant and inclusive society.
`.trim();

const defaultMission = [
  'The primary purpose of Kalinga University is to become a global education hub in which faculty, staff, and students can discover, examine critically, preserve, and transmit the knowledge, wisdom, and values that will ensure the survival of future generations and improve the quality of life for all.',
  'The University seeks to help students develop an understanding and appreciation for the complex cultural and physical worlds in which they live and to realise their highest potential of intellectual, physical, and human development.',
]


export default function VisionMission({
  data,
  visionTitle = "Vision",
  missionTitle = "Mission",
  visionText = defaultVision,
  missionText = defaultMission,
  imageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/person-standing-1.png",
  imageAlt = "Vision and Mission",
  showImage = true,
  className = "",
}) {
  // Support data prop (array of objects) or individual props
  const entries = Array.isArray(data) && data.length > 0 
    ? data 
    : [{
        visionTitle,
        missionTitle,
        visionText,
        missionText,
        imageSrc,
        imageAlt,
        showImage,
        className,
      }];

  return (
    <>
      {entries.map((entry, idx) => {
        const {
          visionTitle: vt = "Vision",
          missionTitle: mt = "Mission",
          visionText: vtxt = defaultVision,
          missionText: mtxt = defaultMission,
          imageSrc: imgSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/student-img-2.png",
          imageAlt: imgAlt = "Vision and Mission",
          showImage: showImg = true,
          className: cls = "",
        } = entry;

        const gridCols = showImg ? "lg:grid-cols-12" : "lg:grid-cols-2";
        const visionCol = showImg
          ? "order-1 lg:order-1 lg:col-span-5"
          : "order-1 lg:order-1";
        const missionCol = showImg
          ? "order-2 lg:order-3 lg:col-span-5"
          : "order-2 lg:order-2 pb-5";

        // Helper function to render text as paragraphs with Read More
        const renderText = (text) => {
          // Convert to array if it's a string
          const textArray = Array.isArray(text) ? text : [text];
          
          // If only one paragraph, show it directly
          if (textArray.length === 1) {
            return <p className="text-[var(--foreground)] leading-relaxed text-sm">{textArray[0]}</p>;
          }
          
          // For multiple paragraphs, use Read More functionality
          return <ReadMoreParagraphs paragraphs={textArray} />;
        };

        return (
          <section key={idx} className={`pt-16 bg-white px-2 ${cls}`}>
            <div className="container mx-auto">
              <div className={`grid grid-cols-1 ${gridCols} gap-8 lg:gap-6 items-center`}>
                {/* Left - Vision Box */}
                <div className={`${visionCol} flex`}>
                  <div className="bg-[var(--dark-skin)] p-[25px] flex justify-center items-center self-center rounded-2xl shadow-lg transform-3d-slant-mirror w-full min-h-[280px] flex flex-col md:mb-10">
                    
                    <div className="flex-1 flex flex-col items-center justify-center w-full">
                    <h3 className="font-stix text-[var(--foreground)] mb-4 text-center !text-[35px]">
                      {vt}
                    </h3>
                      <div className="w-full">
                        {renderText(vtxt)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center - Person Image */}
                {showImg && (
                  <div className="order-3 lg:order-2 lg:col-span-2 flex justify-center items-end">
                    <div className="relative w-full max-w-[220px]">
                      <Image
                        src={imgSrc}
                        alt={imgAlt}
                        width={250}
                        height={550}
                        className="w-full h-auto object-contain"
                        priority
                      />
                    </div>
                  </div>
                )}

                {/* Right - Mission Box */}
                <div className={`${missionCol} flex`}>
                  <div className="bg-[var(--dark-skin)] p-[25px] flex justify-center items-center self-center rounded-2xl shadow-lg transform-3d-slant w-full min-h-[280px] flex flex-col md:mb-10">
                    <div className="flex-1 flex flex-col items-center justify-center w-full">
                      <h3 className="font-stix text-[var(--foreground)] mb-4 text-center !text-[35px]">
                        {mt}
                      </h3>
                      <div className="w-full">
                        {renderText(mtxt)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

