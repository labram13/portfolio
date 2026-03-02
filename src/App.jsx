import { useState } from 'react'
import {NavBar} from './components/NavBar'
import {Header} from './components/Header'
import { AboutMe } from './components/AboutMe'


function App() {

  return (
    <div className="container">
    {/* nav bar */}
      <nav>
       <NavBar />
      </nav>

    {/* header */}
      <Header />

    {/* main content */}
      <main>
        <AboutMe />
        <AboutMe />
      </main>

    {/* footer */}
      <footer>
        test
      </footer>
    </div>
  )
}

export default App
