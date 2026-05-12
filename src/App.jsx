import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import Services from './components/services'
import About from './components/About'
import Tips from './components/Tips'
import Shopnow from './components/Shopnow'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services/>
      <About/>
      <Tips/>
      <Shopnow/>
    </div>
  )
}

export default App
