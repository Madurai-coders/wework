import "./profile.css";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";
import Radio from "@mui/material/Radio";
// import Navbar from "../navbar/navbar";
import Profile_Update from "../profile_update/profile_update";

import {
  validation_City,
  validation_FirstName,
  validation_PhoneNo,
} from "../validation/validatefunction";
import { validation_LastName } from "../validation/validatefunction";
import { validation_Address } from "../validation/validatefunction";
import { validation_Zipcode } from "../validation/validatefunction";
import { validation_Email } from "../validation/validatefunction";
import useMediaQuery from "react-responsive";

const currencies = [
  {
    value: "",
    label: "select",
  },

  {
    value: "state1",
    label: "Ak",
  },
  {
    value: "state2",
    label: "AL",
  },
  {
    value: "state3",
    label: "AZ",
  },
  {
    value: "state4",
    label: "CA",
  },
  {
    value: "state5",
    label: "IN",
  },
];

function Profile() {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const [selectedValue, setSelectedValue] = React.useState("");

  const HandleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [profileform, setprofileform] = useState(false);

  const [input, setinput] = useState({
    FirstName: "not_selected",
    LastName: "not_selected",
    Address: "not_selected",
    City: "not_selected",
    Zipcode: "not_selected",
    State: "not_selected",
    PhoneNo: "not_selected",
    Email: "not_selected",
  });
  console.log(input);

  const [validateinput, setvalidateinput] = useState([]);


const[validateprofile,setvalidateprofile] = useState([]);







  function Save() {
    if (
      validation_FirstName(input.FirstName).class === "pass" &&
      validation_LastName(input.LastName).class === "pass" &&
      validation_Address(input.Address).class === "pass" &&
      validation_City(input.City).class === "pass" &&
      validation_Zipcode(input.Zipcode).class === "pass" &&
      validation_PhoneNo(input.PhoneNo).class === "pass" &&
      validation_Email(input.Email).class === "pass"
    ) {
      let array = validateinput;
      array.push({ ...input });
      console.log(array);
      setvalidateinput([...array]);

// profiledata_savingarray 
      let Array = validateprofile;
      Array.push({ ...input });
      console.log(Array);
       setvalidateprofile([...Array]);

      //  

      setinput({
        FirstName: "not_selected",
        LastName: "not_selected",
        Address: "not_selected",
        City: "not_selected",
        Zipcode: "not_selected",
        State: "not_selected",
        PhoneNo: "not_selected",
        Email: "not_selected",
      });

   
      
    } else if (input.FirstName == "not_selected") {
      setinput({
        ...input,
        FirstName: "",
      });
    }
    if (input.LastName == "not_selected") {
      setinput({
        ...input,
        LastName: "",
      });
    }
    if (input.Address == "not_selected") {
      setinput({
        ...input,
        Address: "",
      });
    }
    if (input.City == "not_selected") {
      setinput({
        ...input,
        City: "",
      });
    }
    if (input.State == "not_selected") {
      setinput({
        ...input,
        State: "",
      });
    }
    if (input.Zipcode == "not_selected") {
      setinput({
        ...input,
        Zipcode: "",
      });
    }
    if (input.PhoneNo == "not_selected") {
      setinput({
        ...input,
        PhoneNo: "",
      });
    }
    if (input.Email == "not_selected") {
      setinput({
        ...input,
        Email: "",
      });
    }
  }
  function Close() {
    setprofileform(false);

    setinput({
      FirstName: "not_selected",
      LastName: "not_selected",
      Address: "not_selected",
      City: "not_selected",
      Zipcode: "not_selected",
      State: "not_selected",
      PhoneNo: "not_selected",
      Email: "not_selected",
    });
  }

  function Edit(value) {
    setprofileform(true);

    var Remove = validateinput.filter(
      (val) => val.FirstName !== value.FirstName
    );
    console.log(Remove);
    setvalidateinput([...Remove]);

    console.log(value);
    setinput({
      FirstName: value.FirstName,
      LastName: value.LastName,
      Address: value.Address,
      City: value.City,
      Zipcode: value.Zipcode,
      PhoneNo: value.PhoneNo,
      Email: value.Email,
    });
  }
  const mobile = useMediaQuery({ query: "(max-width: 1224px)" });


  return (
    <>
    {/* <Navbar></Navbar> */}
      <div className="Profile container-fluid p-0">
        <div className=" mt-5 d-flex justify-content-center">
          <div className="profile_title">
            <h4 className="">Profile</h4>
            <h5 className="mt-3">Resume</h5>
          </div>
          <div className=" pro mt-5">
            <div className="resume_txt">
              <i class="eye fa fa-eye" aria-hidden="true"></i>
              <span className="res_txt">Profile Visibility is</span>
              <div className="on_off" onClick={() => setprofileform(true)}>
                <label class="switch">
                  <input type="checkbox" id="togBtn"></input>
                  <div
                    class="slider round"
                    onClick={() => setprofileform(true)}
                  >
                    <span class="on">Off</span>
                    <span class="off">OFF</span>
                  </div>
                </label>
                <span className="search_profile">
                  Your profile can be found in serach results(Google,Bing,etc).
                </span>
              </div>
            </div>
            <hr></hr>
            <div className="table_content">
              <h6 className="table_txt">
                as a hiring manager. Found out more about your profile
                visibility in<br></br>
                <span className="setting">settings.</span>{" "}
              </h6>
            </div>
            <div className="form_update">
              <div className="profileupdate_table mt-5">
                <div className="nameaddress_update  m-4">
                  <i
                    class="profile_update fa fa-user-circle"
                    aria-hidden="true"
                  ></i>
                  <span className="name_update">Name</span>
                  <div className="address_vertical"></div>
                  <h6 className="address_update">Address</h6>
                   {validateinput.map((value) => {
                   
                      <> 
                        <h6 className="input_name">{value.FirstName}</h6>
                       <h6 className="input_lname">{value.LastName}</h6>
                        <h6 className="input_address">{value.Address}</h6>
                        <h6 className="input_city">{value.City}</h6>
                        <h6 className="input_zipcode">{value.Zipcode}</h6>
                        <h6 className="input_phoneno">{value.PhoneNo}</h6>
                        <h6 className="input_email">{value.Email}</h6> 

                         <button
                          onClick={() => Edit(value)}
                          type="button"
                          className="mt-3 edit_1 btn btn-outline-primary"
                        >
                          Edit
                        </button>
                      </>
                   })}
                

                  <div className="horizontal"></div>
                </div>
                <div className="emailno_update">
                  <h6 className="no_update">Phone</h6>

                  <div className="email_vertical"></div>
                  <h6 className="email_update">Email</h6>

                  <div className="email_horizontal"></div>
                </div>
                <div className="bio_edit">
                  <h6 className="bio_title">Bio</h6>
                  <h6 className="bio_txt">
                    I am actively looking for new jobs and am open to all types
                    of work expreience.
                  </h6>
                  <button
                    onClick={() => setprofileform(true)}
                    type="button"
                    className="mt-3 edit btn btn-outline-primary"
                  >
                    Edit
                  </button>
                </div>
               <Profile_Update></Profile_Update> 

              </div>
            </div>
          </div>

        </div>



        {profileform && (
          <>
            <div className="overlay_form">
              <div className="profileform">
                <div className="profile_form">
                  <IconButton>
                    <CloseIcon
                      style={{ fontSize: 40 }}
                      onClick={Close}
                    ></CloseIcon>
                  </IconButton>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="name d-flex-row">
                    <div className="profile mt-5">
                      <i
                        class="add_profile mt-2 fa fa-user-circle"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="">
                      <h5 className="form_title mb-3">
                        Tell us about yourself
                      </h5>
                      <TextField
                        value={
                          input.FirstName != "not_selected"
                            ? input.FirstName
                            : ""
                        }
                        onKeyUp={validation_FirstName}
                        onChange={(e) =>
                          setinput({ ...input, FirstName: e.target.value })
                        }
                        onBlur={(e) =>
                          setinput({ ...input, FirstName: e.target.value })
                        }
                        id="outlined-basic"
                        sx={{
                          width: 500,
                          maxWidth: "75%",
                          marginTop: 1,
                        }}
                        size="small"
                        label="First Name"
                        variant="outlined"
                      />
                      {validation_FirstName(input.FirstName).msg}

                      <TextField
                        value={
                          input.LastName != "not_selected" ? input.LastName : ""
                        }
                        onKeyUp={validation_LastName}
                        onChange={(e) =>
                          setinput({ ...input, LastName: e.target.value })
                        }
                        onBlur={(e) =>
                          setinput({ ...input, LastName: e.target.value })
                        }
                        id="outlined-basic"
                        sx={{
                          width: 500,
                          maxWidth: "75%",
                          marginTop: 4,
                        }}
                        size="small"
                        label="Last Name"
                        variant="outlined"
                      />
                      {validation_LastName(input.LastName).msg}
                    </div>{" "}
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="address">
                    <TextField
                      value={
                        input.Address != "not_selected" ? input.Address : ""
                      }
                      onKeyUp={validation_Address}
                      onChange={(e) =>
                        setinput({ ...input, Address: e.target.value })
                      }
                      onBlur={(e) =>
                        setinput({ ...input, Address: e.target.value })
                      }
                      id="outlined-basic"
                      sx={{
                        width: 600,
                        maxWidth: "72.4%",
                        marginTop: 1.7,
                      }}
                      size="small"
                      label="Address"
                      variant="outlined"
                    />
                    {validation_Address(input.Address).msg}
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="city">
                    <TextField
                      value={input.City != "not_selected" ? input.City : ""}
                      onKeyUp={validation_City}
                      onChange={(e) =>
                        setinput({ ...input, City: e.target.value })
                      }
                      onBlur={(e) =>
                        setinput({ ...input, City: e.target.value })
                      }
                      id="outlined-basic"
                      sx={{
                        width: 500,
                        maxWidth: "25%",
                        marginTop: 4,
                      }}
                      size="small"
                      label="City"
                      variant="outlined"
                    />
                    {validation_City(input.City).msg}

                    <TextField
                      id="outlined-select-currency"
                      sx={{
                        width: 500,
                        maxWidth: "25%",
                        marginTop: 4,
                        marginLeft: 2,
                      }}
                      
                      size="small"
                      select
                      label="State"
                      value={currency}
                      onChange={handleChange}
                    
                       
                        >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    {/* {validation_State(input.State).msg} */}


                    <TextField
                      value={
                        input.Zipcode != "not_selected" ? input.Zipcode : ""
                      }
                      onKeyUp={validation_Zipcode}
                      onChange={(e) =>
                        setinput({ ...input, Zipcode: e.target.value })
                      }
                      onBlur={(e) =>
                        setinput({ ...input, Zipcode: e.target.value })
                      }
                      id="outlined-basic"
                      sx={{
                        width: 500,
                        maxWidth: "18%",
                        marginTop: 4,
                        marginLeft: 2,
                      }}
                      size="small"
                      label="Zip Code"
                      variant="outlined"
                    />
                    {validation_Zipcode(input.Zipcode).msg}
                  </div>
                  <div className="row d-flex justify-content-center mt-2">
                    <div className="phone">
                      <TextField
                        value={
                          input.PhoneNo != "not_selected" ? input.PhoneNo : ""
                        }
                        onkeyup={validation_PhoneNo}
                        onChange={(e) =>
                          setinput({ ...input, PhoneNo: e.target.value })
                        }
                        onBlur={(e) =>
                          setinput({ ...input, PhoneNo: e.target.value })
                        }
                        id="outlined-basic"
                        sx={{
                          width: 600,
                          maxWidth: "72.4%",
                          marginTop: 3,
                        }}
                        size="small"
                        label="Phone Number"
                        variant="outlined"
                      />
                      {validation_PhoneNo(input.PhoneNo).msg}

                      <TextField
                        value={input.Email != "not_selected" ? input.Email : ""}
                        onkeyup={validation_Email}
                        onChange={(e) =>
                          setinput({ ...input, Email: e.target.value })
                        }
                        onBlur={(e) =>
                          setinput({ ...input, Email: e.target.value })
                        }
                        id="outlined-basic"
                        sx={{
                          width: 600,
                          maxWidth: "72.4%",
                          marginTop: 4,
                          marginBottom: 1.5,
                        }}
                        size="small"
                        label="Email"
                        variant="outlined"
                      />
                      {validation_Email(input.Email).msg}

                      <h6 className="work_txt mt-3">
                        Are you authorized to work in the United States ?
                      </h6>
                      <div className="radio_btn">
                        <Radio
                          checked={selectedValue === "a"}
                          onChange={HandleChange}
                          value="a"
                          name="radio-buttons"
                          inputProps={{ "aria-label": "A" }}
                        />
                        <Radio
                          checked={selectedValue === "b"}
                          onChange={HandleChange}
                          value="b"
                          name="radio-buttons"
                          inputProps={{ "aria-label": "B" }}
                        />
                      </div>
                      <div className="cancel_save">
                        <button
                          type="button"
                          onClick={Close}
                          className="cancel_btn btn btn-outline-primary"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          onClick={Save}
                          className=" save_btn btn btn-primary"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

 


      </div>
    </>
  );
}
export default Profile;
