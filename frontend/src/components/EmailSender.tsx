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
  setEmailSent(val:boolean): void,
  contactForm:boolean
}

const EmailSender:React.FC<ClientDetails> = (details: ClientDetails) => {
  const [emailSelfSuccess, setEmailSelfSuccess] = useState(false)
  const [emailFinal, setEmailFinal] = useState(false)

  const name = details.clientDetails[0]
  const email = details.clientDetails[1]
  const phone = details.clientDetails[2]
  const message = details.clientDetails[3]
  var subject = "Thank you for contacting us"
  var bodyText = "This is to confirm you that we have received the following message from"
  var seeYouText = "We will get back to youn within next 24 hours."

  var selfSubject = "General Inquiry from"
  var selfBody = "You got a new message from"

  if(!details.contactForm){
    var apptDateTime = new Date(details.clientDetails[4].toString())
    var serviceType = details.clientDetails[5]
    var artist = details.clientDetails[6]
    var appointmentStatus = details.clientDetails[7]

    subject = `Appointment ${appointmentStatus.toLocaleUpperCase()}`
    bodyText = `Your appointment is \t${appointmentStatus}.\n\nPlease find ${appointmentStatus.toLocaleUpperCase()} details below\n` +
                `\tDate and Time: \t\t${
                  apptDateTime.toDateString()} at ${apptDateTime.toLocaleString([],{
                    hour:'2-digit',
                    minute:'2-digit'
                  })
                }\n` +
                `\tService: \t\t\t${serviceType}\n`+
                `\tArtist: \t\t\t${artist}\n` +
                "\tYour Special Request:"
    seeYouText = appointmentStatus == "confirmed" ? 
                                      "We're excited to see you :)"
                                      :
                                      "Hope we will see you some other time :)"

    selfSubject =  `Appointment ${appointmentStatus.toLocaleUpperCase()} Notice`
    selfBody = `New Appointment Status. See details Below:\n`+
                  `Appointment Status: \t${appointmentStatus}.\n` +
                  `\tDate and Time: \t\t${
                    apptDateTime.toDateString()} at ${apptDateTime.toLocaleString([],{
                      hour:'2-digit',
                      minute:'2-digit'
                    })
                  }\n` +
                  `\tService: \t\t\t${serviceType}\n`+
                  `\tArtist: \t\t\t${artist}\n` +
                  "\tSpecial Message:"

  }

  
  const SERVICE_ID = "service_hr7wfln";
  const TEMPLATE_ID = "template_y1syqfc";
  const PUBLIC_KEY = "48zrrLrcyVtY6tuNs"
  useEffect(() => emailjs.init({publicKey:PUBLIC_KEY}), []);
  
  console.log("Im here", details.contactForm);
  console.log("data I have", details.clientDetails);
  console.log("bdy text", bodyText);
  
  
  
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
          client_name: !name ? "Name not provided" : name, 
          recipient: email, 
          messageNotes: message,
          subject: subject,
          bodyText: bodyText,
          seeYouText: seeYouText
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
      to_name: !name ? "Name not provided" : name, 
      recipient: "", 
      messageNotes: message, 
      customer_phone: phone, 
      customer_email:email,
      subject: selfSubject,
      bodyText: selfBody
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
    emailFinal && details.contactForm? 
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
