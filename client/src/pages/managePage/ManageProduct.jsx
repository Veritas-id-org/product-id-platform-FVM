import React, { useState } from "react";

const ManageProduct = (props) => {
    const [input, setInputs] = useState({
        category: "",
        batchNo: "",
        RefNo: "",
        textInput: "",
        selectedValue: "Gucci",
    });
    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleAdd = () => {
        try {
            let file = props.makeFile(input);
            props.storeFile(file);
            alert("Files are stored successfully!");
        } catch (error) {
            alert("Failed to store files, please try again.");
        }
    };
    return (
        <>
            <span>Product Details</span>
            <hr style={{ margin: "10px auto" }} />
            <div className="ManagePages-card-right-content">
                <div className="ManagePages-card-right-content-title">Brand</div>
                <select onChange={handleChange} name="selectedValue">
                    <option value={"Gucci"}>Gucci</option>
                    <option value={"LV"}>LV</option>
                    <option value={"Prada"}>Prada</option>
                    <option value={"Burberry"}>Burberry</option>
                </select>
            </div>
            <div className="ManagePages-card-right-content">
                <div className="ManagePages-card-right-content-title">Category</div>
                <input type="text" onChange={handleChange} name="category" />
            </div>
            <div className="ManagePages-card-right-content">
                <div className="ManagePages-card-right-content-title">Batch No.</div>
                <input type="text" onChange={handleChange} name="batchNo" />
            </div>
            <div className="ManagePages-card-right-content">
                <div className="ManagePages-card-right-content-title">Ref No.</div>
                <input type="text" onChange={handleChange} name="RefNo" />
            </div>
            <div className="ManagePages-card-right-content textInput">
                <span>Additional Information</span>
                <textarea onChange={handleChange} name="textInput"></textarea>
            </div>
            <div>
                <button className="ManagePages-btn right" onClick={handleAdd}>
                    Add/Remove
                </button>
                <button className="ManagePages-btn right" style={{ marginLeft: "20px" }}>
                    Update
                </button>
            </div>
        </>
    );
};

export default ManageProduct;
