import { useState } from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleEmailChange(event: any) {
    setFormData({
      ...formData,
      email: event.target.value,
    });
  }

  function handleUsernameChange(event: any) {
    setFormData({
      ...formData,
      username: event.target.value,
    });
  }

  function handlePasswordChange(event: any) {
    setFormData({
      ...formData,
      password: event.target.value,
    });
  }

  function handleSubmit(event: any) {
    event.preventDefault(); // prevent default form submission behavior

    axios
      .post("http://localhost:8080/register", formData)
      .then((response) => {
        //Handle successful response(display backend success message)
        const message = response.data;
        setMessage(message);
        setError("");
        console.log(message);
      })
      .catch((error) => {
        //Handle error (display backend error messages)
        if (error.response) {
          const message = error.response.data;
          setMessage("");
          setError(message);
          console.error("API error: ", error);
          if (message) {
            alert("There was an error registering, please try again");
          }
        } else {
          console.error("API Error: ", error);
          alert("there was an error registering, please try again");
        }
      });
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Registration Form</h3>
            </div>
            <div className="card-body">
              <form id="Registration-Form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Username:</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    value={formData.username}
                    onChange={handleUsernameChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={formData.password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                {message && <p className="text-success">{message}</p>}
                {error && <p className="text-danger">{error}</p>}
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">
                    Register
                  </button>
                </div>
              </form>
              <p className="text-center">
                Already have an account? <Link to="/Login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;