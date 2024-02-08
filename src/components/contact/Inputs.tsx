import { Input } from '@mui/material';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import React, { ChangeEvent, ChangeEventHandler } from 'react';
import '../../styles/Inputs.styles';
import { InputSideWrapper, InputWrapper, MessageInput } from '../../styles/Inputs.styles';


const Inputs = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [successVal, setSuccessVal] = React.useState(true);
  const [success, setSuccess] = React.useState(0);

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


  const handleSubmit =  (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const serviceId = "YOUR-SERVICE-ID-HERE";
    const templateId = "YOUR-TEMPLATE-ID-HERE";

    // take the message
    // send the message to support@sammysbrow.com
    // if email is not null
      // reply the sender from support@sammysbrow.com
    // if (message !== null){
    //   try {
    //     setLoading(true);
    //     await emailjs.send(serviceId, templateId, {
    //       name: name,
    //       recipient: email
    //     });
    //     alert("Message sent");
    //   } catch (error) {
    //     console.log(error);
    //   } finally {
    //     setLoading(false);
    //   }

    // }
    setSuccess(1);
    setSuccessVal(true);
    setName('');
    setEmail('');
    setMessage('');
    setPhone('')

  };

  return (
    <div className='inputs'>
    <InputSideWrapper>
      <InputWrapper>
        <p>Name</p>
        <Input type="text" 
          placeholder="Your name here" 
          value={name} 
          onChange={nameHandler} />
      </InputWrapper>
      <InputWrapper>
        <p>Email</p>
        <Input
          type="email"
          placeholder="your_email@gmail.com"
          value={email}
          onChange={emailHandler}
          
        />
      </InputWrapper>
      <InputWrapper>
        <p>Phone</p>
        <Input
          type="number"   
          placeholder="512-123-4567"
          value={phone}
          onChange={phoneHandler}
        />
      </InputWrapper>
      <InputWrapper>
        <p>Message</p>
        <MessageInput
          maxLength={2000}
          required
          placeholder="Write your message here"
          value={message}
          onChange={messageHandler}
        />
      </InputWrapper> 
      <Button disabled={!message} className="btn_submit" variant="contained" onClick={handleSubmit}>Send Message</Button>
         {/* <SubMitButton type="submit" value="Send Message" /> */}
        {
          success == 1 ? (
            <Slide direction="up" in={successVal} mountOnEnter unmountOnExit>
              <Fade
                in={successVal}
                timeout={{ enter: 1000, exit: 1000 }} //Edit these two values to change the duration of transition when the element is getting appeared and disappeard
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
          ): (
            ""

          )
        }
    </InputSideWrapper>
    </div>
  );
};

export default Inputs;