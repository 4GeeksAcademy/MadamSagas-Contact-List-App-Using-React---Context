import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import AddContact from "./AddContact";

const EditContact = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [currentContact, setCurrentContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

useEffect(() => {
if(params.id) {
  const contact = store.contacts.find(item => item.id == params.id)
  setCurrentContact({
    name: contact?.name,
    email: contact?.email,
    phone: contact?.phone,
    address: contact?.address,
  })
}
},[params])

  return (
    <div className="container">
      <h1 className="text-center mt-5">Add New Contact</h1>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Full Name
          </label>
          <input
            value={currentContact?.name}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Full Name"
            onChange={(e) => setCurrentContact({...currentContact, name: e.target.value})}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input
           value={currentContact?.email}
            type="email"
            className="form-control"
            id="exampleInputPassword"
            placeholder="Enter email"
            onChange={(e) => setCurrentContact({...currentContact, email: e.target.value})}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Phone
          </label>
          <input
            
            value={currentContact?.phone}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter phone"
            onChange={(e) => setCurrentContact({...currentContact, phone: e.target.value})}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputAdd" className="form-label">
            Address
          </label>
          <input
           value={currentContact?.address}
            type="text"
            class="form-control"
            id="exampleInputAddress"
            placeholder="Enter address"
            onChange={(e) => setCurrentContact({...currentContact, address: e.target.value})}
          />
        </div>
        <div className="d-grid gap-2">
          <button
            onClick={() => {
              actions.UpdateContactAgenta(params.id, currentContact);
            }}
            type="button"
            className="btn btn-primary"
          >
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

export default EditContact;
