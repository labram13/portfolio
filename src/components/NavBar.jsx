import React from 'react';
import logo from '../assets/images/logo.png'
import burger from '../assets/images/hamburger.svg'

export function NavBar()  {


    return (
        <ul className="nav-items">
            <li>
                <p>/devlabz</p>
            </li>

            <li>
                <img className="hamburger" src={burger}/>
            </li>
        </ul>
    )
}