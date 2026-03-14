import React from 'react'
import profilePic from '../assets/images/profile-crop.png'


export function Header() {

    return (
        
        <header>
            <img className="profile-img" src={profilePic} alt="Michaelangelo's profile picture"/>
            <h1 className="accent">Full-Stack Developer</h1>
            <h1 className="name">Michaelangelo Labrador</h1>
            <p className="sub-heading">Building solutions since 2023 that transform information into human-centered experiences</p>
            
            
        </header>
    )
}