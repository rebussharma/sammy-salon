import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faSquareFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-scroll';
import '../../css/footer/Footer.css';
import Conact from './contact/Contact';

const logo = process.env.PUBLIC_URL + '/images/home/logo.png'

const Footer:React.FC = () => {
  return (
    <div className='footer'>
      <div className='footer-wrapper'>
      <div className='motto-logo'>
        <div className='footer-logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='business-name'>
          Sammy's Brow Bar & Spa
        </div>
        <div className='footer-motto'>
          "Satisfaction Over Transaction"
        </div>
        <div className='footer-socials'>
            <FontAwesomeIcon icon={faSquareFacebook as IconProp} />    
            <FontAwesomeIcon icon={faInstagram as IconProp} />
            <FontAwesomeIcon icon={faTiktok as IconProp} />
        </div>
      </div>

      <div className='footer-services'>
        <div className='title'>
          Our Services
        </div>
        <div className='items-wrapper'>
          <ul className='items'>
            <li className='item'>
                            <Link to="services" spy={true} smooth={true} offset={0} duration={500}>Threadings</Link>
            </li>
            <li className='item'>
                            <Link to="services" spy={true} smooth={true} offset={0} duration={500}>Lashes</Link>
            </li>
            <li className='item'>
                            <Link to="services" spy={true} smooth={true} offset={0} duration={500}>Facials</Link>
            </li>
            <li className='item'>
                            <Link to="services" spy={true} smooth={true} offset={0} duration={500}>Waxings</Link>
            </li>
            <li className='item'>
                            <Link to="services" spy={true} smooth={true} offset={0} duration={500}>Tintings</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='contact-wrapper'>
        <Conact></Conact>
      </div>
      </div>
      <div className='copyrights'>
        <div className='copyright'>
          © Sammy's Beauty Solutions. All rights reserved
        </div>
          <div className='credit'>
            Made by <a href="https://www.ribashsharma.com" target='_blank' rel='noreferrer'>Ribash Sharma</a>
          </div>
      </div>

    </div>
  )
}

export default Footer