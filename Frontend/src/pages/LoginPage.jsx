import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";

const LoginPage = () => {
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handlePhoneLogin = async (e) => {
        e.preventDefault();
        try {
            // Mock phone login request (Replace with real API call)
            await axios.post("http://localhost:5000/api/auth/phone-login", { phone });
            alert("OTP sent to your phone!");
        } catch (err) {
            setError(err.response?.data?.error || "Phone login failed");
        }
    };

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
        } catch (err) {
            setError(err.response?.data?.error || "Email login failed");
        }
    };

    const handleGoogleLogin = async () => {
        try {
            // Google authentication logic (mocked here)
            alert("Google login initiated!");
        } catch (err) {
            setError("Google login failed");
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6">Log In to NUZA</h1>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                {/* Phone Login */}
                <form onSubmit={handlePhoneLogin} className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                    <div className="flex">
                        <select className="border rounded-l-lg px-2 bg-gray-50">
                            <option value="+91">+91</option>
                            <option value="+1">+1</option>
                        </select>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter your phone number"
                            className="flex-1 p-3 border rounded-r-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Continue
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center justify-center mb-6">
                    <hr className="border-gray-300 flex-1" />
                    <span className="px-4 text-gray-500">or</span>
                    <hr className="border-gray-300 flex-1" />
                </div>

                {/* Email Login */}
                <form onSubmit={handleEmailLogin} className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 mb-4"
                    />
                    <label className="block text-gray-700 font-semibold mb-2">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 mb-4"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 7.5v9.75a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V7.5m19.5 0L12 13.5 2.25 7.5m19.5 0L12 3 2.25 7.5"
                            />
                        </svg>
                        Sign In with Email
                    </button>
                </form>

                {/* Google Login */}
                <button
                    onClick={handleGoogleLogin}
                    className="w-full bg-red-500 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-red-600 transition"
                >
                    <FaGoogle className="w-5 h-5" />
                    Continue with Google
                </button>

                {/* Sign Up Link */}
                <p className="text-center text-gray-600 mt-4">
                    New to Nuza?{" "}
                    <a href="/signup" className="text-blue-500 hover:underline">
                        Create an account
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
