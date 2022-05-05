function subcard(props) {
  return (
    <>
      <div className="row">
        <div className="col-lg-5 offset-md-1">
          <div className="card_1">
            <h3 className="card-title">{props.title}</h3>
            <p className="card-description">{props.description}</p>
          </div>
        </div>
        <div className="col-4">
          <img src={props.img} className={props.class} alt="profile"></img>
        </div>
      </div>
    </>
  );
}

export default subcard;
