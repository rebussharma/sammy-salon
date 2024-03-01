import React from 'react'
import headshot from '../assets/headshot.png'
import '../css/About.css'

const About: React.FC = () => {
  const story_1 = "After over 10 years of Sammy pouring her heart and soul into the beauty business, " +
  "Sammy sensed that a deeper connection with those she served was missing. "+
  "Determined to create a space where customers felt truly valued and welcomed, she took a leap of faith and opened this studio"

  const about_sammmy = "Sammy has over 10 years of experience in the beauty industry. " +
  "Within each stroke of her brush and every gentle conversation, " +
  "Sammy believes that that success isn't just measured in profits, but in the smiles of those she touched. "
  
  const motto = "Satisfaction over transactions"

  return (
    <div className="about" id="about">
      <div className='title'>
        Story About Us
      </div>
      <div className='contents'>
        <div className='mini-circle'></div>
        <div className='web-title'></div>
        <div className='story-box'>
          <div className='story one'>
            {story_1}
          </div>
        </div>
        
        <div className='team'>
          <div className='sammy'>
            <div className='headshot-name'>
              < div className='headshot'>
                <img src={headshot} />
              </div>
              <div className='name'>
                <div className='name-text'>Sammy Shrestha</div>
              </div>
            </div>
            <div className='info'>
              {about_sammmy}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About