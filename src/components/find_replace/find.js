import React, { useState } from "react";
import {
  validation_Enter,
  validation_Replace,
  validation_Search,
} from "../find_validation/validation";

import "./find.css";

function Find_replace() {
  const [entry_1, setentry_1] = useState("not_selected");
  const [replace, setreplace] = useState("not_selected");
  const [search, setsearch] = useState("not_selected");
  const [result, setresult] = useState();
  const [entry, setentry] = useState();
  const [occurrence, setoccurrence] = useState(0);

  const Text_search = (event) => {
    setentry_1(event.target.value);
    console.log(entry_1);
    let dataarray = [];
    let datastring = "";
    for (let i = 0; i < entry_1.length; i++) {
      if (entry_1[i] === " ") {
        dataarray.push(datastring);
        datastring = "";
        console.log("dataarray:", dataarray);
      } else if (entry_1[i] === "." || entry_1[i] === ",") {
        dataarray.push(datastring);
        datastring = "";
      } else {
        datastring += entry_1[i];
      }
    }
    console.log(dataarray);
    //  console.log(entry_1[i])
  };

  // const Search = (event) => {
  //   setsearch(event.target.value);
  //   let count = 0;
  //   for (let j = 0; j < entry.length; j++) {
  //     if (entry[j] === search) {
  //       count++;
  //     }
  //     console.log("occurrence:", count);
  //   }
  // };

  // function submit() {
  //   const D = entry_1;
  //   let dataarray = [];
  //   let datastring = "";
  //   for (let i = 0; i < D.length; i++) {
  //     if (D[i] === " ") {
  //       dataarray.push(datastring);
  //       datastring = "";
  //     } else if (D[i] === "." || D[i] === ",") {
  //       dataarray.push(datastring);
  //       datastring = "";
  //     } else {
  //       datastring += D[i];
  //     }
  //   }
  //   console.log(dataarray);
  //   const V = dataarray;
  //   let occu = 0;
  //   for (let j = 0; j < V.length; j++) {
  //     if (V[j] === search) {
  //       V[j] = replace;
  //       occu++;
  //     }
  //   }
  //   console.log(occu);
  //   console.log(dataarray);
  //   let val = dataarray;
  //   let result = "";
  //   for (let k = 0; k < val.length; k++) {
  //     result = result.concat(val[k] + " ");
  //   }
  //   console.log(result);
  // }

  function clear() {
    setsearch("not_selected");
    setentry_1("not_selected");
    setreplace("not_selected");
    setoccurrence("");
    setresult("");
  }

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <div className="col-9 p-0 m-0 d-flex flex-row  find_replace mt-4">
            <div className="col-7 find">
              <h5 className="text_to m-1">Text to search</h5>
              <textarea
                value={entry_1 != "not_selected" ? entry_1 : ""}
                onChange={Text_search}
                onKeyUp={validation_Enter}
                type="text"
                class="form-control email"
                id="enter"
                aria-describedby="emailHelp"
                style={{
                  marginTop: 10,
                  marginLeft: 5,
                  height: 200,
                  width: 630,
                  display: "block",
                  resize: "none",
                }}
              ></textarea>
              {validation_Enter(entry_1).msg}

              <h5 className="search_txt">Search For</h5>
              <input
                value={search != "not_selected" ? search : ""}
                onKeyUp={validation_Search}
                onChange={Search}
                type="text"
                class="form-control email"
                id="find"
                aria-describedby="emailHelp"
                style={{ width: 630, marginLeft: 5, marginTop: 10 }}
              ></input>
              {validation_Search(search).msg}

              <h5 className="replace_txt">Replace With</h5>
              <textarea
                value={replace != "not_selected" ? replace : ""}
                onChange={(e) => setreplace(e.target.value)}
                onKeyUp={validation_Replace}
                type="text"
                class="form-control email"
                id="replace"
                aria-describedby="emailHelp"
                style={{
                  marginTop: 5,
                  marginLeft: 5,
                  height: 20,
                  width: 630,
                  display: "block",
                  resize: "none",
                }}
              ></textarea>
              {validation_Replace(replace).msg}

              <button
                type="button"
                onClick={submit}
                class="replace_btn btn btn-success"
              >
                REPLACE
              </button>

              <button
                type="button"
                onClick={clear}
                class="replace_btn btn btn-success"
              >
                Clear
              </button>
            </div>
            <div className="vl"></div>
            <div className="col-5 replace mt-1">
              <h5 className="replaced_txt">Replaced Text</h5>
              <textarea
                value={result}
                type="text"
                class="form-control email"
                id="replace"
                aria-describedby="emailHelp"
                style={{
                  marginTop: 5,
                  marginLeft: 5,
                  height: 200,
                  width: 430,
                  display: "block",
                  resize: "none",
                }}
              ></textarea>
              <h6 className="mt-4 occurrence">
                {occurrence} occurrences Replaced
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Find_replace;
