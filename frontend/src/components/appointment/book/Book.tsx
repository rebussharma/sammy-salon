import { Dayjs } from 'dayjs';
import { useContext, useState } from 'react';
import '../../../css/appointment/book/Book.css';
import Inputs from '../../footer/contact/Inputs';
import Artist from '../bookingModules/Artist';
import { default as ServiceBox } from '../bookingModules/service-type/selection/ServiceBox';
import { PopUpContext } from '../PopUp';
import ConfirmPage from '../pushData/ConfirmPage';
import SuccessAndCancel from '../pushData/SuccessAndCancel';
import CancelMessageAndMailer from './cancel/CancelMessageAndMailer';


const Book:React.FC = () => {
    const { pushView } = useContext(PopUpContext);

    const [confirmBooking, setConfirmBooking] = useState(false)
    const [editAppointment, setEditAppointment] = useState(false)

    const [bookingSubmit, setBookingSubmit] = useState(false) // Needed to display booking success page
    const [cancelBooking, setCancelBooking] = useState(0)

    const [currentBookedApptId, setCurrentBookedApptId] = useState<number>()

    // Line below are used to get data from all three child componenets, merge them into Json for POST request                                                            
    const [appointmentDateTime, setAppointmentDateTime] = useState<Dayjs|null>()
    const [artist, setArtist] = useState<string>()
    const [artistNames, setArtistNames] = useState<string[]>([])
    const [serviceData, setServiceData] = useState<any>()
    const [inputData, setInputData] = useState<String[]>([])
    const [confirmedData, setConfirmedData] = useState<any>({})
    const [inputOpen, setInputOpen] = useState(false)
    const [artistOpen, setArtistOpen] = useState(false)

    // fetches data once appt is confirmed
    const handleConfirmedData = (data:any) => {
        setConfirmedData(data)
    }
    // Used to fetch data from each component
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
        dataToPost["artist"] = artist
        dataToPost["appointmentStatus"] = cancelBooking === 1? "cancelled" : "confirmed"
        let postData = Object.assign({}, dataToPost, inputData);                
                        
        if(confirmBooking){            
            return cancelBooking !== 0? (
                <div className='book cancel'>
                    <CancelMessageAndMailer cancelStatus={cancelBooking} appointmentId={currentBookedApptId} confirmedData={confirmedData}></CancelMessageAndMailer>
                </div>
            ):(
                <div className='book success'>
                    <SuccessAndCancel appointmentId = {currentBookedApptId} setCancelledStatus={setCancelBooking} postDataCancel={confirmedData}></SuccessAndCancel>
                </div>
            )

        }else{
            return !editAppointment ? (
                <div className='book confirm'>
                    <ConfirmPage setAppointmentId = {handleSetApptId} setEditStatus = {setEditAppointment} setConfirmationStatus={setConfirmBooking} postDataConfirm ={postData} setDataConfirm = {handleConfirmedData}></ConfirmPage>
                </div>
            ):
            ( // case: edit booking
                <div className='book'>
                    <ServiceBox artistBoxOpen={artistOpen} setArtistBoxOpen={setArtistOpen} inputOpen={inputOpen} setInputOpen={setInputOpen} editData = {serviceData} setAllChecked={handleServiceData}></ServiceBox>
                    <Artist artistBoxOpen={artistOpen} setArtistBoxOpen={setArtistOpen} serviceData = {serviceData} setArtist={setArtist} setNames = {setArtistNames} setDateTime = {setAppointmentDateTime}></Artist>      
                    <Inputs editData={inputData} dateTimeData = {appointmentDateTime} bookingMode = {true} setBookingSubmit={handleBookingSubmit} appendInputData = {handleInputData} inputOpen={inputOpen} setInputOpen={setInputOpen}></Inputs>
                </div>
            )
        }

    }else{
        return (
            <div className='book'>
                <ServiceBox artistBoxOpen={artistOpen} setArtistBoxOpen={setArtistOpen} inputOpen={inputOpen} setInputOpen={setInputOpen} editData = {serviceData} setAllChecked={handleServiceData}></ServiceBox>
                <Artist artistBoxOpen={artistOpen} setArtistBoxOpen={setArtistOpen} serviceData = {serviceData} setArtist={setArtist} setNames = {setArtistNames} setDateTime = {setAppointmentDateTime}></Artist>      
                <Inputs editData={inputData} dateTimeData = {appointmentDateTime} bookingMode = {true} setBookingSubmit={setBookingSubmit} appendInputData = {handleInputData} inputOpen={inputOpen} setInputOpen={setInputOpen}></Inputs>
            </div>
            
        )
    }
}

export default Book