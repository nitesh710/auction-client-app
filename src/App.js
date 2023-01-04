import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Header from "./headers/NavBar";
import DealsList from "./components/DealsList";
import Sell from "./components/Sell";

function App (){
    return (
        <div style={{backgroundImage: "linear-gradient(180deg,#1e4fc6 0,#0941ba 50%,#174ac0)", height:'100vh'}}>
            <ToastContainer />
            <Router>
                <Header />
                <div className="container mt-5">
                    <Routes>
                        <Route path="/" element={<Login />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/signup" element={<SignUp />}></Route>
                        <Route path="/deals" element={<DealsList />}></Route>
                        <Route path="/sell" element={<Sell />}></Route>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;