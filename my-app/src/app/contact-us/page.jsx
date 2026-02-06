"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import ContactForm from "@/app/components/forms/ContactForm";
import AdmissionCareer from "@/app/components/general/admission_cta";
import FollowUs from "@/app/components/contact_us/follow_us";
import Map from "@/app/components/contact_us/map_section";

const ContactUs = () => {
  const pathname = usePathname();

  
  return (
    <>
      <ContactForm />
      <FollowUs />
      <Map />
      <AdmissionCareer />
    </>
  );
};

export default ContactUs;