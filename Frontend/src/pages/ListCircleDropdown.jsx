import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHome, AiOutlinePhone } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import { IoListCircleOutline } from "react-icons/io5";

const ListCircleDropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };
    const handleHome = () => {
        navigate("/dashboard"); // Redirect to the HomePage route
    };
    const handlePayment = () => {
        console.log("Sign out clicked");
        navigate("/payment"); // Redirect to the PaymentPage route
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div ref={dropdownRef} className="relative">
            {/* Trigger Button */}
            <button
                onClick={toggleDropdown}
                className="text-white text-4xl transform hover:scale-110 transition-transform duration-200"
            >
                <IoListCircleOutline />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
                <div className="absolute top-16 left-0 bg-white shadow-lg rounded-lg py-2 w-48 z-50">
                    <button onClick={handleHome}    className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <AiOutlineHome className="text-indigo-600 text-lg mr-2" />
                        <span className="text-gray-700 font-medium hover:bg-gray-100">Home</span>
                    </button>
                    <button onClick={handlePayment}    className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <MdPayment className="text-indigo-600 text-lg mr-2" />
                        <span className="text-gray-700 font-medium">Pay Bill</span>
                    </button>
                    <button className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <AiOutlinePhone className="text-indigo-600 text-lg mr-2" />
                        <span className="text-gray-700 font-medium">Contact Us</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default ListCircleDropdown;
