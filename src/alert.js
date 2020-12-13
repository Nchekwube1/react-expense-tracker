import "./css/alert.css";

const Alert = ({ alert }) => {
  return <div className={`ediv ${alert.type}`}>{alert.text}</div>;
};

export default Alert;
