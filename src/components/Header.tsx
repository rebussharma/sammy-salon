import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faSquareFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../css/Header.css';



const Header = () => {
  return (
    <div className='header_box'>
        <div className='direct_call'><FontAwesomeIcon icon={faPhone as IconProp} /> 832-935-0587</div>
        <div className='socials'>
            <FontAwesomeIcon icon={faSquareFacebook as IconProp} />    
            <FontAwesomeIcon icon={faInstagram as IconProp} />
            <FontAwesomeIcon icon={faTiktok as IconProp} />
        </div>
    </div>
  )
}

export default Header