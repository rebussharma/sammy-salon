import "../../../../../css/appointment/bookingModules/service-type/slider/MainService.css";

interface MainServiceProps {
  itemId: string; // Add this line to include itemId in the props
  selected: boolean;
  onClick: () => void;
  title: string;
}

export function MainService({ itemId, selected, onClick, title }: MainServiceProps) {
  return (
    <div
      itemID={itemId} // Add this line to set the itemId
      onClick={onClick}
      role="button"
      tabIndex={0}
      className={`main-service ${selected ? 'selected' : ''}`}
    >
      {title}
    </div>
  );
}