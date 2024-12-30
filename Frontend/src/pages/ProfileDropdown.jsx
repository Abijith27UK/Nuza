import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

const ProfileDropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const handleSignOut = () => {
        console.log("Sign out clicked");
        navigate("/"); // Redirect to the LoginPage route
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
                className="text-white text-3xl transform hover:scale-110 transition-transform duration-200"
            >
                <CgProfile />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
                <div className="absolute top-16 right-0 bg-white shadow-lg rounded-lg py-2 w-48 z-50">
                    <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <AiOutlineUser className="text-indigo-600 text-lg mr-2" />
                        <span className="text-gray-700 font-medium">Account</span>
                    </div>
                    <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <AiOutlineHeart className="text-indigo-600 text-lg mr-2" />
                        <span className="text-gray-700 font-medium">Wishlist</span>
                    </div>
                    <button
                        onClick={handleSignOut}
                        className="flex items-center w-full px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                        <FiLogOut className="text-red-600 text-lg mr-2" />
                        <span className="text-red-600 font-medium">Sign Out</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;
