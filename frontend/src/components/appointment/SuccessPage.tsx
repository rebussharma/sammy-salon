import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import '../../css/appointment/SuccessPage.css';
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
  setCancelledStatus(val:boolean): void;
  postDataCancel: any
}

const SuccessPage: React.FC<Props> = (prop: Props) => {

  const handleCancelAppointment = () =>{
    prop.setCancelledStatus(true)
    prop.postDataCancel["appointmentStatus"] = "cancelled"    

    axios.put(`http://localhost:8080/api/appointments/${prop.appointmentId}`, prop.postDataCancel)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <React.Fragment>
      <Fade duration={700} direction="right">
        <MessageWrapper>
        <FontAwesomeIcon icon={faCheckCircle as IconProp} /> 
          <SuccessMessage className="sucess-message">Appointment Confirmed</SuccessMessage>
        </MessageWrapper>
        <div className='success-btn-wapper'>
          <Button> Back to Home</Button>

          <Button onClick={handleCancelAppointment}> Cancel Appointment</Button>
        </div>
      </Fade>
    </React.Fragment>
  );
};

export default SuccessPage;