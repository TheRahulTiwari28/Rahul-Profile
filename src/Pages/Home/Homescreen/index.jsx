import AboutMe from "../AboutMe";
import ContactMe from "../../../components/ContactMe";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import Expertise from "../Expertise";
import Skills from "../Skills";
// import Testimonial from "../Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Skills/>
      <Expertise />
      <MyPortfolio />
      <ContactMe />
    </>
  );
}
