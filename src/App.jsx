import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24" 
           style={{
             background: 'radial-gradient(125% 125% at 50% 90%, #000 40%, #bd14ed 100%)'
           }}>
      </div>
    </div>
    
    <div className="container mx-auto px-8">
      <Navbar />
      <HeroSection />
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  </div>
  
  )
}

export default App