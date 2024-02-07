import React from 'react';
import styled from 'styled-components';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DetailsBarWrapper = styled.div`
  background-color: rgb(8, 8, 63);
  border-radius: 7px;
  position: relative;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  padding-bottom: 100px;
  @media (max-width: 768px) {
    padding-bottom: 80px;
    grid-row: 2;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextOne = styled.p`
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const TextTwo = styled.p`
  text-align: center;
  color: #fff;
  font-size: 12px;
  line-height: 18px;
`;

const BigCircle = styled.div`
  height: 50px;
  margin-top: 30px;
  width: 50px;
  background-color: rgb(100, 21, 173);
  border-radius: 100%;
  z-index: 22;
  margin-left: 10px;
`;

const SmallCircle = styled.div`
  position: absolute;
  margin-left: 10px;
  background-color: rgb(252, 113, 137);
  border-radius: 100%;
  height: 30px;
  width: 30px;
`;

const ContactsWrapper = styled.a`
  display: flex;
  width: 200px;
  height: 10px;
  margin-top: 50px;
  cursor: pointer;
  text-decoration: none;
`;

const ContactText = styled.div`
  color: #fff;

  font-size: 15px;
  margin-left: 10px;
`;

const SocialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  display: flex;
  height: 10px;
  justify-content: center;
  bottom: 30px;
  position: absolute;
  cursor: pointer;
`;

const SocialIconWrapper = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgb(252, 113, 137);
  }
`;

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
      </div>

      <div>
        <BigCircle></BigCircle>
        <SmallCircle></SmallCircle>
      </div>
    </DetailsBarWrapper>
  );
};

export default Details;