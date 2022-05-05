import "./validate.css";
import TextField from "@mui/material/TextField";
import React,{useState} from 'react';



export function validation_FirstName(value) {
  var format = /[!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?0-9]+/;
  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.startsWith(" ")) {
        if (value.length >= 2) {
          if (!format.test(value)) {
            if (value.length <= 5) {
              if (!value.endsWith(" ")) {
                return {
                  class: "pass",
                };
              } else
                return {
                  class: "warn",
                  msg: (
                    <>
                      <small class="name_warning">
                        Cannot end with a white space
                      </small>
                    </>
                  ),
                };
            } else
              return {
                class: "warn",
                msg: (
                  <>
                    <small class="name_warning">Max letter 5</small>
                  </>
                ),
              };
          } else
            return {
              class: "warn",
              msg: (
                <>
                  <small class="name_warning">
                    Cannot contain symbol or number.
                  </small>
                </>
              ),
            };
        } else
          return {
            class: "warn",
            msg: (
              <>
                <small class="name_warning">Min 2 tetter.</small>
              </>
            ),
          };
      } else
        return {
          class: "warn",
          msg: (
            <>
              <small class="name_warning">Cannot start with empty space</small>
            </>
          ),
        };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="name_warning">Required</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}

export function validation_LastName(value) {
  var format = /[!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?0-9]+/;
  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.startsWith(" ")) {
        if (value.length >= 2) {
          if (!format.test(value)) {
            if (value.length <= 5) {
              if (!value.endsWith(" ")) {
                return {
                  class: "pass",
                };
              } else
                return {
                  class: "warn",
                  msg: (
                    <>
                      <small class="lastname_warning">
                        Cannot end with a white space
                      </small>
                    </>
                  ),
                };
            } else
              return {
                class: "warn",
                msg: (
                  <>
                    <small class="lastname_warning">Max letter 5</small>
                  </>
                ),
              };
          } else
            return {
              class: "warn",
              msg: (
                <>
                  <small class="lastname_warning">
                    Cannot contain symbol or number.
                  </small>
                </>
              ),
            };
        } else
          return {
            class: "warn",
            msg: (
              <>
                <small class="lastname_warning">Min 2 tetter.</small>
              </>
            ),
          };
      } else
        return {
          class: "warn",
          msg: (
            <>
              <small class="lastname_warning">
                Cannot start with empty space
              </small>
            </>
          ),
        };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="lastname_warning">Required</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}

export function validation_Address(value) {
  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.startsWith(" ")) {
        if (value.length >= 2) {
          if (value.length <= 25) {
            if (!value.endsWith(" ")) {
              return {
                class: "pass",
              };
            } else
              return {
                class: "warn",
                msg: (
                  <>
                    <small class="address_warning">
                      Cannot end with a white space
                    </small>
                  </>
                ),
              };
          } else
            return {
              class: "warn",
              msg: (
                <>
                  <small class="address_warning">Max letter 25</small>
                </>
              ),
            };
        } else
          return {
            class: "warn",
            msg: (
              <>
                <small class="address_warning">Min 2 tetter.</small>
              </>
            ),
          };
      } else
        return {
          class: "warn",
          msg: (
            <>
              <small class="address_warning">
                Cannot start with empty space
              </small>
            </>
          ),
        };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="address_warning">Required</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}

export function validation_City(value) {
  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.startsWith(" ")) {
        if (value.length >= 2) {
          if (!value.endsWith(" ")) {
            return {
              class: "pass",
            };
          } else
            return {
              class: "warn",
              msg: (
                <>
                  <small class="city_warning">
                    Cannot end with a white space
                  </small>
                </>
              ),
            };
        } else
          return {
            class: "warn",
            msg: (
              <>
                <small class="city_warning">Min 2 tetter.</small>
              </>
            ),
          };
      } else
        return {
          class: "warn",
          msg: (
            <>
              <small class="city_warning">Cannot start with empty space</small>
            </>
          ),
        };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="city_warning">Required</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}




