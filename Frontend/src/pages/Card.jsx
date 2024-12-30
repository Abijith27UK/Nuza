import React from "react";

const Card = ({ name, location, rating, img }) => {
    return (
        <div className="bg-white shadow rounded-lg overflow-hidden">
            <img src={img} alt={name} className="w-full h-32 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="text-gray-600">{location}</p>
                <p className="text-yellow-500">⭐ {rating}</p>
            </div>
        </div>
    );
};

export default Card;
