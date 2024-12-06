import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiHome, FiStar, FiGift, FiMapPin, FiCreditCard, FiUser } from "react-icons/fi";


const Dashboard = () => {
    const navigate = useNavigate();
    const [location, setLocation] = useState("Fetching location...");
    const [currentSlide, setCurrentSlide] = useState(0);
    // Fetch live location
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    // Replace with a reverse geocoding API for a readable location
                    setLocation("Mogappair, Chennai"); // Placeholder location
                },
                () => setLocation("Unable to fetch location")
            );
        } else {
            setLocation("Geolocation not supported");
        }
    }, []);

    const categories = [
        { name: "Explore", icon: "🌍" },
        { name: "Hairstyling", icon: "💇" },
        { name: "Facial", icon: "🧖" },
        { name: "Nails", icon: "💅" },
        { name: "Haircut", icon: "✂️" },
        { name: "Skincare", icon: "🧴" },
        { name: "Makeup", icon: "💄" },
        { name: "Eyebrows", icon: "👁️" },
    ];

    const recommended = [
        { id: 1, name: "Naturals", location: "Mogappair East, Chennai", rating: 4.9, img: "https://images.fresha.com/locations/location-profile-images/513810/544372/3d37347d-902c-4924-be13-cdf159790d4b.jpg?class=venue-gallery-large" },
        { id: 2, name: "Toni & Guy", location: "Anna Nagar, Chennai", rating: 4.9, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFRt7qtg5SiK7htovvEcoBj1i4GvkMG9KHXQ&s" },
        { id: 3, name: "Green Trends", location: "Mogappair West, Chennai", rating: 4.8, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR76mDkPs5cac2LUxd7yBrBuUh7PlntRBMvPQ&s" },
        { id: 4, name: "Femina", location: "Anna Nagar, Chennai", rating: 4.8, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiCe24WsV6zmfpxcAJDXbSUgrxCwEEjzSbXA&s" },
    ];

    const newToNuza = [
        { id: 1, name: "Elite Salon", location: "Tambaram, Chennai", rating: 4.5, img: "https://static.wixstatic.com/media/00f32e_56c5f7d759464abca9dffddf11132ee3~mv2.png/v1/fill/w_640,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/00f32e_56c5f7d759464abca9dffddf11132ee3~mv2.png" },
        { id: 2, name: "Prestige Salon", location: "T. Nagar, Chennai", rating: 4.6, img: "https://trafft.com/wp-content/uploads/2021/03/prestige.jpg" },
        { id: 3, name: "Salon Luxe", location: "Velachery, Chennai", rating: 4.5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1JzYWLJWMWQArADD-EX_K0HLNvEn2NnGuYQ&s" },
        { id: 4, name: "Urban Spa", location: "Kodambakkam, Chennai", rating: 4.7, img: "https://i0.wp.com/rj-design-studio.co.uk/wp-content/uploads/2021/10/Urban-Hair-and-Beauty-Salon-2021-01.jpg?fit=2522%2C1688&ssl=1" },
    ];

    const nearYou = [
        { id: 1, name: "Naturals", location: "Mogappair East, Chennai", rating: 4.8, img: "https://images.fresha.com/locations/location-profile-images/513810/544372/3d37347d-902c-4924-be13-cdf159790d4b.jpg?class=venue-gallery-large" },
        { id: 2, name: "Green Trends", location: "Mogappair West, Chennai", rating: 4.8, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR76mDkPs5cac2LUxd7yBrBuUh7PlntRBMvPQ&s" },
        { id: 3, name: "Beauty Studio", location: "Avadi, Chennai", rating: 4.6, img: "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/651bca94cc1be2c89a9ac676_7IgZQabxQPauVWEidb62.png" },
        { id: 4, name: "Elite Salon", location: "Tambaram, Chennai", rating: 4.5, img: "https://static.wixstatic.com/media/00f32e_56c5f7d759464abca9dffddf11132ee3~mv2.png/v1/fill/w_640,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/00f32e_56c5f7d759464abca9dffddf11132ee3~mv2.png" },
    ];

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
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-1/6 bg-gray-800 text-white p-6 fixed top-0 left-0 h-screen flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-bold mb-6">NUZA</h2>
                    <ul className="space-y-4">
                        <li>
                            <Link to="/dashboard" className="flex items-center py-2 px-4 rounded hover:bg-gray-700">
                                <FiHome className="mr-3" /> Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/recommended" className="flex items-center py-2 px-4 rounded hover:bg-gray-700">
                                <FiStar className="mr-3" /> Recommended
                            </Link>
                        </li>
                        <li>
                            <Link to="/new-to-nuza" className="flex items-center py-2 px-4 rounded hover:bg-gray-700">
                                <FiUser className="mr-3" /> New to NUZA
                            </Link>
                        </li>
                        <li>
                            <Link to="/offers" className="flex items-center py-2 px-4 rounded hover:bg-gray-700">
                                <FiGift className="mr-3" /> Offers
                            </Link>
                        </li>
                        <li>
                            <Link to="/near-you" className="flex items-center py-2 px-4 rounded hover:bg-gray-700">
                                <FiMapPin className="mr-3" /> Near You
                            </Link>
                        </li>
                        <li>
                            <Link to="/payment" className="flex items-center py-2 px-4 rounded hover:bg-gray-700">
                                <FiCreditCard className="mr-3" /> Payment
                            </Link>
                        </li>
                    </ul>
                </div>
                <button
                    onClick={handleSignOut}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition flex items-center justify-center"
                >
                    Sign Out
                </button>
            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-gray-100 p-6 ml-[16.66%]">
                {/* Top Section */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center text-gray-700">
                        <FiMapPin className="text-indigo-500 mr-2" />
                        <span>{location}</span>
                    </div>
                    <div className="flex-1 mx-8">
                        <input
                            type="text"
                            placeholder="Search for services, venues, or professionals..."
                            className="w-full p-3 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <button
                        onClick={handlePayBill}
                        className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition"
                    >
                        Pay Bill
                    </button>
                </div>

                {/* Circular Buttons */}
                <div className="flex justify-around mb-8">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center cursor-pointer"
                        >
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-2">
                                <span className="text-2xl">{category.icon}</span>
                            </div>
                            <p className="text-gray-700 font-semibold">{category.name}</p>
                        </div>
                    ))}
                </div>

                {/* Recommended Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Recommended</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {recommended.map((item) => (
                            <div key={item.id} className="bg-white shadow rounded-lg overflow-hidden">
                                <img src={item.img} alt={item.name} className="w-full h-32 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-gray-600 flex items-center">
                                        <FiMapPin className="text-indigo-500 mr-2" />
                                        {item.location}
                                    </p>
                                    <p className="text-yellow-500">⭐ {item.rating}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* New to NUZA Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">New to NUZA</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {newToNuza.map((item) => (
                            <div key={item.id} className="bg-white shadow rounded-lg overflow-hidden">
                                <img src={item.img} alt={item.name} className="w-full h-32 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-gray-600 flex items-center">
                                        <FiMapPin className="text-indigo-500 mr-2" />
                                        {item.location}
                                    </p>
                                    <p className="text-yellow-500">⭐ {item.rating}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                

                {/* Offers Section */}
                {/* Offers Section (Fixed 3 rectangles, only text changes) */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Offers</h2>
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



                {/* Near You Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Near You</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {nearYou.map((item) => (
                            <div key={item.id} className="bg-white shadow rounded-lg overflow-hidden">
                                <img src={item.img} alt={item.name} className="w-full h-32 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-gray-600 flex items-center">
                                        <FiMapPin className="text-indigo-500 mr-2" />
                                        {item.location}
                                    </p>
                                    <p className="text-yellow-500">⭐ {item.rating}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;
