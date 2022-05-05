import "./lookingjob_signup.css";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { validation_HireEmail } from "../validation/validatefunction";
import { validation_HirePassword } from "../validation/validatefunction";
import { validation_HireUserName } from "../validation/validatefunction";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Lookingjob_Signup() {
  let history = useHistory();

  const [hiresignup_input, sethiresignup_input] = useState({
    UserName: "not_selected",
    Email: "not_selected",
    Password: "not_selected",
  });

  function Looking_job() {
    if (
      validation_HireUserName(hiresignup_input.UserName).class === "pass" &&
      validation_HireEmail(hiresignup_input.Email).class === "pass" &&
      validation_HirePassword(hiresignup_input.Password).class === "pass"
    ) {
      history.push("/hires_website");
    } else {
      history.push("/lookingjob_signup");
    }
  }

  return (
    <>
      <div className="container-fluid bg-primary">
        <div className="hire_signup">
          <div className="signup_content">
            <div className="text-center">
              <h1 className="hiresignup_txt mt-4">Sign Up</h1>
              <h6 className="member_txt mt-3">
                Already a member?
                <Link to="/lookingjob_login" style={{ textDecoration: "none" }}>
                  <primary className="hiresignup_txt1">Log in</primary>
                </Link>
              </h6>
            </div>

            <TextField
              value={
                hiresignup_input.UserName != "not_selected"
                  ? hiresignup_input.UserName
                  : ""
              }
              onKeyUp={validation_HireUserName}
              onChange={(e) =>
                sethiresignup_input({
                  ...hiresignup_input,
                  UserName: e.target.value,
                })
              }
              onBlur={(e) =>
                sethiresignup_input({
                  ...hiresignup_input,
                  UserName: e.target.value,
                })
              }
              id="standard-basic"
              label="UserName"
              variant="standard"
              sx={{ marginLeft: 10, marginTop: 5, minWidth: 280 }}
            />
            <br></br>
            {validation_HireUserName(hiresignup_input.UserName).msg}
            <TextField
              value={
                hiresignup_input.Email != "not_selected"
                  ? hiresignup_input.Email
                  : ""
              }
              onKeyUp={validation_HireEmail}
              onChange={(e) =>
                sethiresignup_input({
                  ...hiresignup_input,
                  Email: e.target.value,
                })
              }
              onBlur={(e) =>
                sethiresignup_input({
                  ...hiresignup_input,
                  Email: e.target.value,
                })
              }
              id="standard-basic"
              label="Email"
              variant="standard"
              sx={{ marginLeft: 10, marginTop: 5, minWidth: 280 }}
            />
            <br></br>
            {validation_HireEmail(hiresignup_input.Email).msg}

            <TextField
              sx={{ marginLeft: 10, marginTop: 5, minWidth: 280 }}
              value={
                hiresignup_input.Password != "not_selected"
                  ? hiresignup_input.Password
                  : ""
              }
              onKeyUp={validation_HirePassword}
              onChange={(e) =>
                sethiresignup_input({
                  ...hiresignup_input,
                  Password: e.target.value,
                })
              }
              onBlur={(e) =>
                sethiresignup_input({
                  ...hiresignup_input,
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
            {validation_HirePassword(hiresignup_input.Password).msg}

            <br></br>
            <button
              type="button"
              onClick={Looking_job}
              className=" hire_signupbtn btn btn-primary"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Lookingjob_Signup;
