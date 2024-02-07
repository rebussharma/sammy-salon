import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
const MessageWrapper = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SuccessMessage = styled.h2`
  font-size: 25px;
  color: rgb(8, 8, 63);
  text-align: center;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SuccessPage = () => {
  return (
    <React.Fragment>
      <Fade duration={700} direction="right">
        <MessageWrapper>
        <FontAwesomeIcon icon={faCheckCircle as IconProp} /> 
          <SuccessMessage className="sucess-message">MESSAGE SENT SUCCESSFULLY</SuccessMessage>
        </MessageWrapper>
      </Fade>
    </React.Fragment>
  );
};

export default SuccessPage;