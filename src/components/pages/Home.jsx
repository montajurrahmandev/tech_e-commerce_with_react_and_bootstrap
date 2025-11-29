import React from 'react'
import HeroBanner from '../layouts/HeroBanner'
import Category from '../layouts/Category'
// import BestSelling from '../layouts/BestSelling'
import PromoBanner from '../layouts/Promobanner'
import NewArrival from '../layouts/NewArrival'


const Home = () => {
  return (
    <>
    <HeroBanner/>
    <Category/>
    {/* <BestSelling/> */}
    <PromoBanner/>
    <NewArrival/>
    </>
  )
}

export default Home