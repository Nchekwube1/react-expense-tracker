import "./css/balance.css";
import expense from "./images/expenses.svg";
import hand from "./images/hand.svg";
import wallet from "./images/wallet.svg";
const Balance = ({ bIn, eIn, clear }) => {
  return (
    <div className="balance">
      <div className="money">
        <div className="one">
          <p>income</p>
          <div className="img">
            <img src={wallet} alt="null" />
          </div>
          <div className="desc">
            ${" "}
            {bIn.length > 0
              ? bIn.reduce((a, b) => {
                  return (a += parseInt(b.amount));
                }, 0)
              : 0}
          </div>
        </div>

        <div className="one">
          <p>balance</p>
          <div className="img">
            <img src={hand} alt="null" />
          </div>
          <div className="desc">
            ${" "}
            {bIn.length >= 0
              ? bIn.reduce((a, b) => {
                  return (a += parseInt(b.amount));
                }, 0) -
                eIn.reduce((a, b) => {
                  return (a += parseInt(b.amount));
                }, 0)
              : 0}
          </div>
        </div>

        <div className="one">
          <p>expenses</p>

          <div className="img">
            <img src={expense} alt="null" />
          </div>
          <div className="desc">
            ${" "}
            {eIn.length > 0
              ? eIn.reduce((a, b) => {
                  return (a += parseInt(b.amount));
                }, 0)
              : 0}
          </div>
        </div>
      </div>

      {bIn.length > 0 || eIn.length > 0 ? (
        <div className="button">
          <button onClick={clear}>Clear all</button>
        </div>
      ) : null}
    </div>
  );
};

export default Balance;
