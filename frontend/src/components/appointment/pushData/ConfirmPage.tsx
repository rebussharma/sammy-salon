import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import '../../../css/appointment/pushData/ConfirmPage.css';


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
    setDataConfirm(data:any):void
}


const ConfirmPage:React.FC<Props> = (prop:Props) => {  
  const handleConfirmation=()=> {
      prop.setConfirmationStatus(true)
      prop.postDataConfirm["appointmentStatus"] = "confirmed"    

      axios.post('http://localhost:8080/api/appointments', prop.postDataConfirm)
      .then(function (response) {
        console.log("Appointment Confirmed",response);
        prop.setAppointmentId(response.data.id)
        prop.setDataConfirm(response.data)
      })
      .catch(function (error) {
        console.error("Error Booking Appointment",error);
        prop.setAppointmentId(-1)
      });
  }

  const apptDateTime = new Date(prop.postDataConfirm["appointmentDateTime"])
  return (
    <div className="confirm-page">
      <React.Fragment>
        <Fade duration={700} direction="right">
          <div className="confirm-details">
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
            <div className="confirm phone">
              Your Phone: {prop.postDataConfirm["clientPhone"]}
            </div>
            <div className="confirm email">
              Your Email: {prop.postDataConfirm["clientEmail"]}
            </div>
            <div className="confrim appointment-note">
              Message to Artist: {prop.postDataConfirm["appointmentNotes"]}
            </div>
          </div>
          <div className="confirm-edit-btn">
            <Button className="confirm-btn" onClick={handleConfirmation}>Confirm Appointment</Button>
            <Button className="edit-appt" onClick={()=>prop.setEditStatus(true)}>Make Changes</Button>
          </div>
        </Fade>
    </React.Fragment>
    </div>
  )
}

export default ConfirmPage