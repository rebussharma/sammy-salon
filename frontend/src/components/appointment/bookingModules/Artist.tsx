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
  return data.filter((person:any) =>
                      person.services.some(
                        (service:any) => customerSelectedcategories.includes(service.trim())
                      )
                    ).map((person:any) => person.name);
}


const Artist:React.FC<Props> = (prop: Props) => {
  const [artistOpen, setArtistOpen] = useState(false)
  const [relevantArtist, setRelevantArtist] = useState<string[]>([])
  const [selectedArtist, setSelectedArtist] = useState('')

  const handleArtistOpen = () =>{        
    artistOpen? setArtistOpen(false) : setArtistOpen(true)
  }

  const handleClick = (item:string) => {
    prop.setArtist(item)
    setSelectedArtist(item)
  }

  useEffect(()=>{
    if(artistOpen){
      var selectedServices = findSelectedCategories(prop.serviceData)    
      const relevantArtistList = selectedServices.length===0 ? ["Please select a service first"] : filterNamesByService(artistList,selectedServices) 
      setRelevantArtist(relevantArtistList)
    }  
  },[artistOpen])
  
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
                  </div>
              )
              }
            </div>
          )
          :
          (<></>)
        }
    </div>
  )
}

export default Artist