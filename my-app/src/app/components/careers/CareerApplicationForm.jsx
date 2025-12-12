'use client'

import { useState, useRef, useLayoutEffect, useEffect } from "react"

export default function CareerApplicationForm() {

  const [activeTab, setActiveTab] = useState("personal")
  const tabRefs = useRef({})
  const tabsContainerRef = useRef(null)
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, x: 0 })

  const tabs = [
    { id: "personal", label: "Personal Information" },
    { id: "academic", label: "Academic Details" },
    { id: "position", label: "Position Details" },
    { id: "experience", label: "Professional Experience" },
    { id: "documents", label: "Upload Documents" }
  ]

  const updateUnderline = () => {
    const container = tabsContainerRef.current
    const currentEl = tabRefs.current[activeTab]

    if (!container || !currentEl) return

    const containerRect = container.getBoundingClientRect()
    const elRect = currentEl.getBoundingClientRect()

    setUnderlineStyle({
      width: Math.round(elRect.width),
      x: Math.round(elRect.left - containerRect.left + container.scrollLeft)
    })
  }

  useLayoutEffect(() => { updateUnderline() }, [activeTab])

  useEffect(() => {
    const ro = new ResizeObserver(updateUnderline)
    const c = tabsContainerRef.current
    if (c) ro.observe(c)
    return () => ro.disconnect()
  }, [])

  return (
    <section className="w-full max-w-[1249px] mx-auto bg-[#0D3B66] py-20 px-4 sm:px-6 lg:px-8 rounded-xl">
      
      <h2 className="text-white text-center text-3xl sm:text-[40px] font-light">
      Career Application Form
      </h2>

      <p className="text-center text-white/70 max-w-3xl mx-auto mt-4 text-sm sm:text-base">
      Join a dynamic community of educators, researchers, and professionals shaping the future of learning at Kalinga University.
 Please fill in your details below to apply for a suitable position. Our HR team will review your application and contact you if your profile matches our current openings.

      </p>

      {/* TABS */}
      <div className="relative mt-10 pb-2 border-b border-white/30">
        
        <div
          ref={tabsContainerRef}
          className="flex gap-10 justify-center overflow-x-auto no-scrollbar px-2"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              ref={(el) => (tabRefs.current[tab.id] = el)}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 text-sm sm:text-base ${
                activeTab === tab.id ? "text-[#E5A63B] font-medium" : "text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <span
          className="absolute bottom-0 h-[3px] bg-[#E5A63B] transition-all duration-300"
          style={{
            width: underlineStyle.width,
            transform: `translateX(${underlineStyle.x}px)`
          }}
        />

      </div>

      {/* FORM */}
      <div className="mt-10 p-10 rounded-xl">
        
        <div className="grid sm:grid-cols-2 gap-10">

          <div>
            <label className="text-white text-xl">Full Name</label>
            <input className="w-full mt-2 bg-transparent border-b border-white/40 text-white py-2 focus:border-[#E5A63B]" />
          </div>

          <div>
            <label className="text-white text-xl">Email Address</label>
            <input className="w-full mt-2 bg-transparent border-b border-white/40 text-white py-2 focus:border-[#E5A63B]" />
          </div>

          <div>
            <label className="text-white text-xl">Mobile Number</label>
            <input className="w-full mt-2 bg-transparent border-b border-white/40 text-white py-2 focus:border-[#E5A63B]" />
          </div>

          <div>
            <label className="text-white text-xl">Date of Birth</label>
            <input type="date" className="w-full mt-2 bg-transparent border-b border-white/40 text-white py-2 focus:border-[#E5A63B]" />
          </div>

          <div>
            <label className="text-white text-xl">Gender</label>
            <select className="w-full mt-2 bg-transparent border-b border-white/40 text-white py-2 focus:border-[#E5A63B]">
              <option className="text-black">Select</option>
              <option className="text-black">Male</option>
              <option className="text-black">Female</option>
            </select>
          </div>

          <div>
            <label className="text-white text-xl">Nationality</label>
            <input className="w-full mt-2 bg-transparent border-b border-white/40 text-white py-2 focus:border-[#E5A63B]" />
          </div>

        </div>

        <div className="flex justify-end mt-12">
          <button className="bg-[#C7362F] text-white px-10 py-3 rounded-md text-sm hover:bg-[#a32a25]">
            Next
          </button>
        </div>

      </div>

    </section>
  );
}
