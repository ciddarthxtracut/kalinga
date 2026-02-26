"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import AdmissionCareer from "../components/general/admission_cta";
import PhdGrid from "../components/phd/phd-grid";
import PhdIntro from "../components/phd/phd-intro";
import PhdObjectivesPanel from "../components/phd/phd-objectives";
import ScholarStats from "../components/phd/scholar_stats";
import WhyChoosePhd from "../components/phd/why-phd";
import { useFlipbook } from "../components/general/FlipbookContext";
import FlipbookTrigger from "../components/general/FlipbookTrigger";
import GlobalArrowButton from "../components/general/global-arrow_button";

export default function PhdPage() {
  const pathname = usePathname();
  const { openFlipbook } = useFlipbook();
  const [showResearchPopup, setShowResearchPopup] = useState(false);

  const researchOverviewItems = [
    { id: "r1", text: "Ethics Committee Constitution" },
    { id: "r2", text: "Constitution of the Ethics Board for Maintaining Research Integrity" },
    { id: "r3", text: "Research Integrity & Ethics Policy" },
    { id: "r4", text: "Research Advisory Committee" },
    { id: "r5", text: "Constitution of the Research Advisory Committee and Departmental Research Committee" },
  ];

  const phdResources = [
    { id: 0, text: "Research Overview", isPopup: true },
    // { id: 1, text: "Ethics Committee Constitution", href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Undertaking+(1).pdf" },
    { id: 2, text: "Constitution of the Ethics Board for Maintaining Research Integrity", href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research/5.+CONSTITUTION+OF+ETHICS+BOARD+FOR+MAINTAINING+RESEARCH+INTEGRITY.pdf" },
    { id: 3, text: "Research Integrity & Ethics Policy", href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Undertaking+(1).pdf" },
    // { id: 4, text: "Research Advisory Committee", href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Undertaking+(1).pdf" },
    { id: 5, text: "Constitution of the Research Advisory Committee and Departmental Research Committee", href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Constitution+of+Research+Advisory+Committee.pdf" },
    { id: 6, text: "Ordinance No. 48", href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Ordinance+No.+48+(16.09.2013).pdf" },
    { id: 7, text: "Revised Ordinance No. 48", href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Amended+Ordinance+No.+48+(18.02.2022).pdf" },
    { id: 8, text: "Cover Page Format", href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Kalinga+University-+Cover+Page+-Thesis.pdf" },
    { id: 9, text: "Synopsis Format", href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Kalinga+University+-Synopsis+Format+-Cover+Page+(1).pdf" },
    { id: 10, text: "Summary Format", href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Kalinga+University+-Summary+Format-+Cover+page.pdf" },
    { id: 11, text: "Arrangement of Thesis Content", href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/ARRANGEMENT+OF+THESIS+CONTENTS.pdf" },
    { id: 12, text: "Thesis Chapterization", href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Kalinga+University-+Thesis+Chapterization_Final.pdf" },
    { id: 13, text: "Ph.D. Admission Policy", href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/2.+Admission+poilcy+(1).pdf" },
    { id: 14, text: "Detailed Syllabus of Research Methodology", href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Detailed+Syllabus.pdf" },
    { id: 15, text: "Fellowship Scholarship Policy", href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/3.+Fellowship+Scholarship+Policy+for+Ph.D.+Scholars.pdf" },
    { id: 16, text: "Grievance Redress Policy", href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/6+POLICY+FOR+GRIEVANCE+REDRESS+MECHANISM+OF+SCHOLARS.pdf" },
    { id: 17, text: "Best Practices & Process Improvement", href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Best+Practices+%26+Process+Improvement+(1).pdf" },
    { id: 18, text: "UGC Regulation 2022", href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/UGC+Regulation+2022+(1).pdf" },
    { id: 19, text: "UGC Notification Plagiarism 2018", href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/UGCNotification_Plagiarism_2018.pdf" },
    { id: 20, text: "UGC Regulation 2016", href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/UGC+Regulations+2016+(1).pdf" },
    // { id: 21, text: "Ph.D. Notification 2026", href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Ph.+D.+2026+Notification.pdf" },
    { id: 23, text: "Ph.d. Scholars", href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/DETAILS+OF+CURRENTLY+ENROLLED+Ph.D.+SCHOLARS+(1).pdf" },
    { id: 24, text: "Ph.d. Supervisors", href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/DETAILS+OF+SUPERVISOR.pdf" },
    { id: 25, text: "Undertaking", href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Undertaking+(1).pdf" },
  ];

  return (
    <>
      <style jsx global>{`
      .absolute.inset-0 > img {
        object-position: center 35% !important;
      }
    
      @media (max-width: 768px) {
        .absolute.inset-0 > img {
          object-position: center 5% !important;
        }
      }
    `}</style>

      <PhdIntro />
      <PhdGrid />
      <WhyChoosePhd />
      <PhdObjectivesPanel />
      <section className="pt-16 pb-16 bg-white">
        <div className="container mx-auto px-6">

          {/* ✅ PAGE HEADING */}
          <div className="mb-10 text-center">
            <h2 className="font-stix  mb-2  !py-2">
              Ph.D. Resources
            </h2>
            <p className="text-[16px] text-[#555] leading-relaxed max-w-3xl mx-auto">
              Access essential documents, policies, and guidelines for your Ph.D. journey.
              From ordinances to thesis formats, everything you need is right here.
            </p>
          </div>

          {/* ✅ BUTTON GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {phdResources.map((item) =>
              item.isPopup ? (
                <div key={item.id} className="block cursor-pointer" onClick={() => setShowResearchPopup(true)}>
                  <GlobalArrowButton
                    className="!w-full h-[60px] justify-between"
                    arrowClassName="p-[3px] !px-2 mr-2 !py-1"
                    arrowSize={29}
                  >
                    {item.text}
                  </GlobalArrowButton>
                </div>
              ) : (
                <FlipbookTrigger key={item.id} pdfUrl={item.href} title={item.text}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <GlobalArrowButton
                      className="!w-full h-[60px] justify-between"
                      arrowClassName="p-[3px] !px-2 mr-2 !py-1"
                      arrowSize={29}
                    >
                      {item.text}
                    </GlobalArrowButton>
                  </a>
                </FlipbookTrigger>
              )
            )}
          </div>

        </div>
      </section>

      {/* ✅ RESEARCH OVERVIEW POPUP */}
      {showResearchPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowResearchPopup(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-2xl p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowResearchPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold transition-colors"
            >
              &times;
            </button>
            <h3 className="font-stix text-2xl font-bold text-gray-800 mb-6">Research Overview</h3>
            <ul className="list-disc list-inside space-y-3 pl-2">
              {researchOverviewItems.map((item) => (
                <li key={item.id} className="text-gray-700 text-[15px] leading-relaxed">
                  {item.text}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <FlipbookTrigger pdfUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Constitution+of+Research+Advisory+Committee.pdf" title="Constitution of Research Advisory Committee">
                <a
                  href="https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Constitution+of+Research+Advisory+Committee.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <GlobalArrowButton
                    className="!w-full h-[56px] justify-between"
                    arrowClassName="p-[3px] !px-2 mr-2 !py-1"
                    arrowSize={29}
                  >
                    Constitution of Research Advisory Committee
                  </GlobalArrowButton>
                </a>
              </FlipbookTrigger>
            </div>
          </div>
        </div>
      )}
      <ScholarStats />
      <AdmissionCareer />
    </>
  );
}
