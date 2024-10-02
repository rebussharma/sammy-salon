import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import "../../../../../css/appointment/bookingModules/service-type/slider/Arrows.css";

export function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      &lt;
    </Arrow>
  );
}

export function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
      &gt;
    </Arrow>
  );
}

function Arrow({ children, disabled, onClick }: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: VoidFunction;
}) {
  return (
    <button
      className="arrow-btn"
      disabled={disabled}
      onClick={onClick}
      style={{ opacity: disabled ? 0.5 : 1 }}
    >
      {children}
    </button>
  );
}
