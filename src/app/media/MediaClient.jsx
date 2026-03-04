"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "../components/general/SectionHeading";
import GlobalArrowButton from "../components/general/global-arrow_button";
import CenterOfExcellence from "../components/about/center_of_excellence";

export default function MediaClient({ mediaImages, excellenceImages }) {
    const [showAll, setShowAll] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const visibleImages = showAll ? mediaImages : mediaImages.slice(0, 9);

    const openImageModal = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    // Close modal on ESC key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                closeImageModal();
            }
        };
        if (selectedImage) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden"; // Prevent background scrolling
        }
        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [selectedImage]);

    return (
        <>
            <SectionHeading
                title="Media Coverage"
                titleClassName="text-center text-2xl md:text-5xl font-stix mt-20"
            />

            {/* -------- Media Grid -------- */}
            <section className="max-w-7xl mx-auto px-4 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {visibleImages.map((img, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 bg-white cursor-pointer"
                            onClick={() => openImageModal(img)}
                        >
                            <img
                                src={img}
                                alt={`media-${index}`}
                                className="w-full h-[300px] object-cover"
                            />
                        </div>
                    ))}
                </div>

                {!showAll && (
                    <div className="flex justify-center mt-12">
                        <GlobalArrowButton onClick={() => setShowAll(true)}>
                            Read More
                        </GlobalArrowButton>
                    </div>
                )}
            </section>

            {/* -------- Center Of Excellence Slider (Awards) -------- */}
            <CenterOfExcellence
                centres={excellenceImages}
                title="Awards"
                description={false}
                nameOnly={false}
            />

            {/* -------- Image Modal Popup -------- */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
                    onClick={closeImageModal}
                >
                    <div className="relative max-w-7xl max-h-[80vh] w-full h-full flex items-center justify-center">
                        <button
                            onClick={closeImageModal}
                            className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
                            aria-label="Close modal"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 6L6 18" />
                                <path d="M6 6l12 12" />
                            </svg>
                        </button>

                        <img
                            src={selectedImage}
                            alt="Full size media"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
