import React from 'react'
import profilePic from '../assets/images/profile-crop.png'


export function Header() {

    return (
        
        <header>
            <img className="profile-img" src={profilePic} alt="Michaelangelo's profile picture"/>
            <div>
                <h1 className="accent">Full-Stack Developer</h1>
                <h1>Michaelangelo Labrador</h1>
                <p className="sub-heading">Experienced with Node.js, React, Express and MongoDB to build fully operating web apps</p>
            </div>
            
        </header>
    )
}