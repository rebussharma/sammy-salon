import { Input } from '@mui/material';
import Button from '@mui/material/Button';
import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import '../../../styles/Inputs.styles';
import { InputBoxWrapper, InputWrapper, MessageInput } from '../../../styles/Inputs.styles';

import '../../../css/footer/contact/Inputs.css';
import EmailSender from '../../EmailSender';

type BookingStatus = {
  editData: {[key: string]: any},
  dateTimeStaus:boolean,
  bookingMode: boolean,
  setBookingSubmit: (newState: boolean) => void,
  appendInputData: (data:String[]) => void;
}


const Inputs:React.FC<BookingStatus> = ({
  editData, dateTimeStaus, bookingMode, setBookingSubmit, appendInputData
}: BookingStatus) => {
  
  const [name, setName] = useState(editData.hasOwnProperty("clientName") ? editData["clientName"]: "")
  const [email, setEmail] = useState(editData.hasOwnProperty("clientEmail") ? editData["clientEmail"]: "")
  const [phone, setPhone] = useState(editData.hasOwnProperty("clientPhone") ? editData["clientPhone"]: "")
  const [message, setMessage] = useState(editData.hasOwnProperty("appointmentNotes") ? editData["appointmentNotes"]: "")
  const inputData:any = {}
  const allInputFields:any = [name, email, phone, message]
  const allInputFieldsStr:any = ["clientName", "clientEmail", "clientPhone", "appointmentNotes"]

  //
  const [submitPressed, setSubmitPressed] = useState(false)
  const [emailConfirmed, setEmailConfirmed] = useState(false)

  const pushData = ()=> {
    for (const i in allInputFields){
      if(allInputFields[i].length !=0){
        inputData[allInputFieldsStr[i]] = allInputFields[i]
      }
    }
  }


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

  // useEffect(() => emailjs.init("48zrrLrcyVtY6tuNs"), []);

  
  const handleSubmit =  (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if(emailConfirmed) setEmailConfirmed(false)
    e.preventDefault()
    pushData()
    appendInputData(inputData)
    setBookingSubmit(true) ; 
    setSubmitPressed(true)      
    // const serviceId = "service_hr7wfln";
    // const templateId = "template_y1syqfc";

    // if(!phone){
    //   console.log("Phone Number is empty");
    // }
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

  };

  

  return (
    <div className='inputs'>
    <InputBoxWrapper className='InputBoxWrapper'>
      <InputWrapper className='InputWrapper'>
        <Input className='Input'
          type="text" 
          placeholder= {editData.hasOwnProperty("clientName") ? editData["clientName"]: "Full Name"}
          value={name} 
          onChange={nameHandler} />
      </InputWrapper>
      <InputWrapper className='InputWrapper'>
        <Input className='Input'
          type="email"
          placeholder= {editData.hasOwnProperty("clientEmail") ? editData["clientEmail"]: "Email"}
          value={email}
          onChange={emailHandler}
          
        />
      </InputWrapper>
      <InputWrapper className='InputWrapper'>
        <Input className='Input'
          type="number"   
          placeholder= {editData.hasOwnProperty("clientPhone") ? editData["clientPhone"]: "Phone Number"}
          required={phone_required}
          value={phone}
          onChange={phoneHandler}
        />
      </InputWrapper>
      <InputWrapper className='InputWrapper'>
        <MessageInput className='MessageInput'
          maxLength={2000}
          required={message_required}
          placeholder={editData.hasOwnProperty("appointmentNotes") ? editData["appointmentNotes"] : message_placeholder}
          value={message}
          onChange={messageHandler}
        />
      </InputWrapper> 
      <Button disabled={bookingMode ? (dateTimeStaus ? (phone ? false: !email) : true) : !message} className="btn_submit" variant="contained" onClick={handleSubmit}>{submit_btn_text}
      </Button>
        {
          
          submitPressed ? (
              <EmailSender 
                nameResetter={setName}
                phoneResetter={setPhone}
                emailResetter={setEmail}
                messageResetter={setMessage}
                bookedResetter = {setSubmitPressed} 
                clientDetails={allInputFields} 
                setEmailSent = {setEmailConfirmed}/>            
          ):""
        }
        {/* {
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
        } */}
    </InputBoxWrapper>
    </div>
  );
};

export default Inputs;