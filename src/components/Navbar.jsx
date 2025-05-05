import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  IoHomeSharp,
  IoMailOutline,
  IoAppsSharp,
  IoSettingsOutline,
} from 'react-icons/io5';
import { BiLogOutCircle } from 'react-icons/bi';
import { BsFillWalletFill } from 'react-icons/bs';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

const Navbar = () => {
  const shownavbar = () => {
    console.log('Navbar toggled');
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-gray-100 text-blue-600 font-semibold h-12 flex items-center gap-x-2 px-4 rounded-tr-full rounded-br-full'
      : 'text-gray-700 hover:text-blue-600 h-12 flex items-center gap-x-2 px-4';

  return (
    <div className="flex-row">
      <div className=" h-screen bg-white p-6 flex flex-col border-r-2 border-gray-100">
        <ul className="space-y-4">
          <li>
            <NavLink onClick={shownavbar} to="/home" className={linkClass}>
              <IoHomeSharp className="w-5 h-5 mr-2" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={shownavbar} to="/dashboard" className={linkClass}>
              <IoAppsSharp className="w-5 h-5 mr-2" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink onClick={shownavbar} to="/message" className={linkClass}>
              <IoMailOutline className="w-5 h-5 mr-2" />
              Message
            </NavLink>
          </li>
          <li>
            <NavLink onClick={shownavbar} to="/wallet" className={linkClass}>
              <BsFillWalletFill className="w-5 h-5 mr-2" />
              Wallet
            </NavLink>
          </li>
          
          <li>
            <NavLink onClick={shownavbar} to="/help-support" className={linkClass}>
              <AiOutlineQuestionCircle className="w-5 h-5 mr-2" />
              Help & Support
            </NavLink>
          </li>
          <li>
            <NavLink onClick={shownavbar} to="/settings" className={linkClass}>
              <IoSettingsOutline className="w-5 h-5 mr-2" />
              Settings
            </NavLink>
          </li>
          <li>
            <div onClick={() => alert('Logging out...')} className="cursor-pointer">
              <div className="text-gray-700 hover:text-red-600 h-12 flex items-center gap-x-2 px-4">
                <BiLogOutCircle className="w-5 h-5 mr-2" />
                Logout
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
