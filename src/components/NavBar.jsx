import React from 'react';
import {useState} from 'react'
import logo from '../assets/images/logo.png'
import burger from '../assets/images/hamburger.svg'

export function NavBar()  {

    function handleCheckbox(event) {
        console.log(event.target.checked)

    }
    

    return (
        <nav>
            <p>/devlabz</p>
            <input type="checkbox" onChange={handleCheckbox} id="sidebar-active" />
            <label for="sidebar-active">
                <img className="hamburger" src={burger}/>
            </label>


            <div className="nav-links-container">
                <a href="#">Home</a>
                <a href="#">Home</a>
                <a href="#">Home</a>
                <a href="#">Home</a>
                <a href="#">Home</a>
                <a href="#">Home</a>
            </div> 

            
        </nav>
    )
}