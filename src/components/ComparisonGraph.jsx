import React from "react";
import { Line } from "react-chartjs-2";
import { MdTrendingUp } from "react-icons/md";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip,} from "chart.js";

const percentileLinePlugin = {
  id: "percentileLine",
  afterDraw: (chart, args, pluginOptions) => {
    const ctx = chart.ctx;
    const index = pluginOptions?.index;

    if (index === undefined) return;

    const meta = chart.getDatasetMeta(0);
    const point = meta.data[index];
    if (!point) return;

    const { top, bottom } = chart.chartArea;
    const middleY = top + (bottom - top) / 2;

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(point.x, top);
    ctx.lineTo(point.x, bottom);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#a3a3a3";
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.font = "bold 12px sans-serif";
    ctx.fillStyle = "#4B5563"; 
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Your Percentile", point.x, middleY);
    ctx.restore();
  },
};

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, percentileLinePlugin);

const ComparisonGraph = ({ percentile }) => {
  const labels = Array.from({ length: 11 }, (_, i) => i * 10); 
  const percentileIndex = Math.round(percentile / 10); 

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: [1, 2, 2, 3, 5, 10, 8, 4, 2, 3, 1],
        borderColor: "#a78bfa",
        backgroundColor: "transparent",
        pointBackgroundColor: "#a78bfa",
        pointBorderColor: "#a78bfa",
        pointRadius: 4,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `Number of Students: ${context.raw}`,
        },
      },
      percentileLine: {
        index: percentileIndex,
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        grid: { display: false },
        ticks: { display: false },
      },
    },
  };

  return (
    <div className="p-6 rounded-xl border border-gray-300 bg-white shadow-md w-[770px] h-[500px] mt-5 relative">
      <div className="absolute top-4 border border-gray-300 right-4 w-8 h-8 rounded-full bg-white shadow flex items-center justify-center">
        <MdTrendingUp size={24} color="red" />
      </div>
      <h3 className="text-lg font-semibold mb-2">Comparison Graph</h3>
      <p className="text-sm mb-4">
        <span className="font-bold">You scored {percentile} percentile</span> which is
        lower than the average percentile 72% of all the engineers who took this
        assessment
      </p>
      <div className="relative">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ComparisonGraph;
