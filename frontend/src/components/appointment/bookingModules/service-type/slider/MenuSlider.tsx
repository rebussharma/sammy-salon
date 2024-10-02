import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import service_data from '../../../../../assets/data/services.json';
import styles from "../../../../../css/appointment/bookingModules/service-type/selection/App.module.css";
import "../../../../../css/appointment/bookingModules/service-type/slider/MenuSlider.css";
import { LeftArrow, RightArrow } from "./Arrows";
import { MainService } from "./MainService";

interface SliderMenuProps {
  onMenuItemClick: (menuItem: string) => void;
  selectedMenuItem: string | null;
}

const menuItems = service_data.map((item) => item.title);

const MenuSlider: React.FC<SliderMenuProps> = ({ onMenuItemClick, selectedMenuItem }) => {
  return (
    <div className={styles["slider-menu"]}>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} scrollContainerClassName={styles["scroll-container"]}>
        {menuItems.map((item) => (
          <MainService
            itemId={item} // Add this line to provide a unique id for each item
            title={item}
            key={item}
            onClick={() => onMenuItemClick(item)}
            selected={item === selectedMenuItem}
          />
        ))}
      </ScrollMenu>
    </div>
  );
};

export default MenuSlider;
