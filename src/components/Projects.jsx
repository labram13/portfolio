import React from 'react';
import LiveSVG from '../assets/images/live.svg?react'
import CodeSVG from '../assets/images/code.svg?react'
import quest from '../assets/images/quest.png'
import emt from '../assets/images/emt.png'
import dose from '../assets/images/dose.png'
import petShelter from '../assets/images/petshelter.png'
import chatterbox from '../assets/images/chatterbox.png'

const PROJECTS = [
    {
        title: "ChatterBox (In Progress)", 
        techStack: ['React', 'PostgreSQL', 'Express', 'Node.js', 'AWS Storage', 'JWT', 'JavaScript', 'Redis', 'Socket.io'],
        description: "A full-stack chat chat application with a goal of sending messages to individuals or a group of people within a created chatroom. The goal of this project is to apply knowledge of websockets for instant communication and notifications. Caching will also be implemented for faster message load times. Cloud file storage will be included so users will be able to send different types of media mostly aimed at images. ",
        code: "https://github.com/labram13/ChatterBox",
        img: chatterbox

    },
    {
        title: "Quest Diaries 2025", 
        techStack: ['React', 'mongoDB', 'Express', 'Node.js', 'IGDB', 'Google OAuth', 'JavaScript'],
        description: "A web application for gamers to organize their games, log their experiences, and connect with a community of like-minded players. The platform highlights both mainstream and indie titles while allowing users to keep personal journals, create shared journals, and interact within gaming communities.",
        live: "https://quest-diaries.onrender.com",
        code: "https://github.com/labram13/quest-diaries",
        img: quest

    },
    {
        title: "Employee Management Tool 2024", 
        techStack: ['Express', 'mongoDB', 'Express', 'JavaScript', 'Node.js', 'Azure App Service'],
        description: "An API tool designed for business owners to manage employee information and financial data for accurate salary calculations. It follows CRUD operations to create, read, update, and delete employee records such as wage data. All calculations are performed server-side, allowing users to generate payroll information based on a selected timeframe",
        code: "https://github.com/info441-au24/final-project-wena04",
        img: emt
    },

    {
        title: "Pet Shelter Database 2023",
        techStack: ['SQL', 'MSSQL'],
        description: "A database project modeling multiple pet shelters. The relational schema illustrates relationships between entities such as pets, volunteers, and shelters. Various SQL queries were developed to analyze the data, including exploring whether single individuals or families are more likely to adopt a pet.",
        code: "https://github.com/labram13/Database-Project-Pet-Shelter-INFO-330",
        img: petShelter

    }
]


function ProjectSection() {

    const projects = PROJECTS.map((project, index) => {
        return (
            <ProjectCard key={index} project={project} />
        )
    })

    return (
        <section id="projects">
            <h2>Projects</h2>
            {projects}
        </section>
    )
}


function ProjectCard(props) {
    const project = props.project

    return (
        <article className="project-card">
            <img src={project.img} alt={`${project.title} screenshot`}/>
            <h3 className="project-title">{project.title}</h3>
            <div className="project-tech-stack">
                {project.techStack.map((tech) => (<p key={tech}>{tech}</p>))}
            </div>
            <p className="project-description">{project.description}</p>
         
            <div className="project-links">
                <a href={project.live}>
                    {project.live && (<button className="live-button">
                        <LiveSVG />
                        <p>Live</p>
                    </button>)}
                </a>
                <a href={project.code}>
                    <button className="code-button">
                        <CodeSVG />
                        <p>Code</p>
                    </button>
                </a>
            </div>
        </article>
    )
}


export default ProjectSection;