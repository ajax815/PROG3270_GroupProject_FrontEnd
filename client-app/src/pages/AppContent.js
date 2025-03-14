// AppContent.js
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import About from "../components/About";
import Login from "../components/Login";
import Products from "../components/Products";
import Navbar from "../components/Navbar";

function AppContent() {
    const location = useLocation();
    const isLoginPage = location.pathname === "/";

    return (
        <main>
            {/* If not on the login page, show Navbar */}
            {!isLoginPage && <Navbar />}

            {/* Routes */}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </main>
    );
}

export default AppContent;
