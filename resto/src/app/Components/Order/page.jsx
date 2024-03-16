import React from "react";
import "../Order/o.css";
// import { connectDB } from "";
import { connectdb } from "../../../helper/db";

connectdb();
const page = () => {
  return (
    <>
      <h1 className="oh1">ORDERING THE MEALS</h1>
      <div className="order">
        <div className="form">
          <form action="/Components/About" className="formcontact">
            <br />
            <br />
            <br />

            <label htmlFor="">Full Name</label>
            <br />
            <input
              type="text"
              name="name"
              id="nameform"
              placeholder="Enter Full Name"
            />
            <br />
            <br />
            <br />
            <br />
            <label htmlFor="">Email</label>
            <br />
            <input
              type="email"
              name="name"
              id="nameform"
              placeholder="Enter Email"
            />
            <br />
            <br />
            <br />
            <br />
            {/* <label htmlFor="">Messege</label> */}
            <label htmlFor="">Phone Number</label>
            <br />
            <input
              type="number"
              name="name"
              id="nameform"
              placeholder="Enter Number"
            />
            <br />
            <br />
            <br />
            <br />
            <label htmlFor="">Meal Name</label>
            <br />
            <input
              type="text"
              name="name"
              id="nameform"
              placeholder="Enter Meal"
            />
            <br />
            <br />
            <br />
            <br />
            <h1>Messege</h1>
            {/* <input type="text" name="name" id="nameform" placeholder='Enter Full Name' /> */}
            <textarea
              name="messege"
              id="messegecontact"
              cols="30"
              rows="10"
              placeholder="Enter Any Messege"
            ></textarea>
            <br />
            <br />
            <br />
            <button type="submit" className="submit border-0">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
