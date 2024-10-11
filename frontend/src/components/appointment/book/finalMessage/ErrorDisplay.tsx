import ErrorIcon from '@mui/icons-material/Error';
import '../../../../css/appointment/book/finalMessage/ErrorDisplay.css';
type Props = {}

function ErrorDisplay({}: Props) {
  return (
    <div className='error-display'>
        <div className='error-icon'>
            <ErrorIcon className='icon' />
        </div>

        <h2 className="message-title">We Ran Into an Issue</h2>
        <p className="message-body">
            Please call or email us to book your appointment.
        </p>
        <div className="fail-button-wrapper">
            <a href="tel://8322791992" className="fail-contact call">
                Call Us: (832) 279-1992
            </a>
            <a href="mailto:sammysbrow@gmail.com?subject=Book Appointment" className="fail-contact email">
                Email Us
            </a>
        </div>
    </div>
  )
}

export default ErrorDisplay