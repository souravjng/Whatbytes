import React from "react";
import { Line } from "react-chartjs-2";
import { MdTrendingUp } from "react-icons/md";
import {Chart as ChartJS,LineElement,CategoryScale,LinearScale,PointElement,Tooltip,Legend,} from "chart.js";

const verticalLinePlugin = {
  id: "verticalLine",
  afterDraw: (chart) => {
    const ctx = chart.ctx;
    const labelIndex = chart.data.labels.indexOf("Kurukshetra");

    if (labelIndex === -1) return;

    const meta = chart.getDatasetMeta(0);
    const point = meta.data[labelIndex];
    if (!point) return;

    const { top, bottom } = chart.chartArea;
    const middleY = top + (bottom - top) / 2;

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(point.x, top);
    ctx.lineTo(point.x, bottom);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#EF4444"; 
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.font = "bold 12px sans-serif";
    ctx.fillStyle = "#EF4444";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Kurukshetra", point.x, middleY);
    ctx.restore();
  },
};

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  verticalLinePlugin
);

const citiesData = {
  cities: [
    "Ambala", "Bhiwani", "Faridabad", "Gurugram", "Hisar",
    "Jhajjar", "Karnal", "Kurukshetra", "Mahendragarh", "Narnaul",
    "Panipat", "Rohtak"
  ],
  data: {
    pollution: [15, 20, 30, 40, 55, 70, 65, 50, 45, 30, 25, 15],
    unemployment: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
    crimeRate: [2, 4, 6, 8, 12, 15, 18, 16, 14, 10, 8, 6],
    garbage: [50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 3, 1],
  }
};

const metricColors = {
  pollution: "rgba(54, 162, 235, 0.8)",       
  unemployment: "rgba(255, 206, 86, 0.8)",     
  crimeRate: "rgba(255, 99, 132, 0.9)",       
  garbage: "rgba(75, 192, 192, 0.8)",         
};

const ComparisonGraph = () => {
  const labels = citiesData.cities;

  const datasets = Object.entries(citiesData.data).map(([key, values]) => ({
    label: key.charAt(0).toUpperCase() + key.slice(1),
    data: values,
    borderColor: metricColors[key],
    backgroundColor: metricColors[key],
    fill: false,
    tension: 0.3,
    pointRadius: 3,
  }));

  const data = {
    labels,
    datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Cities",
        },
        ticks: {
          maxRotation: 90,
          minRotation: 90,
          autoSkip: false,
        },
        grid: { display: false },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
        grid: { display: true, color: "#eee" },
      },
    },
  };

  return (
    <div className="p-6 rounded-xl border border-gray-300 bg-white shadow-md w-[770px] h-[500px] mt-5 relative">
      <div className="absolute top-4 border border-gray-300 right-4 w-8 h-8 rounded-full bg-white shadow flex items-center justify-center">
        <MdTrendingUp size={24} color="red" />
      </div>
      <h3 className="text-lg font-semibold mb-2">Haryana wise Cities Comparison</h3>
      <p className="text-sm mb-4 text-gray-600">
        This graph compares <strong>pollution,</strong> <strong>unemployment,</strong> <strong>crime rate</strong>, and <strong>garbage</strong> levels across cities. Highlighted is <strong>Kurukshetra</strong>.
      </p>
      <div className="relative h-[380px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ComparisonGraph;
