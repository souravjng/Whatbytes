import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdSpaceDashboard, MdWorkspacePremium, MdDescription, MdMenuBook} from 'react-icons/md';



export default function Sidebar() {
  const shownavbar = () => {
    console.log('Navbar toggled');
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-gray-100 text-blue-600 font-semibold h-12 flex items-center gap-x-2 px-4 rounded-tr-full rounded-br-full'
      : 'text-gray-700 hover:text-blue-600 h-12 flex items-center gap-x-2 px-4';
  
  return (
    <div className=" flex-row">

      <div className="w-64 h-screen bg-white  p-6 flex flex-col border-r-2  border-gray-100">
      <ul className="space-y-4">
  <li>
    <NavLink onClick={shownavbar} to="/dashboard" className={linkClass}>
      <MdSpaceDashboard className="w-5 h-5 mr-2" />
      Dashboard
    </NavLink>
  </li>
  <li>
    <NavLink onClick={shownavbar} to="/skilltest" className={linkClass}>
      <MdWorkspacePremium className="w-5 h-5 mr-2" />
      Skill Test
    </NavLink>
  </li>
  <li>
    <NavLink onClick={shownavbar} to="/internship" className={linkClass}>
      <MdDescription className="w-5 h-5 mr-2" />
      Internship
    </NavLink>
  </li>
</ul>

      </div>
    </div>
  );
}
