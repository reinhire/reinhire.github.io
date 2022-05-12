import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/navbar'
import FullTestimonials from "../components/Full-testimonials/full-testimonials";
import CallToAction from "../components/Call-to-action/call-to-action";
import Footer from "../components/Footer/footer";
import Team from "../components/Team/team";
import Theme from '../layouts/Theme'
import Works3 from "../components/Works3/works3";
import Blogs4 from "../components/blogs/Blogs4/blogs4";
import Intro4 from '../components/Intro4/intro4'
import AboutUs3 from '../components/About-us3/about-us3'
import Services3 from "../components/Services3/services3";
import MinimalArea2 from "../components/Minimal-Area2/minimal-area2";

import { useSelector } from 'react-redux'

const Homepage = () => {
  const navbarRef = React.useRef(null)
  const logoRef = React.useRef(null)

  useEffect(() => {
    var navbar = navbarRef.current
    if (window.pageYOffset > 300) {
      navbar.classList.add('nav-scroll')
    } else {
      navbar.classList.remove('nav-scroll')
    }
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add('nav-scroll')
      } else {
        navbar.classList.remove('nav-scroll')
      }
    })
  }, [navbarRef])

  const selectedTheme = useSelector((state) => state.theme).value
  const finalTheme = selectedTheme && selectedTheme.theme
  const themeSet = finalTheme === 'light' ? 'themeL' : ''

  return (
    <>
      <Theme>
      <Navbar nr={navbarRef} lr={logoRef} theme={themeSet} />
      <Intro4 />
      <AboutUs3 />
      <Works3 />
      <Services3 />
      <MinimalArea2 />
      <FullTestimonials classText="pb-0" />
      <Team />
      <Blogs4 />
      <CallToAction />
      <Footer />
      </Theme>
    </>
  )
}

export default Homepage
