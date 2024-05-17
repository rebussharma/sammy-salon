import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from 'react';
import '../../css/appointment/Schedule.css';


const curr_datetime = new Date()
// Appointment can ONLY be taken after 1 hour from Now
const appt_datetime = new Date(curr_datetime.setHours(curr_datetime.getHours() + 1));



const datesToDisable = [
    "2024-05-26T00:00:00",
    "2024-05-27T00:00:00"
  ]
  

const shouldDisableDay = (day: Dayjs) => {
    // if (day.day() === 0 || day.day() === 6) { //sunday or saturday
    //   return true;
    // }
    return datesToDisable.includes(day.format("YYYY-MM-DDTHH:mm:ss"));
};

type ScheduleSuccess = {
    editData: Dayjs|null|undefined,
    setScheduleSuccess (): void
    setAppointmentDateTimeSchedue(dateTime:Dayjs|null):void
}

 const Schedule:React.FC<ScheduleSuccess> = ({editData, setScheduleSuccess = () => void{}, setAppointmentDateTimeSchedue =() =>void{}}:ScheduleSuccess) => {
  
    const bookedDates = [
    
        {
            "appointmentDateTime": "2024-05-10T09:15:00"
        }
    
    ]
    // const [bookedDates, setBookedDates] = useState([]);

    // useEffect(() => {  
    // fetch('http://localhost:8080/api/appointments/relevant')
    //     .then(response => response.json())
    //     .then(data => {
    //     setBookedDates(data);
    //     })
    // }, []);
    
    const disabledTimes = bookedDates.map((dateTime) => dayjs(dateTime["appointmentDateTime"]));


    const [selectedDateTime, setSelectedDateTime] = useState <Dayjs|null>(!editData? dayjs(appt_datetime):editData);

    const shouldDisableTime = React.useCallback(
        (time: Dayjs) => {

          const selectedDay = selectedDateTime?.date();

          if (disabledTimes.some((disabled) => disabled.date() === selectedDay)) {            
            return disabledTimes.some(
                (disabledTime) =>
                  disabledTime.date() === selectedDay &&
                  disabledTime.hour() === selectedDateTime?.hour() &&
                  disabledTime.minute() === time.minute()
              );
          }
          return false;
        },
        [selectedDateTime]
      );

  return (
    <div className='schedule'>
        <div className='date-time-picker'>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DemoContainer
                    components={[
                    'DateTimePicker',
                    'MobileDateTimePicker',
                    'DesktopDateTimePicker',
                    ]}
                >
                    <DemoItem label="Please Select a Date and Time">
                    <DesktopDateTimePicker 
                        className='desktop-date-time-picker'
                        value={selectedDateTime} 
                        format='LLL'
                        disablePast={true}
                        closeOnSelect={false}
                        minutesStep = {15}
                        onChange={ (newValue) => {
                            setSelectedDateTime(newValue)
                            setAppointmentDateTimeSchedue(newValue)
                            setScheduleSuccess()
                            }
                        }
                        shouldDisableDate={shouldDisableDay}
                        shouldDisableTime={shouldDisableTime}
                        
                    />
                    <MobileDateTimePicker 
                        className='mobile-date-time-picker'
                        value={selectedDateTime} 
                        format='LLL'
                        disablePast={true}
                        minutesStep = {15}
                        onChange={ (newValue) => {
                            setSelectedDateTime(newValue)
                            setAppointmentDateTimeSchedue(newValue)
                            }
                        }
                        shouldDisableDate={shouldDisableDay}
                        shouldDisableTime={shouldDisableTime}
                    />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
        </div>

    </div>
  );
}

export default Schedule;