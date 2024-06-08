import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from  '../../assets/resume.pdf'


const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Sarthak Sharma,</span> frontend developer based in India</h1>
      <p>I am a frontend developer from india with years of dedication.</p>  
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>connect with me </AnchorLink> </div>
        
        <form   method="get" action={resume}>
        <button  className="hero-resume"  type="submit">CV Download!</button>
      </form>

      </div>
    
      
    
    </div>
    
    
  )
}

export default Hero