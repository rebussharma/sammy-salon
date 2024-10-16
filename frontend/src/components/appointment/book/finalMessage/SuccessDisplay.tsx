import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import '../../../../css/appointment/book/finalMessage/SuccessDisplay.css';
import EmailSender from '../../../EmailSender';

type Props = {
    confirmedData: any
}

function SuccessDisplay(prop: Props) {
    const clientDetailsAppt = [
        prop.confirmedData["clientName"], prop.confirmedData["clientEmail"], prop.confirmedData["clientPhone"], 
        prop.confirmedData["clientMessage"],prop.confirmedData["appointmentDateTime"],prop.confirmedData["serviceType"],
        prop.confirmedData["artist"],prop.confirmedData["appointmentStatus"], prop.confirmedData["confirmationCode"]
      ]  
    const confirmCode = prop.confirmedData["confirmationCode"]
  return (
    <div className='success-display'>
        <div className='success-icon'>
            <CheckCircleIcon className="icon" />
        </div>
        {
            prop.confirmedData ?
            (
                <div className='success-booking'>
                    <h2 className="message-title">Appointment Confirmed!</h2>
                    <p className="confirmation-code">Confirmation Code: {confirmCode}</p>
                    <p className="message-body">
                        We have sent you an email with all the details.
                    </p>
                    <h3 className="see-you">See You Soon!</h3>
                </div>
            )
            :
            (
                <div className='success-cancel'>
                    <h2 className="message-title">Appointment Cancelled!</h2>
                    <p className="message-body">
                        We have sent you a verification email of the cancellation.
                    </p>
                    <h3 className="see-you">Hope to See You Next Time</h3>
                </div>
            )
        }

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
    </div>
  )
}

export default SuccessDisplay