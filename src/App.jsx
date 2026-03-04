import { useState } from 'react'
import {NavBar} from './components/NavBar'
import {Header} from './components/Header'
import { AboutMe } from './components/AboutMe'
import SkillsCarousel from './components/Skills'


function App() {

  return (
    <div className="container">
    {/* nav bar */}
       <NavBar />

    {/* header */}
      <Header />

    {/* main content */}
      <main>
        <AboutMe />
        <SkillsCarousel />
      </main>

    {/* footer */}
      <footer>
        test
      </footer>
    </div>
  )
}

export default App
