import React, { useState } from "react";
import axios from "axios";

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dob: "",
        gender: "male",  // Default gender set to male
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        try {
            await axios.post("http://localhost:5000/api/auth/signup", formData);
            setSuccess("Sign-up successful! You can now log in.");
        } catch (err) {
            setError(err.response?.data?.error || "Sign-up failed");
        }
    };

    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-r from-gray-100 to-gray-200">
            <form
                className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                {success && <p className="text-green-500 mb-4">{success}</p>}

                {/* First Name and Last Name */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <input
                        type="text"
                        name="firstName"
                        className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                    />
                    <input
                        type="text"
                        name="lastName"
                        className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                    />
                </div>

                {/* Phone Number with Country Code */}
                <div className="flex mb-4">
                    <select
                        name="countryCode"
                        className="border p-3 rounded-l-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="+91">+91</option>
                        <option value="+1">+1</option>
                    </select>
                    <input
                        type="text"
                        name="phone"
                        className="flex-1 p-3 border rounded-r-lg focus:ring-2 focus:ring-blue-500"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                    />
                </div>

                {/* Date of Birth */}
                <div className="mb-4">
                    <label htmlFor="dob" className="block text-gray-700 font-semibold">Date of Birth</label>
                    <input
                        type="date"
                        name="dob"
                        id="dob"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        value={formData.dob}
                        onChange={handleChange}
                    />
                </div>

                {/* Gender Selection Dropdown */}
                <div className="mb-4">
                    <label htmlFor="gender" className="block text-gray-700 font-semibold">Gender</label>
                    <select
                        id="gender"
                        name="gender"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        value={formData.gender}
                        onChange={handleChange}
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                {/* Email */}
                <div className="mb-4">
                    <input
                        type="email"
                        name="email"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <input
                        type="password"
                        name="password"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                </div>

                {/* Confirm Password */}
                <div className="mb-6">
                    <input
                        type="password"
                        name="confirmPassword"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Sign Up
                </button>

                {/* Sign In Link */}
                <p className="text-center text-gray-600 mt-4">
                    Already have an account?{" "}
                    <a href="/" className="text-blue-500 hover:underline">
                        Sign In
                    </a>
                </p>
            </form>
        </div>
    );
};

export default SignUpPage;
