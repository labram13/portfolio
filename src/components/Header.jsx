import React from 'react'
import profilePic from '../assets/images/profile-crop.png'
import Github from '../assets/images/github.svg?react'
import Linkedin from '../assets/images/linkedin.svg?react'


export function Header() {

    return (
        
        <header>
            <img className="profile-img" src={profilePic} alt="Michaelangelo's profile picture"/>
                <div className="personal-links">
                    <a href="https://github.com/labram13">
                        <button className="github"><Github /></button>
                        
                    </a>
                    <a href="https://www.linkedin.com/in/michaelangelo-labrador/">
                        <button className="linkedin"><Linkedin /></button>
                        
                    </a>
            
                </div>
            <h1 className="accent">Full-Stack Developer</h1>
            <h1 className="name">Michaelangelo Labrador</h1>
            <p className="sub-heading">Building solutions since 2023 that transform information into human-centered experiences</p>
            
            
        </header>
    )
}