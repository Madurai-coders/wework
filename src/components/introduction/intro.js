import "./intro.css";
import intro_img from '../assets/intro_img.jpg'
import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar";
function introduction() {
  return (
    <>
    <Navbar></Navbar>

      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12">
          
              <img
                class="intro_img"
                src={intro_img}
                alt=""
              ></img>
          
            <div className="overlay mt-3">
              <h1 className="intro_txt">
                Join your Colleagues,Classmates,and <br></br>friends on WeWork
              </h1>
              <Link to="/content">
                <button type="button" className="ripple mt-3 btn btn-primary">
                  Get started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default introduction;
