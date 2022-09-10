import React from 'react'
import AboutMe from '../Components/AboutMe'
import Contact from '../Components/Contact'
import Experience from '../Components/Experience'
import Footer from '../Components/Footer'
import LandingPage from '../Components/LandingPage'
import Navbar from '../Components/Navbar'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'

const Home = () => {
  return (
    <div className='body-div'>
      <Navbar />
      <LandingPage />
      <AboutMe />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home