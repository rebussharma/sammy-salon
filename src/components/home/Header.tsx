import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faSquareFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.svg';
import '../../css/home/Header.css';


const Header: React.FC = () => {
  return (
    <div className='header_box'>
        <div className='direct_call'><FontAwesomeIcon icon={faPhone as IconProp} /> 
          <a href="tel:832-935-0587">  (832) 279 1992</a>
        </div>
        <div className="logo">
            <Link className="home_btn" to="home" smooth={true} offset={-100} duration={500}>
              <img className="logo_img" src={logo} alt="fireSpot"/>
            </Link>
        </div>
        <div className='socials'>
            <FontAwesomeIcon icon={faSquareFacebook as IconProp} />    
            <FontAwesomeIcon icon={faInstagram as IconProp} />
            <FontAwesomeIcon icon={faTiktok as IconProp} />
        </div>
    </div>
  )
}

export default Header