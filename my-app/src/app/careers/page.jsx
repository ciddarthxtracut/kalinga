'use client'
import MainIntro from "../components/about/main_intro";
import OpenPositions from "../components/careers/OpenPositions"
import EmployeeBenefits from "../components/careers/EmployeeBenefits"
import CareerApplicationForm from "../components/careers/CareerApplicationForm"
import FaqSection from "../components/general/faq"


export default function Careers() {
  return (
    <>
    <MainIntro />
     
      <OpenPositions />

      <EmployeeBenefits />

      <CareerApplicationForm />

      <FaqSection />

    </>
  );
}
