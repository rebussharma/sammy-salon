import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import artistList from "../../../assets/data/artists.json";
import '../../../css/appointment/bookingModules/Artist.css';
type Props = {
  serviceData:any
  setArtist(artist:string): void;
}

const findSelectedCategories = (data:any) =>{
  const selectedCategories = [];
  for (let category in data) {
      if (Object.values(data[category]).includes(true)) {
        selectedCategories.push(category);
      }
  }
  return selectedCategories;
}

const filterNamesByService = (data:any, customerSelectedcategories:any) => {
  var relevantArtistForService:string[] = ["Sammy"]
  return relevantArtistForService.concat(data.filter((person:any) =>
                      person.services.some(
                        (service:any) => customerSelectedcategories.includes(service.trim())
                      )
                    ).map((person:any) => person.name));
}


function formatServices(services:string[]) {
  if (services.length === 1) {
    return services[0];
  }
  const allButLast = services.slice(0, -1).join(', ');
  const last = services[services.length - 1];
  return `${allButLast} & ${last}`;
}

function getMatchingServices(artistServices:any, selectedServices:string[]) {
  // If artist provides all services, return "All services"
  if (artistServices.includes("all")) {
    return "All services";
  }
  
  // Filter artist services to only include those in selected services
  const matchingServices = artistServices.filter((service:string) => selectedServices.includes(service));
  
  // If no matching services, return a message
  if (matchingServices.length === 0) {
    return "No matching services";
  }
  
  return formatServices(matchingServices);
}

const filterServicesByArtist = (artistName:any, selectedServices:string[]) => {
  const artist = artistList.find(person => person.name === artistName);

  // If artist is found, return matching services; otherwise, return a message
  if (artist) {
    return getMatchingServices(artist.services, selectedServices);
  } else {
    return ``;
  }

}
// Not being used for now
const allServicesByArtist = (artistName:any) =>{
  const artist = artistList.find(person => person.name === artistName);

  // If artist is found, return their services formatted with commas; otherwise, return a message
  if (artist) {
    return artist.services.includes("all") 
      ? "All services" 
      : formatServices(artist.services);
  } else {
    return `Artist with name "${artistName}" not found.`;
  }
}


const Artist:React.FC<Props> = (prop: Props) => {
  const [artistOpen, setArtistOpen] = useState(false)
  const [relevantArtist, setRelevantArtist] = useState<string[]>([])
  const [selectedArtist, setSelectedArtist] = useState('')
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [filteredServices, setFilteredServices] = useState<string[]>([])

  const handleArtistOpen = () =>{      
    console.log("artist open is ", artistOpen);
    setArtistOpen(prevState => !prevState);
  }

  const handleClick = (item:string) => {
    prop.setArtist(item)
    setSelectedArtist(item)
  }

  useEffect(()=>{
    if(artistOpen){
      // var selectedServices = findSelectedCategories(prop.serviceData)    
      // setSelectedServices(selectedServices)
      const relevantArtistList = selectedServices.length===0 ? ["Please select a service first"] : filterNamesByService(artistList,selectedServices) 
      setRelevantArtist(relevantArtistList)
    }  
  },[artistOpen])
  
  useEffect(()=>{
    var selectedServices = findSelectedCategories(prop.serviceData)    
    setSelectedServices(selectedServices)
  },[prop.serviceData])

  return (
    <div className="artist">
      <div className='artist-title'>
       <Button className='artist-title btn' onClick={handleArtistOpen}>Step 3: Select an Artist</Button>
      </div>
        {
          artistOpen ?
          (
            <div className='artist-list'> 
              {
                relevantArtist.map((item)=>
                  <div className="artist-name" key={item}>
                    <Button className= {selectedArtist==item ? "name-btn selected" : "name-btn"} onClick={()=> handleClick(item)} > {item} </Button>
                    <div className='artist-service-subtitle'> 
                      {filterServicesByArtist(item, selectedServices)}
                    </div>
                  </div>
              )
              }
            </div>
          ):<></>
        }
    </div>
  )
}

export default Artist