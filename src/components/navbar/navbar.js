import "./navbar.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Join from "../assets/join.png";
import Profile from "../profile/profile";
import Hire_signup from "../lookingjob_signup/lookingjob_signup";
import { useHistory } from "react-router-dom";
const usestyle = makeStyles(() => ({
  join: {
    boxShadow: "none",
  },
}));

function Navbar() {
    let history = useHistory();
  const [join, setjoin] = useState(false);

  const [selecteValue, setSelecteValue] = React.useState("");

  const handleChange = (event) => {
    setSelecteValue(event.target.value);
  };

  const classes = usestyle();

  const [lookingjob, setlookingjob] = useState(false);
  const [hiring, sethiring] = useState(false);

  const [lookingfor_job, setlookingfor_job] = useState(false);

  function Sign () {

  if(selecteValue === 'a'){
  
  history.push('/lookingjob_signup');
  }
  
  if (selecteValue === "b"){
    history.push('/hirejob_signup');
  }
  

}
  

    

  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <div className="Brand_logo d-flex flex-row">
            <h6 className="brand_name">Work</h6>

            <Link to="/introduction" style={{ textDecoration: "none" }}>
              <span class="dot">
                <a className="brand">WE</a>
              </span>
            </Link>
          </div>
          <div className="nav_list">
            <ul>
              <Link to="/discover" style={{ textDecoration: "none" }}>
                <li>
                  <a className="menu1">
                    <i class="discover fa fa-bandcamp" aria-hidden="true"></i>
                    <h6 className="menulist">Discover</h6>
                  </a>
                </li>
              </Link>
              <Link to="/profile" style={{ textDecoration: "none" }}>
                <li>
                  <a className="menu1">
                    <i
                      class="discover fa fa-user-circle"
                      aria-hidden="true"
                    ></i>
                    <h6 className="menulist1">Profile</h6>
                  </a>
                </li>
              </Link>
              <Link to="/hire" style={{ textDecoration: "none" }}>
                <li>
                  <a className="menu1">
                    <i class="discover fa fa-briefcase" aria-hidden="true"></i>
                    <h6 className="menulist2">Jobs</h6>
                  </a>
                </li>
              </Link>
              <li>
                <div class="vl"></div>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => setjoin(true)}
                  class=" join btn btn-outline-secondary"
                >
                  Join now
                </button>
              </li>
              <li>
                <button type="button" class="sign_in btn btn-outline-primary">
                  Admin
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {join && (
        <>
          <div className="join_slide">
            <div className="box">
              <div className="join_img mt-5">
                <img className="join_image" src={Join} alt=""></img>
              </div>
              <div className="d-flex flex-column">
                <div className=" join_form d-flex flex-row">
                  <h4 className="looking_job">Are you looking for a job</h4>
                  <span>
                    <Radio
                      onClick={() => setlookingfor_job(true)}
                      sx={{ marginTop: 6, marginLeft: 10 }}
                      checked={selecteValue === "a"}
                      onChange={handleChange}
                      value="a"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                    />
                  </span>
                </div>

                <div className="d-flex flex-row">
                  <h4 className="looking_job">Are you hiring</h4>
                </div>
                <span>
                  <Radio
                    sx={{ marginTop: -8, marginLeft: 50 }}
                    checked={selecteValue === "b"}
                    onChange={handleChange}
                    value="b"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "B" }}
                  />
                </span>
                <div>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ marginLeft: 33, marginTop: 4 }}
                  >
                    <button
                      type="button"
                      class=" join_cancel btn btn-outline-secondary"
                      onClick={() => setjoin(false)}
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      onClick={Sign}
                      class=" join_now btn btn-outline-primary"
                    >
                      Sign In
                    </button>
                  </Stack>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
     .

      {lookingjob && (
        <>
          <Profile></Profile>
        </>
      )}
    </>
  );
}

export default Navbar;
