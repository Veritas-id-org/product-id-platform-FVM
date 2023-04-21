import React from "react";
import "./startbutton.style.scss";
import { useNavigate } from "react-router-dom";

const StartButton = () => {
    const navigate = useNavigate();
    return (
        <button className="startbutton" onClick={() => navigate("/login")}>
            Start
        </button>
    );
};

export default StartButton;
