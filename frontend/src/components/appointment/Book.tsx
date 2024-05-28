import { Dayjs } from 'dayjs';
import { useState } from 'react';
import '../../css/appointment/Book.css';
import Inputs from '../footer/contact/Inputs';
import ArtistService from './ArtistService';
import CancelPage from './CancelPage';
import ConfirmPage from './ConfirmPage';
import Schedule from './Schedule';
import SuccessPage from './SuccessPage';


const Book:React.FC = () => {
    const [confirmBooking, setConfirmBooking] = useState(false)
    const [editAppointment, setEditAppointment] = useState(false)

    const [bookingSubmit, setBookingSubmit] = useState(false) // Needed to display booking success page
    const [dateTimePicked, setDateTimePicked] = useState(false) // Needed to check if DateTime is picked before moving to input
                                                                // This helps to make sure 'submit' is greyed out if datetime is not picked
    const [cancelBooking, setCancelBooking] = useState(0)
    const [currentBookedApptId, setCurrentBookedApptId] = useState<number>()
       
    // Line below are used to get data from all three child componenets, merge them into Json for POST request                                                            
    const [appointmentDateTime, setAppointmentDateTime] = useState<Dayjs|null>()
    const [artistServiceData, setArtistServiceData] = useState<String[]>([])
    const [inputData, setInputData] = useState<String[]>([])

    const handleScheduleSuccess = () => {
        setDateTimePicked(true);
    }

    // Used to fetch data from each component
    const handleAppointmentDateTime = (dateTime: any) => {
        setAppointmentDateTime(dateTime)
    }

    const handleServiceData = (artist_service:string[]) =>{
        setArtistServiceData(artist_service)
    }
    
    const handleInputData = (data:String[]) =>{
        setInputData(data)
    }    

    const handleBookingSubmit = ()=>{
        setBookingSubmit(true)
        setEditAppointment(false)
    }

    const handleSetApptId = (id:number) =>{
        setCurrentBookedApptId(id)
    }

    if(bookingSubmit){
        const dataToPost:any = {}
        dataToPost["appointmentDateTime"] = appointmentDateTime?.format("YYYY-MM-DDTHH:mm")
        dataToPost["serviceType"] = artistServiceData[0]
        dataToPost["artist"] = artistServiceData[1]
        let postData = Object.assign({}, dataToPost, inputData);
                        
        if(confirmBooking){            
            return cancelBooking != 0? (
                <div className='book cancel'>
                    <CancelPage status={cancelBooking} appointmentId={currentBookedApptId}></CancelPage>
                </div>
            ):(
                <div className='book success'>
                    <SuccessPage appointmentId = {currentBookedApptId} setCancelledStatus={setCancelBooking} postDataCancel={postData}></SuccessPage>
                </div>
            )

        }else{
            return !editAppointment ? (
                <div className='book confirm'>
                    <ConfirmPage setAppointmentId = {handleSetApptId} setEditStatus = {setEditAppointment} setConfirmationStatus={setConfirmBooking} postDataConfirm ={postData}></ConfirmPage>
                </div>
            ):
            (
                <div className='book'>
                    <Schedule editData = {appointmentDateTime} setScheduleSuccess = {handleScheduleSuccess} setAppointmentDateTimeSchedue = {handleAppointmentDateTime}></Schedule>
                    <ArtistService setServiceType =  {handleServiceData}></ArtistService>
                    <Inputs editData={inputData} dateTimeStaus = {dateTimePicked} bookingMode = {true} setBookingSubmit={handleBookingSubmit} appendInputData = {handleInputData}></Inputs>
                </div>
            )
        }
    
    }else{

        return (
            <div className='book'>
                <Schedule editData = {appointmentDateTime} setScheduleSuccess = {handleScheduleSuccess} setAppointmentDateTimeSchedue = {handleAppointmentDateTime}></Schedule>
                <ArtistService setServiceType =  {handleServiceData}></ArtistService>
                <Inputs editData={inputData} dateTimeStaus = {dateTimePicked} bookingMode = {true} setBookingSubmit={setBookingSubmit} appendInputData = {handleInputData}></Inputs>
            </div>
        )
    }
}

export default Book