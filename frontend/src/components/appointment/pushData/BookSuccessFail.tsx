import React, { useContext } from 'react';
import '../../../css/appointment/pushData/BookSuccessFail.css';
import { PopUpContext } from '../PopUp';
import ErrorDisplay from '../book/finalMessage/ErrorDisplay';
import SuccessDisplay from '../book/finalMessage/SuccessDisplay';

interface Props {
  confirmedData: any
}

const BookSuccessFail: React.FC<Props> = ({ confirmedData }) => {
const { setPopUp } = useContext(PopUpContext);

const isError = confirmedData || confirmedData["confirmationCode"] === -1;
return (
  <div className="success-fail-container">
    <div className="message-paper">
      {isError ? (
        <div className='success-error'>
          <ErrorDisplay></ErrorDisplay>
        </div>
      ) : (
        <div className='confirm-success'>
          <SuccessDisplay confirmedData={confirmedData}></SuccessDisplay>
        </div>
      )
      }

      <button className="back-home-button" onClick={() => setPopUp(false)}>
        Back to Home
      </button>
    </div>
  </div>
);
}
        
export default BookSuccessFail