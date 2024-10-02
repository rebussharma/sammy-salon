import React, { useEffect, useState } from "react";
import service_data from '../../../../../assets/data/services.json';
import "../../../../../css/appointment/bookingModules/service-type/selection/ServiceBox.css";
import MenuSlider from "../slider/MenuSlider";
import SubMenu from "./SubMenu";


const transformArray = (array:any[]) =>{
  // Initialize an empty object to store the transformed data
  const transformed:any = {};

  // Iterate over each service object in the input array
  array.forEach((service:any) => {
      // Extract service title and initialize its corresponding object if not already exists
      const serviceName = service.title;
      transformed[serviceName] = {};

      // Iterate over mini_content array of each service
      service.mini_content.forEach((miniService:any) => {
          // Extract mini service title
          const miniServiceTitle = miniService.title;

          // Set initial value to false
          transformed[serviceName][miniServiceTitle] = false;
      });
  });

  return transformed;
}

const initialCheckedStates = transformArray(service_data);

type OpenInput = {
artistBoxOpen:boolean,
setArtistBoxOpen:(val:boolean)=>void,
inputOpen: boolean
setInputOpen:(val:boolean)=>void,
editData:any,
setAllChecked:(s:any[])=>void
}

const ServiceBox: React.FC<OpenInput> = ({ artistBoxOpen, setArtistBoxOpen, inputOpen, setInputOpen, editData, setAllChecked }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null);
  const [checkedStates, setCheckedStates] = useState(editData || initialCheckedStates);
  
  const handleMenuItemClick = (menuItem: string) => {
    setSelectedMenuItem(menuItem);
    setInputOpen(false);
    setArtistBoxOpen(false);
  };

  const handleCheckboxChange = (menuItem: string, checkbox: string) => {
    setCheckedStates((prevState:any) => ({
      ...prevState,
      [menuItem]: {
        ...prevState[menuItem],
        [checkbox]: !prevState[menuItem][checkbox],
      },
    }));
  };

  useEffect(() => {
    setAllChecked(checkedStates);
  }, [checkedStates, setAllChecked]);

  return (
    <div className="service-box">
      <h2 className="service-title">Select Service</h2>
      <MenuSlider onMenuItemClick={handleMenuItemClick} selectedMenuItem={selectedMenuItem} />
      {!inputOpen && !artistBoxOpen && selectedMenuItem && (
        <SubMenu
          key={selectedMenuItem}
          menuItem={selectedMenuItem}
          checkedState={checkedStates[selectedMenuItem]}
          onCheckboxChange={handleCheckboxChange}
        />
      )}
    </div>
  );
};

export default ServiceBox;