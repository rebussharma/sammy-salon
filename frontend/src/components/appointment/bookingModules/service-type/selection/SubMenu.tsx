// SubMenu.tsx
import React from "react";
import service_data from '../../../../../assets/data/services.json';
import styles from "../../../../../css/appointment/bookingModules/service-type/selection/App.module.css";

interface SubMenuProps {
  menuItem: string;
  checkedState: { [key: string]: boolean };
  onCheckboxChange: (menuItem: string, checkbox: string) => void;
}

function transformArray(array:any) {
    const transformed:any = {};

    array.forEach((service:any) => {
        const serviceName = service.title;
        transformed[serviceName] = service.mini_content.map((miniService:any) => ({title:miniService.title, cost:miniService.cost, time:miniService.time}));
    });

    return transformed;
}

const subMenus = transformArray(service_data);

const SubMenu: React.FC<SubMenuProps> = ({
  menuItem,
  checkedState,
  onCheckboxChange,
}) => {
  const handleCheckboxChange = (checkboxTitle: string) => {
    onCheckboxChange(menuItem, checkboxTitle);
  };
  
  return (
    <div className={`${styles.submenu} ${styles.active}`}>
      {subMenus[menuItem].map((checkbox:any) => (
        <div key={checkbox.title} className={styles["checkbox-item"]}>
          <label htmlFor={checkbox.title}>{checkbox.title} {checkbox.cost} {checkbox.time}</label>
          <input
            type="checkbox"
            id={checkbox.title}
            checked={checkedState[checkbox.title]}
            onChange={() => handleCheckboxChange(checkbox.title)}
          />
        </div>
      ))}
    </div>
  );
};

export default SubMenu;
