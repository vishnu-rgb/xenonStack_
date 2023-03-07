
import HeroSection from './components/HeroSection'
// import { useProductContext } from './context/productContext'

import React, { Component }  from 'react';
const About = () => {
  // const {myName} = useProductContext();
  const data={
    name: "Sheela Ecommerce"
  }
  return (
    <>
     {/* {myName} */}
      <HeroSection myData={data} />
    </>
  
  )
}

export default About
