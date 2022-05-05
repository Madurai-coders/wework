import "./discover.css";
import Navbar from "../navbar/navbar";

function Discover() {
  return (
    <>
<Navbar></Navbar>
      <div className="main">
        <div className="sliders d-flex justify-content-center mt-5">
          <div className="slider_box p-0 d-flex flex-row">
            <div className="slider_img">
              <div className="overlay_slider text-center">
                <i class="slider_left fa fa-angle-left" aria-hidden="true"></i>
                <img
                  class="slide_img1 mt-4"
                  src="https://media-exp1.licdn.com/dms/image/C561AAQHNhRlTt9pOgg/storylineheaderimage-shrink_400_400/0/1650403830402?e=2147483647&v=beta&t=zhUj_k_ymzXxFbltkam803VvJfDVfGfmewPyKu5cL1o"
                  alt=""
                ></img>
              </div>
            </div>
            <div className="slider_text mt-4">
              <button type="button" class=" featured_btn m-2 btn btn-secondary">
                FEATURED
              </button>
              <h3 className="m-2 slide_title1">
                Job switchers might switch again
              </h3>
              <div className="d-flex flex-row">
                <img
                  class="slider_profile m-3"
                  src="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/9.JPG"
                  alt=""
                ></img>
                <h6 class="mt-3 slider_profilename">Taylor Sherif</h6>

                <h6 className="slider_profilejob">Editor at Wework</h6>
              </div>
            </div>
            <div className="slider_rightbox">
            <i class="slider_right fa fa-angle-right" aria-hidden="true"></i>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Discover;
