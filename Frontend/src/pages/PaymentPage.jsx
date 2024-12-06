import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";

const PaymentPage = () => {
    const [amount, setAmount] = useState(239);

    const handlePayment = () => {
        console.log("Processing Payment");
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Your Bill</h2>
                <div className="border-b pb-4 mb-4">
                    <p className="text-gray-700 mb-2">Bill Amount: ₹265</p>
                    <p className="text-gray-700 mb-2">Discount: ₹26</p>
                    <p className="text-gray-800 font-semibold">
                        Total Payable: <span className="text-green-500">₹{amount}</span>
                    </p>
                </div>

                <h3 className="text-xl font-bold mb-4">Select Payment Option</h3>
                <div className="space-y-4">
                    <button
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                        onClick={handlePayment}
                    >
                        Pay with Card
                    </button>
                    <button
                        className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
                        onClick={handlePayment}
                    >   
                        Pay with UPI
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
