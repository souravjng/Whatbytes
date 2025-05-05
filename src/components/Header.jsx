import React from 'react';
import { Outlet } from 'react-router-dom';
import { FaBullhorn,FaUserCircle } from 'react-icons/fa';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="h-[80px] flex items-center justify-between px-6 bg-white border-b border-gray-200">
        <div className="flex items-center gap-2 text-2xl font-bold text-gray-800">
          <FaBullhorn className="text-blue-600 text-5xl" />
          <h2>RiseYourVoice</h2>
        </div>

        <div className="cursor-pointer py-1 flex items-center bg-white rounded-md px-4 border border-gray-400 text-sm gap-2">
          <div className="w-8 h-8 rounded-full border border-gray-300"><FaUserCircle className="text-blue-600 text-[32px]"/></div>
          
          <span className="font-semibold">Sourav J</span>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/6">
          <Navbar />
        </div>
        <div className="w-5/6 pl-5 pt-9 pb-2 pr-3 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Header;
