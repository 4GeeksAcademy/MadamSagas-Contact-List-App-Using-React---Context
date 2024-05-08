import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="row">
      <div class="col-sm-12 mb-3 mb-sm-0">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">hola hola gola</p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
