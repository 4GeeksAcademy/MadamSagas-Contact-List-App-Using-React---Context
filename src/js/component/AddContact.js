import React, { useContext, useState } from "react";
import { Context} from "./../store/appContext";
import { Link } from "react-router-dom";

const AddContact = () => {
  const {store, actions} = useContext(Context)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  
  
  return (
    <div className="container">
      <h1 className="text-center mt-5">Add New Contact</h1>
      <form>
        <div className="mb-3">
          <label for="inputFullName" class="form-label">
            Full Name
          </label>
          <input
          onChange={(e) => {
            console.log(e)
            setName(e.target.value);

          }}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Full Name"
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input
          onChange={(e) => {
            console.log(e);
            setEmail(e.target.value);
          }
          }
            type="email"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Phone
          </label>
          <input 
          onChange={(e) => {
            console.log(e);
            setPhone(e.target.value);
          }
          }
            type="phone"
            className="form-control"
            id="inputPhone"
            placeholder="Enter phone"
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Address
          </label>
          <input
          onChange={ (e) => {
            console.log(e)
            setAddress(e.target.value)
          }}
            type="address"
            class="form-control"
            id="inputAddress"
            placeholder="Enter address"
          />
        </div>

        <div className="d-grid gap-2">
          <button
            onClick={() => {
              actions.AddNewAgendaContact(name, phone, email, address);
            }}
            type="submit"
            className="btn btn-primary"
          >Save
          </button>
          <Link to="/">
            <a> Or get back to contacts</a>
          </Link>
        </div>

      </form>
    </div>
  );
};

export default AddContact;
