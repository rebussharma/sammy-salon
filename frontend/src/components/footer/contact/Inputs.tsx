import { Input } from '@mui/material';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import React, { ChangeEvent, ChangeEventHandler, useEffect } from 'react';
import '../../../styles/Inputs.styles';
import { InputBoxWrapper, InputWrapper, MessageInput } from '../../../styles/Inputs.styles';

import emailjs from '@emailjs/browser';
import '../../../css/footer/contact/Inputs.css';

type BookingStatus = {
  dateTimeStaus:boolean,
  bookingMode: boolean,
  setBookingMode: (newState: boolean) => void;
}

const Inputs:React.FC<BookingStatus> = ({
  dateTimeStaus,bookingMode, setBookingMode
}: BookingStatus) => {

  
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [successVal, setSuccessVal] = React.useState(true);
  const [success, setSuccess] = React.useState(0);

  const message_placeholder = bookingMode ? "If You Want to Add More Info, Write Here" : "Write Your Message Here" 
  const submit_btn_text = bookingMode ? "Book Appointment" : "Send Message"
  const phone_required = bookingMode ? true : false
  const message_required = bookingMode ? false : true

  const nameHandler: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName((e.target as HTMLInputElement).value);    
  };

  const emailHandler: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail((e.target as HTMLInputElement).value);
    
  };

  const phoneHandler: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone((e.target as HTMLInputElement).value);
  };
  const messageHandler: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage((e.target as HTMLInputElement).value);       
  };

  useEffect(() => emailjs.init("48zrrLrcyVtY6tuNs"), []);

  const handleSubmit =  (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // e.preventDefault();
    // const serviceId = "service_hr7wfln";
    // const templateId = "template_y1syqfc";

    if(!phone){
      console.log("Phone Number is empty");
    }
    setBookingMode(true)
    // if(email !== null || email !== '' || !email){
      // emailjs
      //   .send(serviceId, templateId, {
      //     to_name: name, recipient: email, message: message
      //   })
      //   .then(
      //     () => {
      //       console.log('SUCCESS!');
      //       setSuccessVal(true);
      //     },
      //     (error) => {
      //       console.log('FAILED...', error.text);
      //       setSuccessVal(true);
      //     },
      //   );

    // }else{
    //   console.log("Email not sent to customer as email was not provided")
    // }

    // emailjs
    // .send(serviceId, "template_wthysze", {
    //   to_name: name, recipient: "sammysbrow@gmail.com", message: message, customer_phone: phone, customer_email:email
    // })
    // .then(
    //   () => {
    //     console.log('Sent Email to Sammys Brow!');
    //     setSuccess(1);
    //   },
    //   (error) => {
    //     console.log('Failed Sending Email to Sammys Brow!...', error.text);
    //     setSuccess(-1);
    //   },
    // );

    setName('');
    setEmail('');
    setMessage('');
    setPhone('')

  };
  
  return (
    <div className='inputs'>
    <InputBoxWrapper className='InputBoxWrapper'>
      <InputWrapper className='InputWrapper'>
        <Input className='Input'
          type="text" 
          placeholder="Full Name" 
          value={name} 
          onChange={nameHandler} />
      </InputWrapper>
      <InputWrapper className='InputWrapper'>
        <Input className='Input'
          type="email"
          placeholder="Email"
          value={email}
          onChange={emailHandler}
          
        />
      </InputWrapper>
      <InputWrapper className='InputWrapper'>
        <Input className='Input'
          type="number"   
          placeholder="Phone Number"
          required={phone_required}
          value={phone}
          onChange={phoneHandler}
        />
      </InputWrapper>
      <InputWrapper className='InputWrapper'>
        <MessageInput className='MessageInput'
          maxLength={2000}
          required={message_required}
          placeholder={message_placeholder}
          value={message}
          onChange={messageHandler}
        />
      </InputWrapper> 
      <Button disabled={bookingMode ? (dateTimeStaus ? (phone ? false: !email) : true) : !message} className="btn_submit" variant="contained" onClick={handleSubmit}>{submit_btn_text}</Button>
        {
          success === 1 ? (
            <Slide direction="up" in={successVal} mountOnEnter unmountOnExit>
              <Fade
                in={successVal}
                timeout={{ enter: 1000, exit: 1000 }} 
                addEndListener={() => {
                  setTimeout(() => {
                    setSuccessVal(false)
                  }, 2000);
                  }
                }   
              >
                <Stack sx={{ width: '100%' }} spacing={2}>
                  <Alert severity="success">Message Sent Successfully</Alert>
                </Stack>
              </Fade>
            </Slide>
          ): (success === -1) ?
            <Slide direction="up" in={successVal} mountOnEnter unmountOnExit>
            <Fade
              in={successVal}
              timeout={{ enter: 1000, exit: 1000 }} 
              addEndListener={() => {
                setTimeout(() => {
                  setSuccessVal(false)
                }, 2000);
                }
              }   
            >
              <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="error">Something Went Wrong. Please Try Again Later</Alert>
              </Stack>
            </Fade>
          </Slide>

          : ("")
        }
    </InputBoxWrapper>
    </div>
  );
};

export default Inputs;