import React from 'react';

const BillingInfo = ({ formData, handleChange, handleSubmit }) => {
    return (
        <div className="max-w-lg mx-auto mt-10">
            <h2 className="text-3xl font-bold mb-8 text-center">Update Billing Information</h2>
            <div className="space-y-4">
                {/* Credit Card Information */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name on Card</label>
                    <input
                        type="text"
                        name="nameOnCard"
                        value={formData.nameOnCard}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:ring-purple-600 focus:border-purple-600"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Card Number</label>
                    <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="1234 5678 9012 3456"
                        className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:ring-purple-600 focus:border-purple-600"
                        required
                        maxLength="16"
                    />
                </div>
                <div className="flex space-x-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                        <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleChange}
                            placeholder="MM/YY"
                            className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:ring-purple-600 focus:border-purple-600"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">CVV</label>
                        <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            placeholder="123"
                            className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:ring-purple-600 focus:border-purple-600"
                            required
                            maxLength="3"
                        />
                    </div>
                </div>
                {/* Billing Address */}
                <div className="mt-6">
                    <h3 className="text-lg font-medium mb-4">Billing Address</h3>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Street Address</label>
                        <input
                            type="text"
                            name="streetAddress"
                            value={formData.streetAddress}
                            onChange={handleChange}
                            placeholder="123 Main St"
                            className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:ring-purple-600 focus:border-purple-600"
                            required
                        />
                    </div>
                    <div className="flex space-x-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="City"
                                className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:ring-purple-600 focus:border-purple-600"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">State</label>
                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                placeholder="State"
                                className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:ring-purple-600 focus:border-purple-600"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Postal Code</label>
                            <input
                                type="text"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleChange}
                                placeholder="Postal Code"
                                className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:ring-purple-600 focus:border-purple-600"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Country</label>
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                placeholder="Country"
                                className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:ring-purple-600 focus:border-purple-600"
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
                        onClick={handleSubmit} // Call handleSubmit when clicked
                    >
                        Update Billing Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BillingInfo;
