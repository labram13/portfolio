import React from 'react';
import LiveSVG from '../assets/images/live.svg?react'
import CodeSVG from '../assets/images/code.svg?react'
import quest from '../assets/images/quest.png'
import emt from '../assets/images/emt.png'
import dose from '../assets/images/dose.png'
import petShelter from '../assets/images/petshelter.png'

const PROJECTS = [
    {
        title: "Quest Diaries 2025", 
        techStack: ['React', 'mongoDB', 'Express', 'Node.js', 'IGDB', 'GoogleOAuth', 'Javascript'],
        description: "A web application for gamers to organize their games, log their experiences, and connect with a community of like-minded players. The platform highlights both mainstream and indie titles while allowing users to keep personal journals, create shared journals, and interact within gaming communities.",
        live: "https://quest-diaries.onrender.com",
        code: "https://github.com/labram13/quest-diaries",
        img: quest

    },
    {
        title: "Employee Management Tool 2024", 
        techStack: ['Express', 'mongoDB', 'Express', 'Node.js', 'Azure App Service'],
        description: "An API tool designed for business owners to manage employee information and financial data for accurate salary calculations. It follows CRUD operations to create, read, update, and delete employee records such as wage data. All calculations are performed server-side, allowing users to generate payroll information based on a selected timeframe",
        code: "https://github.com/info441-au24/final-project-wena04",
        img: emt
    },

    {
        title: "Pet Shelter Database 2023",
        techStack: ['SQL', 'MSSQL'],
        description: "A database project modeling multiple pet shelters that serve as temporary homes for animals. The relational schema illustrates relationships between entities such as pets, volunteers, and shelters. Various SQL queries were developed to analyze the data, including exploring whether single individuals or families are more likely to adopt a pet.",
        code: "https://github.com/labram13/Database-Project-Pet-Shelter-INFO-330",
        img: petShelter

    },

    {
        title: "Dose 2023",
        techStack: ['React', 'Javascript', 'Firebase'],
        description: "A client-side medication management app that helps users organize doses by day of the week. It integrates with an external API to fetch medication details based on user queries. Each added medication includes side-effect information to help users stay informed and take their medications safely.",
        img: dose,
        live: "https://project-a5-f5b82.web.app/",
        code: "https://github.com/info340-su23/project-GConscious"
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
                <a href="https://quest-diaries.onrender.com/">
                    {project.live && (<button className="live-button">
                        <LiveSVG />
                        <p>Live</p>
                    </button>)}
                </a>
                <a href="https://github.com/labram13/quest-diaries">
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