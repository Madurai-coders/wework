import React, { useState } from "react";

function Taskstar() {
  const [data, setdata] = useState();

  const [string, setstring] = useState();

  function Enter(n = data) {
    let diamond = "";

    for (let i = 1; i <= n; i++) {
      for (let j = n; j > i; j--) {
        diamond += " ";
      }
      for (let k = 0; k < i * 2 - 1; k++) {
        if (k === 0 || k === 2 * i - 2) {
          diamond += "*";
        } else {
          if (i == n && k === i - 1) {
            diamond += "*";
          } else {
            diamond += " ";
          }
        }
      }

      diamond += "\n";
    }

    for (let i = 1; i <= n - 1; i++) {
      for (let j = 0; j < i; j++) {
        diamond += " ";
      }

      for (let k = (n - i) * 2 - 1; k >= 1; k--) {
        if (k === 1 || k === (n - i) * 2 - 1) {
          diamond += "*";
        } else {
          diamond += " ";
        }
      }
      diamond += "\n";
    }

    console.log(diamond);

    // Hollow diamond

    let Hdiamond = "";

    for (let i = 1; i <= n; i++) {
      for (let j = n; j > i; j--) {
        Hdiamond += " ";
      }
      for (let k = 0; k < i * 2; k++) {
        if ((i === 1 && k === 0) || k == 2 * n - 1 || k == i - n) {
          Hdiamond += "*";
        } else {
          Hdiamond += " ";
        }
      }
      Hdiamond += "\n";
    }

    for (let i = 1; i <= n - 1; i++) {
      for (let j = 0; j < n; j++) {
        Hdiamond += " ";
      }
      for (let k = 0; k < i; k++) {
        if (k === (n - i) * 3 - 1 && i == n - 1) {
          Hdiamond += "*";
        }
      }
      Hdiamond += "\n";
    }

    console.log(Hdiamond);

    //     diagnal

    let diagonal = "";

    for (let i = 1; i <= n; i++) {
      // printing star
      for (let j = 0; j < n; j++) {
        if (i == n || i === 1) {
          diagonal += "*";
        } else {
          if (j == 0 || j == i - 1 || j == n - 1 || j === n - i) {
            diagonal += "*";
          } else {
            diagonal += " ";
          }
        }
      }

      diagonal += "\n";
    }
    console.log(diagonal);

    // heart

    var heart = "";

    for (let i = 1; i < 2; i++) {
      // print first spaces
      for (let j = 0; j < i + 1; j++) {
        heart += " ";
      }
      // print first stars
      for (let j = 0; j < n + 1; j++) {
        if (j === 0 || j === parseInt(n) ) {
          heart += "*";
        } else {
            heart += " ";
          }
        
      }

      heart += "\n";
    }

    for (let i = 1; i <= n - 1; i++) {
      // printing spaces
      for (let j = 0; j < i; j++) {
        heart += " ";
      }
      // printing star
      for (let k = (n - i) * 2 - 1; k >= 1; k--) {
        if (k === 1 || k === (n - i) * 2 - 1 || (i === 1 && k === n - 1)) {
          heart += "*";
        } else {
          heart += " ";
        }
      }
      heart += "\n";
    }

    console.log(heart);
  }

  return (
    <>
      <div className="conatiner-fluid">
        <div className="form">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              input
            </label>
            <input
            style={{width:200}}
              value={data}
              onChange={(e) => setdata(e.target.value)}
              type="text"
              class="form-control email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
            <button
              type="button"
              onClick={() => Enter()}
              className="mt-3 submit btn btn-success"
            >
              Submit
            </button>
          </div>
          <h6 style={{ color: "red" }}>{string}</h6>
        </div>
      </div>
    </>
  );
}

export default Taskstar;
