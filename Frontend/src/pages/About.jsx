import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io"; // Importing the down arrow icon
import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowRightLong , FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const AboutUs = () => {
  const images_customer = [
    "/customers1.jpg",
    "/customers2.jpg",
    "/customers3.jpg",
    "/customers4.jpg",
    "/customers5.jpg",
    "/customers6.jpg",
    "/customers7.jpg",
  ];
  const images_business = [
    "/business1.jpg",
    "/business2.jpg",
    "/business3.jpg",
    "/business4.jpg",
    "/business5.jpg",
    // "/business6.jpg",
    // "/business7.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentInd, setCurrentInd] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images_customer.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images_customer.length]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInd((prevIndex) => (prevIndex + 1) % images_business.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images_business.length]);

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="flex flex-col md:flex-row justify-between items-center w-full ">
        <h1 className="text-4xl font-bold text-purple-600 mb-6 md:mb-0 md:text-left">
          Where Businesses Shine and Customers Glow
        </h1>
        <h2 className="text-3xl font-semibold mb-6 md:mb-0 md:text-right">
          Welcome to the Future of Beauty & Wellness!
        </h2>
      </div>
      <img src="/about_img.jpg" alt="About Us" className="w-full max-w-3xl rounded-lg shadow-lg" />
      <p className="text-center text-xl max-w-2xl mb-6 mt-6">
        Connecting local businesses and professionals with their clients, making
        beauty & wellness experience effortless.
      </p>
      
      {/* Section for Customers */}
      <h3 className="text-2xl font-semibold text-center mb-4">Glow Inside, Shine Outside</h3>
      <p className="text-center text-lg mb-4">Nuza for Customers</p>
      <FaArrowCircleDown className="text-purple-600 text-center  text-2xl animate-bounce mb-4" />

      {/* Image Carousel */}
      <div className="relative w-full max-w-md mx-auto mb-6">
        <img
          src={images_customer[currentIndex]}
          alt={`Customer ${currentIndex + 1}`}
          className="w-full h-[400px] object-cover rounded-lg" // Fixed height for portrait orientation
        />
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images_customer.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-purple-600" : "bg-gray-300"}`}
            ></span>
          ))}
        </div>
      </div>

      {/* Section for Professionals */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 1 }}
        className="w-full"
      >
        <h3 className="text-2xl font-semibold text-left mb-4">Become the Go-To Choice</h3>
        <p className="text-left text-lg mb-4 flex items-center"> 
          Nuza for Professionals
          <FaArrowRightLong className="text-purple-600 text-2xl animate-bounce-right ml-2" />
        </p>
      </motion.div>
      {/* Section for Business */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 1 }}
        className="w-full"
      >
        <h3 className="text-2xl font-semibold text-right mb-4">Make your Business the Go-To Destination</h3>
        <p className="text-right text-lg mb-6 flex items-center justify-end"> 
          <FaArrowLeftLong className="text-purple-600 text-2xl animate-bounce-left mr-2" />
          Nuza for Business
        </p>
      </motion.div>
      
      

      {/* Image Carousel */}
      <div className="relative w-full max-w-md mx-auto mb-6">
        <img
          src={images_business[currentInd]}
          alt={`Customer ${currentInd + 1}`}
          className="w-full h-[400px] object-cover rounded-lg" // Fixed height for portrait orientation
        />
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images_business.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${currentInd === index ? "bg-purple-600" : "bg-gray-300"}`}
            ></span>
          ))}
        </div>
      </div>

      

      {/* Styled Section for Revolutionizing Industry */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white text-center py-6 px-4 rounded-lg shadow-lg w-full max-w-3xl mb-6">
        <h2 className="text-3xl font-bold">
          Join us, and let’s Revolutionize the Beauty & Wellness Industry
        </h2>
      </div>
      <h3 className="text-3xl font-bold mb-4">Be the first to experience Nuza</h3>
      <button className="text-xl font-medium text-white bg-purple-600 mb-2 rounded p-2 hover:bg-purple-700 transition-all">Join the waitlist →</button>        
      <div className="bg-white text-purple-600 p-8 rounded-lg shadow-xl text-center w-full max-w-lg mx-auto border border-purple-300">
        
        <p className="text-lg mb-4">We’re almost there! Get notified when Nuza goes live.</p>
        <p className="text-lg mb-6">Share your email to stay updated.</p>
        <div className="flex flex-col sm:flex-row gap-4">
            <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 text-gray-900 rounded-md border-2 border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-purple-700 transition-all">
            Submit
            </button>
        </div>
        </div>



    </div>
  );
};

export default AboutUs;