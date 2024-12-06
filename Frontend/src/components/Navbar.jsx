import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">NUZA</h1>
                <div className="space-x-4">
                    <Link to="/" className="hover:underline">Login</Link>
                    <Link to="/signup" className="hover:underline">Sign Up</Link>
                    <Link to="/dashboard" className="hover:underline">Dashboard</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
