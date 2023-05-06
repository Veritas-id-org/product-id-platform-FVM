import React, { useContext } from "react";
import "./navbar.style.scss";
import { AuthContext } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const { currentUser, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = async () => {
        await logout();
        navigate("/");
    };
    return (
        <div className="navbar">
            <div className="navbar-title" onClick={() => navigate("/")}>
                <img src="/img/V-ID-Logo.webp" alt="nav-logo" />
                <p>Veritas-ID.Org</p>
            </div>
            <div>
                {currentUser ? <span>User: {currentUser}</span> : null}
                {currentUser !== null ? (
                    <span className="logout" onClick={handleLogout}>
                        Logout
                    </span>
                ) : (
                    <span className="login" onClick={() => navigate("/login")}>
                        Login
                    </span>
                )}
            </div>
        </div>
    );
};

export default Navbar;
