'use client'

import Image from "next/image"

export default function OpenPositions() {

  const positions = [
    {
      title: "Teaching Positions",
      description:
        "Join our team of distinguished faculty members committed to academic excellence and innovation. We seek educators who inspire learning, foster research, and shape the leaders of tomorrow."
    },
    {
      title: "Non–Teaching Positions",
      description:
        "Be a part of Kalinga University’s dynamic administrative and operational teams. We value professionals who bring expertise, efficiency, and integrity to support our academic mission."
    },{
      title: "Internships & Training",
      description:
        "Kickstart your career with hands-on experience in a vibrant academic environment. Our internship and training programs provide practical exposure, mentorship, and real-world learning opportunities."
    }
  ];

  return (
    <section className="w-full max-w-[1249px] mx-auto bg-[#0D3B66] py-16 px-4 rounded-2xl sm:px-6 lg:px-8">

      <div className="max-w-6xl mx-auto text-center mb-12">
        <h3 className="text-[#FEC071] text-xl sm:text-[25px] font-light mb-4">Open Positions</h3>
        <h2 className="text-white text-3xl sm:text-[50px] font-extralight">
          Discover opportunities that match your passion and expertise.
        </h2>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        {positions.map((position, index) => (
          <div key={index} className="bg-white rounded-[15px] p-6 sm:p-8 shadow-lg">
            
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              
              <div className="flex-1">
                <h3 className="text-[#972B28] text-2xl sm:text-[25px] font-semibold mb-4">
                  {position.title}
                </h3>
                <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed max-w-[650px]">
                  {position.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">

               <button className="group bg-[#F58220] hover:bg-white hover:text-[#c66007] h-[45px] px-2 rounded-xl shadow-lg text-white font-semibold transition-all flex items-center justify-between"><p className="px-3">Check Eligibility</p><span className="group bg-white group-hover:bg-[#ffffff] rounded-lg p-1 px-2 flex items-center"><svg width="25" height="25" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4V10" stroke="#F58220" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg></span></button>

                <button className="group bg-[#C7362F] hover:bg-white hover:text-[#C7362F] h-[45px] px-2 rounded-xl shadow-lg text-white font-semibold transition-all flex items-center justify-between"><p className="px-3">Apply Now</p><span className="group bg-white group-hover:bg-[#ffffff] rounded-lg p-1 px-2 flex items-center"><svg width="25" height="25" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4V10" stroke="#C7362F" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg></span></button>

              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
