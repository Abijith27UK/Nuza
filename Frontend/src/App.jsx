import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Dashboard from "./pages/Dashboard";
import PaymentPage from "./pages/PaymentPage";

const App = () => {
    const location = useLocation();

    // Define routes where Navbar should NOT appear
    const noNavbarRoutes = ["/dashboard"];

    return (
        <>
            {/* Render Navbar only if the current route is NOT in noNavbarRoutes */}
            {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/payment" element={<PaymentPage />} />
            </Routes>
            <Footer />
            
        </>
    );
};

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
