import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RegisterPage from "./pages/RegisterPage";
import ManagePages from "./pages/managePage/ManagePages";
import HomePage from "./pages/homePage/HomePage";

function App() {
    return (
        <div className="app">
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/manage/:id" element={<ManagePages />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
