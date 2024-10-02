import { Button } from "@mui/material";
import axios from "axios";
import { ChangeEvent, ChangeEventHandler, useContext, useState } from "react";
import '../../../../css/appointment/book/cancel/Cancel.css';
import { Input, InputWrapper } from '../../../../styles/Inputs.styles';
import { PopUpContext } from "../../PopUp";
import CancelMessageAndMailer from "./CancelMessageAndMailer";

const Cancel:React.FC= () => {
  const { pushView } = useContext(PopUpContext);

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
      setCancelStatus(1)
      await pushCancelData(data)
      
    }catch{
        console.log("Error");
        setCancelStatus(-1)
    }
  }

  return (
    cancelStatus === 0 ? (
      <div className="cancel">
        <div className="cancel-title">
          Please Enter your confirmation code below
        </div>
        <div className="confirmation-input">
          <InputWrapper className='InputWrapper'>
                <Input className='Input'
                  type="number"   
                  placeholder="10101"
                  required={true}
                  value={confirmationCode}
                  onChange={confirmationCodehandler}
                />
          </InputWrapper>
        </div>
      <Button disabled={!confirmationCode} className="cancel-btn" onClick={handleCancel}>Cancel Appointment</Button>
    </div>
    )
    :
    (
      <CancelMessageAndMailer cancelStatus={cancelStatus} appointmentId={appointmentId} confirmedData={appointmentData}></CancelMessageAndMailer>
    )

    
  )
}

export default Cancel