import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginPage.style.scss";

const LoginPage = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/auth/login", inputs);
            navigate(`/manage/${inputs.username}`);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="loginPage-container">
            <div className="loginPage-wrapper">
                <h2 className="title">Login</h2>
                <form>
                    <div className="loginPage-user-box">
                        <input type="text" name="username" required onChange={handleChange}></input>
                        <label>Username</label>
                    </div>
                    <div className="loginPage-user-box">
                        <input type="text" name="password" required onChange={handleChange}></input>
                        <label>Password</label>
                    </div>
                    <div>
                        <div className="button-wrapper" onClick={handleSubmit}>
                            <a href="/" className="button">
                                Login
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;