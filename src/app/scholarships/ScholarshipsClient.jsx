"use client";

import { useEffect, useState } from "react";
import MainIntro from "@/app/components/about/main_intro";
import WhyStudy from "@/app/components/department/why-study";
import ScholarshipsSlider from "../components/admissions/scholarships_slider";
import CenterOfExcellence from "../components/about/center_of_excellence";
import FAQ from "../components/general/faq";
import AdmissionCareer from "../components/general/admission_cta";

const ScholarshipsClient = ({ whyStudyItems, defaultFAQItems, Banks, scholarships, scholarshipPopupData }) => {
    const scholarshipPolicyPdf = "https://cdn.kalingauniversity.ac.in/scholarships/Scholarships+2026-2027.pdf";

    useEffect(() => {
        const el = document.querySelector(".why-study-swiper .swiper");
        const sw = el?.swiper;
        if (!sw) return;

        let isJumping = false;

        const safeJump = (index) => {
            if (isJumping) return;
            isJumping = true;
            sw.slideTo(index, 0, false);
            requestAnimationFrame(() => {
                isJumping = false;
            });
        };

        const onReachEnd = () => safeJump(0);
        const onReachBeginning = () => safeJump(sw.slides.length - 1);

        sw.on("reachEnd", onReachEnd);
        sw.on("reachBeginning", onReachBeginning);

        return () => {
            sw.off("reachEnd", onReachEnd);
            sw.off("reachBeginning", onReachBeginning);
        };
    }, []);

    const [open, setOpen] = useState(false);
    const [activeTitle, setActiveTitle] = useState(null);
    const activeData = activeTitle ? scholarshipPopupData[activeTitle] : null;

    useEffect(() => {
        const root = document.querySelector(".scholarships-swiper");
        if (!root) return;

        const handler = (e) => {
            const slide = e.target.closest(".swiper-slide");
            if (!slide) return;

            const slides = Array.from(root.querySelectorAll(".swiper-slide"));
            const index = slides.indexOf(slide);

            if (index < 0 || index >= scholarships.length) return;

            const clicked = scholarships[index];
            if (!clicked?.title) return;

            setActiveTitle(clicked.title);
            setOpen(true);
        };

        root.addEventListener("click", handler);
        return () => root.removeEventListener("click", handler);
    }, [scholarships, scholarshipPopupData]);

    return (
        <>
            <style jsx global>{`
        .absolute.inset-0 > img {
          object-position: center 50% !important;
        }
        @media (max-width: 768px) {
          .absolute.inset-0 > img {
            object-position: center 5% !important;
          }
        }
      `}</style>

            <MainIntro
                showKnowMore={false}
                sectionClassName="py-6 bg-white"
                title="Rewarding the Hard Work and Academic Excellence of Meritorious Students"
                subtitle=""
                description={["We recognize the hard work of every student, and Kalinga University’s scholarships encourage them to dream bigger and confidently step forward towards their career goals."]}
                imageUrl="https://cdn.kalingauniversity.ac.in/scholarships/scholarship-about.webp"
            />

            <div className="whyStudyWrapper">
                <WhyStudy
                    items={whyStudyItems}
                    sectionTitle="How KU Scholarships Are a Game-Changer"
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1280: { slidesPerView: 3 },
                    }}
                />
            </div>

            <style jsx global>{`
        .why-study-swiper .swiper-slide > div > div {
          min-height: 180px !important;
          justify-content: center !important;
        }
        .why-study-swiper .swiper-slide > div > div > div {
          margin-left: auto !important;
          margin-right: auto !important;
          align-items: flex-start !important;
          text-align: left !important;
        }
        .why-study-swiper h4,
        .why-study-swiper p {
          text-align: left !important;
        }
        .why-study-swiper button {
          align-self: flex-start !important;
        }
      `}</style>

            <CenterOfExcellence
                className="bg-white"
                centres={Banks}
                title="Bank Loan MoUs"
                description="Kalinga University has signed an MOU with Canara Bank and the Central Bank of India, which are providing financial assistance to our students during admissions."
                slidesPerView={1}
                isContained={true}
                breakpoints={{
                    640: { slidesPerView: 1.2, spaceBetween: 20 },
                    768: { slidesPerView: 1.5, spaceBetween: 24 },
                    1024: { slidesPerView: 2, spaceBetween: 30 },
                    1280: { slidesPerView: 2, spaceBetween: 0 },
                }}
            />

            <div className="hide-scholarship-cta">
                <ScholarshipsSlider
                    className="bg-[var(--light-gray)]"
                    titleClassName="text-center"
                    items={scholarships}
                    title="Scholarship Details Of Kalinga University"
                    description=""
                    ctaText="Explore Now"
                    ctaHref=""
                    navId=""
                />
            </div>

            <style jsx global>{`
        .hide-scholarship-cta a.inline-flex {
          display: none !important;
        }
        .hide-scholarship-cta .scholarships-swiper .swiper-slide { height: auto !important; }
        .hide-scholarship-cta .scholarships-swiper .swiper-slide > * { height: 100% !important; display: flex !important; }
        .hide-scholarship-cta .scholarships-swiper .swiper-slide > * > * { width: 100% !important; display: flex !important; flex-direction: column !important; }
        .hide-scholarship-cta .scholarships-swiper h3, .hide-scholarship-cta .scholarships-swiper h4 { min-height: 2.8em !important; line-height: 1.4 !important; display: -webkit-box !important; -webkit-box-orient: vertical !important; -webkit-line-clamp: 2 !important; overflow: hidden !important; }
        .hide-scholarship-cta .scholarships-swiper p { margin-top: 0.75rem !important; }
        .hide-scholarship-cta .scholarships-swiper hr { width: 100% !important; align-self: stretch !important; }
        .hide-scholarship-cta .scholarships-swiper a, .hide-scholarship-cta .scholarships-swiper button { margin-top: auto !important; align-self: flex-end !important; }
        .hide-scholarship-cta .scholarships-swiper img { position: static !important; width: 180px !important; height: 180px !important; object-fit: contain !important; display: block !important; margin: 0 auto 14px auto !important; }
        @media (max-width: 640px) { .hide-scholarship-cta .scholarships-swiper img { width: 140px !important; height: 140px !important; margin-bottom: 12px !important; } }
      `}</style>

            {open && activeData && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex items-end md:items-center justify-center p-4" onClick={() => setOpen(false)}>
                    <div className="bg-white rounded-2xl w-full max-max-w-3xl max-h-[85vh] overflow-y-auto p-6 md:p-10 relative mt-16" onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setOpen(false)} className="absolute top-6 right-6 z-50 bg-white rounded-full p-1 shadow text-gray-600 hover:text-gray-900 transition-colors">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>
                        <div className="space-y-4">
                            <h3 className="font-stix text-2xl md:text-3xl text-[var(--foreground)]">{activeData.heading}</h3>
                            <p className="text-gray-700 leading-relaxed">{activeData.intro}</p>
                            <div className="bg-[var(--lite-sand)] rounded-xl p-5 md:p-6">
                                <ul className="list-disc list-inside space-y-2 text-gray-800 leading-relaxed">
                                    {activeData.points.map((p, i) => (<li key={i}>{p}</li>))}
                                </ul>
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                <p className="font-semibold text-gray-700 mb-2">Terms (highlights)</p>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Applicable for entire course duration; applicable only on Tuition Fee.</li>
                                    <li>Minimum 75% attendance; appear in CTs as per rules.</li>
                                    <li>Only one scholarship can be availed; category cannot be changed once taken.</li>
                                    <li>First-come-first-serve where seats are limited; withdrawn on failure/misconduct.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <FAQ items={defaultFAQItems} title="Clearing All Your Doubts" subtitle="" />

            <div className="mx-auto max-w-6xl px-4 md:px-6 mt-10 mb-6">
                <div className="rounded-2xl bg-[var(--lite-sand)] p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                        <h3 className="font-stix text-xl md:text-2xl text-[var(--foreground)]">Scholarship Policy</h3>
                        <p className="mt-2 text-gray-700">Download the official scholarship policy document for detailed eligibility and terms.</p>
                    </div>
                    <a href={scholarshipPolicyPdf} download target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[var(--button-red)] px-5 py-3 text-white font-semibold hover:opacity-90 transition">
                        Download Policy
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3v10m0 0l4-4m-4 4l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 17v3h16v-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </a>
                </div>
            </div>

            <AdmissionCareer />
        </>
    );
};

export default ScholarshipsClient;
