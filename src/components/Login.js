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
      default:
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
      ShowNotification(response.data.message, "SUCCESS");
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
          <h5 className="card-header">Login</h5>
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
                <button
                  type="submit"
                  className="px-1.5 py-1.5 bg-blue-500 border-blue-600 text-white rounded outline outline-offset-2 outline-1"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <p className="mt-2" style={{ color: "#ff7f00f0" }}>
            New user, please go to <Link to="/signup" className="text-white">Sign Up</Link> page
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
