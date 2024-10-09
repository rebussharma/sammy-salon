import { Button } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat'; // Import advancedFormat plugin for day suffixes
import React, { useEffect, useState } from 'react';
import artistList from "../../../assets/data/artists.json";
import '../../../css/appointment/animations.css';
import '../../../css/appointment/bookingModules/Artist.css';
import DateTimePicker from './DateTimePicker';
dayjs.extend(advancedFormat);

type ArtistData = {
  name: string;
  nextAvailableDate: string | null;
  bookedTimes: string[];
};


type Props = {
  serviceData: any;
  setArtist(artist: string): void;
  setDateTime: (dateTime: Dayjs) => void,
  inputOpen:boolean,
  setInputOpen: (inputStatus: boolean) => void
  artistEditData:any
}

const findSelectedCategories = (data: any) => {
  const selectedCategories = [];
  for (let category in data) {
    if (Object.values(data[category]).includes(true)) {
      selectedCategories.push(category);
    }
  }
  return selectedCategories;
}

const filterNamesByService = (data: any, customerSelectedCategories: string[]) => {
  const relevantArtistForService = ["Sammy"];
  return relevantArtistForService.concat(data.filter((person: any) =>
    person.services.some(
      (service: string) => customerSelectedCategories.includes(service.trim())
    )
  ).map((person: any) => person.name));
}

const formatSelectedDateTime = (selectedDateTimeObj: any) => {
  const { date, time } = selectedDateTimeObj;

  // Combine date and time strings
  const dateTimeString = `${date}T${time}`;

  // Use dayjs to format the datetime string
  return dayjs(dateTimeString).format('dddd, Do MMM [at] hA');
};


const Artist: React.FC<Props> = (prop: Props) => {
  const [relevantArtists, setRelevantArtists] = useState<string[] | null>([]);
  const [availableArtists, setAvailableArtists] = useState<string[]>([]);

  const [selectedArtist, setSelectedArtist] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [artistsData, setArtistsData] = useState<ArtistData[]>([]);
  const [selectedDateTime, setSelectedDateTime] = useState<{ artist: string, date: string, time: string } | null>(prop.artistEditData);

  const handleTimeSelect = (name: string, date: string, time: string) => {
    setSelectedArtist(name);
    prop.setArtist(name);
    
    // Combine date and time to create a Dayjs object
    const dateTimeString = `${date} ${time}`;
    const dateTime = dayjs(dateTimeString, 'YYYY-MM-DD HH:mm');
    
    setSelectedDateTime({ artist: name, date, time });
    prop.setDateTime(dateTime);
  }

  useEffect(() => {
    const selectedServices = findSelectedCategories(prop.serviceData);
    setSelectedServices(selectedServices);

    const relevantArtistList = selectedServices.length !== 0 ? filterNamesByService(artistList, selectedServices) : null;
    setRelevantArtists(relevantArtistList);
    
    const loadedArtistsData: ArtistData[] = [
      { name: "Sammy", nextAvailableDate: "2024-09-22", bookedTimes: ["12:00", "15:00"] },
      { name: "Sam", nextAvailableDate: "2024-10-22", bookedTimes: [] },
      { name: "Samjhana", nextAvailableDate: null, bookedTimes: [] }
    ];
    setArtistsData(loadedArtistsData);
  }, [prop.serviceData]);

  useEffect(() => {
      const artistToDisplay = artistList.filter(
        artist => relevantArtists?.includes(artist.name) 
                  &&
                  (
                    artist.services.includes("all") 
                    ||
                    selectedServices.every(service => artist.services.includes(service))
                  )
      )
      .map(artist => artist.name);
      setAvailableArtists(artistToDisplay);
  }, [relevantArtists, artistsData]);

  return (
    !prop.inputOpen ? 
    (
      <div className="artist-main">
        <h2 className="artist-title">Select an Artist</h2>
        <div className='artist-date-time-picker'>
          {availableArtists.length === 0 ? (
            <div className="no-artists-message">No artists available for the selected services</div>
          ) : (
            <div className="artist-dt-main-grid">
              {availableArtists.map((name) => {
                const artistData = artistsData.find(artist => artist.name === name);
                if (!artistData || artistData.nextAvailableDate === null) return null;
                
                return (
                  <div key={name} className="artist-dt-details-wrapper">
                    <div className="artist-dt-artist-name">{name}</div>
                    <DateTimePicker
                      name={name}
                      nextAvailableDate={artistData.nextAvailableDate}
                      bookedTimes={artistData.bookedTimes}
                      onTimeSelect={handleTimeSelect}
                      selectedDateTime={selectedDateTime}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    )
    :
    (
      <div className='time-info-select'>
        <div className='time-info'>
          You've selected  with {formatSelectedDateTime(selectedDateTime)} with {selectedDateTime?.artist}
        </div>
        <div className='change-time-again'>
          <Button id='change-time' onClick={() => prop.setInputOpen(false)}>
            Change time
          </Button>
        </div>
      </div>
    )
  )
  
}

export default Artist;