export function validation_State(value) {
  if (value == "" || value != "not_selected") {
    if (value) {
  }
  
      return {
        class: "warn",
        msg: (
          <>
            <small class="state_warning">Required</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}


export function validation_Zipcode(value) {
  var zipcode_format =/\d{6}/ ;
  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.startsWith(" ")) {
        if (value.length >= 5) {
          if (zipcode_format.test(value)) {
            if (value.length <= 10) {
              if (!value.endsWith(" ")) {
                return {
                  class: "pass",
                };
              } else
                return {
                  class: "warn",
                  msg: (
                    <>
                      <small class="zipcode_warning">
                        Cannot end with a white space
                      </small>
                    </>
                  ),
                };
            } else
              return {
                class: "warn",
                msg: (
                  <>
                    <small class="zipcode_warning">Max 10 characters</small>
                  </>
                ),
              };
          }

          return {
            class: "warn",
            msg: (
              <>
                <small class="zipcode_warning">Enter correct format</small>
              </>
            ),
          };
        }

        return {
          class: "warn",
          msg: (
            <>
              <small class="zipcode_warning">Min 5 characters</small>
            </>
          ),
        };
      } else
        return {
          class: "warn",
          msg: (
            <>
              <small class="zipcode_warning">
                Cannot start with empty space
              </small>
            </>
          ),
        };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="zipcode_warning">Required</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}

export function validation_PhoneNo(value) {
  var no_format = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.startsWith(" ")) {
        if (value.length >= 1) {
          if (no_format.test(value)) {
            if (value.length <= 10) {
              if (!value.endsWith(" ")) {
                return {
                  class: "pass",
                };
              } else
                return {
                  class: "warn",
                  msg: (
                    <>
                      <small class="phoneno_warning">
                        Cannot end with a white space
                      </small>
                    </>
                  ),
                };
            } else
              return {
                class: "warn",
                msg: (
                  <>
                    <small class="phoneno_warning">Invalid Number</small>
                  </>
                ),
              };
          } else
            return {
              class: "warn",
              msg: (
                <>
                  <small class="phoneno_warning">Enter correct formate</small>
                </>
              ),
            };
        } else
          return {
            class: "warn",
            msg: (
              <>
                <small class="phoneno_warning">Min</small>
              </>
            ),
          };
      }

      return {
        class: "warn",
        msg: (
          <>
            <small class="phoneno_warning">Cannot start with empty space</small>
          </>
        ),
      };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="phoneno_warning">Required</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}







export function validation_Email(value) {
  var email_format = /\S+@\S+\.\S+/;
  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.startsWith(" ")) {
        if (value.length >= 1) {
          if (email_format.test(value)) {
              if (!value.endsWith(" ")) {
                return {
                  class: "pass",
                };
              } else
                return {
                  class: "warn",
                  msg: (
                    <>
                      <small class="email_warning">
                        Cannot end with a white space
                      </small>
                    </>
                  ),
                };
            } else
              
            return {
              class: "warn",
              msg: (
                <>
                  <small class="email_warning">Email Invalid</small>
                </>
              ),
            };
        } else
          return {
            class: "warn",
            msg: (
              <>
                <small class="email_warning">Min</small>
              </>
            ),
          };
      }

      return {
        class: "warn",
        msg: (
          <>
            <small class="email_warning">Cannot start with empty space</small>
          </>
        ),
      };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="email_warning">Required</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}




