import { useState } from "react";
import UserClient from "../apis/UserClient";
import { Link } from "react-router-dom";
import ValidateObject from "../Utils/utils";
import ShowNotification from "../Utils/notifications";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleInput = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "userName":
        setUserName(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "city":
        setCity(value);
        break;
      case "state":
        setState(value);
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userObject = { userName, password, city, state };
    console.log("userObject", userObject);
    setUserName("");
    setPassword("");
    setCity("");
    setState("");
    try {
        let isValidate = await ValidateObject(userObject);
        if(isValidate) {
            let response = await UserClient.post("/signup", userObject);
            console.log("response", response);
        }
    } catch (e) {
        console.log("Error: ", e);
    }
  };
  return (
    <div>
      <div className="card">
        <h5 className="card-header">Sign Up</h5>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Username</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="userName"
                  placeholder="Enter username"
                  value={userName}
                  onChange={handleInput}
                ></input>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={handleInput}
                ></input>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">City</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  placeholder="Enter city"
                  value={city}
                  onChange={handleInput}
                ></input>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">State</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="state"
                  placeholder="Enter state"
                  value={state}
                  onChange={handleInput}
                ></input>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <p className="mt-2">
        Already signed up, please login using <Link to="/login">Login</Link>{" "}
        page
      </p>
    </div>
  );
}

export default SignUp;
