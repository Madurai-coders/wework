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
    var value = event.target.value;
    console.log(value);
    let dataarray = [];
    let datastring = "";
    for (let i = 0; i < value.length; i++) {
      if (value[i] === " ") {
        dataarray.push(datastring);
        datastring = "";
        console.log("dataarray:", dataarray);
      } else if (value[i] === "." || value[i] === ",") {
        dataarray.push(datastring);
        datastring = "";
      } else {
        datastring += value[i];
        //  console.log(entry_1[i])
      }
    }
    console.log(dataarray);
    setentry(dataarray);
  };

  const Search = (event) => {
    setsearch(event.target.value);
    var searchdata = event.target.value;
    console.log(searchdata);
    let count = 0;
    for (let j = 0; j < entry.length; j++) {
      if (entry[j] === searchdata) {
        count++;
        document.getElementById("find").style.color = "white";
      }
      else{
        document.getElementById("find").style.color = "red";

      }
      console.log("occurrence:", count);
      setoccurrence(count);
    }
  };

  function Replace() {
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
    const V = dataarray;
    let occu = 0;
    for (let j = 0; j < V.length; j++) {
      if (V[j] === search) {
        V[j] = replace;
        occu++;
      }
    }
    console.log(occu);
    console.log(dataarray);
    let val = dataarray;
    let result = "";
    for (let k = 0; k < val.length; k++) {
      result = result.concat(val[k] + " ");
    }
    console.log(result);
    setresult(result);
  }

  function Clear() {
    setsearch("not_selected");
    setentry_1("not_selected");
    setreplace("not_selected");
    setoccurrence("");
    setresult("");
  }
  function Show_count() {
    document.querySelector("#show_occurrence").classList.toggle("occurrences");
  }

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <div className="d-flex flex-row  find_replace mt-4">
            <div className="find d-flex flex-column">
              <h5 className="text_to">Text to search</h5>
              <textarea
                value={entry_1 != "not_selected" ? entry_1 : ""}
                onChange={Text_search}
                onKeyUp={validation_Enter}
                type="text"
                class="form-control text_input"
                id="enter"
                aria-describedby="emailHelp"
                style={{
                  marginLeft: 18,
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
                class="form-control search_input"
                id="find"
                aria-describedby="emailHelp"
                style={{ marginLeft: 18, marginTop: 10 }}
              ></input>
              {validation_Search(search).msg}

              <h5 className="replace_txt">Replace With</h5>
              <textarea
                value={replace != "not_selected" ? replace : ""}
                onChange={(e) => setreplace(e.target.value)}
                onKeyUp={validation_Replace}
                type="text"
                class="form-control search_input"
                id="replace"
                aria-describedby="emailHelp"
                style={{
                  marginTop: 5,
                  marginLeft: 18,
                  height: 20,
                  display: "block",
                  resize: "none",
                }}
              ></textarea>
              {validation_Replace(replace).msg}

              <button
                type="button"
                onClick={Replace}
                class="replace_btn btn btn-success"
              >
                REPLACE
              </button>

              <button
                type="button"
                onClick={Clear}
                class="clear_btn btn btn-danger"
              >
                Clear
              </button>
            </div>
            <div className="vl"></div>
            <div className="replace mt-1 d-flex flex-column">
              <h5 className="replaced_txt">Replaced Text</h5>
              <textarea
                value={result}
                type="text"
                class="form-control replaced_input"
                id="replace"
                aria-describedby="emailHelp"
                style={{
                  resize: "none",
                }}
              ></textarea>
              <div class="form-check check">
                <input
                  onClick={Show_count}
                  class="form-check-input check_box "
                  type="checkbox"
                  value=""
                  id="flexCheckIndeterminate"
                ></input>
                <label class="form-check-label" for="flexCheckIndeterminate">
                  Occurrences were replaced
                </label>
              </div>

              <h6 className="mt-4 occurrence" id="show_occurrence">
                <code className="m-2">{occurrence} </code> Occurrences were replaced
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Find_replace;
