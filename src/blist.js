import "./css/blist.css";
import Bitem from "./bitem";

const Blist = ({ bIn, hbd, hbe }) => {
  return (
    <div className="blist">
      {bIn.map((item) => {
        return <Bitem key={item.id} item={item} hbd={hbd} hbe={hbe} />;
      })}
    </div>
  );
};

export default Blist;
