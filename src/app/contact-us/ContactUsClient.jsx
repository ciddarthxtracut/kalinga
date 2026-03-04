"use client";

import React from "react";
import ContactForm from "@/app/components/forms/ContactForm";
import AdmissionCareer from "@/app/components/general/admission_cta";
import FollowUs from "@/app/components/contact_us/follow_us";
import Map from "@/app/components/contact_us/map_section";

const ContactUsClient = () => {
    return (
        <>
            <ContactForm />
            <FollowUs />
            <Map />
            <AdmissionCareer />
        </>
    );
};

export default ContactUsClient;
