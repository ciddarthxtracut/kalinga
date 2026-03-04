"use client"

import React from 'react'
import AdmissionCareer from '../components/general/admission_cta';
import Admissionproceduresteps from '../components/admission-procedure/admissionproceduresteps';
import Admissionform from '../components/admission-procedure/admissionform';
import Admissioncrackandwin from '../components/admission-procedure/admissioncrackandwin';
import Admissionprocedureexams from '../components/admission-procedure/admissionprocedureexams';
import Admissionearlybenefits from '../components/admission-procedure/admissionearlybenefits';
import Admissionhacks from '../components/admission-procedure/admissionhacks';
import MainIntro from '../components/about/main_intro';

const AdmissionProcedureClient = ({ scholarshipContent }) => {
    return (
        <div>
            <style jsx global>{`
            .absolute.inset-0 > img {
                object-position: center 60% !important;
            }

            @media (max-width: 768px) {
                .absolute.inset-0 > img {
                object-position: center 5% !important;
                }
            }
            `}</style>

            <Admissionproceduresteps />
            <Admissionform />
            <Admissioncrackandwin />
            <Admissionprocedureexams />
            <Admissionearlybenefits />
            <MainIntro
                title={scholarshipContent.title}
                description={scholarshipContent.description}
                points={scholarshipContent.points}
                imageUrl={scholarshipContent.imageUrl}
                imageAlt={scholarshipContent.imageAlt}
                knowMoreLabel={scholarshipContent.knowMoreLabel}
                extraLink={scholarshipContent.extraLink}
                extraLinkLabel={scholarshipContent.extraLinkLabel}
                hidePointsUntilExpanded={true}
            />
            <Admissionhacks />
            <AdmissionCareer />
        </div>
    )
}

export default AdmissionProcedureClient;
