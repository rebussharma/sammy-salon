import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../../css/footer/contact/Details.css';
import '../../../styles/Details.styles';
import { BigCircle, ContactText, ContactsWrapper, DetailsBarWrapper, SmallCircle, TextOne, TextWrapper } from '../../../styles/Details.styles';

const Details: React.FC= () => {
  return (
    <DetailsBarWrapper className = 'DetailsBarWrapper'>
      <TextWrapper className = 'TextWrapper'>
        <TextOne className = 'TextOne'>Contact Information</TextOne>
      </TextWrapper>
      <div>
        <ContactsWrapper className = 'ContactsWrapper' href="tel:1234560587">
          <FontAwesomeIcon icon={faPhone as IconProp} /> 
          <ContactText className = 'ContactText'>(123) 456 0587</ContactText>
        </ContactsWrapper>

        <ContactsWrapper className = 'ContactsWrapper' href="mailto:support@sammysbrow.com">
          <FontAwesomeIcon icon={faEnvelope as IconProp} /> 
          <ContactText className = 'ContactText'>support@sammysbrow.com</ContactText>
        </ContactsWrapper>

        <ContactsWrapper className = 'ContactsWrapper' href="https://maps.app.goo.gl/aYPwHmEqT6tA63d28">
          <FontAwesomeIcon icon={faMapLocationDot as IconProp} />
          <div className='address-display'>
            <ContactText className='street-address'>123 Some Street </ContactText>
            <ContactText className='city-state-zip'>Pflugerville, Texas 78660</ContactText>
          </div>

        </ContactsWrapper>
      </div>

      <div className='design-circles'>
        <BigCircle className = 'BigCircle'></BigCircle>
        <SmallCircle className = 'SmallCircle'></SmallCircle>
      </div>
    </DetailsBarWrapper>
  );
};

export default Details;