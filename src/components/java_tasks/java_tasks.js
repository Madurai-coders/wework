import React, { useState } from "react";

function Java_tasks() {
  const [entry, setentry] = useState();

  const [search, setsearch] = useState();
  const [value, setvalue] = useState();
  const [result, setresult] = useState();

  function submit() {
    let text = entry;
    let position = text.search(search);
    console.log(position);
    setresult(position);

        const data = entry;
        let occurrence = 0;
        for (let i = 0; i < data.length; i++) {
       if (data.charAt(i) == search) {
            occurrence++;
           }
     }
         console.log(occurrence);

         setvalue(occurrence);
  }
  
  return (
    <>
      <div className="conatiner-fluid">
        <div className="form">
          <h1 className="m-3">Find out</h1>
          <div class="m-3">
            <label for="exampleInputEmail1" class="form-label">
              Enter
            </label>
            <input
              value={entry}
              onChange={(e) => setentry(e.target.value)}
              type="text"
              class="form-control email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              style={{ height: 200, width: 350 }}
            ></input>

            <label for="exampleInputEmail1" class="form-label mt-2">
              Search
            </label>
            <input
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              type="text"
              class="form-control email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              style={{ width: 350 }}
            ></input>
            <button
              type="button"
              onClick={submit}
              className=" mt-5 btn btn-success"
            >
              Submit
            </button>
            <h3>Number of occurrences:{value}</h3>
            <h3>position:{result}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Java_tasks;
