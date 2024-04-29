import React, { useState } from 'react';
import serviceList from '../../assets/data/services.json';

const ApptService:React.FC = () => {
    const [selectedService, setSelectedService] = useState('')
    console.log(serviceList);
    
  return (
    <div className="appt-service">
        Select a service
    </div>
  )
}

export default ApptService