import React from "react";
import "./css/expenseform.css";
import Alert from "./alert";

const EF = ({ ef, eIn, ine, desE, sec, sedc, eerr, ederr, alert, eadd }) => {
  return (
    <div className="ef">
      <form className="fe" onSubmit={ef}>
        <div className="plate">
          {eerr || ederr ? <Alert alert={alert} /> : null}
          {eadd ? <Alert alert={alert} /> : null}
          <input
            type="text"
            className={`ei ${eerr ? "err" : null}`}
            placeholder="input an expense"
            value={ine}
            onChange={sec}
          />
          <input
            type="text"
            className={`ed ${ederr ? "err" : null}`}
            placeholder="input description"
            value={desE}
            onChange={sedc}
          />
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default EF;
