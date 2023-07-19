import "./tab.scss";

export const Tab = ({ buttonName, className, handleClick }) => {
  return (
    <button className={className} onClick={handleClick}>
      {buttonName}
    </button>
  );
};
