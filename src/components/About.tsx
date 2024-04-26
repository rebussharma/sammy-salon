import React from 'react'
import '../css/About.css'

const About: React.FC = () => {
  const headshot = process.env.PUBLIC_URL + '/images/headshot.png'
  const story_1 = "After over 10 years of Sammy pouring her heart and soul into the beauty business, " +
  "Sammy sensed that a deeper connection with those she served was missing."
  const story_2 =
  "Determined to create a space where customers felt truly valued and welcomed, she took a leap of faith and opened this studio"

  const about_sammmy1 = "Sammy has over 10 years of experience in the beauty industry."
  const about_sammmy2 = "Within each stroke of her brush and every gentle conversation, " +
  "Sammy believes that that success isn't just measured in profits, but in the smiles of those she touched. "
  
  return (
    <div className="about" id="about">
      <div className='title'>
        Story About Us
      </div>
      <div className='contents' id='contents'>
        <div className='content-wrapper'>
          <div className='mini-circle'></div>
          <div className='story-box'>
            <div className='web-title'>
              <h5>"Satisfaction Before Transaction"</h5>
              <h2>Our Story</h2>
            </div>
            <div className='story one'>
              {story_1}
              <br></br>
              <br></br>
              {story_2}
            </div>
            <div className='web-headshot'>
              <img src={headshot} alt='sammy-headshot'/>
              <div className='web-name'>
                  <div className='web-name-text'>Sammy Shrestha</div>
                </div>
            </div>
          </div>
          
          <div className='team'>
            <div className='sammy'>
              <div className='headshot-name'>
                < div className='headshot'>
                  <img src={headshot} alt='sammy-headshot'/>
                </div>
                <div className='name'>
                  <div className='name-text'>Sammy Shrestha</div>
                </div>
              </div>
              <div className='info'>
                <h3> Your Esthetician</h3>
                {about_sammmy1}
                <br></br>
                <br></br>
                {about_sammmy2}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About