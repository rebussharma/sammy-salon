import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import React, { useEffect, useState } from 'react';

type ClientDetails = {
  nameResetter(s:string):void,
  phoneResetter(s:string):void,
  emailResetter(s:string):void,
  messageResetter(s:string):void,
  bookedResetter(s:boolean):void,
  clientDetails:String[],
  setEmailSent(val:boolean): void
}

const EmailSender:React.FC<ClientDetails> = (details: ClientDetails) => {
  const [emailSelfSuccess, setEmailSelfSuccess] = useState(false)
  const [emailFinal, setEmailFinal] = useState(false)

  const name = details.clientDetails[0]
  const email = details.clientDetails[1]
  const phone = details.clientDetails[2]
  const message = details.clientDetails[3]
  
  const SERVICE_ID = "service_hr7wfln";
  const TEMPLATE_ID = "template_y1syqfc";
  const PUBLIC_KEY = "48zrrLrcyVtY6tuNs"
  useEffect(() => emailjs.init({publicKey:PUBLIC_KEY}), []);
  
  // if(!phone){
  //   console.log("Client Phone Number is Empty");
  // }
  // if(!email){
  //   console.log("Client Email is Empty");
  // }


  const sendEmailToClient = () => {
    if(email){               
        emailjs
        .send(SERVICE_ID, TEMPLATE_ID, {
          to_name: !name ? "Name not provided" : name, recipient: email, message: message
        },PUBLIC_KEY)
        .then(
          () => {
            console.log(`SUCCESS! Sent Email to ${email}`);
            details.setEmailSent(true)
          },
          (error) => {
            console.log(`FAILED! Error Sending Email to ${email}. Error msg:`, error.text);
          },
        );
      }else{
        emailSelfSuccess ? console.log("Customer Email Empty") : console.log("Self Failed, no email sent");
      }    
  }

  useEffect(()=>{
    emailjs
    .send(SERVICE_ID, "template_wthysze", {
      to_name: !name ? "Name not provided" : name, recipient: "", message: message, customer_phone: phone, customer_email:email
    }, PUBLIC_KEY)
    .then(
      () => {          
        setEmailSelfSuccess(true)
        sendEmailToClient()
        setEmailFinal(true)
        console.log('Sent Email to Sammys Brow!');
      },
      (error) => {
        console.log('Failed Sending Email to Sammys Brow!...', error.text);
        setEmailFinal(true)
      },
    );
  }, [])

  return (
    emailFinal ? 
    (
      <div className='email-sender'>
        {
          <Slide direction="up" in={emailFinal} mountOnEnter unmountOnExit>
          <Fade
            in={emailFinal}
            timeout={{ enter: 1000, exit: 1000 }} 
            addEndListener={() => {
              setTimeout(() => {
                details.nameResetter('')
                details.phoneResetter('')
                details.emailResetter('')
                details.messageResetter('')
                details.bookedResetter(false)      
              }, 2000);
              }
            }   
          >
            <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert severity={emailSelfSuccess ? "success" : "error"}>{emailSelfSuccess ? "Message Sent Successfully" : "Something Went Wrong. Please Try Again Later"}</Alert>
            </Stack>
          </Fade>
        </Slide>

        }
      </div>
    ) : (
      <div className='email-sender'>
        </div>
    )
  )
}

export default EmailSender
