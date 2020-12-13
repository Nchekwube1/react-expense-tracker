import React from "react";
import "./css/budgetform.css";
import Alert from "./alert";

const BF = ({ bf, bIn, inb, desB, sic, sidc, berr, bderr, alert, badd }) => {
  return (
    <div className="bf">
      <form className="fb" onSubmit={bf}>
        <div className="plate">
          {berr || bderr ? <Alert alert={alert} /> : null}
          {badd ? <Alert alert={alert} /> : null}
          <input
            type="text"
            className={`bi ${berr ? "err" : null}`}
            placeholder="input an income"
            value={inb}
            onChange={sic}
          />
          <input
            type="text"
            className={`bd ${bderr ? "err" : null}`}
            placeholder="input description"
            value={desB}
            onChange={sidc}
          />
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default BF;
