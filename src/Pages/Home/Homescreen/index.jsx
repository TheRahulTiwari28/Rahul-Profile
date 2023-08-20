import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
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
      <Footer />
    </>
  );
}