export function validation_Jobtitle(value) {
  var format = /[!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?0-9]+/;
  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.startsWith(" ")) {
        if (value.length >= 2) {
          if (!format.test(value)) {
            if (value.length <= 10) {
              if (!value.endsWith(" ")) {
                return {
                  class: "pass",
                };
              } else
                return {
                  class: "warn",
                  msg: (
                    <>
                      <small class="jobtitle_warning">
                        Cannot end with a white space
                      </small>
                    </>
                  ),
                };
            } else
              return {
                class: "warn",
                msg: (
                  <>
                    <small class="jobtitle_warning">Max letter 10</small>
                  </>
                ),
              };
          } else
            return {
              class: "warn",
              msg: (
                <>
                  <small class="jobtitle_warning">
                    Cannot contain symbol or number.
                  </small>
                </>
              ),
            };
        } else
          return {
            class: "warn",
            msg: (
              <>
                <small class="jobtitle_warning">Min 2 tetter.</small>
              </>
            ),
          };
      } else
        return {
          class: "warn",
          msg: (
            <>
              <small class="jobtitle_warning">Cannot start with empty space</small>
            </>
          ),
        };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="jobtitle_warning">Required</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}








export function validation_Company(value) {
  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.startsWith(" ")) {
        if (value.length >= 2) {
            if (value.length <= 15) {
              if (!value.endsWith(" ")) {
                return {
                  class: "pass",
                };
              } else
                return {
                  class: "warn",
                  msg: (
                    <>
                      <small class="jobtitle_warning">
                        Cannot end with a white space
                      </small>
                    </>
                  ),
                };
            } else
              return {
                class: "warn",
                msg: (
                  <>
                    <small class="jobtitle_warning">Max letter 10</small>
                  </>
                ),
              };
          } else
           
          return {
            class: "warn",
            msg: (
              <>
                <small class="jobtitle_warning">Min 2 tetter.</small>
              </>
            ),
          };
      } else
        return {
          class: "warn",
          msg: (
            <>
              <small class="jobtitle_warning">Cannot start with empty space</small>
            </>
          ),
        };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="jobtitle_warning">Required</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}




export function validation_Location(value) {
  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.startsWith(" ")) {
        if (value.length >= 2) {
            if (value.length <= 125) {
              if (!value.endsWith(" ")) {
                return {
                  class: "pass",
                };
              } else
                return {
                  class: "warn",
                  msg: (
                    <>
                      <small class="jobtitle_warning">
                        Cannot end with a white space
                      </small>
                    </>
                  ),
                };
            } else
              return {
                class: "warn",
                msg: (
                  <>
                    <small class="jobtitle_warning">Max letter 10</small>
                  </>
                ),
              };
          } else
           
          return {
            class: "warn",
            msg: (
              <>
                <small class="jobtitle_warning">Min 2 tetter.</small>
              </>
            ),
          };
      } else
        return {
          class: "warn",
          msg: (
            <>
              <small class="jobtitle_warning">Cannot start with empty space</small>
            </>
          ),
        };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="jobtitle_warning">Required</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}


// hire login

export function validation_HireUserName(value) {

  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.startsWith(" ")) {
        if (value.length >= 1) {
              if (!value.endsWith(" ")) {
                return {
                  class: "pass",
                };
              } else
                return {
                  class: "warn",
                  msg: (
                    <>
                      <small class="hireusername_warning">
                        Cannot end with a white space
                      </small>
                    </>
                  ),
                };
            } else
              
           
        
          return {
            class: "warn",
            msg: (
              <>
                <small class="hireusername_warning">Min</small>
              </>
            ),
          };
      }

      return {
        class: "warn",
        msg: (
          <>
            <small class="hireusername_warning">Cannot start with empty space</small>
          </>
        ),
      };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="hireusername_warning">Required</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}
















export function validation_HireEmail(value) {
  var email_format = /\S+@\S+\.\S+/;
  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.startsWith(" ")) {
        if (value.length >= 1) {
          if (email_format.test(value)) {
              if (!value.endsWith(" ")) {
                return {
                  class: "pass",
                };
              } else
                return {
                  class: "warn",
                  msg: (
                    <>
                      <small class="hireemail_warning">
                        Cannot end with a white space
                      </small>
                    </>
                  ),
                };
            } else
              
            return {
              class: "warn",
              msg: (
                <>
                  <small class="hireemail_warning">Email Invalid</small>
                </>
              ),
            };
        } else
          return {
            class: "warn",
            msg: (
              <>
                <small class="hireemail_warning">Min</small>
              </>
            ),
          };
      }

      return {
        class: "warn",
        msg: (
          <>
            <small class="hireemail_warning">Cannot start with empty space</small>
          </>
        ),
      };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="hireemail_warning">Required</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}





