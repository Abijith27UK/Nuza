import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoListCircleOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { PiLineVertical } from "react-icons/pi";
import { IoIosArrowDropright } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import NearYou from "./nearYou";


const Dashboard = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);   

    // Offer data (without images)
    const offers = [
        {
            id: 1, title: "Flat 10% Off", description: "Avail flat 10% off on Naturals services.",
        },
        {
            id: 2, title: "₹100 Off on First Booking", description: "Get ₹100 off on your first booking at Green Trends.",
        },
        {
            id: 3, title: "20% Off", description: "Enjoy 20% off on Tony & Guy services.",
        },
        {
            id: 4, title: "Free Delivery", description: "Free delivery on all orders above ₹500.",
        },
        {
            id: 5, title: "Buy 1 Get 1 Free", description: "Get one free when you buy one service.",
        },
        {
            id: 6, title: "Free Haircut", description: "Get your first haircut for free from Tony & Guy.",
        },
    ];

    // Change slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % offers.length); // Loop through offers
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    }, [offers.length]);

    // Handle manual slide change
    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + offers.length) % offers.length); // Wrap around
    };

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % offers.length); // Wrap around
    };

    const handleSignOut = () => {
        localStorage.removeItem("token"); // Example for clearing token
        navigate("/"); // Redirect to login page
    };

    const handlePayBill = () => {
        navigate("/payment"); // Navigate to the payment page
    };

    return (
        <div className="flex flex-col  bg-gray-50">
            <div className="flex flex-col bg-gray-50">
            {/* Other sections */}
            <NearYou />
            </div>

            {/* Offers Section */}
            {/* Offers Section (Fixed 3 rectangles, only text changes) */}
                 <section className="py-8 px-6">
                 <h2 className="text-3xl font-bold text-purple-600 mb-6">Offers</h2>
                     
                     <div className="flex justify-evenly">
                         {/* Fixed 3 Rectangles */}
                         {offers.slice(currentSlide, currentSlide + 3).map((offer, index) => (
                             <div
                                 key={offer.id}
                                 className="bg-white shadow rounded-lg overflow-hidden w-1/3 h-32 flex-shrink-0"
                             >
                                 <div className="p-4">
                                     <h3 className="text-lg font-bold">{offer.title}</h3>
                                     <p className="text-gray-600">{offer.description}</p>
                                 </div>
                             </div>
                         ))}
                     </div>

                     {/* Navigation Arrows */}
                     <div className="flex justify-center mt-4">
                         <button
                             className="bg-gray-800 text-white p-2 rounded-full mr-4"
                             onClick={handlePrevSlide}
                         >
                             &#8592;
                         </button>
                         <button
                            className="bg-gray-800 text-white p-2 rounded-full"
                             onClick={handleNextSlide}
                         >
                             &#8594;
                         </button>
                     </div>
                     {/* Pagination Dots
                     <div className="absolute bottom left-1/2 transform -translate-x-1/2 flex space-x-2">
                         {offers.map((_, index) => (
                             <span
                                 key={index}
                                 className={`h-2 w-2 rounded-full ${currentSlide === index ? "bg-blue-500" : "bg-gray-400"}`}
                             ></span>
                         ))}
                     </div> */}
                </section>

        </div>
    );
};

export default Dashboard;
