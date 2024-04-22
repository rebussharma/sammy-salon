import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from 'react';
import './Schedule.css';

 const Schedule:React.FC = () =>{
    const curr_datetime = new Date()
    const appt_datetime = new Date(curr_datetime.setMinutes(curr_datetime.getMinutes() + 20));
    const [selectedDateTime, setSelectedDateTime] = useState <Dayjs|null>(dayjs(appt_datetime))

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
                    />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
        </div>

    </div>
  );
}

export default Schedule;