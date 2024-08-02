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
  appendInputData: (data:String[]) => void,
  inputOpen:boolean,
  setInputOpen:(val:boolean)=>void}


const Inputs:React.FC<BookingStatus> = ({
  editData, dateTimeStaus, bookingMode, setBookingSubmit, appendInputData, inputOpen, setInputOpen
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
  };
  

  
  const handleInputOpen = () =>{
    inputOpen? 
      setInputOpen(false)
      : setInputOpen(true)
  }

  return (
    <div className='inputs'>
      {
        bookingMode ? 
        (
          <div className='input-selection-header'>
            <Button className='select-button' onClick={handleInputOpen}>
                Step 4: Add Your Information
            </Button>
          </div>
        ):(
          <></>
        )
      }
      {
        inputOpen ?
        (
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
                      setEmailSent = {setEmailConfirmed}
                      contactForm={true}/>            
                ):""
              }
          </InputBoxWrapper>
        ):
        (
          <></>
        )
      }
    </div>
  );
};

export default Inputs;