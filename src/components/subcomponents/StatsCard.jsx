import React from "react";
import { FaClipboardCheck } from "react-icons/fa";  

const StatsCard = ({ onUpdateClick }) => {
  const cardData = {
    title: "Complaint Resolution Status",
    complaints: 47,
    duration: "2 days",
    submittedDate: "3 May 2025",
  };

  return (
    <div className="h-[130px] w-[770px] p-4 rounded-xl border border-gray-300 flex items-center space-x-4 bg-white">
      <FaClipboardCheck className="w-14 h-14 text-blue-800" />  
      <div className="flex-1">
        <h2 className="font-semibold text-lg">{cardData.title}</h2>
        <p className="text-sm text-gray-600">
          Complaints: {cardData.complaints.toString().padStart(2, "0")} | Resolution Time: {cardData.duration} | Submitted on {cardData.submittedDate}
        </p>
      </div>
      <button
        onClick={onUpdateClick}
        className="bg-blue-900 cursor-pointer text-white px-9 py-3 rounded hover:bg-blue-800 transition"
      >
        Update Status
      </button>
    </div>
  );
};

export default StatsCard;
