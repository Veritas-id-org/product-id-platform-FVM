import React from "react";

const ViewReports = () => {
    return (
        <>
            <span>Reports</span>
            <hr style={{ margin: "10px auto" }} />
            <div className="ManagePages-card-right-viewreport">
                <div className="ManagePages-card-right-content">
                    <div className="ManagePages-card-right-content-title" style={{ width: "4rem" }}>
                        Brand
                    </div>
                    <select name="selectedValue" style={{ width: "10rem" }}>
                        <option value={"Gucci"}>Gucci</option>
                        <option value={"LV"}>LV</option>
                        <option value={"Prada"}>Prada</option>
                        <option value={"Burberry"}>Burberry</option>
                    </select>
                </div>
                <div className="ManagePages-card-right-content">
                    <div
                        className="ManagePages-card-right-content-title"
                        style={{ width: "4rem", marginRight: "1rem" }}
                    >
                        Product
                    </div>
                    <select name="selectedValue" style={{ width: "10rem" }}>
                        <option value={"Gucci"}>Gucci</option>
                        <option value={"LV"}>LV</option>
                        <option value={"Prada"}>Prada</option>
                        <option value={"Burberry"}>Burberry</option>
                    </select>
                </div>
            </div>
            <div className="ManagePages-card-right-report"></div>
            <div>
                <button className="ManagePages-btn right">View Reports</button>
            </div>
        </>
    );
};

export default ViewReports;
