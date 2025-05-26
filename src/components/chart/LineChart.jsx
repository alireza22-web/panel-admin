import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const LineChart = ({ isDark }) => {
  const data = {
    labels: ["فروردین", "اردیبهشت", "خرداد", "تیر","مرداد","شهریور","مهر","ابان","اذر","دی","بهمن","اسفند"],
    datasets: [
      {
        label: "فروش",
        data: [100, 200, 150, 300,240,180,110,145,120,250,260,270],
        borderColor: isDark ? "#38bdf8" : "#3b82f6", // آبی روشن در تاریک و معمولی در روشن
        backgroundColor: isDark ? "#38bdf8" : "#3b82f6",
        tension: 0.3,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: isDark ? "#f9fafb" : "#1f2937",
        },
      },
      tooltip: {
        backgroundColor: isDark ? "#1f2937" : "#f9fafb",
        titleColor: isDark ? "#facc15" : "#111827",
        bodyColor: isDark ? "#f9fafb" : "#111827",
      },
    },
    scales: {
      x: {
        ticks: {
          color: isDark ? "#d1d5db" : "#4b5563",
        },
        grid: {
          color: isDark ? "#374151" : "#e5e7eb",
        },
      },
      y: {
        ticks: {
          color: isDark ? "#d1d5db" : "#4b5563",
        },
        grid: {
          color: isDark ? "#374151" : "#e5e7eb",
        },
      },
    },
  };

  // bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900

  return (
    <div className={`p-6 h-[400px] mt-5 pb-20 mx-3 rounded-xl shadow-lg bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900`}>
      <h2 className={`text-xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-800"}`}>
        نمودار فروش سال اخیر
      </h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
