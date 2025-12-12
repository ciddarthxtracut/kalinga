"use client";

import Image from "next/image";

export default function Gallery() {
  const images = [
    { id: 1, src: "/student.jpg", alt: "Gallery Image 1" },
    { id: 2, src: "/student.jpg", alt: "Gallery Image 2" },
    { id: 3, src: "/student.jpg", alt: "Gallery Image 3" },
    { id: 4, src: "/student.jpg", alt: "Gallery Image 4" },
  ];
 
  return (
    <section className="w-full max-w-[1254px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="font-stix text-4xl sm:text-[50px] text-black text-center mb-12">
        Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img) => (
          <div
            key={img.id}
            className="relative h-[320px] sm:h-[330px] rounded-lg overflow-hidden group cursor-pointer"
          >
            <div className="w-full h-full relative">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
