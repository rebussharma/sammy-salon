import React, { useEffect, useState } from 'react';
type Props = {
  setServiceType(service:string[]): void;
}
const ArtistService:React.FC<Props> = (props: Props) => {
    const [selectedService, setSelectedService] = useState('')  
    useEffect(() => {
      props.setServiceType(["Eyebrow","Any"])
    }, []);
  
    // const handleChange = (e) => {
    //   props.setSearchTerm(e.target.value.toLowerCase());
    // };
    
  return (
    <div className="artist-service">
      <div className='service-type'>
          Select a service
      </div>
      <div className='artist'>
        Select an Artist
      </div>
    </div>
  )
}

export default ArtistService