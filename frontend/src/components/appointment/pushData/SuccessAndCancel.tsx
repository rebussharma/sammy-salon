import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import axios from 'axios';
import React, { useContext } from 'react';
import '../../../css/appointment/pushData/SuccessAndCancel.css';
import EmailSender from '../../EmailSender';
import { PopUpContext } from '../PopUp';
import ErrorDisplay from '../book/finalMessage/ErrorDisplay';

interface Props {
  appointmentId: number | undefined;
  setCancelledStatus(val: number): void;
  postDataCancel: any;
}

const SuccessAndCancel: React.FC<Props> = ({ appointmentId, setCancelledStatus, postDataCancel }) => {
const { setPopUp } = useContext(PopUpContext);
const clientDetailsAppt = [
postDataCancel.clientName,
postDataCancel.clientEmail,
postDataCancel.clientPhone,
postDataCancel.clientMessage,
postDataCancel.appointmentDateTime,
postDataCancel.serviceType,
postDataCancel.artist,
postDataCancel.appointmentStatus,
postDataCancel.confirmationCode,
];
const handleCancelAppointment = () => {
  postDataCancel.appointmentStatus = "cancelled";
  axios.put(`http://localhost:8080/api/appointments/${appointmentId}`, postDataCancel)
    .then(function (response) {
      setCancelledStatus(1);
      console.log("Appointment Cancelled", response);
    })
    .catch(function (error) {
      setCancelledStatus(-1);
      console.error("Error Cancelling Appointment", error);
    });
};
const isError = appointmentId === -1 || !appointmentId;
return (
  <div className="success-cancel-container">
    <div className="message-paper">
      {isError ? (
        <div className='success-error'>
          <ErrorDisplay></ErrorDisplay>
        </div>
      ) : (
        <>
          <CheckCircleIcon className="success-icon" />

          <h2 className="message-title">Appointment Confirmed!</h2>
          <p className="confirmation-code">Confirmation Code: {clientDetailsAppt[8]}</p>
          <p className="message-body">
            We have sent you an email with all the details.
          </p>
          <h3 className="message-title">See You Soon!</h3>
          <EmailSender
            nameResetter={() => {}}
            phoneResetter={() => {}}
            emailResetter={() => {}}
            messageResetter={() => {}}
            bookedResetter={() => {}}
            clientDetails={clientDetailsAppt}
            setEmailSent={() => {}}
            contactForm={false}
          />
          <div className="button-wrapper">
            <button className="cancel-button" onClick={handleCancelAppointment}>
              Cancel Appointment
            </button>
          </div>
        </>
      )}

      <button className="back-home-button" onClick={() => setPopUp(false)}>
        Back to Home
      </button>
    </div>
  </div>
);
}
        
export default SuccessAndCancel