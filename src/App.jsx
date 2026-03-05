import { useState } from 'react'
import {NavBar} from './components/NavBar'
import {Header} from './components/Header'
import { AboutMe } from './components/AboutMe'
import SkillsCarousel from './components/Skills'
import ProjectSection from './components/Projects'


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
      </main>

    {/* footer */}
      <footer>
        test
      </footer>
    </div>
  )
}

export default App
