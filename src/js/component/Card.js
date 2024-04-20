import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
return(
  
    <div className="card" style={{width: "18rem"}}>
    <img src="..." class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <Link to="/">
      <a href="#" className="btn btn-primary">Go Home</a>
      </Link>
    </div>
  </div>
)
}

export default Card;