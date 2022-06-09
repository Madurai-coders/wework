import "./calc.css";
import React, { useState } from "react";
function Calc() {
  const [addvalue, setaddvalue] = useState("");

  const getvalue = (event) => {
    setaddvalue(addvalue + event.target.value);
  };

  function clear() {
    setaddvalue("");
  }

  const calculate = () => {
    try {
      setaddvalue(eval(addvalue));
    } catch (error) {
      setaddvalue("Error");
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="calculator">
          <div className="cards">
            <div className="setting">
              <i class="set_icon fa fa-ellipsis-v" aria-hidden="true"></i>
            </div>
            <div className="calc_option d-flex flex-row mt-4">
              <h6 className="option_1">Calculator</h6>
              <h6 className="option_1">Exchange Rate</h6>
              <h6 className="option_1">Unit coverter</h6>
            </div>
            <div className="answer">
              <input value={addvalue} type="text"></input>
            </div>
            <div className="numbers mt-5">
              <div className="row m-4">
                <div className="col-3 mt-4">
                  <button
                    type="button"
                    onClick={clear}
                    className=" col_1 btn btn-dark"
                  >
                    C
                  </button>
                </div>
                <div className="col-3 mt-4">
                  <button type="button" className="col_1 btn btn-dark">
                    %
                  </button>
                </div>
                <div className="col-3 mt-4">
                  <button type="button" className="col_1 btn btn-dark">
                    <i class="fa fa-times" aria-hidden="true"></i>
                  </button>
                </div>
                <div className="col-3 mt-4">
                  <button type="button" className=" col_1 btn btn-dark">
                    /
                  </button>
                </div>
              </div>
              <div className="row m-4">
                <div className="col-3">
                  <button
                    type="button"
                    value="7"
                    onClick={getvalue}
                    className="col_2 btn btn-light"
                  >
                    7
                  </button>
                </div>
                <div className="col-3">
                  <button
                    type="button"
                    value="8"
                    onClick={getvalue}
                    className="col_2 btn btn-light"
                  >
                    8
                  </button>
                </div>
                <div className="col-3">
                  <button
                    type="button"
                    value="9"
                    onClick={getvalue}
                    className="col_2 btn btn-light"
                  >
                    9
                  </button>
                </div>
                <div className="col-3">
                  <button
                    type="button"
                    value="*"
                    onClick={getvalue}
                    className="col_2 btn btn-light"
                  >
                    *
                  </button>
                </div>
              </div>
              <div className="row m-4">
                <div className="col-3">
                  <button
                    type="button"
                    value="4"
                    onClick={getvalue}
                    className="col_2 btn btn-light"
                  >
                    4
                  </button>
                </div>
                <div className="col-3">
                  <button
                    type="button"
                    value="5"
                    onClick={getvalue}
                    className="col_2 btn btn-light"
                  >
                    5
                  </button>
                </div>
                <div className="col-3">
                  <button
                    type="button"
                    value="6"
                    onClick={getvalue}
                    className="col_2 btn btn-light"
                  >
                    6
                  </button>
                </div>
                <div className="col-3">
                  <button
                    type="button"
                    value="-"
                    onClick={getvalue}
                    className="col_2 btn btn-light"
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="row m-4">
                <div className="col-3">
                  <button
                    type="button"
                    value="1"
                    onClick={getvalue}
                    className="col_2 btn btn-light"
                  >
                    1
                  </button>
                </div>
                <div className="col-3">
                  <button
                    type="button"
                    value="2"
                    onClick={getvalue}
                    className="col_2 btn btn-light"
                  >
                    2
                  </button>
                </div>
                <div className="col-3">
                  <button
                    type="button"
                    value="3"
                    onClick={getvalue}
                    className="col_2 btn btn-light"
                  >
                    3
                  </button>
                </div>
                <div className="col-3">
                  <button
                    type="button"
                    value="+"
                    onClick={getvalue}
                    className="col_2 btn btn-light"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="row m-4">
                <div className="col-3">
                  <button
                    type="button"
                    value="00"
                    onClick={getvalue}
                    className="col_2 btn btn-light"
                  >
                    00
                  </button>
                </div>
                <div className="col-3">
                  <button
                    type="button"
                    value="0"
                    onClick={getvalue}
                    className="col_2 btn btn-light"
                  >
                    0
                  </button>
                </div>
                <div className="col-3">
                  <button
                    type="button"
                    value="."
                    onClick={getvalue}
                    className="col_2 btn btn-light"
                  >
                    .
                  </button>
                </div>
                <div className="col-3">
                  <button
                    type="button"
                    onClick={calculate}
                    className="col_2 btn btn-light"
                  >
                    =
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calc;
