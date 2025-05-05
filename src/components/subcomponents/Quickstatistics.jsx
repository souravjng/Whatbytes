import React from "react";

const QuickStatistics = () => {
  const data = {
    rank: 3,
    complaintRate: 65,
    total: 10135,
    resolve: 1732,
  };


  const { rank, complaintRate, total, resolve } = data;

  return (
    <div className="w-[770px] mt-3 p-4 pb-10 bg-white rounded-xl border border-gray-300">
      <h2 className="text-xl font-semibold mb-3">Dashboard Overview</h2>
      <div className="flex flex-row flex-1">
        <Stat icon="🏆" value={rank} label="Your City Rank" />
        <Stat icon="📣" value={`${complaintRate}%`} label="Complaint Rate" />
        <Stat icon="🗂️" value={`${resolve} / ${total}`} label="Remaining Complaints" />
      </div>
    </div>
  );
};

const Stat = ({ icon, value, label }) => (
  <div className="flex flex-row flex-1/3 justify-center">
    <div className="flex justify-center items-center overflow-hidden mr-2 w-13 h-13 text-3xl border border-gray-200 rounded-full">{icon}</div>
    <div className="flex flex-col">
      <div className="text-lg font-bold">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  </div>
);

export default QuickStatistics;
