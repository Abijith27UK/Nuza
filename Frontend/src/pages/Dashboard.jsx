import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoListCircleOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { PiLineVertical } from "react-icons/pi";
import { IoIosArrowDropright } from "react-icons/io";
import { FaFilter } from "react-icons/fa";

const Dashboard = () => {
    const navigate = useNavigate();
    const [location, setLocation] = useState("Fetching location...");
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
    const [add,setAdd] = useState('Has value');
    

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 170) {
    //             setIsScrolled(true); 
    //         } else {
    //             setIsScrolled(false); 
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    // useEffect(() => {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(
    //             (position) => {
    //                 const { latitude, longitude } = position.coords;
    //                 setLocation("Mogappair, Chennai"); // Placeholder location
    //             },
    //             () => setLocation("Unable to fetch location")
    //         );
    //     } else {
    //         setLocation("Geolocation not supported");
    //     }
    // }, []);
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(pos=>{
            const {latitude,longitude} = pos.coords;
            console.log(latitude,longitude)
            const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
            fetch(url).then(res=>res.json()).then(data=>{
                if (data && data.address) {
                    setLocation(data.address.county);
                    setAdd(data.address);
                    console.log("Address:", data.address);
                } else {
                    console.error("No address data found");
                }
            })
        })
    },[]);

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
        <div className="flex flex-col min-h-screen bg-gray-50">
            <nav className="bg-purple-950 shadow-lg">
            {/* Top Bar */}
            {!isScrolled && (<div className="flex justify-between items-center px-6 py-4">
                <button className="text-white text-4xl transform hover:scale-110 transition-transform duration-200">
                    <IoListCircleOutline />
                </button>
                <button className="text-white text-3xl transform hover:scale-110 transition-transform duration-200">
                    <CgProfile />
                </button>
            </div>)}

            {/* NUZA Branding */}
            {!isScrolled && (<div className="flex flex-col items-center text-center py-4">
                <h1 className="text-white text-5xl font-extrabold tracking-wider">
                    NUZA
                </h1>
                <p className="text-white text-lg font-medium mt-2">
                    Discover the best beauty and wellness services
                </p>
            </div>)}

            {/* Search and Location Section */}
            {!isScrolled && (
                <div className="flex justify-center w-full"> {/* Centering container */}
                    <div className="flex w-2/3 items-center px-6 py-4 gap-1">
                        {/* Search Bar Wrapper */}
                        <div className="relative flex-1 bg-white rounded-full border border-purple-300 flex items-center px-4 py-2">
                            {/* Location with Dropdown */}
                            <div className="flex items-center text-indigo-600 cursor-pointer">                            
                                <FiMapPin className="text-xl mr-2" />
                                <span className="text-sm font-medium">{location}</span>
                                <PiLineVertical className="ml-2 text-4xl text-indigo-600" />
                            </div>
                            {/* Search Input */}
                            <input
                                type="text"
                                placeholder="Search for services / venues / professionals"
                                className="w-full pl-4 pr-8 py-2 text-sm border-none focus:ring-0 focus:outline-none"
                                onClick={() => setIsDropdownOpen(false)}
                            />
                            {/* Search Icon inside the Input */}
                            <FiSearch className="absolute right-4 text-lg text-indigo-600 transform hover:scale-110 transition-transform duration-200" />
                        </div>

                        {/* Optional: Hamburger menu */}
                        <button className="text-white text-2xl ml-4">
                            <span className="inline-block transform"><FaFilter /></span>
                        </button>
                    </div>
                </div>
            )}
            {isScrolled && (
                <div className="bg-purple-950 shadow-lg fixed top-0 left-0 right-0 w-full flex justify-between items-center px-6 py-4 transition-all duration-300">
                    <button className="text-white text-4xl ">
                        <IoListCircleOutline />
                    </button>
                    <input
                        type="text"
                        placeholder="Search for services, venues, or professionals..."
                        className="w-1/2 px-4 py-2 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow"
                    />
                    
                    <button className="text-white text-4xl ">
                        <CgProfile />
                    </button>
                </div>
            )}
        </nav>

            <div className="flex justify-around m-8">
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

            {/* New to NUZA Section */}
            <section className="py-8 px-6">
                <h2 className="text-3xl font-bold text-purple-600 mb-6">New to NUZA</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {newToNuza.slice(0, 4).map((item) => (
                        <div key={item.id} className="bg-white shadow rounded-lg overflow-hidden">
                            <img src={item.img} alt={item.name} className="w-full h-32 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-bold">{item.name}</h3>
                                <p className="text-gray-600">{item.location}</p>
                                <p className="text-yellow-500">⭐ {item.rating}</p>
                            </div>
                        </div>
                    ))}
                    <div className="flex items-center justify-center bg-purple-100 text-purple-600 font-bold text-lg shadow rounded-lg cursor-pointer">
                        <Link to="/new-to-nuza" className="flex items-center gap-2 hover:animate-bounce">
                            See More
                            <IoIosArrowDropright />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Near You Section */}
            <section className="py-8 px-6">
                <h2 className="text-3xl font-bold text-purple-600 mb-6">Near You</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {nearYou.slice(0, 4).map((item) => (
                        <div key={item.id} className="bg-white shadow rounded-lg overflow-hidden">
                            <img src={item.img} alt={item.name} className="w-full h-32 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-bold">{item.name}</h3>
                                <p className="text-gray-600">{item.location}</p>
                                <p className="text-yellow-500">⭐ {item.rating}</p>
                            </div>
                        </div>
                    ))}
                    <div className="flex items-center justify-center bg-purple-100 text-purple-600 font-bold text-lg shadow rounded-lg cursor-pointer">
                        <Link to="/new-to-nuza" className="flex items-center gap-2 hover:animate-bounce">
                            See More
                            <IoIosArrowDropright />
                        </Link>
                    </div>
                </div>
            </section>

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
