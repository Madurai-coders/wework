import "./content.css";
import Card from "../card_section/card";
import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import Getstart from "../Getstart/getstart";

function Content() {
  function show_more() {
    document.querySelector("#showmore").classList.add("show1");
    document.querySelector("#bts").classList.add("bts1");
  }
  const show_less = () => {
    document.querySelector("#showmore").classList.remove("show1");
    document.querySelector("#bts").classList.remove("bts1");
  };

  const show_more1 = () => {
    document.querySelector("#showmore_1").classList.add("show2");
    document.querySelector("#bts_1").classList.add("bts2");
  };
  const show_less1 = () => {
    document.querySelector("#showmore_1").classList.remove("show2");
    document.querySelector("#bts_1").classList.remove("bts2");
  };
  const [slider, setslider] = useState(1);
  function Previous() {
    setslider(slider - 1);
  }
  function Next() {
    setslider(slider + 1);
  }

  const myTimeout = setTimeout(myGreeting, 8000);


  function myGreeting() {
         document.querySelector("#priya").classList.add("priya_1");
  }


  return (
    <>

<Getstart></Getstart>

<div id="priya" className="priya">
    <Navbar></Navbar>
      <div className="container-fluid p-0 m-0">
        <div className="row mt-5 justify-content-md-center">
          <div className="col-xl-5 col-lg-4 col-md-7 m-5">
            <h1 className="title">Welcom to your professional community</h1>
            <div className="card_group mt-5">
              <div className=" col-4 card  mt-1">
                <h6 className="card_title">Search for a job</h6>
                <span>
                  <i
                    class="angle_right fa fa-angle-right"
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
              <div className="card  mt-4">
                <h6 className="card_title">Find a person you know</h6>
                <span>
                  <i
                    class="angle_right1 fa fa-angle-right"
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
              <div className="card  mt-4">
                <h6 className="card_title">Learn a new skill</h6>
                <span>
                  <i
                    class="angle_right2 fa fa-angle-right"
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-9 mt-3">
            <img
              className="floating img-fluid"
              src="https://i.pinimg.com/736x/fd/2c/79/fd2c798df405cef4b1f5aee1202be1cd.jpg"
              alt=""
            ></img>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0 m-0">
        <div className="row mt-5 justify-content-md-center content_2 ">
          <div className="col-lg-4 col-md-6 col-sm-12  m-5">
            <h1 className="content2_title1">
              Explore topics you<br></br> are interested in
            </h1>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12 m-5">
            <h6 className="content2_title2">CONTENT TOPICS</h6>
            <button type="button" class="b_1 mt-4 btn btn-outline-secondary">
              See All Topics
            </button>
            <button type="button" class="b_2 mt-4 btn btn-secondary">
              Science and Environment
            </button>
            <br></br>
            <button type="button" class="b_2 mt-4 btn btn-secondary">
              Marketing and Advertising
            </button>
            <button type="button" class="b_2 mt-4 btn btn-secondary">
              Sales and Retail
            </button>
            <button type="button" class="b_2 mt-4 btn btn-secondary">
              Technology
            </button>
            <br></br>
            <button type="button" class="b_2 mt-4 btn btn-secondary">
              Fiance and Economy
            </button>
            <button type="button" class="b_2 mt-4 btn btn-secondary">
              Health
            </button>
            <button type="button" class="b_2 mt-4 btn btn-secondary">
              Business and Management
            </button>
            <br></br>

            <div id="bts" className="bts">
              <button type="button" class="b_1 mt-4 btn btn-secondary">
                Lifestyke and Leisure
              </button>
              <button type="button" class="b_2 mt-4 btn btn-secondary">
                Society and Culture
              </button>
              <br></br>
              <button type="button" class="b_2 mt-4 btn btn-secondary">
                Arts and Entertainment
              </button>
              <button type="button" class="b_2 mt-4 btn btn-secondary">
                Education and Learning
              </button>
              <br></br>

              <button
                id="showless"
                type="button"
                onClick={show_less}
                class="show mt-4 btn btn-outline-secondary"
              >
                Show less{" "}
                <i class=" show fa fa-angle-up" aria-hidden="true"></i>
              </button>
            </div>

            <button
              id="showmore"
              type="button"
              onClick={show_more}
              class="hide mt-4 btn btn-outline-secondary"
            >
              Show more{" "}
              <i class="show_more fa fa-angle-down" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0 m-0">
        <div className="row  justify-content-md-center">
          <div className="col-lg-4 col-md-6 col-sm-12  m-5">
            <h1 className="content2_title1">
              Explore topics you<br></br> are interested in
            </h1>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12  m-5">
            <h6 className="content2_title2">SUGGESTED SEARCHES</h6>
            <button type="button" class="b_1 mt-4 btn btn-secondary">
              Engineering
            </button>
            <button type="button" class="b_2 mt-4 btn btn-secondary">
              Reatail Associate
            </button>
            <button type="button" class="b_2 mt-4 btn btn-secondary">
              Operation
            </button>{" "}
            <br></br>
            <button type="button" class="b_2 mt-4 btn btn-secondary">
              Sales
            </button>
            <button type="button" class="b_2 mt-4 btn btn-secondary">
              Marketing
            </button>
            <button type="button" class="b_2 mt-4 btn btn-secondary">
              Support
            </button>
            <button type="button" class="b_2 mt-4 btn btn-secondary">
              Accounting
            </button>{" "}
            <br></br>
            <button type="button" class="b_2 mt-4 btn btn-secondary">
              Art and design
            </button>
            <button type="button" class="b_2 mt-4 btn btn-secondary">
              Fiance
            </button>
            <button type="button" class="b_2 mt-4 btn btn-secondary">
              Consulting
            </button>
            <br></br>
            <div id="bts_1" className="bts_1">
              <button type="button" class="b_1 mt-4 btn btn-secondary">
                Lifestyke and Leisure
              </button>
              <button type="button" class="b_2 mt-4 btn btn-secondary">
                Society and Culture
              </button>
              <br></br>

              <button type="button" class="b_2 mt-4 btn btn-secondary">
                Arts and Entertainment
              </button>
              <button type="button" class="b_2 mt-4 btn btn-secondary">
                Education and Learning
              </button>
              <br></br>
              <button type="button" class="b_2 mt-4 btn btn-secondary">
                Sports and Fitness
              </button>
              <button type="button" class="b_2 mt-4 btn btn-secondary">
                Careers and Employment
              </button>
              <br></br>
              <button type="button" class="b_2 mt-4 btn btn-secondary">
                Sports and Fitness
              </button>
              <button type="button" class="b_2 mt-4 btn btn-secondary">
                Customer Service
              </button>

              <button type="button" class="b_2 mt-4 btn btn-secondary">
                Purchasing
              </button>
              <br></br>
              <button type="button" class="b_2 mt-4 btn btn-secondary">
                Quality Assurance
              </button>
              <button type="button" class="b_2 mt-4 btn btn-secondary">
                Information Technology
              </button>
              <button type="button" class="b_2 mt-4 btn btn-secondary">
                Human Resources
              </button>
              <br></br>

              <button
                id="showless_1"
                type="button"
                onClick={show_less1}
                class="show mt-4 btn btn-outline-secondary"
              >
                Show less <i class="show fa fa-angle-up" aria-hidden="true"></i>
              </button>
            </div>
            <button
              id="showmore_1"
              type="button"
              onClick={show_more1}
              class="show mt-4 btn btn-outline-secondary"
            >
              Show more{" "}
              <i class="show_more fa fa-angle-down" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0 m-0">
        <div className="row content_2 justify-content-md-center">
          <div className="col-lg-4 col-md-5 m-5">
            <h1 className="content3_title">
              Post your job for<br></br>millions of people to<br></br> see
            </h1>
          </div>
          <div className="col-lg-5 col-md-4 m-5">
            <button
              type="button"
              class=" post_job mt-5 btn btn-outline-secondary"
            >
              Post job
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0 mt-5">
        <div className="row justify-content-end">
          <div className="col-lg-3 col-md-2 col-sm-4 col-5">
             <div className="prev_nxt"> 
              <button type="button"    onClick={Previous} className="previous btn btn-outline-secondary">
                 Previous
              </button>
                <button
                 onClick={Next}
                  type="button"
                  className="next btn btn-outline-secondary"
                >
                  Next
                 
                </button>
                </div>
          </div>
        </div>
        <div className="row m-2">
          <div className="col-9">
            {slider > 1 < 1 && (
              <Card
                title="Conversation today could lead to opportunity tomorrow"
                description="Sending messages to people you know is  a great strengthen relationships as you take next step in your career"
                class="card_img"
                img="https://www.myperfectresume.com/wp-content/uploads/2020/05/describe-a-time-where-you-improved-work-quality.jpg"
              />
            )}
          </div>
          <div className="col-9">
            {slider >= 2 && (
              <Card
                title="Let the right people know you're open to work "
                description="Sending messages to people you know is  a great strengthen relationships as you take next step in your career"
                class="card_img"
                img="https://images.squarespace-cdn.com/content/v1/59317e12e58c620c430469b9/1548784917794-6BZLZ7DYDDPBTZ7HSDGB/WeWork_Identity_11.jpg?format=1500w"
              />
            )}
          </div>

          {/*         
            // <div className="col-9 mt-5 overlay_slider">
              
            // </div> */}
        </div>
      </div>

      <div className="container-fluid mt-5 p-0">
        <div className="row content_2 justify-content-sm-center">
          <div className="col-lg-3 col-md-4">
            <h6 className="brandname_footer mt-2"> Work</h6>
            <span class="dot_footer text-center mt-4">
              <a className="brand_footer mt-5"> WE</a>
            </span>
          </div>
          <div className="col-lg-2 col-md-12 col-sm-12 mt-5 footer">
            <h5 className="f_title d-flex flex-column">General</h5>
            <h6>Sign up</h6>
            <h6>Hep center</h6>
            <h6>Careers</h6>
            <h6>Press</h6>
            <h6>Blog</h6>
            <h6>About</h6>
          </div>
          <div className="col-lg-2 col-md-12 col-sm-12 mt-5 footer">
            <h5 className="f_title d-flex flex-column">Browse WeWork</h5>
            <h6>Learning</h6>
            <h6>Salary</h6>
            <h6>Jobs</h6>
            <h6>Service</h6>
            <h6>Products</h6>
          </div>
          <div className="col-lg-2 col-md-12 col-sm-12 mt-5 footer">
            <h5 className="f_title d-flex flex-column">Business Solution</h5>
            <h6>Talent</h6>
            <h6>Marketing</h6>
            <h6>Sales</h6>
            <h6>Learning</h6>
          </div>

          <div className="col-lg-2 col-md-12 col-sm-12  mt-5 footer">
            <h5 className="f_title d-flex flex-column">Directories</h5>
            <h6>Members</h6>
            <h6>Companies</h6>
            <h6>Featured</h6>
            <h6>Service</h6>
            <h6>News</h6>
            <h6>Post</h6>
            <h6>Jobs</h6>
            <h6>Articles</h6>
            <h6>School</h6>
            <h6>Content Topics</h6>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Content;
