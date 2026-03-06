import { useState } from 'react'
import {NavBar} from './components/NavBar'
import {Header} from './components/Header'
import { AboutMe } from './components/AboutMe'
import SkillsCarousel from './components/Skills'
import ProjectSection from './components/Projects'
import { Education } from './components/Education'
import CopyrightSVG from './assets/images/copyright.svg?react'


function App() {

  return (
    <div id="home" className="container">
    {/* nav bar */}
       <NavBar />

    {/* header */}
      <Header />

    {/* main content */}
      <main>
        <AboutMe />
        <SkillsCarousel />
        <ProjectSection />
        <Education />
      </main>

    {/* footer */}
      <footer>
        <CopyrightSVG />
        <p>Copyright 2026 by Michaelangelo Labrador</p>
      </footer>
    </div>
  )
}

export default App
