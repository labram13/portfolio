import React from 'react';
import LiveSVG from '../assets/images/live.svg?react'
import CodeSVG from '../assets/images/code.svg?react'
import quest from '../assets/images/quest.png'

const PROJECTS = [
    {
        title: "Quest Diaries", 
        techStack: ['React', 'MongoDB', 'Express', 'NodeJS', 'IGDB', 'GoogleOAuth'],
        description: "Our project's goal is to develop a web-application for gamers with a focus on organizing their games, logging their experiences for each game, as well as interacting with a community of other like-minded individuals. Community interaction among users in the website will also hopefully encourage more recognition of both mainstream and indie games alike. Users can choose to journal individually, create shared journals, and interact with other users in gaming communities.",
        live: "https://quest-diaries.onrender.com",
        code: "https://github.com/labram13/quest-diaries",
        img: quest

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
            <img src={project.img} />
            <h3 className="project-title">{project.title}</h3>
            <div className="project-tech-stack">
                {/* <p>Label</p>
                <p>Label</p>
                <p>Label</p>
                <p>Label</p>
                <p>Label</p> */}
                {project.techStack.map((tech) => (<p key={tech}>{tech}</p>))}
            </div>
            <p className="project-description">{project.description}</p>
         
            <div className="project-links">
                <a href="https://quest-diaries.onrender.com/">
                    <button className="live-button">
                        <LiveSVG />
                        <p>Live</p>
                    </button>
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