import React, { useState } from "react";
import {
  validation_Enter,
  validation_Replace,
  validation_Search,
} from "../validation/validation";

import "./find.css";

function Find_replace() {
  const [entry_1, setentry_1] = useState("not_selected");
  const [replace, setreplace] = useState("not_selected");
  const [search, setsearch] = useState("not_selected");
  const [result, setresult] = useState();
  const [entry, setentry] = useState();
  const [occurrence, setoccurrence] = useState();
  const [view, setview] = useState(false);
  const [warning, setwarning] = useState(false);
  const [searchwarning, setsearchwarning] = useState(false);

  function submit() {
    if (
      validation_Enter(entry_1).class === "pass" &&
      validation_Search(search).class === "pass" &&
      validation_Replace(replace).class === "pass"
    ) {
      setwarning(false);
      setentry(entry_1);
    } else {
      setwarning(true);
      setTimeout(function () {
        setwarning(false);
      }, 3000);
    }

    const D = entry_1;
    let dataarray = [];
    let datastring = "";
    let occurrences = 0;
    for (let i = 0; i < D.length; i++) {
      if (D[i] === " ") {
        dataarray.push(datastring);
        datastring = "";
      } else if (D[i] === "." || D[i] === ",") {
        dataarray.push(datastring);
        datastring = "";
      } else {
        datastring += D[i];
      }
    }
    console.log(dataarray);
    const V = dataarray;
    for (let j = 0; j < V.length; j++) {
      if (V[j] === search) {
        V[j] = replace;

        occurrences++;
        console.log(occurrences);
        setoccurrence(occurrences);

        setview(true);
        setTimeout(function () {
          setview(false);
        }, 3000);
        setsearch("not_selected");
        setentry_1("not_selected");
        setreplace("not_selected");
      }
      
      else {
        setsearchwarning(true);
        setTimeout(function () {
          setsearchwarning(false);
        }, 3000);
      }
    }
    console.log(dataarray);
    let val = dataarray;
    let result = "";
    for (let k = 0; k < val.length; k++) {
      result = result.concat(val[k] + " ");
    }
    console.log(result);
    setresult(result);
  }

  return (
    <>
      <div className="conatiner-fluid">
        <div className="form d-flex flex-row">
          <h1 className="">Find out</h1>
          <div class="m-5">
            <label for="exampleInputEmail1" class="form-label">
              Enter
            </label>
            <textarea
              value={entry_1 != "not_selected" ? entry_1 : ""}
              onBlur={(e) => setentry_1(e.target.value)}
              onChange={(e) => setentry_1(e.target.value)}
              onKeyUp={validation_Enter}
              type="text"
              class="form-control email"
              id="enter"
              aria-describedby="emailHelp"
              style={{
                height: 200,
                width: 350,
                display: "block",
                resize: "none",
              }}
            ></textarea>
            {validation_Enter(entry_1).msg}

            <label for="exampleInputEmail1" class="form-label mt-4">
              Find
            </label>
            <input
              value={search != "not_selected" ? search : ""}
              onBlur={(e) => setsearch(e.target.value)}
              onChange={(e) => setsearch(e.target.value)}
              onKeyUp={validation_Search}
              type="text"
              class="form-control email"
              id="find"
              aria-describedby="emailHelp"
              style={{ width: 350 }}
            ></input>
            {validation_Search(search).msg}
            <label for="exampleInputEmail1" class="form-label mt-4">
              Replace
            </label>
            <input
              value={replace != "not_selected" ? replace : ""}
              onBlur={(e) => setreplace(e.target.value)}
              onChange={(e) => setreplace(e.target.value)}
              onKeyUp={validation_Replace}
              type="text"
              class="form-control email"
              id="replace"
              aria-describedby="emailHelp"
              style={{
                width: 350,
                display: "block",
                resize: "none",
              }}
            ></input>
            {validation_Replace(replace).msg}

            <button
              type="button"
              onClick={submit}
              className=" mt-5 btn btn-success"
            >
              Submit
            </button>
          </div>
        </div>

        <h4 className="mt-4">Enter Text: {entry}</h4>
        <h4 className="mt-4">Replace Text: {result}</h4>
        <h4 className="mt-4">Search Text occurrence: {occurrence}</h4>

        {view && (
          <>
            <div className="overlay" id="show">
              <div className="card text-center">
                <span className="msg mt-2">Text Replaced Successfully!</span>
              </div>
            </div>
          </>
        )}

        {warning && (
          <>
            <div className="overlay" id="show">
              <div className="card_1 text-center">
                <span className="msg_1">Check your input field</span>
              </div>
            </div>
          </>
        )}
        {searchwarning && (
          <>
            <div className="overlay" id="show">
              <div className="card_2 text-center">
                <span className="msg_1">check your Search Text</span>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Find_replace;
