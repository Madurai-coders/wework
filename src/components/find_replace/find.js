import React, { useState } from "react";

function Find_replace() {
  const [entry_1, setentry_1] = useState();
  const [replace, setreplace] = useState();
  const [search, setsearch] = useState();

  function submit() {
    const D = entry_1;
    let dataarray = [];
    let datastring = "";
    for (let i = 0; i < D.length; i++) {
      if (D[i] === " ") {
        dataarray.push(datastring);
        datastring = "";
      } else if (D[i] === ".") {
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
      } 
    }
    console.log(V);
    setentry_1(V);
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
              id="exampleInputEmail"
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
              id="email"
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
              id="exampleInputEmail1"
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
      </div>
    </>
  );
}

export default Find_replace;
