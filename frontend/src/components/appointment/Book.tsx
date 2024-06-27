import { Dayjs } from 'dayjs';
import { useState } from 'react';
import '../../css/appointment/Book.css';
import Inputs from '../footer/contact/Inputs';
import Artist from './Artist';
import CancelPage from './CancelPage';
import ConfirmPage from './ConfirmPage';
import Schedule from './Schedule';
import SuccessPage from './SuccessPage';
import { default as ServiceSlider } from './service-type/selection/ServiceSlider';

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
    const [artistData, setArtistData] = useState<string>()
    const [serviceData, setServiceData] = useState<any>()
    const [inputData, setInputData] = useState<String[]>([])
    const [inputOpen, setInputOpen] = useState(false)
    
    const handleScheduleSuccess = () => {
        setDateTimePicked(true);
    }

    // Used to fetch data from each component
    const handleAppointmentDateTime = (dateTime: any) => {
        setAppointmentDateTime(dateTime)
    }

    const handleServiceData = (service:string[]) =>{
        setServiceData(service)
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
        const selectedServices = [];
        // Iterate through each category
        for (const category in serviceData) {
            // Iterate through each service in the category
            for (const service in serviceData[category]) {
                // Check if the value is true
                if (serviceData[category][service] === true) {
                    selectedServices.push(service);
                }
            }
        }
        const dataToPost:any = {}
        dataToPost["appointmentDateTime"] = appointmentDateTime?.format("YYYY-MM-DDTHH:mm")
        dataToPost["serviceType"] = `(${selectedServices.length}) ${selectedServices.map((item)=>" "+item)}`
        dataToPost["artist"] = artistData
        dataToPost["appointmentStatus"] = cancelBooking === 1? "cancelled" : "confirmed"
        let postData = Object.assign({}, dataToPost, inputData);                
                        
        if(confirmBooking){            
            return cancelBooking != 0? (
                <div className='book cancel'>
                    <CancelPage cancelStatus={cancelBooking} appointmentId={currentBookedApptId} confirmedData={postData}></CancelPage>
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
            ( // case: edit booking
                <div className='book'>
                    <Schedule editData = {appointmentDateTime} setScheduleSuccess = {handleScheduleSuccess} setAppointmentDateTimeSchedue = {handleAppointmentDateTime}></Schedule>
                    <ServiceSlider inputOpen={inputOpen} setInputOpen={setInputOpen} editData = {serviceData} setAllChecked={handleServiceData}></ServiceSlider>
                    <Artist serviceData = {serviceData} setArtist={setArtistData}></Artist>                    
                    <Inputs editData={inputData} dateTimeStaus = {dateTimePicked} bookingMode = {true} setBookingSubmit={handleBookingSubmit} appendInputData = {handleInputData} inputOpen={inputOpen} setInputOpen={setInputOpen}></Inputs>
                </div>
            )
        }
    
    }else{
        return (
            <div className='book'>
                <Schedule editData = {appointmentDateTime} setScheduleSuccess = {handleScheduleSuccess} setAppointmentDateTimeSchedue = {handleAppointmentDateTime}></Schedule>
                <ServiceSlider inputOpen={inputOpen} setInputOpen={setInputOpen} editData={serviceData} setAllChecked={handleServiceData}></ServiceSlider>
                <Artist serviceData = {serviceData} setArtist={setArtistData}></Artist>
                <Inputs editData={inputData} dateTimeStaus = {dateTimePicked} bookingMode = {true} setBookingSubmit={setBookingSubmit} appendInputData = {handleInputData} inputOpen={inputOpen} setInputOpen={setInputOpen}></Inputs>
            </div>
            
        )
    }
}

export default Book