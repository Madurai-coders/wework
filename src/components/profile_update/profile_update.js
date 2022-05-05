import "./profile_update.css";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import {
  validation_Companyname,
  validation_Educationlevel,
validation_Enddate,
validation_Startdate,
  validation_Jobrole,
  validation_Responsibles,
  validation_Status
} from "../validation/validatefunction";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Profile_Update() {
  const [workadd, setworkadd] = useState(false);
  const [educationadd, seteducationadd] = useState(false);
  const [workform, setworkform] = useState(false);


  const [education, seteducation] = useState({
    EducationLevel: "not_selected",
    Status: "not_selected",
    StartDate: "not_selected",
    EndDate: "not_selected",
  });
  console.log(education);
  const [educationdetails,seteducationdetails] = useState ([]);


  const [workdetail, setworkdetail] = useState({
    CompanyName: "not_selected",
    JobRole: "not_selected",
    Responsibles: "not_selected",
  });
  console.log(workdetail);
  const [workdetails, setworkdetails] = useState([]);




  

  function Work_form() {
    document.querySelector("#show_job").classList.toggle("select_firstjobhide");
    document.querySelector("#btn_show").classList.toggle("work_cancelsavehide");
    document
      .querySelector("#show_form")
      .classList.toggle("experience_formshow");
  }

  function Savework() {
    document.querySelector("#work_status").classList.add("work_statushide");

    if (
      validation_Companyname(workdetail.CompanyName).class === "pass" &&
      validation_Jobrole(workdetail.JobRole).class === "pass" &&
      validation_Responsibles(workdetail.Responsibles).class === "pass"
    ) {
      let work = workdetails;
      work.push({ ...workdetail });
      console.log(work);
      setworkdetails([...work]);

      setworkdetail({
        CompanyName: "not_selected",
        JobRole: "not_selected",
        Responsibles: "not_selected",
      });
    }
  }

  function Editwork(value) {
    setworkadd(true);

    var Removework = workdetails.filter(
      (val) => val.CompanyName !== value.CompanyName
    );
    console.log(Removework);
    setworkdetails([...Removework]);

    console.log(value);
    setworkdetail({
      CompanyName: value.CompanyName,
      JobRole: value.JobRole,
      Responsibles: value.Responsibles,
    });
  }
  function Deletework(value) {
    document.querySelector("#work_status").classList.remove("work_statushide");

    var deletework = workdetails.filter(
      (val) => val.CompanyName !== value.CompanyName
    );
    console.log(deletework);
    setworkdetails([...deletework]);
  }




  function Save_education () {
       document.querySelector("#education_hide").classList.add("education_hide");
       if (
         validation_Educationlevel(education.EducationLevel).class === "pass" &&
         validation_Status(education.Status).class === "pass" &&
         validation_Startdate(education.StartDate).class === "pass" &&
         validation_Enddate(education.EndDate).class === "pass"
       ) {
         let educations = educationdetails;
         educations.push({ ...education});
         console.log(educations);
         seteducationdetails([...educations]);
   
         seteducation({
           EducationLevel: "not_selected",
           Status: "not_selected",
           StartDate:"not_selected",
           EndDate:"not_selected"
         });
       }   
  }

  function Editeducation(value) {
       seteducationadd(true);
   
       var Removeeducation = educationdetails.filter(
         (val) => val.EducationLevel !== value.EducationLevel
       );
       console.log(Removeeducation);
       setworkdetails([...Removeeducation]);
   
       console.log(value);
       seteducation({
         EducationLevel: value.EducationLevel,
         Status: value.Status,
      
       });
     }
     function Deleteeducation(value) {
       document.querySelector("#education_hide").classList.remove("education_hide");
   
       var deleteeducation = educationdetails.filter(
         (val) => val.EducationLevel !== value.EducationLevel
       );
       console.log(deleteeducation);
       seteducationdetails([...deleteeducation]);
     }



  return (
    <>
      <div className="container-fluid">
        <div className="work_experience mt-5">
          <div className="experience_update">
            <h5 className="work_txt">Work Experience</h5>
            <button
              type="button"
              onClick={() => setworkadd(true)}
              className="work_add btn btn-outline-primary"
            >
              Add
            </button>
            {workdetails.map((value) => {
              return (
                <>
                  <h4 className="companyname">{value.CompanyName}</h4>
                  <h6 className="jobrole">{value.JobRole}</h6>
                  <h6 className="responsibles">{value.Responsibles}</h6>

                  <i
                    class=" editwork fa fa-pencil"
                    onClick={() => Editwork(value)}
                    aria-hidden="true"
                  ></i>
                  <i
                    class="deletework fa fa-trash-o"
                    onClick={() => Deletework(value)}
                    aria-hidden="true"
                  ></i>
                </>
              );
            })}
            <div className="work_status">
              <div className="work_status1" id="work_status">
                <i class="rating fa fa-star" aria-hidden="true"></i>
                <h6 className="first_job">
                  Nice,We have lots of jobs for first-timers!
                </h6>
              </div>
            </div>
          </div>

          {workadd && (
            <>
              <div className="overlay_work">
                <div className="close_work">
                  <IconButton>
                    <CloseIcon
                      style={{ fontSize: 40 }}
                      onClick={() => setworkadd(false)}
                    ></CloseIcon>
                  </IconButton>
                </div>
                <div className="work_form">
                  <div className="checkbox">
                    <div className="text-center">
                      <h3 className="ex_title">Add Work Experience</h3>
                    </div>
                    <div className="mt-3">
                      <Checkbox
                        onClick={Work_form}
                        {...label}
                        defaultChecked
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                      />
                      <span>I am looking for my first job</span>
                    </div>

                    {/* show form */}

                    <div className="experience_form" id="show_form">
                      <hr className="line"></hr>
                      <h6 className="or">or</h6>
                      <hr className="line_2"></hr>

                      <div className="standout">
                        <div>
                          <i
                            class="select_icon fa fa-check-circle"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <span className="standout_txt">
                          Stand out!Add related ecperience to catch the<br></br>{" "}
                          eye of hiring managers.{" "}
                        </span>
                        <div>
                          <TextField
                            value={
                              workdetail.CompanyName != "not_selected"
                                ? workdetail.CompanyName
                                : ""
                            }
                            onKeyUp={validation_Companyname}
                            onChange={(e) =>
                              setworkdetail({
                                ...workdetail,
                                CompanyName: e.target.value,
                              })
                            }
                            onBlur={(e) =>
                              setworkdetail({
                                ...workdetail,
                                CompanyName: e.target.value,
                              })
                            }
                            id="outlined-basic"
                            sx={{
                              width: 500,
                              minWidth: "100%",
                              marginTop: 4,
                            }}
                            size="small"
                            label="Company name"
                            variant="outlined"
                          />
                        </div>
                        {validation_Companyname(workdetail.CompanyName).msg}
                        <div>
                          <TextField
                            value={
                              workdetail.JobRole != "not_selected"
                                ? workdetail.JobRole
                                : ""
                            }
                            onKeyUp={validation_Jobrole}
                            onChange={(e) =>
                              setworkdetail({
                                ...workdetail,
                                JobRole: e.target.value,
                              })
                            }
                            onBlur={(e) =>
                              setworkdetail({
                                ...workdetail,
                                JobRole: e.target.value,
                              })
                            }
                            id="outlined-basic"
                            sx={{
                              width: 500,
                              minWidth: "100%",
                              marginTop: 5,
                            }}
                            size="small"
                            label="Job role"
                            variant="outlined"
                          />
                        </div>
                        {validation_Jobrole(workdetail.JobRole).msg}
                        <div>
                          <TextField
                            value={
                              workdetail.Responsibles != "not_selected"
                                ? workdetail.Responsibles
                                : ""
                            }
                            onKeyUp={validation_Responsibles}
                            onChange={(e) =>
                              setworkdetail({
                                ...workdetail,
                                Responsibles: e.target.value,
                              })
                            }
                            onBlur={(e) =>
                              setworkdetail({
                                ...workdetail,
                                Responsibles: e.target.value,
                              })
                            }
                            id="outlined-multiline-static"
                            label="Job Responsibilities"
                            sx={{
                              width: 500,
                              minWidth: "100%",
                              marginTop: 5,
                            }}
                            multiline
                            rows={4}
                          />
                        </div>
                        {validation_Responsibles(workdetail.Responsibles).msg}
                        <div className="workform_cancelsave mt-3">
                          <button
                            onClick={() => setworkadd(false)}
                            type="button"
                            className="workformcancel_btn btn btn-outline-primary"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={Savework}
                            type="button"
                            className="workformsave_btn btn btn-primary"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* first job */}

                    <div className="select_firstjob  mt-4" id="show_job">
                      <i class="rating fa fa-star" aria-hidden="true"></i>
                      <h6 className="first_job">
                        Nice,We have lots of jobs for first-timers!
                      </h6>
                    </div>

                    <div className="work_cancelsave mt-3" id="btn_show">
                      <button
                        onClick={() => setworkadd(false)}
                        type="button"
                        className="workcancel_btn btn btn-outline-primary"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="worksave_btn btn btn-primary"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="education_update">
            <h5 className="education">Education</h5>
            <button
              type="button"
              onClick={() => seteducationadd(true)}
              className="education_add btn btn-outline-primary"
            >
              Add
            </button>


            {educationdetails.map((value) => {
              return (
                <>
                  <h5 className="education_level">{value.EducationLevel}</h5>
                  <h5 className="Status">{value.Status}</h5>
                  <h5 className="start_date">Starting date {value.StartDate}</h5>
                  <h5 className="end_date">Ending date {value.EndDate}</h5>

                  <i
                    class=" editeducation fa fa-pencil"
                    onClick={() => Editeducation(value)}
                    aria-hidden="true"
                  ></i>
                  <i
                    class="deleteeducation fa fa-trash-o"
                    onClick={() => Deleteeducation(value)}
                    aria-hidden="true"
                  ></i>
                </>
              );
            })}

            <div className="education_status1">
              <div className="education_show" id="education_hide">
                <i
                  class=" warning_icons fa fa-exclamation-circle"
                  aria-hidden="true"
                ></i>
                <div>
                  <span className="education_txt">
                    94% of hired members have their education listed.
                  </span>
                  <p className="education_txt1">
                    take a minute to add yours now.
                  </p>
                </div>
              </div>
            </div>

            {educationadd && (
              <>
                <div className="overlay_education">
                  <div className="close_education">
                    <IconButton>
                      <CloseIcon
                        style={{ fontSize: 40 }}
                        onClick={() => seteducationadd(false)}
                      ></CloseIcon>
                    </IconButton>
                  </div>
                  <div className="education_form">
                    <div className="education_content">
                      <div className="text-center">
                        <h3 className="edu_title">Add Education</h3>
                      </div>

                      <div className="mt-5">
                        <TextField
                          value={
                            education.EducationLevel != "not_selected"
                              ? education.EducationLevel
                              : ""
                          }
                          onKeyUp={validation_Educationlevel}
                          onChange={(e) =>
                            seteducation({
                              ...education,
                              EducationLevel: e.target.value,
                            })
                          }
                          onBlur={(e) =>
                            seteducation({
                              ...education,
                              EducationLevel: e.target.value,
                            })
                          }
                          sx={{
                            position: "relative",
                            width: 600,
                            minWidth: "100%",
                            marginTop: 5,
                          }}
                          id="outlined-select-currency"
                          label="Education Level"
                          helperText="Ex:Bachelors Degree,Masters Degree"
                        ></TextField>
                      </div>
                      {validation_Educationlevel(education.EducationLevel).msg}


                      <div className="">
                        <TextField
                          value={
                            education.Status != "not_selected"
                              ? education.Status
                              : ""
                          }
                          onKeyUp={validation_Status}
                          onChange={(e) =>
                            seteducation({
                              ...education,
                              Status: e.target.value,
                            })
                          }
                          onBlur={(e) =>
                            seteducation({
                              ...education,
                              Status: e.target.value,
                            })
                          }
                          sx={{
                            position: "relative",
                            width: 600,
                            minWidth: "100%",
                            marginTop: 3,
                          }}
                          id="outlined-select-currency"
                          label="Status"
                          helperText="Ex:Graduated"
                        ></TextField>
                      </div>
                      {validation_Status(education.Status).msg}


                      <div className="d-flex flex-row">
                        <TextField

                          value={
                            education.StartDate != "not_selected"
                              ? education.StartDate
                              : ""
                          }
                          onKeyUp={validation_Startdate}
                          onChange={(e) =>
                            seteducation({
                              ...education,
                              StartDate: e.target.value,
                            })
                          }
                          onBlur={(e) =>
                            seteducation({
                              ...education,
                              StartDate: e.target.value,
                            })
                          }
                          id="date"
                          label="Starting date"
                          type="date"
                          defaultValue="xxxx-xx-xx"
                          sx={{ width: 280, marginTop: 4 }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                         {validation_Startdate(education.StartDate).msg} 

                        <TextField

                          value={

                            education.EndDate != "not_selected"
                              ? education.EndDate
                              : ""
                          }
                          onKeyUp={validation_Enddate}

                          onChange={(e) =>
                            seteducation({
                              ...education,
                              EndDate: e.target.value,
                            })
                          }
                          onBlur={(e) =>
                            seteducation({
                              ...education,
                              EndDate: e.target.value,
                            })
                          }
                          id="date"
                          label="Ending date"
                          type="date"
                          defaultValue="xxxx-xx-xx"
                          sx={{ width: 280, marginTop: 4, marginLeft: 5 }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          
                        />
                      </div>                        
                        {validation_Enddate(education.EndDate).msg}
                   

                      <div className="workform_cancelsave mt-3">
                        <button
                          onClick={() => seteducationadd(false)}
                          type="button"
                          className="workformcancel_btn btn btn-outline-primary"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          onClick={Save_education}
                          className="workformsave_btn btn btn-primary"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile_Update;
