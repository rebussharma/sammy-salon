import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
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


type Props = {
    setAppointmentId(id: number):void
    setConfirmationStatus(value:boolean): void
    setEditStatus(value:boolean):void
    postDataConfirm: any
}


const ConfirmPage:React.FC<Props> = (prop:Props) => {  
  const handleConfirmation=()=> {
      prop.setConfirmationStatus(true)
      prop.postDataConfirm["appointmentStatus"] = "confirmed"    

      axios.post('http://localhost:8080/api/appointments', prop.postDataConfirm)
      .then(function (response) {
        console.log("Appointment Confirmed",response);
        prop.setAppointmentId(response.data.id)
      })
      .catch(function (error) {
        console.error("Error Booking Appointment",error);
        prop.setAppointmentId(-1)
      });
  }

  const apptDateTime = new Date(prop.postDataConfirm["appointmentDateTime"])
  return (
    <div>
      <React.Fragment>
        <Fade duration={700} direction="right">
          <div className="confirm name">
            Hi, {prop.postDataConfirm["clientName"]}. Please Confirm Your Appointment
          </div>
          <div className="confirm date-time">
            Your Appointment is set for: {apptDateTime.toDateString()} at {apptDateTime.toLocaleString([],{
              hour:'2-digit',
              minute:'2-digit'
            })}
          </div>
          <div className="confrim service">
            Service Requested: {prop.postDataConfirm["serviceType"]}
          </div>
          <div className="confrim artist">
            Artist Requested: {prop.postDataConfirm["artist"]}
          </div>
          <div className="confrim personal-details">
            <div className="confirm phone">
              Your Phone: {prop.postDataConfirm["clientPhone"]}
            </div>
            <div className="confirm email">
              Your Email: {prop.postDataConfirm["clientEmail"]}
            </div>
          </div>
          <div className="confrim appointment-note">
            Message to Artist: {prop.postDataConfirm["appointmentNotes"]}
          </div>
          <Button onClick={handleConfirmation}>Confirm Appointment</Button>
          <Button onClick={()=>prop.setEditStatus(true)}>Make Changes</Button>
        </Fade>
    </React.Fragment>
    </div>
  )
}

export default ConfirmPage