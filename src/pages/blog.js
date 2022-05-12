import React from "react";
import blog3Data from "../data/blog3.json";
import Theme from "../layouts/Theme";
import Navbar from "../components/Navbar/navbar";
import BlogGrid from "../components/Blog-grid/blog-grid.jsx";
import PageHeader from "../components/Page-header/page-header";
import Footer from "../components/Footer/footer";
import { useSelector } from 'react-redux'

const Blog = () => {
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
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} theme={themeSet} />
      <PageHeader
        title="Our News."
        paragraph="All the most current news and events of our creative team."
      />
      <BlogGrid blogs={blog3Data} />
      <Footer />
    </Theme>
  );
};

export default Blog;
