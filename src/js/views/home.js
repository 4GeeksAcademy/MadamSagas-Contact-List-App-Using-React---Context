import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
  <div className="mt-5 ">
    <Link to="/AddContact">
      <div className="d-grid gap-2 d-flex justify-content-end"></div>
      <button className="btn btn-success me-2">Add Contact</button>
    </Link>
  </div>
);
