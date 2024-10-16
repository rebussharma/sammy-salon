import React, { useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import '../../../../css/appointment/book/cancel/CancelMessageAndMailer.css';
import { PopUpContext } from '../../PopUp';
import ErrorDisplay from '../finalMessage/ErrorDisplay';
import SuccessDisplay from '../finalMessage/SuccessDisplay';


const MessageWrapper = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SuccessMessage = styled.h2`
  font-size: 25px;
  color: rgb(8, 8, 63);
  text-align: center;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

type CancelStatus = {
  cancelStatus:number
  appointmentId:number|undefined
  confirmedData: any
}

const CancelMessageAndMailer:React.FC<CancelStatus> = (prop:CancelStatus) =>{
  const {setPopUp} = useContext(PopUpContext)

  return (
    <React.Fragment>
      <Fade duration={700} direction="right">
        
          <div className='message-paper'>
            {
              prop.cancelStatus === 1 ? 
              (
                <div className='cancel-success'>
                  <SuccessDisplay confirmedData={null}></SuccessDisplay>
                  </div>
              )
              : 
              (
                <div className='cancel-error'>
                    <ErrorDisplay></ErrorDisplay>
                </div>

              )

            }
            <button className="back-home-button" onClick={() => setPopUp(false)}>
              Back to Home
            </button>
          </div>
      </Fade>
    </React.Fragment>
  )
}

export default CancelMessageAndMailer