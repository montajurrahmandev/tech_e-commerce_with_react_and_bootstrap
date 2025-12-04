import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import AnnouncementBar from './AnnouncementBar'

const RootLayout = () => {
  return (
    <>
    <AnnouncementBar/>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout