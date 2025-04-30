// components/Header.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Header = () => {
  return (
    <div className="flex flex-col h-screen">

      <div className="h-[80px] flex items-center justify-between px-6 bg-white border-b border-gray-200">
        <h2 className="text-2xl font-bold">📊 WhatBytes</h2>
        <div className=" py-1 flex items-center bg-white rounded-md px-4 border border-gray-200 text-sm gap-2">
          <img
            src=""
            alt="Profile"
            className="w-8 h-8 rounded-full border border-gray-300"
          />
          <span className="font-semibold">Rahil Siddique</span>
        </div>
      </div>


      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/6  ">
          <Sidebar />
        </div>
        <div className="w-5/6 pl-5 pt-9 pb-2 pr-3 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Header;
