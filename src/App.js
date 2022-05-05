import Navbar from "./components/navbar/navbar";
import "./App.css";
import Content from "./components/main_content/content";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profile from "./components/profile/profile";
import Profile_Update from "./components/profile_update/profile_update";
import Introduction from "./components/introduction/intro";
import Discover from './components/discover/discover';
import Hire_Signup from "./components/hirejob_signup/hire_signup";
import Hire_Login from "./components/hirejob_login/hire_login";
import Job_hiring from './components/job_hiring/hire';
import Job_website from './components/job_website/job';
import Lookingjob_Signup from "./components/lookingjob_signup/lookingjob_signup";
import Lookingjob_Login from './components/lookingjob_login/lookingjob_login';
import Hires_website from './components/hires_website/hires_website';

function App() {
  return (
    <>
      <BrowserRouter>
       
       

        <Switch>


           <Route path="/introduction" exact component={Introduction}></Route> 
           <Route path="/content" exact component={Content}></Route> 
           <Route path="/profile" exact component={Profile}></Route>
           {/* <Route path="/profile_update" exact component={Profile_Update}></Route> */}
           <Route path="/discover" exact component={Discover}></Route>
           <Route path="/hirejob_signup" exact component={Hire_Signup}></Route>
           <Route path="/hirejob_login" exact component={Hire_Login}></Route>
           <Route path="/job_hiring" exact component={Job_hiring}></Route>
           <Route path="/job_website" exact component={Job_website}></Route>
           <Route path="/lookingjob_signup" exact component={Lookingjob_Signup}></Route>
           <Route path="/lookingjob_login" exact component={Lookingjob_Login}></Route>
           <Route path="/hires_website"  exact component={Hires_website }></Route>



        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
