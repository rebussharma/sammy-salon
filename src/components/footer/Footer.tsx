import React from 'react'
import '../../css/footer/Footer.css'
import Conact from './contact/Contact'

const Footer:React.FC = () => {
  return (
    <div className='footer'>
      <div className='footer-details'>

      </div>
      <div className='contact-wrapper'>
        <Conact></Conact>
      </div>
    </div>
  )
}

export default Footer