import React from 'react';
import LiveSVG from '../assets/images/live.svg?react'
import CodeSVG from '../assets/images/code.svg?react'


function ProjectSection() {

    return (
        <section id="projects">
            <h2>Projects</h2>
            <ProjectCard />
        </section>
    )
}


function ProjectCard() {


    return (
        <article className="project-card">
            <h3 className="project-title">Project Name</h3>
            <div className="project-tech-stack">
                <p>Label</p>
                <p>Label</p>
                <p>Label</p>
                <p>Label</p>
                <p>Label</p>
            </div>
            <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
         
            <div className="project-links">
                <button>
                    <LiveSVG />
                    <p>Live</p></button>
                <button>
                    <CodeSVG />
                    <p>Code</p>
                </button>

            </div>
        </article>
    )
}


export default ProjectSection;