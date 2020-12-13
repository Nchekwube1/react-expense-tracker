import "./css/elist.css";
import Eitem from "./eitem";

const Elist = ({ eIn, hed, hee }) => {
  return (
    <div className="elist">
      {eIn.map((item) => {
        return <Eitem key={item.id} item={item} hed={hed} hee={hee} />;
      })}
    </div>
  );
};

export default Elist;
