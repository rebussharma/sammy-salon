import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faFaceSmileBeam } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import '../../../../css/appointment/book/cancel/CancelMessageAndMailer.css';
import EmailSender from '../../../EmailSender';
import { PopUpContext } from '../../PopUp';
import ErrorDisplay from '../finalMessage/ErrorDisplay';


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
  cancelStatus:number
  appointmentId:number|undefined
  confirmedData: any
}

const CancelMessageAndMailer:React.FC<CancelStatus> = (prop:CancelStatus) =>{
  const {setPopUp} = useContext(PopUpContext)
  
  const clientDetailsAppt = [
                              prop.confirmedData["clientName"], prop.confirmedData["clientEmail"], prop.confirmedData["clientPhone"], 
                              prop.confirmedData["clientMessage"],prop.confirmedData["appointmentDateTime"],prop.confirmedData["serviceType"],
                              prop.confirmedData["artist"],prop.confirmedData["appointmentStatus"], prop.confirmedData["confirmationCode"]
                            ]  

  return (
    <React.Fragment>
      <Fade duration={700} direction="right">
        {
          prop.cancelStatus === 1 ? 
            (
              <div className='cancel-success'>
                <MessageWrapper>
                  <div className='cancel-icon-wrapper'>
                  <FontAwesomeIcon icon={faCheckCircle as IconProp} /> 
                        <FontAwesomeIcon icon={faFaceSmileBeam} />
                        <FontAwesomeIcon icon={faFaceSmileBeam} />
                        <FontAwesomeIcon icon={faCheckCircle as IconProp} /> 
                  </div>
                  <div className='cancel-success'>
                    <SuccessMessage className="cancel-message">Your Appointment Has Been Cancelled</SuccessMessage>
                    <SuccessMessage className="cancel-details">A cancellation email has been sent to you.</SuccessMessage>

                    <EmailSender nameResetter={()=>{}} phoneResetter={()=>{}} emailResetter={()=>{}} messageResetter={()=>{}} bookedResetter={()=>{}} clientDetails={clientDetailsAppt} setEmailSent={()=>{}} contactForm={false}></EmailSender>

                  </div>
                </MessageWrapper>
                <div className='cancel-btn-wapper'>
                  <Button onClick={()=>setPopUp(false)}> Go to Home Page </Button>
                </div>
              </div>
            )
            : 
            (
              <div className='message-paper'>
                <div className='cancel-error'>
                  <ErrorDisplay></ErrorDisplay>
                </div>
                <button className="back-home-button" onClick={() => setPopUp(false)}>
                  Back to Home
                </button>
              </div>
            )
            
        }
      </Fade>
    </React.Fragment>
  )
}

export default CancelMessageAndMailer