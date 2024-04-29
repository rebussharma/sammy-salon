import React, { useState } from 'react';

const ApptService:React.FC = () => {
    const [selectedService, setSelectedService] = useState('')    
  return (
    <div className="appt-service">
        Select a service
    </div>
  )
}

export default ApptService