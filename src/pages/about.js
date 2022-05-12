import React from "react";
import Navbar from "../components/Navbar/navbar";
import Services from "../components/Services/services";
import VideoWithTestimonials from "../components/Video-with-testimonials/video-with-testimonials";
import SkillsCircle from "../components/Skills-circle/skills-circle";
import Clients from "../components/Clients/clients";
import CallToAction from "../components/Call-to-action/call-to-action";
import Footer from "../components/Footer/footer";
import PagesHeader from "../components/Pages-header";
import AboutIntro from "../components/About-intro";
import Theme from "../layouts/Theme";
import Team from "../components/Team/team";
import MinimalArea from "../components/Minimal-Area/minimal-area";
import { useSelector } from 'react-redux'

const About = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const selectedTheme = useSelector((state) => state.theme).value
  const finalTheme = selectedTheme && selectedTheme.theme
  const themeSet = finalTheme === 'light' ? 'themeL' : ''

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <Theme>
      <Navbar nr={navbarRef} lr={logoRef} theme={themeSet} from="about-dark" />
      <PagesHeader />
      <AboutIntro />
      <Services style="4item" />
      <VideoWithTestimonials />
      <SkillsCircle from="aboutPage" />
      <Team />
      <MinimalArea />
      <Clients theme="dark" />
      <CallToAction />
      <Footer />
    </Theme>
  );
};

export default About;
