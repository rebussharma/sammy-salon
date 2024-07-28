import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faFaceFrown, faFaceSadCry, faFaceSmileBeam, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';
import axios from 'axios';
import React, { useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import '../../../css/appointment/SuccessPage.css';
import EmailSender from '../../EmailSender';
import { PopUpContext } from '../PopUp';

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
type Props = {
  appointmentId: number|undefined
  setCancelledStatus(val:number): void;
  postDataCancel: any
}

const SuccessAndCancel: React.FC<Props> = (prop: Props) => {
  const {popUp, setPopUp} = useContext(PopUpContext)
  
  const clientDetailsAppt = [
                              prop.postDataCancel["clientName"], prop.postDataCancel["clientEmail"], prop.postDataCancel["clientPhone"], prop.postDataCancel["clientMessage"],
                              prop.postDataCancel["appointmentDateTime"],prop.postDataCancel["serviceType"],prop.postDataCancel["artist"],prop.postDataCancel["appointmentStatus"],
                              prop.postDataCancel["confirmationCode"]
                            ]
  console.log("hello",prop.postDataCancel);
  
  const handleCancelAppointment = () =>{
    prop.postDataCancel["appointmentStatus"] = "cancelled"    

    axios.put(`http://localhost:8080/api/appointments/${prop.appointmentId}`, prop.postDataCancel)
    .then(function (response) {
      prop.setCancelledStatus(1)
      console.log("Appointment Cancelled", response);
    })
    .catch(function (error) {
      prop.setCancelledStatus(-1)
      console.error("Error Cancelling Appointment",error);
    });
  }
    
  return (
    <React.Fragment>
      <Fade duration={700} direction="right">
        { 
          (prop.appointmentId === -1 || !prop.appointmentId)?
          (
            <div className='error'>

              <MessageWrapper>
                <div className='icon-wrapper' id='error-icon-wrapper'>
                  <FontAwesomeIcon icon={faXmark as IconProp} /> 
                  <FontAwesomeIcon icon={faFaceFrown as IconProp} />
                  <FontAwesomeIcon icon={faFaceSadCry} />
                  <FontAwesomeIcon icon={faXmark as IconProp} /> 
                </div>

              <SuccessMessage id="success-message-error">We Ran an Into an Issue; Please Call or Email Us to Book</SuccessMessage>
              </MessageWrapper>
              <div className='success-btn-wapper'>
                <div className='error-contact'>
                  <Button href='tel://8322791992'> Call Us: (832) 279-1992</Button>
                  <Button href={`mailto:sammysbrow@gmail.com?subject=Book Appointment`}>Email Us</Button>
                </div>
                <Button onClick={() => setPopUp(false)}> Back to Home</Button>
              </div>
            </div>

          )
          :
          (
            <div className='success'>
              <MessageWrapper>
                <div className='success-icon-wrapper'>
                  <FontAwesomeIcon icon={faCheckCircle as IconProp} /> 
                  <FontAwesomeIcon icon={faFaceSmileBeam} />
                  <FontAwesomeIcon icon={faFaceSmileBeam} />
                  <FontAwesomeIcon icon={faCheckCircle as IconProp} /> 
                </div>
                <div className='success-message'>
                  <SuccessMessage className="confirmation">Appointment Confirmed!!</SuccessMessage>
                  <SuccessMessage className="confirmation-code">Confirmation Code: {clientDetailsAppt[8]}</SuccessMessage>
                  <SuccessMessage className="cancel-notice">We Have Sent You an Email With All the Details</SuccessMessage>
                  <SuccessMessage className="see-you">See You Soon!!</SuccessMessage>
                  <EmailSender nameResetter={()=>{}} phoneResetter={()=>{}} emailResetter={()=>{}} messageResetter={()=>{}} bookedResetter={()=>{}} clientDetails={clientDetailsAppt} setEmailSent={()=>{}} contactForm={false}></EmailSender>
                </div>

              </MessageWrapper>
              <div className='success-btn-wapper'>
                <Button onClick={handleCancelAppointment}> Cancel Appointment</Button>
                <Button onClick={() => setPopUp(false)}> Back to Home</Button>
              </div>
            </div>
          )
        }

      </Fade>
    </React.Fragment>
  );
};

export default SuccessAndCancel;