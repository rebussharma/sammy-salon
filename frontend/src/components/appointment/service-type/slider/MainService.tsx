import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

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
      style={{
        border: "1px solid",
        display: "inline-block",
        margin: "0 10px",
        width: "100px",
        height: "30px",
        userSelect: "none",
        textAlign:"center",
        cursor:"pointer"
      }}
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
