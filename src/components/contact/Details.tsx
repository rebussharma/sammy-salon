import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../css/contact/Details.css';
import '../../styles/Details.styles';
import { BigCircle, ContactText, ContactsWrapper, DetailsBarWrapper, SmallCircle, TextOne, TextWrapper } from '../../styles/Details.styles';

const Details: React.FC= () => {
  return (
    <DetailsBarWrapper>
      <TextWrapper>
        <TextOne>Contact Information</TextOne>
      </TextWrapper>
      <div>
        <ContactsWrapper href="tel:8329350587">
          <FontAwesomeIcon icon={faPhone as IconProp} /> 
          <ContactText>(832) 935 0587</ContactText>
        </ContactsWrapper>

        <ContactsWrapper href="mailto:support@sammysbrow.com">
          <FontAwesomeIcon icon={faEnvelope as IconProp} /> 
          <ContactText>support@sammysbrow.com</ContactText>
        </ContactsWrapper>

        <ContactsWrapper href="https://maps.app.goo.gl/aYPwHmEqT6tA63d28">
          <FontAwesomeIcon icon={faMapLocationDot as IconProp} />
          <div className='address-display'>
            <ContactText className='street-address'>123 Some Street </ContactText>
            <ContactText className='city-state-zip'>Pflugerville, Texas 78660</ContactText>
          </div>

        </ContactsWrapper>
      </div>

      <div className='design-circles'>
        <BigCircle></BigCircle>
        <SmallCircle></SmallCircle>
      </div>
    </DetailsBarWrapper>
  );
};

export default Details;