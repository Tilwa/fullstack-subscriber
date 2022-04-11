import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
import "./Form.css";

const Form = () => {
  // const navigate = useNavigate();

  const [user, setUser] = useState({
    company: "",
    fname: "",
    lname: "",
    email: "",
    phone: "",
    categories: "",
  });

  let name, value;
  const inputHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { company, fname, lname, email, phone, categories } = user;

    if (!company || !fname || !lname || !email || !phone || !categories) {
      res.status(422).json({ error: "Please filled all the fields" });
      window.alert("Please filled all the fields");
    }

    const res = await fetch("/contactus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company,
        fname,
        lname,
        email,
        phone,
        categories,
      }),
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid Submission");
    } else {
      window.alert("We will contact you shortly");
    }
    window.open("https://fasbazar.com/", "_self");
  };

  const fasbazarAccount = () => {
    window.open("https://fasbazar.com/my-account/", "_self");
  };
  return (
    <div className="main">
      <div className="card">
        <div className="left"></div>
        <div className="right">
          {/* div no 1 */}
          <div className="supplier-title-btns">
            <h1>Welcome to Merchandising</h1>
          </div>

          {/* div no 2 */}

          <form className="inputs" method="POST">
            <h2 className="contact-us">
              Contact Us
              <hr className="contact-line" />
            </h2>
            <div className="input">
              <input
                className="input-styl"
                type="text"
                onChange={inputHandler}
                value={user.company}
                name="company"
                placeholder="Company Name"
                required
              />
              <input
                className="input-styl"
                type="text"
                onChange={inputHandler}
                value={user.fname}
                name="fname"
                placeholder="First Name"
                required
              />
              <input
                className="input-styl"
                type="text"
                onChange={inputHandler}
                value={user.lname}
                name="lname"
                placeholder="Last Name"
                required
              />
              <input
                className="input-styl"
                type="email"
                onChange={inputHandler}
                value={user.email}
                name="email"
                placeholder="Email Address"
                required
              />

              <input
                className="input-styl"
                type="tel"
                onChange={inputHandler}
                value={user.phone}
                name="phone"
                placeholder="Phone"
                required
              />
              <input
                className="input-styl"
                type="text"
                onChange={inputHandler}
                value={user.categories}
                name="categories"
                placeholder="Add Items"
                required
              />
              <button className="submit-btn" type="submit" onClick={PostData}>
                Submit
              </button>
            </div>
          </form>

          {/* div no 3 */}
          <div className="last-div">
            <div className="apple-gmail">
              <button className="last-btn1" onClick={fasbazarAccount}>
                <i id="apple" class="devicon-apple-original"></i>Log in
              </button>

              <button className="last-btn2" onClick={fasbazarAccount}>
                <i id="google" class="devicon-google-plain colored"></i>Sign in
              </button>
            </div>
            <p className="last-para">
              Don't have an account?{" "}
              <a href="https://accounts.google.com/signup/v2/webcreateaccount?continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dcreate-account-button&flowName=GlifWebSignIn&flowEntry=SignUp">
                Create Account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
