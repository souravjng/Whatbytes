// Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SubmitForm from '../components/SubmitForm';

const Home = () => {
  const handleSubmit = (formData) => {
    console.log('Form Submitted:', formData);
    // Handle form data (e.g., send it to the backend)
  };

  return (
    <div className="h-full overflow-auto px-4 py-0 bg-gray-50">
      <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto scroll-auto">

        {/* Map Section */}
        <motion.div
          className="flex-1 bg-gray-200 rounded-lg h-[600px] relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center bg-black bg-opacity-40 text-white z-10">
            <div>
              <p className="text-lg font-semibold">This page can't load Google Maps correctly.</p>
              <button className="mt-2 px-4 py-1 text-sm bg-white text-black rounded shadow">OK</button>
            </div>
          </div>
        </motion.div>
        

          <SubmitForm onSubmit={handleSubmit} />
        
      </div>
    </div>
  );
};

export default Home;
