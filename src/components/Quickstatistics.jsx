import React from "react";

const QuickStatistics = ({ rank, percentile, score }) => {
  return (
    <div className="w-[770px] mt-3 p-4 pb-10 bg-white rounded-xl border border-gray-300">
      <h2 className="text-xl font-semibold mb-3">Quick Statistics</h2>
      <div className="flex flex-row flex-1">
        <div className="flex flex-row flex-1/3 justify-center">
          <div className="flex justify-center items-center overflow-hidden mr-2 w-13 h-13 text-3xl border border-gray-200 rounded-full">🏆</div>
          <div className="flex-col">
            <div className="text-lg font-bold">{rank}</div>
            <div className="text-normal text-gray-500">Your Rank</div>
          </div>
        </div>

        <div className="flex flex-row flex-1/3 justify-center">
          <div className="flex justify-center items-center overflow-hidden mr-2 w-13 h-13 text-3xl border border-gray-200 rounded-full">📋</div>
          <div className="flex-col">
            <div className="text-lg font-bold">{percentile}%</div>
            <div className="text-normal text-gray-500">Percentile</div>
          </div>
        </div>

        <div className="flex flex-row flex-1/3 justify-center">
          <div className="flex justify-center items-center overflow-hidden mr-2 w-13 h-13 text-3xl border border-gray-200 rounded-full">✅</div>
          <div className="flex-col">
            <div className="text-lg font-bold">{score} / 15</div>
            <div className="text-normal text-gray-500">Correct Answers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStatistics;
