import { useState } from "react";
import AxiosClient from "../apis/axiosClient";
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
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userObject = { userName, password, city, state };
    setUserName("");
    setPassword("");
    setCity("");
    setState("");
    try {
      let isValidate = await ValidateObject(userObject);
      if (isValidate) {
        let response = await AxiosClient.post("/signup", userObject);
        ShowNotification(response.data.message, "SUCCESS");
      }
    } catch (e) {
      console.log("Error: ", e);
      ShowNotification(e.response.data.message, "FAILED");
    }
  };
  return (
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <div className="card">
          <h5 className="card-header">Sign Up</h5>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input
                    type="text"
                    className="form-control"
                    name="userName"
                    placeholder="Enter username"
                    value={userName}
                    onChange={handleInput}
                  ></input>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                    type="text"
                    className="form-control"
                    name="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={handleInput}
                  ></input>
              </div>
              <div className="form-group">
                <label>City</label>
                <input
                    type="text"
                    className="form-control"
                    name="city"
                    placeholder="Enter city"
                    value={city}
                    onChange={handleInput}
                  ></input>
              </div>
              <div className="form-group">
                <label>State</label>
                <input
                    type="text"
                    className="form-control"
                    name="state"
                    placeholder="Enter state"
                    value={state}
                    onChange={handleInput}
                  ></input>
              </div>
              <div className="form-group">
              <button type="submit" className="px-1.5 py-1.5 bg-blue-500 border-blue-600 text-white rounded outline outline-offset-2 outline-1">
                Sign Up
              </button>
              </div>
            </form>
          </div>
        </div>
        <div>
        <p className="mt-2" style={{ color: "#ff7f00f0" }}>
          Already signed up, please login using <Link to="/login" className="text-white">Login</Link>{" "}
          page
        </p>
      </div>
      </div>
    </div>
  );
}

export default SignUp;
