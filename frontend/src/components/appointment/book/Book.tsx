import { Dayjs } from 'dayjs';
import { useContext, useEffect, useState } from 'react';
import '../../../css/appointment/animations.css'; // Add this line
import '../../../css/appointment/book/Book.css';
import Inputs from '../../footer/contact/Inputs';
import Artist from '../bookingModules/Artist';
import { default as ServiceBox } from '../bookingModules/service-type/selection/ServiceBox';
import { PopUpContext } from '../PopUp';
import BookSuccessFail from '../pushData/BookSuccessFail';
import ConfirmPage from '../pushData/ConfirmPage';



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
    const [serviceData, setServiceData] = useState<any>()
    const [inputData, setInputData] = useState<String[]>([])
    const [confirmedData, setConfirmedData] = useState<any>({})
    const [inputOpen, setInputOpen] = useState(false)
    const [artistOpen, setArtistOpen] = useState(false)
    const [serviceSelected, setServiceSelected] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    // fetches data once appt is confirmed
    const handleConfirmedData = (data:any) => {
        setConfirmedData(data)
    }
    // Used to fetch data from each component
    const handleServiceData = (services: Record<string, Record<string, boolean>>) => {
        setServiceData(services);
        const isSelected = Object.values(services).some(category => Object.values(category).some(value => value));
        setServiceSelected(isSelected);
        
        // Add a slight delay before expanding to allow for the CSS transition
        if (isSelected) {
          setTimeout(() => setIsExpanded(true), 50);
        } else {
          setIsExpanded(false);
        }
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

    useEffect(() => {
        // Reset expansion when no service is selected
        if (!serviceSelected) {
          setIsExpanded(false);
        }
      }, [serviceSelected]);
    


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
        let artistEditData = {
          artist: artist,
          date: appointmentDateTime?.format("YYYY-MM-DD"),
          time: appointmentDateTime?.format("HH:mm")
        }    
        
        return(
          editAppointment ? 
          (
            <div className='book'>
              <ServiceBox
                setAllChecked={handleServiceData}
                editData={serviceData}
              />
              <div className={'artist-container-wrapper expanded'}>
                  <div className={`artist-container visible`}>
                    <Artist
                      serviceData={serviceData}
                      setArtist={setArtist}
                      setDateTime={setAppointmentDateTime}
                      inputOpen={inputOpen}
                      setInputOpen={setInputOpen}
                      artistEditData = {artistEditData}
                    />
                  </div>
              </div>
                  <Inputs editData={inputData} dateTimeData = {appointmentDateTime} bookingMode = {true} setBookingSubmit={handleBookingSubmit} appendInputData = {handleInputData} inputOpen={inputOpen} setInputOpen={setInputOpen}></Inputs>
              </div>
          )
          :
          (
            confirmBooking ? (          
                <div className='book success'>
                  <BookSuccessFail confirmedData={confirmedData}></BookSuccessFail>
                </div>
              )
              :
              (
                <div className='book confirm'>
                  <ConfirmPage setAppointmentId = {handleSetApptId} setEditStatus = {setEditAppointment} setConfirmationStatus={setConfirmBooking} postDataConfirm ={postData} setDataConfirm = {handleConfirmedData}></ConfirmPage>
                </div>     
              )     
          )
        )
    }else{
        return (
            <div className='book'>
              <ServiceBox
                setAllChecked={handleServiceData}
                editData={serviceData}
              />
              <div className={`artist-container-wrapper ${isExpanded ? 'expanded' : ''}`}>
                {serviceSelected ? (
                  <div className={`artist-container ${isExpanded ? 'visible' : ''}`}>
                    <Artist
                      serviceData={serviceData}
                      setArtist={setArtist}
                      setDateTime={setAppointmentDateTime}
                      inputOpen={inputOpen}
                      setInputOpen={setInputOpen}
                      artistEditData = {null}
                    />
                  </div>
                ) : (
                  <div className="no-service-message">Please Select a Service</div>
                )}
              </div>
              <Inputs
                      editData={inputData}
                      dateTimeData={appointmentDateTime}
                      bookingMode={true}
                      setBookingSubmit={setBookingSubmit}
                      appendInputData={handleInputData}
                      inputOpen={inputOpen}
                      setInputOpen={setInputOpen}
                />
            </div>
          );
    }
}

export default Book