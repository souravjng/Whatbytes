import React from 'react';

const colorMap = {
  red: {
    bg: 'bg-red-100',
    fill: 'bg-red-500',
    text: 'text-red-500',
  },
  orange: {
    bg: 'bg-orange-100',
    fill: 'bg-orange-500',
    text: 'text-orange-500',
  },
  green: {
    bg: 'bg-green-100',
    fill: 'bg-green-500',
    text: 'text-green-500',
  },
  purple: {
    bg: 'bg-purple-100',
    fill: 'bg-purple-500',
    text: 'text-purple-500',
  },
};

export default function RegionIssuesProgressCard({ rank, percentile, score, unemployment }) {
  const progressItems = [
    { title: 'Crime', value: rank, color: 'red' },
    { title: 'Infrastructure Issues', value: percentile, color: 'orange' },
    { title: 'Garbage', value: score, color: 'green' },
    { title: 'Unemployment', value: unemployment, color: 'purple' },
  ];

  return (
    <div className="bg-white p-6 border border-gray-300 rounded-lg w-full max-w-md mx-auto shadow max-h-[450px] overflow-y-auto">
      <h3 className="font-semibold text-lg mb-6 text-gray-800">Regional Issue Problems</h3>
      {progressItems.map(({ title, value, color }, idx) => {
        const cappedValue = Math.min(value, 100);
        const colorStyles = colorMap[color];

        return (
          <div key={idx} className="mb-6">
            <div className="text-sm font-medium mb-2 text-gray-700">{title}</div>
            <div className="flex items-center gap-3">
              <div className={`flex-1 h-2 rounded-full ${colorStyles.bg}`}>
                <div
                  className={`h-2 rounded-full ${colorStyles.fill}`}
                  style={{ width: `${cappedValue}%` }}
                />
              </div>
              <span className={`text-sm font-semibold ${colorStyles.text}`}>
                {Math.round(cappedValue)}%
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