export function validation_HirePassword(value) {

  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.startsWith(" ")) {
        if (value.length >= 1) {
              if (!value.endsWith(" ")) {
                return {
                  class: "pass",
                };
              } else
                return {
                  class: "warn",
                  msg: (
                    <>
                      <small class="hirepassword_warning">
                        Cannot end with a white space
                      </small>
                    </>
                  ),
                };
            } else
              
           
        
          return {
            class: "warn",
            msg: (
              <>
                <small class="hirepassword_warning">Min</small>
              </>
            ),
          };
      }

      return {
        class: "warn",
        msg: (
          <>
            <small class="hirepassword_warning">Cannot start with empty space</small>
          </>
        ),
      };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="hirepassword_warning">Required</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}























export function validation_HireLoginEmail(value) {
  var email_format = /\S+@\S+\.\S+/;
  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.startsWith(" ")) {
        if (value.length >= 1) {
          if (email_format.test(value)) {
              if (!value.endsWith(" ")) {
                return {
                  class: "pass",
                };
              } else
                return {
                  class: "warn",
                  msg: (
                    <>
                      <small class="hireloginemail_warning">
                        Cannot end with a white space
                      </small>
                    </>
                  ),
                };
            } else
              
            return {
              class: "warn",
              msg: (
                <>
                  <small class="hireloginemail_warning">Email Invalid</small>
                </>
              ),
            };
        } else
          return {
            class: "warn",
            msg: (
              <>
                <small class="hireloginemail_warning">Min</small>
              </>
            ),
          };
      }

      return {
        class: "warn",
        msg: (
          <>
            <small class="hireloginemail_warning">Cannot start with empty space</small>
          </>
        ),
      };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="hireloginemail_warning">Required</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}





export function validation_HireLoginPassword(value) {

  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.startsWith(" ")) {
        if (value.length >= 1) {
              if (!value.endsWith(" ")) {
                return {
                  class: "pass",
                };
              } else
                return {
                  class: "warn",
                  msg: (
                    <>
                      <small class="hireloginpassword_warning">
                        Cannot end with a white space
                      </small>
                    </>
                  ),
                };
            } else
              
           
        
          return {
            class: "warn",
            msg: (
              <>
                <small class="hireloginpassword_warning">Min</small>
              </>
            ),
          };
      }

      return {
        class: "warn",
        msg: (
          <>
            <small class="hireloginpassword_warning">Cannot start with empty space</small>
          </>
        ),
      };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="hireloginpassword_warning">Required</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}









export function validation_Companyname(value) {

  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.startsWith(" ")) {
        if (value.length >= 1) {
              if (!value.endsWith(" ")) {
                return {
                  class: "pass",
                };
              } else
                return {
                  class: "warn",
                  msg: (
                    <>
                      <small class="companyname_warning">
                        Cannot end with a white space
                      </small>
                    </>
                  ),
                };
            } else
              
           
        
          return {
            class: "warn",
            msg: (
              <>
                <small class="companyname_warning">Min</small>
              </>
            ),
          };
      }

      return {
        class: "warn",
        msg: (
          <>
            <small class="companyname_warning">Cannot start with empty space</small>
          </>
        ),
      };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="companyname_warning">Required</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}



