import { useState } from "react";
import UserClient from "../apis/UserClient";
import { Link } from "react-router-dom";
import ShowNotification from "../Utils/notifications";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "userName":
        setUserName(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginObject = { userName, password };
    console.log("loginObject", loginObject);
    setUserName("");
    setPassword("");
    try {
      let response = await UserClient.post("/login", loginObject);
      console.log("response", response);
      ShowNotification(response.data.message, "Success", "GREEN");
    } catch (e) {
      console.log("Error: ", e)
      ShowNotification(e.response.data.message, "Failed", "RED");
    }
  };

  return (
    <div>
      <div className="card">
        <h5 className="card-header">Login</h5>
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
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <p className="mt-2">New user, please go to <Link to="/signup">Sign Up</Link> page</p>
    </div>
  );
}

export default Login;
