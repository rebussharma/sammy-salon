import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from 'react';
import '../../css/appointment/Schedule.css';

const curr_datetime = new Date()
const appt_datetime = new Date(curr_datetime.setMinutes(curr_datetime.getMinutes() + 20));

const datesToDisable = [
    "2024-04-26T00:00:00.000",
    "2024-04-27T00:00:00.000"
  ];
  
  const timesBooked = [
    "2024-04-30T15:30:00.000",
    "2024-04-30T16:30:00.000",
    "2024-04-29T17:00:00.000",
    "2024-04-29T09:00:00.000"
  ];

const disabledTimes = timesBooked.map((dateTime) => dayjs(dateTime));

const shouldDisableDay = (day: Dayjs) => {
    // if (day.day() === 0 || day.day() === 6) { //sunday or saturday
    //   return true;
    // }
    return datesToDisable.includes(day.format("YYYY-MM-DDTHH:mm:ss.sss[Z]"));
};

 const Schedule:React.FC = () =>{
    const [selectedDateTime, setSelectedDateTime] = useState <Dayjs|null>(dayjs(appt_datetime));
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