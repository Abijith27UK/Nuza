import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";
import Card from "./Card";

const NearYou = () => {
    const nearYouData = [
        { id: 1, name: "Naturals", location: "Mogappair East, Chennai", rating: 4.8, img: "https://images.fresha.com/locations/location-profile-images/513810/544372/3d37347d-902c-4924-be13-cdf159790d4b.jpg?class=venue-gallery-large" },
        { id: 2, name: "Green Trends", location: "Mogappair West, Chennai", rating: 4.8, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR76mDkPs5cac2LUxd7yBrBuUh7PlntRBMvPQ&s" },
        { id: 3, name: "Beauty Studio", location: "Avadi, Chennai", rating: 4.6, img: "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/651bca94cc1be2c89a9ac676_7IgZQabxQPauVWEidb62.png" },
        { id: 4, name: "Elite Salon", location: "Tambaram, Chennai", rating: 4.5, img: "https://static.wixstatic.com/media/00f32e_56c5f7d759464abca9dffddf11132ee3~mv2.png/v1/fill/w_640,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/00f32e_56c5f7d759464abca9dffddf11132ee3~mv2.png" },
        ];

    return (
        <section className="py-8 px-6">
            <h2 className="text-3xl font-bold text-purple-600 mb-6">Near You</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {nearYouData.slice(0, 4).map((item) => (
                    <Card key={item.id} {...item} />
                ))}
                {/* Show More Box */}
                <div className="flex items-center justify-center bg-purple-100 text-purple-600 font-bold text-lg shadow rounded-lg cursor-pointer">
                    <Link to="/near-you" className="flex items-center gap-2 hover:animate-bounce">
                        See More
                        <IoIosArrowDropright />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NearYou;
