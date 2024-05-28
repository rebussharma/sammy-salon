import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faFaceFrown, faFaceSadCry, faFaceSmileBeam, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import '../../css/appointment/CancelPage.css';
import { PopUpContext } from './PopUp';


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

type CancelStatus = {
  status:number
  appointmentId:number|undefined
}

const CancelPage:React.FC<CancelStatus> = (prop:CancelStatus) =>{
  const {popUp, setPopUp} = useContext(PopUpContext)

  return (
    <React.Fragment>
    <Fade duration={700} direction="right">
      {
        prop.status === 1 ? 
          (
            <div className='cancel-success'>
              <MessageWrapper>
                <div className='cancel-icon-wrapper'>
                <FontAwesomeIcon icon={faCheckCircle as IconProp} /> 
                      <FontAwesomeIcon icon={faFaceSmileBeam} />
                      <FontAwesomeIcon icon={faFaceSmileBeam} />
                      <FontAwesomeIcon icon={faCheckCircle as IconProp} /> 
                </div>
                <SuccessMessage className="cancel-message">Your Appointment has been Cancelled</SuccessMessage>
              </MessageWrapper>
              <div className='cancel-btn-wapper'>
                <Button onClick={()=>setPopUp(false)}> Go to Home Page </Button>
              </div>
            </div>
    ): (
            <div className='cancel-error'>
              <MessageWrapper>
                <div className='icon-wrapper' id='error-icon-wrapper'>
                  <FontAwesomeIcon icon={faXmark as IconProp} /> 
                  <FontAwesomeIcon icon={faFaceFrown as IconProp} />
                  <FontAwesomeIcon icon={faFaceSadCry} />
                  <FontAwesomeIcon icon={faXmark as IconProp} /> 
                </div>

              <SuccessMessage id="success-message-error">We Ran an Into an Issue; Please Call or Email Us to Cancel</SuccessMessage>
              </MessageWrapper>
              <div className='success-btn-wapper'>
                <Button href='tel:8322791992'> Call Us: (832) 279-1992</Button>
                <Button href={`mailto:sammysbrow@gmail.com?subject=Cancel Appointment Confirmation ${prop.appointmentId}`}>Email Us</Button>
                <Button onClick={()=>setPopUp(false)}> Back to Home</Button>
              </div>
            </div>
    )
  }
    </Fade>
    </React.Fragment>

  )
}

export default CancelPage