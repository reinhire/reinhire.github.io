/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { BsMoon, BsSun } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import appData from '../../data/app.json'
import { handleDropdown, handleMobileDropdown } from '../../common/navbar'
import { changeTheme } from '../../slices/theme'

const Navbar = ({ lr, nr, theme }) => {
  const dispatch = useDispatch(changeTheme)
  const [selectedTheme, setSelectedTheme] = useState('light')
  const [isLight, setIsLight] = useState(true)
  const selectedFinalTheme = useSelector((state) => state.theme).value
  const selectedIsLight = selectedFinalTheme && selectedFinalTheme.isLight
  
  const toggleTheme = () => {
    if (typeof window !== 'undefined') {
      const projectTheme = localStorage.getItem('theme')
      projectTheme === 'light'
        ? localStorage.setItem('theme', 'dark')
        : localStorage.setItem('theme', 'light')
      const checkIsLight = projectTheme === 'light' ? true : false
      setSelectedTheme(projectTheme)
      setIsLight(checkIsLight)
      const finaltheme = {
        theme: selectedTheme,
        isLight: checkIsLight,
      }
      dispatch(changeTheme(finaltheme))
    }
    
  }
  return (
    <nav ref={nr} className={`navbar navbar-expand-lg change ${theme === 'themeL' ? 'light' : ''}`}>
      <div className="container">
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme === 'themeL' ? (
                <img ref={lr} src={appData.darkLogo} alt="logo111" />
              ) : (
                <img ref={lr} src={appData.lightLogo} alt="logo123" />
              )
            ) : (
              <img ref={lr} src={appData.lightLogo} alt="logo222" />
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item dropdown" onClick={handleDropdown}> */}

            <li className="nav-item">
              <Link href={`/`}>
                <a className="nav-link">Home</a>
              </Link>
            </li>

              {/* <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home
              </span> */}
              {/* <div className="dropdown-menu">
                <Link href={`/homepage/home1-dark`}>
                  <a className="dropdown-item">Main Home</a>
                </Link>
                <Link href={`/homepage/home2-dark`}>
                  <a className="dropdown-item">Creative Agency</a>
                </Link>
                <Link href={`/homepage/home5-dark`}>
                  <a className="dropdown-item">Digital Agency</a>
                </Link>
                <Link href={`/homepage/home4-dark`}>
                  <a className="dropdown-item">Business One Page</a>
                </Link>
                <Link href={`/homepage/home3-dark`}>
                  <a className="dropdown-item">Corporate Business</a>
                </Link>
                <Link href={`/homepage/home6-dark`}>
                  <a className="dropdown-item">Modern Agency</a>
                </Link>
                <Link href={`/homepage/home7-dark`}>
                  <a className="dropdown-item">Freelancer</a>
                </Link>
                <Link href={`/homepage/home8-dark`}>
                  <a className="dropdown-item">Architecture</a>
                </Link>
              </div> */}
            {/* </li> */}
            <li className="nav-item">
              <Link href={`/about`}>
                <a className="nav-link">About</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href={`/about/about-dark`}>
                <a className="nav-link">Services</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href={`/blog`}>
                <a className="nav-link">Blog</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href={`/contact`}>
                <a className="nav-link">Contact</a>
              </Link>
            </li>

            
            {/* <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Works
              </span>
              <div className="dropdown-menu">
                <Link href={`/showcase/showcase-dark`}>
                  <a className="dropdown-item">Showcase Parallax</a>
                </Link>
                <Link href={`/showcase4/showcase4-dark`}>
                  <a className="dropdown-item">Showcase Carousel</a>
                </Link>
                <Link href={`/showcase3/showcase3-dark`}>
                  <a className="dropdown-item">Showcase Circle</a>
                </Link>
                <Link href={`/works/works-dark`}>
                  <a className="dropdown-item">Portfolio Masonry</a>
                </Link>
                <Link href={`/works2/works2-dark`}>
                  <a className="dropdown-item">Portfolio Filtering</a>
                </Link>
                <Link href={`/works3/works3-dark`}>
                  <a className="dropdown-item">Portfolio Gallery</a>
                </Link>
              </div>
            </li> */}
            {/* <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Blog
              </span>
              <div className="dropdown-menu">
                <Link href={`/blog/blog-dark`}>
                  <a className="dropdown-item">Blog Standerd</a>
                </Link>
                <Link href={`/blog-list/blog-list-dark`}>
                  <a className="dropdown-item">Blog List</a>
                </Link>
                <Link href={`/blog-grid/blog-grid-dark`}>
                  <a className="dropdown-item">Blog Grid</a>
                </Link>
                <Link href={`/blog-details/blog-details-dark`}>
                  <a className="dropdown-item">Blog Details</a>
                </Link>
              </div>
            </li> */}
            
          </ul>
        </div>

        <a onClick={() => toggleTheme()}>{selectedIsLight ? <BsSun /> : <BsMoon />}</a>
      </div>
    </nav>
  )
}

export default Navbar
