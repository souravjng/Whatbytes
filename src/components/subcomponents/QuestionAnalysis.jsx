import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const QuestionAnalysis = () => {
  const data = {
    total: 10135,
    score: 1732, 
  };

  const { total, score } = data;
  const correct = score;

  const chartData = {
    labels: ["Correct", "Remaining"],
    datasets: [
      {
        label: "Score",
        data: [correct, total - correct],
        backgroundColor: ["#3b82f6", "#e5e7eb"], 
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%",
    rotation: -90,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) =>
            `${context.label}: ${context.raw} question${context.raw !== 1 ? "s" : ""}`,
        },
      },
    },
  };

  return (
    <div className="p-6 rounded-xl border border-gray-300 bg-white shadow-md w-[400px] h-[400px] mt-5 mx-auto relative">
      <h3 className="text-lg font-semibold mb-2">Question Analysis</h3>
      <p className="text-sm mb-4 text-gray-700">
        Haryana <span className="font-bold text-blue-600">{correct} out of {total}</span> questions correctly.
        <br />
        <span className="text-gray-600">There is still room for improvement.</span>
      </p>

      <div className="flex justify-center mt-6 relative w-[180px] h-[180px] mx-auto">
        <Doughnut data={chartData} options={options} />
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
