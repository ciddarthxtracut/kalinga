import FeaturesSection from "../components/campuslife/featuresection";
import MainIntro from "../components/about/main_intro";
import Facilities from "../components/home/facilities";
import GalleryAll from "../components/general/image_animation";
import CampusLife from "../components/campuslife/campusvideo";
import Gallery from "../components/campuslife/campusgallery";
import AdmissionCareer from "../components/general/admission_cta";
import UpcomingConferences from "../components/research/upcoming_conference";
export default function Page() {
  return (
    <>
    <MainIntro />
    <Facilities/>
      <FeaturesSection />
      <CampusLife/>
      <GalleryAll/>
      <UpcomingConferences/>
      <Gallery/>
      <AdmissionCareer/>
    </>
  );
}
