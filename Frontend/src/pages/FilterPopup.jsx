import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation

const FilterPopup = ({ isOpen, onClose }) => {
    const [minValue, setMinValue] = useState("");
    const [maxValue, setMaxValue] = useState("");
    const location = useLocation(); // Get the current location

    // Prevent scrolling when the popup is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Reset the overflow style when the page changes
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen, location]); // Depend on isOpen and location

    return isOpen ? (
        <div
            id="popup-overlay"
            onClick={(e) => {
                if (e.target.id === "popup-overlay") onClose();
            }}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
            <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 p-6 rounded-lg shadow-lg relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    &#10005; {/* Close Icon */}
                </button>

                {/* Popup Content */}
                <h3 className="text-lg font-bold mb-4">Sort / Filter by</h3>

                {/* Sorting Options */}
                <div className="mb-6">
                    <label className="block mb-2">
                        <Link to="/near-you">
                            <input type="radio" name="sort" className="mr-2" /> Nearest
                        </Link>
                    </label>
                    <label className="block mb-2">
                        <Link to="/offers">
                            <input type="radio" name="sort" className="mr-2" /> Special Offers
                        </Link>
                    </label>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                    <p className="font-semibold mb-2">Price range</p>
                    <div className="flex items-center gap-4">
                        <input
                            type="text"
                            placeholder="Minimum"
                            value={minValue}
                            onChange={(e) => setMinValue(e.target.value)}
                            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                        <span className="text-gray-500">-</span>
                        <input
                            type="text"
                            placeholder="Maximum"
                            value={maxValue}
                            onChange={(e) => setMaxValue(e.target.value)}
                            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>
                </div>

                {/* Business Type */}
                <div>
                    <p className="font-semibold mb-2">Business type</p>
                    <label className="block mb-2">
                        <input type="radio" name="business" className="mr-2" /> Venues
                    </label>
                    <label className="block">
                        <input type="radio" name="business" className="mr-2" /> Professionals
                    </label>
                </div>
            </div>
        </div>
    ) : null;
};

export default FilterPopup;
