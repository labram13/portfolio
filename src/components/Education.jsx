import React from 'react'
import DateSVG from '../assets/images/date.svg?react'



export function Education() {

    return (
        <section id="education">
            <h2>education</h2>
            <div className="timeline">
                <div className="time">
                    <div className="date"> 
                        <DateSVG />
                        <h3>2023-2025</h3>
                    </div>
                    <h4>University of Washington Seattle</h4>
                    <p>Bachelor's of Science in Informatics: Software Developer Focus</p>
                </div>
                <div className="time">
                    <div className="date"> 
                        <DateSVG />
                        <h3>2020-2021</h3>
                    </div>
                    <h4>Seattle Central Community College</h4>
                    <p>Associate's Degree</p>
                </div>
                <div className="time">
                    <div className="date"> 
                        <DateSVG />
                        <h3>2009-2011</h3>
                    </div>
                    <h4>Pacific Lutheran University</h4>
                    <p>2-Year General Education</p>
                </div>
            </div>
    
        </section>
    )
}