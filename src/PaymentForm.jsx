import React, { useState } from 'react';
import 'animate.css';
import { useNavigate } from 'react-router-dom';

const PaymentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        pincode: '',
        amount: ''
    });
    const [isPaymentStep, setIsPaymentStep] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleContinue = () => {
        setIsPaymentStep(true);
    };

    const handlePayment = () => {
        alert(`Payment of ${formData.amount} initiated for ${formData.name}`);
        // Implement actual payment logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 py-6">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md animate__animated animate__fadeInUp">
                {!isPaymentStep ? (
                    <>
                        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Complete Your Payment</h2>
                        <div className="space-y-4">
                            <div className="flex flex-col">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="address">Address</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter your address"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="pincode">Pincode</label>
                                <input
                                    type="text"
                                    id="pincode"
                                    name="pincode"
                                    value={formData.pincode}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter your pincode"
                                />
                            </div>
                            <button
                                onClick={handleContinue}
                                className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline animate__animated animate__pulse"
                            >
                                Continue
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Enter Payment Amount</h2>
                        <div className="space-y-4">
                            <div className="flex flex-col animate__animated animate__fadeInDown">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="amount">Amount</label>
                                <input
                                    type="number"
                                    id="amount"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter the amount"
                                />
                            </div>
                            <button
                                onClick={handlePayment}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline animate__animated animate__fadeInUp"
                            >
                                Make Payment
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default PaymentForm;
