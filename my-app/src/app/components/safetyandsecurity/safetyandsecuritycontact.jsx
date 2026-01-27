import React from "react";
import MentorIntro from "../cif/contact_section";

function Safetyandsecuritycontact() {
    return (
        <div>
            {/* Hide Email + Address rows ONLY for this section */}
            <style>{`
  /* Hide EMAIL row */
  .safety-helpline-card .text-white\\/80 > div:nth-child(1) {
    display: none !important;
  }

  /* Hide ADDRESS row */
  .safety-helpline-card .text-white\\/80 > div:nth-child(3) {
    display: none !important;
  }

  /* ✅ Hide ONLY the default phone icon from MentorCard (extra icon) */
  .safety-helpline-card .text-white\\/80 > div:nth-child(2) > svg {
    display: none !important;
  }
`}</style>


            <MentorIntro
                title="Emergency Helpline Numbers"
                cardClassName="safety-helpline-card"
                mail=""     // keep empty (row hidden by CSS)
                address=""  // keep empty (row hidden by CSS)
                phone={
                    <div className="flex flex-col gap-3">
                        {/* Row 1 */}
                        <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-[var(--dark-orange-red)] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>

                            <span className="text-sm sm:text-base">
                                <strong>Chief Proctor:</strong>{" "}
                                <a href="tel:+917024133412" className="underline hover:text-white">
                                    +91 7024133412
                                </a>
                            </span>
                        </div>

                        {/* Row 2 */}
                        <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-[var(--dark-orange-red)] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>

                            <span className="text-sm sm:text-base">
                                <strong>Warden:</strong>{" "}
                                <a href="tel:9303097013" className="underline hover:text-white">
                                    9303097013
                                </a>
                            </span>
                        </div>

                        {/* Row 3 */}
                        <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-[var(--dark-orange-red)] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>

                            <span className="text-sm sm:text-base">
                                <strong>Supervisor:</strong>{" "}
                                <a href="tel:9303097011" className="underline hover:text-white">
                                    9303097011
                                </a>
                            </span>
                        </div>
                    </div>
                }
            />
        </div>
    );
}

export default Safetyandsecuritycontact;
