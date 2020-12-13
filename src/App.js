import "./css/App.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import BF from "./budgetform";
import EF from "./expenseform";
import Balance from "./balance";
import Blist from "./blist";
import Elist from "./elist";

function App() {
  const [bIn, setBin] = useState([]);
  const [inb, setInb] = useState("");
  const [desB, setDesb] = useState("");
  const [berr, setBerr] = useState(false);
  const [bderr, setBderr] = useState(false);
  const [badd, setBadd] = useState(false);

  const [eIn, setEin] = useState([]);
  const [ine, setIne] = useState("");
  const [desE, setDese] = useState("");
  const [eerr, setEerr] = useState(false);
  const [ederr, setEderr] = useState(false);
  const [eadd, setEadd] = useState(false);

  const [alert, setAlert] = useState({});

  useEffect(() => {
    // console.log(bIn);
  }, [bIn, eIn]);

  function bf(e) {
    e.preventDefault();
    if (!parseInt(inb)) {
      setBerr(true);
      setAlert({
        type: "fail",
        text: "please input a valid amount",
      });
      setTimeout(() => {
        setBerr(false);
      }, 3000);
    }
    if (desB === "") {
      setBderr(true);
      setAlert({
        type: "fail",
        text: "please input a description",
      });
      setTimeout(() => {
        setBderr(false);
      }, 3000);
    } else if (desB !== "" && parseInt(inb)) {
      let inputvalue = {
        id: new Date().getTime(),
        amount: inb,
        desc: desB,
      };
      setBin([...bIn, inputvalue]);
      setBadd(true);
      setAlert({
        type: "succ",
        text: "income added!",
      });
      setTimeout(() => {
        setBadd(false);
      }, 3000);

      setInb("");
      setDesb("");
    }
  }

  function sic(e) {
    setInb(e.target.value);
  }
  function sidc(e) {
    setDesb(e.target.value);
  }

  function ef(e) {
    e.preventDefault();
    if (!parseInt(ine) || ine === "") {
      setEerr(true);
      setAlert({
        type: "fail",
        text: "please input a valid amount",
      });
      setTimeout(() => {
        setEerr(false);
      }, 3000);
    }
    if (desE === "") {
      setEderr(true);
      setAlert({
        type: "fail",
        text: "please input a description",
      });
      setTimeout(() => {
        setEderr(false);
      }, 3000);
    } else if (desE !== "" && parseInt(ine)) {
      let inputvalue = {
        id: new Date().getTime(),
        amount: ine,
        desc: desE,
      };
      setEin([...eIn, inputvalue]);
      setEadd(true);
      setAlert({
        type: "succ",
        text: "expense added!",
      });
      setTimeout(() => {
        setEadd(false);
      }, 3000);

      setIne("");
      setDese("");
    }
  }

  function sec(e) {
    setIne(e.target.value);
  }
  function sedc(e) {
    setDese(e.target.value);
  }

  function hbd(id) {
    let newarr = bIn.filter((item) => item.id !== id);
    setBin(newarr);
  }
  function hbe(id) {
    let newarr = bIn.filter((item) => item.id !== id);
    let temparr = bIn.filter((item) => item.id === id);
    setInb(temparr[0].amount);
    setDesb(temparr[0].desc);
    console.log(temparr);
    setBin(newarr);
  }
  function hed(id) {
    let newarr = eIn.filter((item) => item.id !== id);
    setEin(newarr);
  }
  function hee(id) {
    let newarr = eIn.filter((item) => item.id !== id);
    let temparr = eIn.filter((item) => item.id === id);
    setIne(temparr[0].amount);
    setDese(temparr[0].desc);
    console.log(temparr);
    setEin(newarr);
  }

  function clear() {
    setEin([]);
    setBin([]);
  }
  return (
    <div className="App">
      <Header />
      <div className="inputs">
        <BF
          bf={bf}
          bIn={bIn}
          inb={inb}
          desB={desB}
          sic={sic}
          sidc={sidc}
          berr={berr}
          bderr={bderr}
          alert={alert}
          badd={badd}
        />
        <EF
          ef={ef}
          eIn={eIn}
          ine={ine}
          desE={desE}
          sec={sec}
          sedc={sedc}
          eerr={eerr}
          ederr={ederr}
          alert={alert}
          eadd={eadd}
        />
      </div>
      <div className="lists">
        <Balance bIn={bIn} eIn={eIn} clear={clear} />
        <div className="items">
          <Blist bIn={bIn} hbd={hbd} hbe={hbe} />
          <Elist eIn={eIn} hed={hed} hee={hee} />
        </div>
      </div>
    </div>
  );
}

export default App;
