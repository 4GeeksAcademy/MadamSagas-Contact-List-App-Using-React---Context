import React from "react";
import { Link } from "react-router-dom";

const AddContact = () => {
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Full Name
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Phone
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Address
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <Link to="/">
            <a> Or get back to contact</a>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
