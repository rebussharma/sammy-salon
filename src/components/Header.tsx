import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faSquareFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import logo from '../assets/logo.svg';
import '../css/Header.css';


const Header: React.FC = () => {
  return (
    <div className='header_box'>
        <div className='direct_call'><FontAwesomeIcon icon={faPhone as IconProp} /> 832-935-0587</div>
        <div className="logo">
            <Link smooth to="#home" className="home_btn">
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