import { Button } from "@mui/material";
import axios from "axios";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { Input, InputWrapper } from '../../../../styles/Inputs.styles';

function getAppointmentByConfirmationCode(code:string){
  const UPCOMING_APPOINTMENT_URL = "http://localhost:8080/api/appointments/confirmed/upcoming"

  useEffect(() => {  
  axios.get(UPCOMING_APPOINTMENT_URL)
      .then(response => {
          console.log(response)
          return (response?.data)
      })
      .catch(function (error){
          console.error("Error Getting Appointments", error.toJSON());
      })
  }, []);
  
}
const Cancel = () => {
  const [confirmationCode, setConfirmationCode] = useState('')

  const confirmationCodehandler: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmationCode((e.target as HTMLInputElement).value);
  };

  const handleCancel = () => [
    // search appointment by confirmation number
    // let appointment = getAppointmentByConfirmationCode(confirmationCode)
    // appointment["appointmentStatus"] = "cancelled"    

    // axios.put(`http://localhost:8080/api/appointments/${prop.appointmentId}`, appointment)
    // .then(function (response) {
    //   prop.setCancelledStatus(1)
    //   console.log("Appointment Cancelled", response);
    // })
    // .catch(function (error) {
    //   prop.setCancelledStatus(-1)
    //   console.error("Error Cancelling Appointment",error);
    // });
  ]

  return (
    <div className="cancel">
      <div className="confirmation-input">
        <InputWrapper className='InputWrapper'>
              <Input className='Input'
                type="number"   
                placeholder="123456"
                required={true}
                value={confirmationCode}
                onChange={confirmationCodehandler}
              />
        </InputWrapper>
      </div>
      <Button onClick={handleCancel}>Cancel Appointment</Button>
    </div>
    
  )
}

export default Cancel