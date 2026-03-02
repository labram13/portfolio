import React from 'react'
import js from '../assets/images/js.png'

const SKILLS = 
    {
        imgUrl: js,
        skill: "javascript"
        
    }


function SkillsCarousel() {


    return (
        <section>
            <h2>skills</h2>
            <div className="carousel-container">
                <div className="carousel-track">
                        <div className="card">1</div>
                        <div className="card">2</div>
                        <div className="card">3</div>
                        <div className="card">4</div>

                        {/* duplicate items */}

                        <div className="card">1</div>
                        <div className="card">2</div>
                        <div className="card">3</div>
                        <div className="card">4</div>
                </div>
            </div>
        </section>
    )
}



export default SkillsCarousel;