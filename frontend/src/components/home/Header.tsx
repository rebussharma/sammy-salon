import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faSquareFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-scroll';
import '../../css/home/Header.css';

const logo = process.env.PUBLIC_URL + '/images/home/main_logo.png';

const Header: React.FC = () => {
  return (
    <div className='header_box'>
        <div className='direct-call'><FontAwesomeIcon icon={faPhone as IconProp} /> 
          <a href="tel:123-456-0587">  (123) 456 1992</a>
        </div>
        <div className="logo">
            <Link className="home_btn" to="home" smooth={true} offset={-100} duration={500}>
              <img className="logo_img" src={logo} alt="main_logo"/>
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