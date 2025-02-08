import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Dashboard from "./pages/Dashboard";
import PaymentPage from "./pages/PaymentPage";
import TopNavBar from "./pages/TopNavbar";
import Categories from "./pages/Categories";
import NearNuzaPage from "./pages/NearNuzaPage";
import About from "./pages/About";


const App = () => {
    const location = useLocation();
    // Define routes where Navbar should NOT appear
    const noNavbarRoutes = ["/dashboard", "/payment","/near-you"];    

    return (
        <>
            {/* Render Navbar only if the current route is NOT in noNavbarRoutes */}
            {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
            <Routes>
            <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/about" element={<About />} />
                <Route 
                    path="/dashboard" 
                    element={
                        <>
                            <TopNavBar />
                            <Categories />
                            <Dashboard />
                        </>
                    } 
                />
                <Route path="/payment" element={
                    <>
                    <TopNavBar />
                    <Categories />
                    <PaymentPage />
                    </>                    
                    } 
                />
                <Route path="/near-you" element={
                    <>
                    <TopNavBar />
                    <Categories />
                    <NearNuzaPage />
                    </>
                    } 
                />
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
