import "./getstart.css";

function Getstart() {
  const myTimeout = setTimeout(Greeting, 8000);
  const Timeout = setTimeout(werotate, 5000);

function werotate(){
       document.querySelector("#we").classList.add("tardis-warp");
       document.querySelector("#rotate").classList.add("tardis");
   
}

  function Greeting() {
    document.querySelector("#get").classList.add("get_1");
  }
  return (
    <>
      <div id="get" className="get">
        <div className="wrapper">
          <div className="static-txt">
          <div className="tardi-wrap" id="we">
              <div className="tardi" id="rotate">
            <span class="intro_dot">
              <a className="intro_brand">WE</a>
            </span>
          </div></div></div>
          <ul class="dynamic_txts">
            <li>WORK</li>
           
          </ul>
        </div>
      </div>
    </>
  );
}
export default Getstart;
