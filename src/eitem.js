import "./css/eitem.css";
import e from "./images/edit.svg";
import d from "./images/delete.svg";

const Eitem = ({ item, hed, hee }) => {
  const { id, amount, desc } = item;
  return (
    <div className="eitem">
      <div className="eamount">
        <div className="edol">- ${amount}</div>
        <div className="edesc">{desc}</div>
      </div>
      <div className="etouch">
        <button className="eedit" onClick={() => hee(id)}>
          <img src={e} alt="" />
        </button>
        <button className="edelete" onClick={() => hed(id)}>
          <img src={d} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Eitem;
