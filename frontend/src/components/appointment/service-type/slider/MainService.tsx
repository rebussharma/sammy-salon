import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import '../../../../css/appointment/service-type/slider/MainService.css';

export function MainService({
  itemId,
  selected,
  onClick,
  title,
}: {
  itemId: string;
  selected: boolean;
  onClick: Function;
  title: string;
}) {
  const visibility = React.useContext(VisibilityContext);
  const isVisible = visibility.useIsVisible(itemId, true);

  return (
    <div
      onClick={() => onClick()}
      role="button"
      tabIndex={0}
      className={selected ? "main-service selected" : "main-service"}
    >
      <div>
        <div>{title}</div>
        <div style={{ backgroundColor: isVisible ? "transparent" : "gray" }}>
        </div>
      </div>
    </div>
  );
}
