'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const logos = ['Infosys','Citi','Microsoft','Adobe','Cognizant','PayPal','Google','Dell']

const Placements = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const placementImages = [
    'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
    'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/about-kalinga.webp',
    'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg'
  ]
  
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % placementImages.length)
  }
  
  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + placementImages.length) % placementImages.length)
  }
  
  const currentImage = placementImages[currentIndex]
  const nextImageUrl = placementImages[(currentIndex + 1) % placementImages.length]
  
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos]
  
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes logoMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .logo-marquee {
          animation: logoMarquee 40s linear infinite;
        }
        .logo-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    <section className="py-8 sm:py-12 md:py-16 bg-white overflow-x-hidden">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-start md:items-end">
          {/* Left: title + stats */}
          <div className="w-full">
            <div className="text-sm sm:text-base md:text-lg lg:text-[25px] text-[var(--button-red)] mb-2 sm:mb-2.5 lg:mb-3 font-plus-jakarta-sans font-medium leading-tight sm:leading-[25px]">
              Placements
            </div>
            <h2 className="font-stix text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[50px] mb-2 sm:mb-3 lg:mb-4 leading-tight text-[var(--foreground)]">
              Lorem ipsum dolor sit amet, consectetur
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-gray-600 max-w-xl mb-4 sm:mb-5 lg:mb-6 font-plus-jakarta-sans leading-relaxed sm:leading-normal lg:leading-[25px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-3 lg:gap-6 text-gray-800">
              <div className="flex-1 w-full sm:w-auto">
                <h3 className="!text-3xl sm:!text-[35px] md:!text-[40px] text-[var(--button-red)] mb-1 sm:mb-2">3300 +</h3>
                <h6 className="text-sm sm:text-base text-[var(--foreground)] font-stix">Students Placed</h6>
              </div>

              <div className="hidden sm:block self-stretch border-r border-gray-500" />

              <div className="flex-1 w-full sm:w-auto">
                <h3 className="!text-3xl sm:!text-[35px] md:!text-[40px] text-[var(--button-red)] mb-1 sm:mb-2">500 +</h3>
                <h6 className="text-sm sm:text-base text-[var(--foreground)] font-stix">Corporate Recruiters</h6>
              </div>

              <div className="hidden sm:block self-stretch border-r border-gray-500" />

              <div className="flex-1 w-full sm:w-auto">
                <h3 className="!text-3xl sm:!text-[35px] md:!text-[40px] text-[var(--button-red)] mb-1 sm:mb-2">1300 +</h3>
                <h6 className="text-sm sm:text-base text-[var(--foreground)] font-stix">Internships Offered</h6>
              </div>
            </div>
          </div>

          {/* Right: image preview card with behind preview */}
          <div className="flex justify-center md:justify-end mr-0 sm:mr-4 md:mr-8 lg:mr-[100px] mt-6 md:mt-0">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] h-[220px] sm:h-[260px] md:h-[300px] lg:h-[350px] xl:h-[380px]">
              {/* Behind preview - orange/yellow card */}
              <div 
                className="absolute overflow-hidden shadow-2xl z-0 hidden md:block"
                style={{
                  top: '20px',
                  right: '-20px',
                  width: '100%',
                  height: '100%',
                  transform: 'rotate(3deg)',
                  transformOrigin: 'center center',
                  borderRadius: '12px',
                  backgroundColor: '#f5c675',
                  transition: 'all 0.3s ease',
                  marginTop: '50px',
                }}
              />
              {/* Behind image preview - next image tilted */}
              <div 
                className="absolute overflow-hidden shadow-2xl z-0 hidden md:block"
                style={{
                  top: '-15px',
                  left: '-15px',
                  width: 'calc(100% + 30px)',
                  height: 'calc(100% + 30px)',
                  transform: 'rotate(-5deg) scale(0.93)',
                  transformOrigin: 'center center',
                  opacity: 0.5,
                  borderRadius: '10px',
                  transition: 'all 0.3s ease',
                  marginTop: '50px',
                }}
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={nextImageUrl} 
                    alt="Next placement preview" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              {/* Front card */}
              <div 
                className="relative overflow-visible shadow-2xl z-10 bg-white w-full h-full mt-4 sm:mt-6 md:mt-8 lg:mt-[50px] rounded-[12px]"
              >
                <div className="absolute inset-0 rounded-[12px] overflow-hidden">
                  <Image 
                    src={currentImage} 
                    alt="Placement showcase" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                {/* nav arrows positioned bottom-center overlaying image */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] sm:bottom-[-10px] md:bottom-[-12px] lg:bottom-[-20px] flex gap-2 sm:gap-3 z-20 pointer-events-auto">
                  <div className="shadow-lg rounded-lg pointer-events-none">
                    <button 
                      type="button"
                      onClick={prevImage}
                      className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] text-white flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer pointer-events-auto relative z-10"
                      aria-label="Previous image"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                  </div>
                  <div className="shadow-lg rounded-lg pointer-events-none">
                    <button 
                      type="button"
                      onClick={nextImage}
                      className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-[var(--button-red)] text-white flex items-center justify-center hover:bg-[#A2A2A2] transition-colors cursor-pointer pointer-events-auto relative z-10"
                      aria-label="Next image"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Logos strip */}
        <div className="mt-6 sm:mt-8 lg:mt-8 px-3 sm:px-4 lg:px-6">
          <div className="bg-[var(--dark-blue)] py-4 sm:py-5 md:py-6 lg:py-8 items-center justify-center overflow-hidden relative w-full h-auto min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:h-[200px] rounded-xl">
            {/* Text stacked above logos */}
            <div className="flex flex-col items-center text-left gap-2 sm:gap-3 md:gap-4 lg:gap-5 w-full">
              <h5
                className="font-plus-jakarta-sans text-sm sm:text-base md:text-lg leading-tight sm:leading-[25px] text-white text-left w-full px-4 sm:px-6 lg:px-8"
              >
                Trusted by 500+ Global Recruiters
              </h5>

              <div className="w-full overflow-hidden relative px-4 sm:px-6 lg:px-8">
                <div className="logo-marquee flex gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 xl:gap-4 py-1 sm:py-2">
                  {duplicatedLogos.map((l, idx) => (
                    <div
                      key={`${l}-${idx}`}
                      className="flex-shrink-0 bg-white rounded-lg px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 shadow-sm text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-medium text-gray-700 flex items-center justify-center w-[60px] h-[45px] sm:w-[70px] sm:h-[50px] md:w-[80px] md:h-[55px] lg:w-[90px] lg:h-[60px] xl:w-[110px] xl:h-[70px]"
                      style={{
                        borderRadius: '10px'
                      }}
                    >
                      {l}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default Placements
