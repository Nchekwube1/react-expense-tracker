import "./css/bitem.css";
import e from "./images/edit.svg";
import d from "./images/delete.svg";

const Bitem = ({ item, hbd, hbe }) => {
  const { id, amount, desc } = item;
  return (
    <div className="item">
      <div className="amount">
        <div className="dol">+${amount}</div>
        <div className="desc">{desc}</div>
      </div>
      <div className="touch">
        <button className="edit" onClick={() => hbe(id)}>
          <img src={e} alt="" />
        </button>
        <button className="delete" onClick={() => hbd(id)}>
          <img src={d} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Bitem;
