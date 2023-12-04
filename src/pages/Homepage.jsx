import React from 'react'
import { Carousel } from '../components/Homepage/Carousel'
import { Deals } from '../components/Homepage/Deals'
import { SecondCarousel } from '../components/Homepage/SecondCarousel'
import { Deals2 } from '../components/Homepage/Deals2'
import { Deals3 } from '../components/Homepage/Deals3'
import { CardSilder1 } from '../components/Homepage/CardSilder1'

const Homepage = () => {
  return (
    <div>
      <h1></h1>Homepage
      <Carousel/>
      <Deals/>
      <SecondCarousel/>
       <Deals2/>
       <Deals3/>
        <CardSilder1/>

    </div>
  )
}

export default Homepage