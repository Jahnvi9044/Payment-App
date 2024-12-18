



import React from 'react'
import NavBar from '../Components/NavBar'
import HeroSection from '../Components/HomeElements/HeroSection'
import About from '../Components/HomeElements/About'
import Footer from '../Components/HomeElements/Footer'
import Service from '../Components/HomeElements/Service'

const Home = () => {
  return (

    <div>
         
         <NavBar></NavBar>
        <div className="h-screen pt-20">
         <HeroSection></HeroSection>
        </div>
         <About></About>
         <Service></Service>
         <Footer></Footer>
        
    </div>
  )
}

export default Home