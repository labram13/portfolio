import React from 'react'
import js from '../assets/images/js.png'
import node from '../assets/images/node.png'
import react from '../assets/images/react.png'
import docker from '../assets/images/docker.png'
import mongo from '../assets/images/mongo.png'
import post from '../assets/images/post.png'
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'

const SKILLS = 
    [
        {
            imgUrl: js,
            skill: "JavaScript"
        
        },
        {
            imgUrl: node,
            skill: "Node.js"
        
        },
        {
            imgUrl: react,
            skill: "React"
        
        },
        {
            imgUrl: docker,
            skill: "Docker"
        
        },
        {
            imgUrl: mongo,
            skill: "mongoDB"
        
        },
        {
            imgUrl: post,
            skill: "PostgreSQL"
        
        },
        {
            imgUrl: html,
            skill: "HTML"
        
        },
        {
            imgUrl: css,
            skill: "CSS"
        
        }
    ]

function SkillCard(props) {

    const skill = props.skill

    return (
        <li className="card">
            <img className="tech-logo"
            src={skill.imgUrl} alt={skill.skill + "logo"} />
            <p className ="skill-description">{skill.skill}</p>
        </li>
    )
}




function SkillsCarousel() {

    const cards = SKILLS.map((skill, index) => (
        <SkillCard key={index} skill={skill} />
        
    ))


    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="carousel-container">
                <ul className="carousel-track">
                        {cards}
                        {cards}
                </ul>
            </div>
        </section>
    )
}



export default SkillsCarousel;