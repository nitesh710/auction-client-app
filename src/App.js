import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Notifications } from "react-push-notification";

function App (){
    return (
        <div>
            <Notifications />
            <Router>
                <div className="container mt-5">
                    <Routes>
                        <Route path="/" element={<Login />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/signup" element={<SignUp />}></Route>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;