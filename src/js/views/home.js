import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [id, setId] = useState("");
  const [UpdateContactAgenta, setUpdateContactAgenta] = useState("");

  return (
    <div className="container">
      <h1 className="text-center mt-5">Contact List</h1>
      <Link to="/AddContact">
        <div className=" d-flex justify-content-center ">
          <button className="btn btn-success mt-3 ">Add Contact</button>
        </div>
      </Link>
      <div className="mt-5 justify-content-center">
        {store.contacts.map((contact, index) => {
          return (
            <div className="col-sm-11 mb-3 mb-sm-0 px-5">
              <div className="card justify-content-center p-3">
                <div className="row ">
                  <div className="col-md-4 d-flex p-img">
                    <img
                      src="https://picsum.photos/200"
                      className="img-fluid img-thumbnail rounded-circle"
                      alt="..."
                    />
                  </div>

                  <div className="col-md-8 ">
                    <div className="card-body p-body ">
                      <h5 className="card-title mb-1 d-flex justify-content-between align-items-center">
                        {contact.name}{" "}
                        <Link
                          to={`/editcontact/${contact.id}`}
                          className="me-5 btn"
                        >
                          {" "}
                          <i class="fa-solid fa-pen mb-1 "></i>
                        </Link>
                        <a
                          onClick={() => {
                            actions.DeleteAgentaContact(contact.id);
                          }}
                          className="me-5 btn"
                        >
                          <i class="fa-solid fa-trash-can mb-1 "></i>
                        </a>
                      </h5>

                      <p className="card-text mb-1 lh-base text-secondary">
                        <i class="fa-solid fa-location-dot me-3"></i> {contact.address}{" "}
                      </p>

                      <p className="card-text mb-1 lh-base text-secondary">
                      
                        <i class="fa-solid fa-phone me-3"></i>{contact.phone}{" "}
                      </p>

                      <p className="card-text mb-1 fs-6 text fw-light lh-base text-secondary">
                        <i class="fa-solid fa-envelope me-3"></i>
                        {contact.email}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
