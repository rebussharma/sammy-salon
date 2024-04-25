import { useState } from 'react';
import '../../css/appointment/Book.css';
import Inputs from '../footer/contact/Inputs';
import SuccessPage from '../footer/contact/SuccessPage';
import ApptService from './ApptService';
import Schedule from './Schedule';

const Book:React.FC = () => {
    const [bookingSuccess, setBookingSuccess] = useState(false)
    if(bookingSuccess){
        return(
            <div className='book success'>
             <SuccessPage></SuccessPage>
            </div>
        )
    }else{
        return (
            <div className='book'>
                <Schedule></Schedule>
                <ApptService></ApptService>
                <Inputs bookingStatus = {true} setBookingStatus={setBookingSuccess}></Inputs>
            </div>
        )
    }
}

export default Book