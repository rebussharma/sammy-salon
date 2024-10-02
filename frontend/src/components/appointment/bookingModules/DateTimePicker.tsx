import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from 'react';
import '../../../css/appointment/bookingModules/DateTimePicker.css';

type DateTimePickerProps = {
  name: string;
  nextAvailableDate: string;
  bookedTimes: string[];
  onTimeSelect: (name: string, date: string, time: string) => void;
  selectedDateTime: { artist: string, date: string, time: string } | null;
};

const generateTimeSlots = () => {
  const timeSlots = [];
  const startHour = 10; // 10 AM
  const endHour = 19; // 7 PM

  for (let hour = startHour; hour <= endHour; hour++) {
    timeSlots.push(dayjs().hour(hour).minute(0).second(0));
  }

  return timeSlots;
};

const DateTimePicker: React.FC<DateTimePickerProps> = ({ name, nextAvailableDate, bookedTimes, onTimeSelect, selectedDateTime }) => {
  const [visibleDate, setVisibleDate] = useState<Dayjs>(dayjs(nextAvailableDate));
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const handleTimeClick = (time: Dayjs) => {
    const selectedDate = visibleDate.format("YYYY-MM-DD");
    const selectedTime = time.format("HH:mm");
    onTimeSelect(name, selectedDate, selectedTime);
  };

  const handleDateChange = (days: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setVisibleDate(prev => prev.add(days, 'day'));
      setIsTransitioning(false);
    }, 300);
  };

  const renderTimeSlots = () => {
    const timeSlots = generateTimeSlots();
    
    const isBooked = (time: Dayjs) => {
      return visibleDate.isSame(dayjs(nextAvailableDate), 'day') && bookedTimes.includes(time.format("HH:mm"));
    };
    
    const isSelected = (time: Dayjs) => {
      return selectedDateTime &&
             selectedDateTime.artist === name &&
             selectedDateTime.date === visibleDate.format("YYYY-MM-DD") &&
             selectedDateTime.time === time.format("HH:mm");
    };
    
    return timeSlots.map((time, idx) => (
      <button
        key={idx}
        onClick={() => handleTimeClick(time)}
        className={`time-slot-btn ${isSelected(time) ? 'selected' : ''}`}
        disabled={isBooked(time)}
      >
        {time.format("h:mm A")}
      </button>
    ));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="dt-box">
        <div className="date-arrow-header">
          <button
            className="date-nav-arrow"
            onClick={() => handleDateChange(-1)}
            disabled={!visibleDate.isAfter(dayjs(nextAvailableDate))}
          >
            &lt;
          </button>
          <span className={`date-display ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
            {visibleDate.format("ddd, MMM D")}
          </span>
          <button
            className="date-nav-arrow"
            onClick={() => handleDateChange(1)}
          >
            &gt;
          </button>
        </div>
        <div className={`time-slots ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
          {renderTimeSlots()}
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default DateTimePicker;