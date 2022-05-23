import React, { useState } from "react";

function Java_tasks() {
  const [entry, setentry] = useState();
  const [search, setsearch] = useState();
  const [value, setvalue] = useState();
  const [result, setresult] = useState();

  const [entry_1, setentry_1] = useState();
  const [search_1, setsearch_1] = useState();
  const [value_1, setvalue_1] = useState();
  const [result_1, setresult_1] = useState();

  function submit() {
    const value = entry;
    var position = [];
    for (let i = 0; i < value.length; i++) {
      if (value.charAt(i) == search) {
        position.push(i);
      }
    }

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



  function submit_1() {
    
    const data = entry_1;
    const word = data.split(" ");
    let occurrence = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i] == search_1) {
        occurrence++;
      }
    }
    console.log(occurrence);

    setvalue_1(occurrence);
  }

  return (
    <>
      <div className="conatiner-fluid">
        <div className="form d-flex flex-row">
          <h1 className="">Find out</h1>
          <div class="mt-5">
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

          <div class="m-5">
            <label for="exampleInputEmail1" class="form-label">
              Enter
            </label>
            <input
              value={entry_1}
              onChange={(e) => setentry_1(e.target.value)}
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
              value={search_1}
              onChange={(e) => setsearch_1(e.target.value)}
              type="text"
              class="form-control email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              style={{ width: 350 }}
            ></input>
            <button
              type="button"
              onClick={submit_1}
              className=" mt-5 btn btn-success"
            >
              Submit
            </button>
            <h3>Number of occurrences:{value_1}</h3>
            <h3>position:{result_1}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Java_tasks;
