import React, { useState } from "react";
import 'react-horizontal-scrolling-menu/dist/styles.css';
import service_data from '../../../../assets/data/services.json';

import '../../../../css/appointment/service-type/slider/ServiceType.css';

/// SliderMenu.tsx
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "../slider/Arrows";
import { MainService } from "../slider/MainService";
import styles from "./App.module.css";

interface SliderMenuProps {
  onMenuItemClick: (menuItem: string) => void;
}

// const menuItems = ["gggK", "hhhh", "sssss"];
const menuItems = service_data.map((item)=>(item.title));

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const MenuSlider: React.FC<SliderMenuProps> = ({ onMenuItemClick }) => {
  const [selectedMenu, setSelectedMenu] = useState<string>()
  const handleClick = (item:string) =>{
    onMenuItemClick(item)
    setSelectedMenu(item)
  }
  return (
    <div className={styles["slider-menu"]}>
      <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            onWheel={onWheel}
      >
      {menuItems.map((item) => (
         <MainService
          title={item}
          itemId={item} // NOTE: itemId is required for track items
          key={item}
          onClick={() => handleClick(item)} 
          selected={item === selectedMenu}       
          />
        ))}
      </ScrollMenu>
    </div>
  );
};

export default MenuSlider;
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

