import React, { useEffect, useState } from "react";
import service_data from '../../../../../assets/data/services.json';
import "../../../../../css/appointment/bookingModules/service-type/selection/App.module.css";
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
  inputOpen:boolean,
  setInputOpen:(val:boolean)=>void,
  editData:any,
  setAllChecked:(s:any[])=>void
}

const ServiceBox:React.FC<OpenInput> = (prop:OpenInput) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null);
  const [checkedStates, setCheckedStates] = useState(prop.editData? prop.editData :initialCheckedStates);
  
  const handleMenuItemClick = (menuItem: string) => {
    setSelectedMenuItem(menuItem);
    prop.setInputOpen(false)
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

  useEffect(()=>{
    prop.setAllChecked(checkedStates)
  },[checkedStates])

  return (
    <div className="service-box">
      <div className="service-title">
        Step 2: Select a Service
      </div>
      
      <MenuSlider onMenuItemClick={handleMenuItemClick} />
      <div className="submenu">
        {
          !prop.inputOpen ?
        (
        selectedMenuItem && (
          <SubMenu
            key={selectedMenuItem}
            menuItem={selectedMenuItem}
            checkedState={checkedStates[selectedMenuItem]}
            onCheckboxChange={handleCheckboxChange}
          />
        )):(<></>)
      }
      </div>
    </div>
  );
};

export default ServiceBox;
