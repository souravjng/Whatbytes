import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMoneyBillWave, FaSave } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";

const Wallet = () => {
  const [upiId, setUpiId] = useState("");
  const [savedUpi, setSavedUpi] = useState("");
  const [messages, setMessages] = useState([
    "You earned ₹100 for resolving a complaint.",
    "You earned ₹700 from a verified report!",
    "You earned ₹200 for contributing to feedback.",
  ]);

  const totalEarned = 900; 

  const handleSaveUpi = () => {
    setSavedUpi(upiId);
  };

  return (
    <motion.div
      className="p-6 bg-white rounded-2xl shadow-md w-full max-w-7xl mx-auto mt-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
        
      {/* Total Earned Display (Left Aligned) */}
      <div className="mb-6 flex justify-start">
        <h2 className="text-6xl font-bold text-green-600 flex items-center justify-center gap-2">
          <FaMoneyBillWave className="text-5xl" />
          ₹{totalEarned} earned till now
        </h2>
      </div>
      {/* UPI ID Input Section */}
      <div className="p-5 bg-blue-50 rounded-xl mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Your UPI ID</h3>
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="flex items-center w-full md:w-2/3">
            <MdOutlinePayment className="text-2xl text-blue-600 mr-2" />
            <input
              type="text"
              placeholder="Enter your UPI ID"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            onClick={handleSaveUpi}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center"
          >
            <FaSave className="mr-2" />
            Save
          </button>
        </div>
        {savedUpi && (
          <p className="mt-2 text-sm text-green-700">Saved UPI ID: {savedUpi}</p>
        )}
      </div>


      {/* Earnings Messages */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Earning History</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          {messages.map((msg, index) => (
            <motion.li
              key={index}
              className="bg-white border-l-4 border-green-500 p-3 rounded shadow-sm"
              whileHover={{ scale: 1.02 }}
            >
              {msg}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Wallet;
