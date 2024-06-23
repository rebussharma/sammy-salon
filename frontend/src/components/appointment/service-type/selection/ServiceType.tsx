import React, { useEffect, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import 'react-horizontal-scrolling-menu/dist/styles.css';

import service_data from '../../../../assets/data/services.json';
import '../../../../css/appointment/service-type/slider/ServiceType.css';
import { LeftArrow, RightArrow } from "../slider/Arrows";
import { MainService } from "../slider/MainService";
import ServiceSelection from "./ServiceSelection";

// NOTE: embrace power of CSS flexbox!
// import "./hideScrollbar.css";
// import "./firstItemMargin.css";

type OpenInput = {
  inputOpen:boolean,
  setInputOpen:(val:boolean)=>void
  // setAllServiceType:(val:string[])=>void
}

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const ServiceType:React.FC<OpenInput> = (prop:OpenInput) => {
  
  const [items] = useState(service_data.map((item)=>({id:item.title})));
  const [selectedMain, setSelectedMain] = useState<string>();
  const [servicesH, setH] = useState<any[]>([])

  const[all, setAll] = useState<any[]>([])
  useEffect (()=>{
    setH([[...servicesH, selectedMain]])
  },[])
  
  useEffect(()=>{
    setAll((old:any[])=>[...old, servicesH])
  }, [servicesH])
  
  const separatedObjects:any = {};
  all.forEach(obj => {
    const mainService = obj.main_service;
    if (!separatedObjects[mainService]) {
      separatedObjects[mainService] = [];
    }
    separatedObjects[mainService].push(obj);
  });

  // NOTE: for select item
  const handleItemClick = (itemId: string) => () => {
    setSelectedMain(itemId);
    prop.setInputOpen(false)
  }  
  
  return (
      <div className="service-type">
        <div className="service-selection-header">
          Step 2: Please Select Desired Services
        </div>
        <div className="horizontal-services-wrapper">
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            onWheel={onWheel}
          >
            {items.map(({ id }) => (
              <MainService
                title={id}
                itemId={id} // NOTE: itemId is required for track items
                key={id}
                onClick={handleItemClick(id)}
                selected={id === selectedMain}
              />
            ))}
          </ScrollMenu>
          {/* <SubService service={selected}></SubService> */}

        </div>
        {
            selectedMain && !prop.inputOpen? 
            (
              <ServiceSelection key = {selectedMain} service={selectedMain}></ServiceSelection>

            ):
            (
              <></>
            )
          }
      </div>
  );
}

export default ServiceType

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

