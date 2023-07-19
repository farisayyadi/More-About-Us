import "./description.scss";

export const Description = ({ content, className, contentTittle }) => {
  return (
    <div className={className}>
      <h4>{contentTittle}</h4>
      <p>{content}</p>
    </div>
  );
};
