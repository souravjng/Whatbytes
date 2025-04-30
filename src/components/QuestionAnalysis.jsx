import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const QuestionAnalysis = ({ score = 10 }) => {
  const total = 15;
  const correct = score;

  const data = {
    labels: ["Correct", "Remaining"],
    datasets: [
      {
        label: "Score",
        data: [correct, total - correct],
        backgroundColor: ["#3b82f6", "#e0e7ff"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%",
    rotation: -50.5 * Math.PI,
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="h-[400px] w-full max-w-md mx-auto mt-4 p-4 border border-gray-300 rounded-lg shadow-md bg-white">
      <div className="flex justify-between items-center text-sm font-semibold text-gray-700">
        <span className="font-semibold text-lg mb-6">Question Analysis</span>
        <span className="text-blue-600">{correct}/{total}</span>
      </div>

      <div className="mt-4">
        <p className="text-gray-800 font-medium">
          You scored <span className="font-bold">{correct} questions correct out of {total}</span>.
          <span className="text-gray-600"> However, there is still room for improvement.</span>
        </p>
      </div>

      <div className="flex justify-center mt-6 relative w-45 h-45 mx-auto">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span role="img" aria-label="target" className="text-3xl">
            🎯
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnalysis;
