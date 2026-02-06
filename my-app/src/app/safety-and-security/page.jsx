"use client";

import React, { useEffect } from "react";
import Academicmainintro from "@/app/components/academic-facilities/academicmainintro";
import Academiccards from "@/app/components/academic-facilities/academiccards";
import AdmissionCareer from "@/app/components/general/admission_cta";
import Safetyandsecuritymainintro from "../components/safetyandsecurity/safetyandsecuritymainintro";
import Safetyandsecuritycards from "../components/safetyandsecurity/safetyandsecuritycards";
import Safetyandsecuritycontact from "../components/safetyandsecurity/safetyandsecuritycontact";

(same pattern as AboutUs)


export default function SafetyAndSecurity() {
    

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
}
