import { useState } from 'react';
import '../../css/appointment/Book.css';
import Inputs from '../footer/contact/Inputs';
import SuccessPage from '../footer/contact/SuccessPage';
import ApptService from './ApptService';
import Schedule from './Schedule';

const Book:React.FC = () => {
    const [bookingSuccess, setBookingSuccess] = useState(false)
    const [dateTimePicked, setDateTimePicked] = useState(false)
    const handleState = () => {
        setDateTimePicked(true);
    }

    if(bookingSuccess){
        return(
            <div className='book success'>
             <SuccessPage></SuccessPage>
            </div>
        )
    }else{
        return (
            <div className='book'>
                <Schedule setScheduleSuccess = {handleState}></Schedule>
                <ApptService></ApptService>
                <Inputs dateTimeStaus = {dateTimePicked} bookingMode = {true} setBookingMode={setBookingSuccess}></Inputs>
            </div>
        )
    }
}

export default Book