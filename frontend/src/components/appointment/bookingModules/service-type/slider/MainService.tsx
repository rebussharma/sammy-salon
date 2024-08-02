import '../../../../../css/appointment/bookingModules/service-type/slider/MainService.css';

export function MainService({
  selected,
  onClick,
  title,
}: {
  selected: boolean;
  onClick: Function;
  title: string;
}) {
  return (
    <div
      onClick={() => onClick()}
      role="button"
      tabIndex={0}
      className={selected ? "main-service selected" : "main-service"}
    >
      <div>
        <div>{title}</div>
      </div>
    </div>
  );
}
