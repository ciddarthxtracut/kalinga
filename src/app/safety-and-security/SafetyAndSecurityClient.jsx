"use client";

import React from "react";
import AdmissionCareer from "@/app/components/general/admission_cta";
import Safetyandsecuritymainintro from "../components/safetyandsecurity/safetyandsecuritymainintro";
import Safetyandsecuritycards from "../components/safetyandsecurity/safetyandsecuritycards";
import Safetyandsecuritycontact from "../components/safetyandsecurity/safetyandsecuritycontact";

const SafetyAndSecurityClient = () => {
    return (
        <>
            <style jsx global>{`
        .absolute.inset-0 > img {
          object-position: center 40% !important;
        }
        @media (max-width: 768px) {
          .absolute.inset-0 > img {
            object-position: center 5% !important;
          }
        }
      `}</style>

            <Safetyandsecuritymainintro />
            <Safetyandsecuritycontact />
            <Safetyandsecuritycards />
            <AdmissionCareer />
        </>
    );
};

export default SafetyAndSecurityClient;
