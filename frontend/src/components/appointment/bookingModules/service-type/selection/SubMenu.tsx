import React from "react";
import "../../../../../css/appointment/bookingModules/service-type/selection/SubMenu.css";

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
const SubMenu: React.FC<SubMenuProps> = ({ menuItem, checkedState, onCheckboxChange }) => {
  return (
    <div className={`${styles.submenu} ${styles.active}`}>
      {subMenus[menuItem].map((checkbox:any) => (
        <div key={checkbox.title} className="label-checkbox">
          <label htmlFor={checkbox.title} className="submenu-label">
            <div className="first-two-label">
              <div className="sub-label">{checkbox.title}</div>
              <div className="sub-label">{checkbox.cost}</div>
            </div>
            <div className="sub-label">{checkbox.time}</div>
          </label>
          <input
            type="checkbox"
            id={checkbox.title}
            checked={checkedState[checkbox.title]}
            style={{cursor:'pointer'}}
            onChange={() => onCheckboxChange(menuItem, checkbox.title)}
          />
        </div>
      ))}
    </div>
  );
};

export default SubMenu;