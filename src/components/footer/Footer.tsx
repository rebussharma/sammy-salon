import React from 'react'
import '../../css/footer/Footer.css'
import Conact from './contact/Contact'

const Footer:React.FC = () => {
  return (
    <div className='footer'>
      <div className='contact-wrapper'>
        <Conact></Conact>
      </div>
      <div className='footer-details'>

      </div>
    </div>
  )
}

export default Footer