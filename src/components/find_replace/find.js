import React, { useState } from "react";

import "./find.css";

function Find_replace() {
  const [entry_1, setentry_1] = useState();
  const [replace, setreplace] = useState();
  const [search, setsearch] = useState();
  const [result, setresult] = useState();
  const [entry, setentry] = useState();
  const [view, setview] = useState(false);

  function submit() {
    const D = entry_1;
    let dataarray = [];
    let datastring = "";
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

    setentry(entry_1);

    const V = dataarray;

    for (let j = 0; j < V.length; j++) {
      if (V[j] === search) {
        V[j] = replace;
        setview(true);
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
    setsearch("");
    setentry_1("");
    setreplace("");

    setTimeout(function () {
      document.querySelector("#show").classList.add("show");
    }, 3000);
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
              value={entry_1}
              onChange={(e) => setentry_1(e.target.value)}
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

            <label for="exampleInputEmail1" class="form-label mt-2">
              Find
            </label>
            <input
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              type="text"
              class="form-control email"
              id="find"
              aria-describedby="emailHelp"
              style={{ width: 350 }}
            ></input>

            <label for="exampleInputEmail1" class="form-label mt-2">
              Replace
            </label>
            <input
              value={replace}
              onChange={(e) => setreplace(e.target.value)}
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
        {view && (
          <>
            <div className="overlay" id="show">
              <div className="card text-center">
                <span className="msg mt-2">Text Replaced Successfully!</span>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Find_replace;
