import React from 'react'
import LineBar from '../Components/LineBar'
import './About.css'

const Aboutme = () => {
    return (
        <>
            <div id='about' className="about-container">
                <div className="about-root">
                    <div className="about-head">
                        <h1>About Me</h1>
                        <p>Why Choose Me ?</p>
                    </div>
                    <div className="lineBar-main">
                        <LineBar/>
                    </div>
                    <div className="about-main">
                        <div className="about-me-para">
                            <p>
                                Hello, I'm Aman Gupta. I am Software Developer. As a Software developer, I have in-depth knowledge of Web development and App Development. I have working experience of Web development. I have in-depth knowledge of React js, Mongo Db, Express js, Next js, HTML/CSS and javascript and as well as React native for App development.
                            </p>
                        </div>
                        <div className="about-me-highlights">
                            <p>Here are few Highlights:</p>
                            <ul>
                                <li>Full Stack Web Developer</li>
                                <li>App Developer</li>
                                <li>Interactive Front-end as per the design</li>
                                <li>React Developer</li>
                                <li>Connect Api's</li>
                                <li>Managing Databases</li>
                            </ul>
                        </div>
                        <div className="profile-options">
                            <button className='btn primary-btn'>Hire Me</button>
                            <a href="resume.pdf" download={"Aman Gupta's Resume.pdf"}>
                                <button className='btn highlighted-btn'>Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutme
