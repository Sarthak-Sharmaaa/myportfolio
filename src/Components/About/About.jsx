import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img  from '../../assets/about_profile.jpg'

const About = () => {
  return (
    <div  id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
               <img src={profile_img} alt="" />

            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am Software Developer with  eager to contribute my technical skills and passion
                    for coding to  providing  innovative
                    software solutions. </p>
                    <p></p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p><hr style={{width:"50%"}}/>
                        </div>
                        <div className="about-skill">
                        <p>javascript</p><hr style={{width:"60%"}}/>
                        </div>
                        <div className="about-skill">
                        <p>React.js</p><hr style={{width:"70%"}}/>
                        </div>
                        <div className="about-skill">
                        <p>Java</p><hr style={{width:"60%"}}/>
                        </div>
                        <div className="about-skill">
                        <p>SQL</p><hr style={{width:"50%"}}/>
                        </div>
                        
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>Highly</h1>
                <p>  </p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>Motivated</h1>
                <p></p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>& Dedicated</h1>
                <p></p>
            </div>

        </div>
    </div>
  )
}

export default About