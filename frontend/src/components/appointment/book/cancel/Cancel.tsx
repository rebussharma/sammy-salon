import { Button } from "@mui/material";
import axios from "axios";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { Input, InputWrapper } from '../../../../styles/Inputs.styles';
import CancelMessageAndMailer from "./CancelMessageAndMailer";


const Cancel = () => {
  const [confirmationCode, setConfirmationCode] = useState('')
  const [cancelStatus, setCancelStatus] = useState(0)
  const [appointmentData, setAppointmenData] = useState<any>({})
  const [appointmentId, setAppointmentId] = useState(-1)

  const confirmationCodehandler: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmationCode((e.target as HTMLInputElement).value);
  };

  const getAppointmentByConfirmationCode = async (code: string) => {
    const UPCOMING_APPOINTMENT_URL = `http://localhost:8080/api/appointments/confirmed/${code}`;
  
    try {
        const response = await axios.get(UPCOMING_APPOINTMENT_URL);
        return response.data; // Return the data from the response
    } catch (error) {
        console.error("Error Getting Appointments", error);
        // Optionally, return a specific value or rethrow the error
        throw error; // Re-throw the error so the caller can handle it
    }
  }

  const pushCancelData = async (data:any) => {
    data["appointmentStatus"] = "cancelled"    

    axios.put(`http://localhost:8080/api/appointments/${data["id"]}`, data)
    .then(function (response) {
      setCancelStatus(1)
      console.log("Appointment Cancelled", response);
    })
    .catch(function (error) {
      setCancelStatus(-1)
      console.error("Error Cancelling Appointment",error);
    });
  }

  const handleCancel = async () => {
    // search appointment by confirmation number
    try{
      let data = await getAppointmentByConfirmationCode(confirmationCode)
      setAppointmenData(data)
      setAppointmentId(appointmentData["id"])
      await pushCancelData(data)
      
    }catch{
        console.log("Error");
        
    }
  }

  return (
    cancelStatus === 0 ? (
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
    :
    (
      <CancelMessageAndMailer cancelStatus={cancelStatus} appointmentId={appointmentData["id"]} confirmedData={appointmentData}></CancelMessageAndMailer>
    )

    
  )
}

export default Cancel