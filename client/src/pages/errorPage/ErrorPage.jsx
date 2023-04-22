import React from "react";
import "./errorpage.style.scss";

const ErrorPage = () => {
    return (
        <div className="errorpage-container">
            <div className="errorpage-content">
                <h1>404 - Page Not Found</h1>
                <img src="/img/ErrorImg.svg" alt="errorImg" />
            </div>
        </div>
    );
};

export default ErrorPage;
