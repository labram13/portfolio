import React from 'react';
import LiveSVG from '../assets/images/live.svg?react'
import CodeSVG from '../assets/images/code.svg?react'
import quest from '../assets/images/quest.png'
import emt from '../assets/images/emt.png'
import dose from '../assets/images/dose.png'

const PROJECTS = [
    {
        title: "Quest Diaries 2025", 
        techStack: ['React', 'MongoDB', 'Express', 'nodeJS', 'IGDB', 'GoogleOAuth', 'Javascript'],
        description: "A web-application for gamers with a focus on organizing their games, logging their experiences, as well as interacting with a community of other like-minded individuals. Community interaction among users that helps recognition of both mainstream and indie games alike. Users can choose to journal individually, create shared journals, and interact with other users in gaming communities.",
        live: "https://quest-diaries.onrender.com",
        code: "https://github.com/labram13/quest-diaries",
        img: quest

    },
    {
        title: "Employee Management Tool 2024", 
        techStack: ['Express', 'MongoDB', 'Express', 'nodeJS', 'Azure App Service'],
        description: "API tool that is designed for business owners who want to keep track of employee information and financial data to calculate accurate salaries. API follows CRUD operations in order to create, read, update, and delete employee information such as wage data. All of which is calculated server-side in order to gather and collect information based on timeframe user desires.",
        code: "https://github.com/info441-au24/final-project-wena04",
        img: emt
    },
    {
        title: "Dose 2023",
        techStack: ['React', 'Javascript', 'Firebase'],
        description: "Client-side focused application with a focus in medication. App is designed to help users organize their medication by days of the week with required doses. Separate API is used to fetch medication information based on user query. Side-effects are included with each medication added to users pill box within the app in order to be aware proper medication intake.",
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