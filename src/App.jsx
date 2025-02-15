import React from 'react'
import Header from './pages/header'
import Hero from './pages/hero'
import Features from './pages/features'
import More from './pages/more'
import Testimonial from './pages/Testimonial'
import Footer from './pages/Footer'

function App() {
  return (
    <div className="bg-white w-full h-screen mt-0">
      <Header/>
      <Hero />
      <Features />
      <More />
      <Footer />
    </div>
  )
}

export default App