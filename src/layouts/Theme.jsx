/* eslint-disable @next/next/no-css-tags */
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'

const Theme = ({ children, useSkin, mobileappstyle }) => {
  const [theme, setTheme] = useState('dark')
  const selectedTheme = useSelector((state) => state.theme).value
  const finalTheme = selectedTheme && selectedTheme.theme
  
  useEffect(() => {
    setTheme(finalTheme)
    window.theme = finalTheme
  }, [finalTheme])

  return (
    <>
      <Head>
        {theme === 'dark' ? (
          <link rel="stylesheet" href="/css/dark.css" />
        ) : (
          <link rel="stylesheet" href="/css/light.css" />
        )}
        {useSkin ? <link rel="stylesheet" href="/css/arch-skin-dark.css" /> : ''}
        {mobileappstyle ? <link href="/css/mobile-app-dark.css" rel="stylesheet" /> : ''}
      </Head>
      {children}
    </>
  )
}

export default Theme
