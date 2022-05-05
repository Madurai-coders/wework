import "./lookingjob_login.css";

import React, { useState } from "react";
import { TextField, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { validation_HireLoginEmail } from "../validation/validatefunction";
import { validation_HireLoginPassword } from "../validation/validatefunction";

const usestyle = makeStyles((theme) => ({
  email: {
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(5),
    minWidth: 260,
  },
  password: {
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(5),
    minWidth: 260,
  },
}));

function Lookingjob_Login() {
  let history = useHistory();

  const [hirelogin_input, sethirelogin_input] = useState({
    Email: "not_selected",
    Password: "not_selected",
  });
  const classes = usestyle();

  function Lookingjob_login() {
    if (
      validation_HireLoginEmail(hirelogin_input.Email).class === "pass" &&
      validation_HireLoginPassword(hirelogin_input.Password).class === "pass"
    ) {
      history.push("/hires_website");
    } else {
      history.push("/lookingjob_login");
      
    }
  }

  return (
    <>
      <div className="container-fluid bg-primary">
        <div className="hire_login">
          <div className="login_content">
            <div className="text-center">
              <h1 className="hirelogin_txt mt-4">Login</h1>
            </div>

            <TextField
              className={classes.email}
              value={
                hirelogin_input.Email != "not_selected"
                  ? hirelogin_input.Email
                  : ""
              }
              onKeyUp={validation_HireLoginEmail}
              onChange={(e) =>
                sethirelogin_input({
                  ...hirelogin_input,
                  Email: e.target.value,
                })
              }
              onBlur={(e) =>
                sethirelogin_input({
                  ...hirelogin_input,
                  Email: e.target.value,
                })
              }
              id="standard-basic"
              label="Email"
              variant="standard"
            />
            <br></br>
            {validation_HireLoginEmail(hirelogin_input.Email).msg}

            <TextField
              className={classes.password}
              value={
                hirelogin_input.Password != "not_selected"
                  ? hirelogin_input.Password
                  : ""
              }
              onKeyUp={validation_HireLoginPassword}
              onChange={(e) =>
                sethirelogin_input({
                  ...hirelogin_input,
                  Password: e.target.value,
                })
              }
              onBlur={(e) =>
                sethirelogin_input({
                  ...hirelogin_input,
                  Password: e.target.value,
                })
              }
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
            <br></br>
            {validation_HireLoginPassword(hirelogin_input.Password).msg}

            <br></br>
            <button
              onClick={Lookingjob_login}
              type="button"
              className=" hire_loginbtn btn btn-primary"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Lookingjob_Login;
