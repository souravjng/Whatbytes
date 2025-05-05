import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaQuestionCircle } from "react-icons/fa";

const HelpSupport = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const faqItems = [
    {
      question: "How do I reset my password?",
      answer: "You can reset your password by going to the 'Forgot Password' section on the login page.",
    },
    {
      question: "How can I contact support?",
      answer: "You can reach our support team via the contact form or by emailing support@yourdomain.com.",
    },
    {
      question: "How do I update my payment information?",
      answer: "To update your payment information, go to the 'Account Settings' section and select 'Payment Methods'.",
    },
  ];

  return (
    <motion.div
      className="p-6 bg-white rounded-2xl shadow-md w-full max-w-7xl mx-auto mt-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Search Bar Section */}
      <div className="bg-gray-50 p-5 rounded-xl mb-8 shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Search Help Articles</h2>
        <div className="flex items-center gap-3">
          <FaSearch className="text-xl text-gray-500" />
          <input
            type="text"
            placeholder="Search for help articles"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 p-5 rounded-xl shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions (FAQ)</h2>
        <ul className="space-y-4">
          {faqItems.map((item, index) => (
            <li key={index} className="bg-white border-l-4 border-blue-500 p-4 rounded-md shadow-sm">
              <div className="font-medium text-gray-800">{item.question}</div>
              <div className="text-gray-600 mt-2">{item.answer}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Support Section */}
      <div className="bg-blue-50 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Support</h2>
        <p className="text-gray-600 mb-4">
          If you can't find an answer to your question, feel free to reach out to our support team. We're here to help!
        </p>
        <a
          href="mailto:support@yourdomain.com"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
        >
          <FaQuestionCircle className="text-xl" />
          Email Support
        </a>
      </div>
    </motion.div>
  );
};

export default HelpSupport;
