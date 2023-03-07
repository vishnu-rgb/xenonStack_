import React from 'react'

import HeroSection from './components/HeroSection';

const Home = () => {
  const data={
    name:"V Fashi💟N",
  }
  return (
     <>
      <HeroSection myData={data}/>
      
      </>
    
  )
}
// const Wrapper = styled.section`
//   background-color: ${({theme})=> theme.colors};
//   height: 100vh;
// `;

export default Home
