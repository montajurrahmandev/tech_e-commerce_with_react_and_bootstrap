import React from 'react'
import HeroBanner from '../layouts/HeroBanner'
import Category from '../layouts/Category'
import BestSelling from '../layouts/BestSelling'
import PromoBanner from '../layouts/Promobanner'
import NewArrival from '../layouts/NewArrival'
import OurProduct from '../layouts/OurProduct'
import Feature from '../layouts/Feature'


const Home = () => {
  return (
    <>
    <HeroBanner/>
    <Category/>
    <BestSelling/>
    <PromoBanner/>
    <OurProduct/>
    <NewArrival/>
    <Feature/>
    </>
  )
}

export default Home