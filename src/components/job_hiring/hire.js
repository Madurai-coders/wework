import "./hire.css";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import React, { useState } from "react";
import { validation_Jobtitle } from "../validation/validatefunction";
import { validation_Company } from "../validation/validatefunction";
import { validation_Location } from "../validation/validatefunction";
import Hires_website from "../hires_website/hires_website";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


function Hire() {
  let history = useHistory();

  const [jobinput, setjobinput] = useState({
    JobTitle: "not_selected",
    Company: "not_selected",
    Location: "not_selected",
  });
  console.log(jobinput);

  const [validatejobinput, setvalidatejobinput] = useState([]);

  function Get_Started() {
    if (
      validation_Jobtitle(jobinput.JobTitle).class === "pass" &&
      validation_Company(jobinput.Company).class === "pass" &&
      validation_Location(jobinput.Location).class === "pass"
    ) {
       let array = validatejobinput;
       array.push({ ...jobinput });
       console.log(array);
       setvalidatejobinput([...array]);
       history.push('/job_website');
    }
  }

  return (
    <>
      <div className="hiring">
        <div className="hire_nav">
          <nav class="navbar navbar-light">
            <div class="container-fluid">
              <a class="navbar-brand mt-2">
                <span class="hirenav_dot">
                  <a className="hirenav_brand">WE</a>
                </span>
              </a>
              <form class="d-flex">
                <h6 className="hirenav_txt">Manage Profile</h6>

                <i
                  class="hire_user mt-1 fa fa-user-circle-o"
                  aria-hidden="true"
                ></i>
              </form>
            </div>
          </nav>
        </div>

        <div className="hire_loginform">
          <div className="container-fluid bg-primary">
            <div className="hire_form">
              <div>
                <h2 className="hire_formtitle mt-4">Find a great hire, fast</h2>
                <br></br>
                <h5 className="hire_formsubtitle">
                  Rated #1 delivering quality hires
                </h5>
              </div>
              <div className="hire_formcontent d-flex flex-column">
                <div className="hire_jobinput">
                  <label for="exampleInputEmail1" className="job_txt">
                    Job title
                  </label>
                  <br></br>
                  <input
                    value={
                      jobinput.JobTitle != "not_selected"
                        ? jobinput.JobTitle
                        : ""
                    }
                    onKeyUp={validation_Jobtitle}
                    onChange={(e) =>
                      setjobinput({ ...jobinput, JobTitle: e.target.value })
                    }
                    onBlur={(e) =>
                      setjobinput({ ...jobinput, JobTitle: e.target.value })
                    }
                    type="text"
                    class=" form-control job_inputbox"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder=" Job title"
                  ></input>
                  {validation_Jobtitle(jobinput.JobTitle).msg}
                </div>
                <div className="hire_companyinput mt-4">
                  <label for="exampleInputEmail1" className="company_txt">
                    Company
                  </label>
                  <br></br>
                  <div class="input-group">
                    <div class="company_iconbox">
                      <div class="input-group-text company_iconbox">
                        <i
                          class=" company_img fa fa-building"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                    <input
                      value={
                        jobinput.Company != "not_selected"
                          ? jobinput.Company
                          : ""
                      }
                      onKeyUp={validation_Company}
                      onChange={(e) =>
                        setjobinput({ ...jobinput, Company: e.target.value })
                      }
                      onBlur={(e) =>
                        setjobinput({ ...jobinput, Company: e.target.value })
                      }
                      type="text"
                      class="form-control company_inputbox"
                      id="inlineFormInputGroup"
                      placeholder=" Company"
                    ></input>
                  </div>
                  {validation_Company(jobinput.Company).msg}

                  <div className="hire_workplaceinput mt-4">
                    <label for="exampleInputEmail1" className="workplace_txt">
                      Workplace type
                    </label>
                    <br></br>
                    <select className="workplace_inputbox">
                      <option value="site">On-site</option>
                      <option value="hybrid">Hybrid</option>
                      <option value="remote">Remote</option>
                    </select>
                  </div>

                  <div className="hire_employeeinput">
                    <label for="exampleInputEmail1" className="employee_txt">
                      Employee location
                    </label>
                    <br></br>
                    <input
                      value={
                        jobinput.Location != "not_selected"
                          ? jobinput.Location
                          : ""
                      }
                      onKeyUp={validation_Location}
                      onChange={(e) =>
                        setjobinput({ ...jobinput, Location: e.target.value })
                      }
                      onBlur={(e) =>
                        setjobinput({ ...jobinput, Location: e.target.value })
                      }
                      type="text"
                      class=" form-control employee_inputbox"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder=" Country or state"
                    ></input>
                    {validation_Location(jobinput.Location).msg}
                  </div>

                  <div className="hire_workplaceinput mt-4">
                    <label for="exampleInputEmail1" className="workplace_txt">
                      Employment type
                    </label>
                    <br></br>
                    <select className="workplace_inputbox">
                      <option value="site">Choose one...</option>
                      <option value="hybrid">Full-time</option>
                      <option value="remote">Part-time</option>
                      <option value="remote">Contract</option>
                      <option value="remote">Temporary</option>
                      <option value="remote">Volunteer</option>
                      <option value="remote">Intership</option>
                    </select>
                  </div>
                  <Link to="/hires_website" style={{ textDecoration: "none" }}>

                    <button
                      type="button"
                      onClick={Get_Started}
                      class="hire_start mt-5 btn btn-primary"
                    >
                      Get Started
                    </button></Link>
              
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid p-0 hiring_conceptsite">
          <div className="row justify-content-center">
            <div className="col-5 mt-4">
              <h2 className="hiring_quality">#1 in delivering quality hires</h2>
              <p className="hiring_qualitytxt">
                Post your job on the world's largest professtional network and
                get <br></br>matched with the most qualified candidates for yout
                role
              </p>
            </div>
            <div className="col-3 mt-5">
              <img
                src="https://media.istockphoto.com/photos/shot-of-two-work-colleagues-using-a-digital-tablet-during-a-business-picture-id1322304331?b=1&k=20&m=1322304331&s=170667a&w=0&h=VJbCkAqqcX22MopjHonJROwCg-FeL0hTxlr0Q42xtUc="
                alt=""
                className="discussion_img"
              ></img>
            </div>
          </div>
        </div>

        <div className="container-fluid hiring_review p-0 mt-5">
          <div className="row justify-content-center">
            <div className="col-7 mt-5 d-flex flex-column">
              <h1 className="hiring_success">
                Join over 30 million business that hire on WeWork
              </h1>
              <div className="d-flex flex-row">
                <div className="wework_memberimg">
                  <img
                    src="https://us.123rf.com/450wm/fizkes/fizkes1904/fizkes190400726/120839317-happy-african-american-black-business-man-hr-e-coach-smiling-talking-looking-at-camera-webcam-making.jpg?ver=6"
                    alt=""
                    className="member_img mt-5"
                  ></img>
                </div>
                <div className="member_detail mt-5">
                  <h5 className="hiring_successtitle mt-5">
                    "WeWork jobs helped me hire the best person to grow my
                    business".
                  </h5>
                  <h6 className="hiring_membername mt-3">Katlego Tshepiso</h6>
                  <h6 className="member_jobname">CEO, Build Katlego</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid hiring_footer">
               <div className="hiringfooter_content mt-4">
                      <p className="rules_abouthiring">By using this site,you agree to WeWork <primary>terms of use</primary>.Commercial use of this site without express authorization is prohibited.</p>
                      <div className="footer_menulist d-flex flex-row">
               <p className="footer_menu">WeWork Corporation 2022 </p> <menu> Use Agreement</menu>  <menu>Privacy Policy</menu>  <menu>Support</menu>  <menu>Trainig</menu>  <menu>Language</menu>  
               </div>
               
               </div>



        </div>
      </div>
    </>
  );
}

export default Hire;