export function validation_Jobrole(value) {

  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.startsWith(" ")) {
        if (value.length >= 1) {
              if (!value.endsWith(" ")) {
                return {
                  class: "pass",
                };
              } else
                return {
                  class: "warn",
                  msg: (
                    <>
                      <small class="jobrole_warning">
                        Cannot end with a white space
                      </small>
                    </>
                  ),
                };
            } else
              
           
        
          return {
            class: "warn",
            msg: (
              <>
                <small class="jobrole_warning">Min</small>
              </>
            ),
          };
      }

      return {
        class: "warn",
        msg: (
          <>
            <small class="jobrole_warning">Cannot start with empty space</small>
          </>
        ),
      };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="jobrole_warning">Required</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}




export function validation_Responsibles(value) {

  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.startsWith(" ")) {
        if (value.length >= 1) {
          if (value.length <= 252) {
              if (!value.endsWith(" ")) {
                return {
                  class: "pass",
                };
              } else
                return {
                  class: "warn",
                  msg: (
                    <>
                      <small class="responsibles_warning">
                        Cannot end with a white space
                      </small>
                    </>
                  ),
                };
            } else

            return {
              class: "warn",
              msg: (
                <>
                  <small class="responsibles_warning">Max letter 252</small>
                </>
              ),
            };
        } else
              
           
        
          return {
            class: "warn",
            msg: (
              <>
                <small class="responsibles_warning">Min</small>
              </>
            ),
          };
      }

      return {
        class: "warn",
        msg: (
          <>
            <small class="responsibles_warning">Cannot start with empty space</small>
          </>
        ),
      };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="responsibles_warning">Required</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}







export function validation_Educationlevel(value) {

  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.startsWith(" ")) {
        if (value.length >= 1) {
              if (!value.endsWith(" ")) {
                return {
                  class: "pass",
                };
              } else
                return {
                  class: "warn",
                  msg: (
                    <>
                      <small class="educationlevel_warning">
                        Cannot end with a white space
                      </small>
                    </>
                  ),
                };
            } else
              
           
        
          return {
            class: "warn",
            msg: (
              <>
                <small class="educationlevel_warning">Min</small>
              </>
            ),
          };
      }

      return {
        class: "warn",
        msg: (
          <>
            <small class="educationlevel_warning">Cannot start with empty space</small>
          </>
        ),
      };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="educationlevel_warning">Required</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}



export function validation_Status(value) {

  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.startsWith(" ")) {
        if (value.length >= 1) {
              if (!value.endsWith(" ")) {
                return {
                  class: "pass",
                };
              } else
                return {
                  class: "warn",
                  msg: (
                    <>
                      <small class="status_warning">
                     
                        Cannot end with a white space
                      </small>
                    </>
                  ),
                };
            } else
              
           
        
          return {
            class: "warn",
            msg: (
              <>
                <small class="status_warning">Min</small>
              </>
            ),
          };
      }

      return {
        class: "warn",
        msg: (
          <>
            <small class="status_warning">Cannot start with empty space</small>
          </>
        ),
      };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="status_warning">Required</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}




export function validation_Startdate(value) {

  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.startsWith(" ")) {
              if (!value.endsWith(" ")) {
                return {
                  class: "pass",
                };
              } else
                return {
                  class: "warn",
                  msg: (
                    <>
                      <small class="startdate_warning">
                     
                        Cannot end with a white space
                      </small>
                    </>
                  ),
                };
            } else
              
           
       

      return {
        class: "warn",
        msg: (
          <>
            <small class="startdate_warning">Cannot start with empty space</small>
          </>
        ),
      };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="startdate_warning">Required</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}


export function validation_Enddate(value) {
  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.startsWith(" ")) {
              if (!value.endsWith(" ")) {
                return {
                  class: "pass",
                };
              } else
                return {
                  class: "warn",
                  msg: (
                    <>
                   
                      <small class="enddate_warning">
                     
                        Cannot end with a white space
                      </small>
                    </>
                  ),
                };
            } else
              
           
       

      return {
        class: "warn",
        msg: (
          <>
            <small class="enddate_warning">Cannot start with empty space</small>
          </>
        ),
      };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="enddate_warning">Required</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}











