import React from 'react';

const progressData = [
  { title: 'HTML Tools, Forms, History', value: 80, barColor: 'bg-blue-500', bgColor: 'bg-blue-100', textColor: 'text-blue-500' },
  { title: 'Tags & References in HTML', value: 60, barColor: 'bg-orange-400', bgColor: 'bg-orange-100', textColor: 'text-orange-400' },
  { title: 'Tables & References in HTML', value: 24, barColor: 'bg-red-500', bgColor: 'bg-red-100', textColor: 'text-red-500' },
  { title: 'Tables & CSS Basics', value: 96, barColor: 'bg-green-500', bgColor: 'bg-green-100', textColor: 'text-green-500' },
];

export default function AnalysisCard() {
  return (
    <div className="bg-white h-[450px]  p-6 border border-gray-300 rounded-lg w-full max-w-md mx-auto">
      <h3 className="font-semibold text-lg mb-6">Syllabus Wise Analysis</h3>
      {progressData.map((item, index) => (
        <div key={index} className="mb-10">
          <div className="text-sm font-medium mb-3 text-gray-700">{item.title}</div>
          <div className="flex items-center gap-2">
            <div className={`flex-1 h-2 rounded-full ${item.bgColor}`}>
              <div
                className={`h-2 rounded-full ${item.barColor}`}
                style={{ width: `${Math.min(item.value, 100)}%` }}
              ></div>
            </div>
            <span className={`text-sm font-semibold ${item.textColor}`}>
              {item.value}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
