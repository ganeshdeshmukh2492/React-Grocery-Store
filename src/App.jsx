import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import Services from './components/services'
import About from './components/About'
import Tips from './components/Tips'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services/>
      <About/>
      <Tips/>
    </div>
  )
}

export default App
