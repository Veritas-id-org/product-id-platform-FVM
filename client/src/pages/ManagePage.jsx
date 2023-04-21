import React, { useState } from "react";
import "./ManagePage.style.scss";
import axios from "axios";
import { Web3Storage, getFilesFromPath, File } from "web3.storage";
import { useParams } from "react-router-dom";

const ManagePage = () => {
    const [inputs, setInputs] = useState({
        business_name: "",
        address: "",
        website: "",
    });

    const [showContent, setShowContent] = useState({
        accountContent: true,
        productContent: false,
        reportContent: false,
    });
    // const [selectedOption, setSelectedOption] = useState("");
    const { content } = useParams();
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/posts/submitbusinessdetail", inputs);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };
    const handleChange = (e) => {
        console.log(e);
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const ManageAccountContent = () => {
        return (
            <div className="managePage-content-bottom">
                <span>Business Details</span>
                <hr style={{ margin: "10px auto" }} />

                <div className="managePage-content">
                    <div className="managePage-content-input">
                        <div className="managePage-content-label">Name</div>
                        <input type="text" onChange={handleChange} name="business_name"></input>
                    </div>
                    <div className="managePage-content-input">
                        <div className="managePage-content-label">Address</div>
                        <input type="text" onChange={handleChange} name="address"></input>
                    </div>
                    <div className="managePage-content-input">
                        <div className="managePage-content-label">Website</div>
                        <input type="text" onChange={handleChange} name="website"></input>
                    </div>
                    <div>
                        <div onTouchStart={""} className="managePage-btns" onClick={handleRegister}>
                            <a href="">
                                <span>Register</span>
                            </a>
                        </div>
                        <div onTouchStart={""} className="managePage-btns">
                            <a href="/">
                                <span>Update Details</span>
                            </a>
                        </div>
                    </div>
                </div>

                <span>Brand Details</span>
                <hr style={{ margin: "10px auto" }} />
                <div className="managePage-content">
                    <div className="managePage-content-input">
                        <div className="managePage-content-label">Name</div>
                        <input type="text"></input>
                    </div>
                    <div className="managePage-content-input">
                        <div className="managePage-content-label">Category</div>
                        <select></select>
                    </div>
                    <div>
                        <div onTouchStart={""} className="managePage-btns">
                            <a href="/">
                                <span>ADD/REMOVE</span>
                            </a>
                        </div>
                        <div onTouchStart={""} className="managePage-btns">
                            <a href="/">
                                <span>Update Details</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    // const handleOptionChange = (e) => {
    //     setProductInput({ selectedOption: e.targe.value });
    // };
    const ManageProductContent = () => {
        const [productInput, setProductInput] = useState({
            selectedOption: "",
            category: "",
            batchNo: "",
            refNo: "",
            additionalInfo: "",
        });
        const handleProductChange = (e) => {
            setProductInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        };

        async function getFiles(path) {
            const files = await getFilesFromPath(path);
            console.log(`read ${files.length} file(s) from ${path}`);
            return files;
        }
        function makeFileObjects() {
            // You can create File objects from a Buffer of binary data
            // see: https://nodejs.org/api/buffer.html
            // Here we're just storing a JSON object, but you can store images,
            // audio, or whatever you want!
            const obj = { hello: "world" };
            const buffer = Buffer.from(JSON.stringify(obj));

            const files = [new File(["contents-of-file-1"], "plain-utf8.txt"), new File([buffer], "hello.json")];
            return files;
        }

        function makeStorageClient() {
            return new Web3Storage({
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDI2MDMyNTM0RWM1NDgwRjI0NDI5OTc0NDI1OTk2YTFlMWM1NTA0QzUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODEyODY2NDg3MDUsIm5hbWUiOiJ0ZXN0MSJ9.nJyjY_5U2u6swnMBic7odQ3UXais4AhSwtCixORul5A",
            });
        }

        async function storeFiles() {
            const client = makeStorageClient();
            try {
                let file = makeFileObjects();
                const cid = await client.put(file);
                console.log("stored files with cid:", cid);
                return cid;
            } catch (error) {
                return error;
            }
        }
        return (
            <div className="managePage-content-bottom">
                <span>Product Details</span>
                <hr style={{ margin: "10px auto" }} />

                <div className="managePage-content">
                    <div className="managePage-content-input">
                        <div className="managePage-content-label">Brand</div>
                        <select value={inputs.selectedOption}>
                            <option value={"H&M"}>H&M</option>
                            <option value={"Gucci"}>Gucci</option>
                            <option value={"Burberry"}>Burberry</option>
                        </select>
                    </div>
                    <div className="managePage-content-input">
                        <div className="managePage-content-label">Category</div>
                        <input type="text" onChange={handleProductChange} name="product_category"></input>
                    </div>
                    <div className="managePage-content-input">
                        <div className="managePage-content-label">Batch No.</div>
                        <input type="text" onChange={handleProductChange} name="batchNo"></input>
                    </div>
                    <div className="managePage-content-input">
                        <div className="managePage-content-label">Ref No.</div>
                        <input type="text" onChange={handleProductChange} name="refNo"></input>
                    </div>
                    <span>Additional Information</span>
                    <textarea className="managePage-textarea"></textarea>
                    <div>
                        <div onTouchStart={""} className="managePage-btns" onClick={storeFiles}>
                            <a href="">
                                <span>ADD/REMOVE</span>
                            </a>
                        </div>
                        <div onTouchStart={""} className="managePage-btns">
                            <a href="/">
                                <span>Update Details</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    const handleAccountClick = () => {
        setShowContent({ accountContent: true, productContent: false, reportContent: false });
    };
    const handleProductClick = () => {
        setShowContent({ accountContent: false, productContent: true, reportContent: false });
    };
    const handleReportClick = () => {
        setShowContent({ accountContent: false, productContent: false, reportContent: true });
    };

    return (
        <div className="managePage-container">
            <div className="managePage-wrapper">
                <div className="managePage-btns-wrapper">
                    <div onTouchStart={""} className="managePage-btns" onClick={handleAccountClick}>
                        <a>
                            <span>Manage Account</span>
                        </a>
                    </div>
                    <div onTouchStart={""} className="managePage-btns" onClick={handleProductClick}>
                        <a>
                            <span>Manage Products</span>
                        </a>
                    </div>
                    <div onTouchStart={""} className="managePage-btns" onClick={handleReportClick}>
                        <a>
                            <span>View Reports</span>
                        </a>
                    </div>
                </div>
                <div className="managePage-content-wrapper">
                    <div className="managePage-content-top">asdad</div>
                    {/* {showContent.accountContent ? <ManageAccountContent /> : null}
                    {showContent.productContent ? <ManageProductContent /> : null} */}
                    {content}
                </div>
            </div>
        </div>
    );
};

export default ManagePage;
