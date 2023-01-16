import axios from "axios";

const userClient = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 1000,
  headers: {
    "content-type": "application/json"
  }
});

export default userClient;
