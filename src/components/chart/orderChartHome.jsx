// OrderChart.js
import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(CategoryScale,ArcElement, LinearScale, BarElement, Title, Tooltip, Legend);
  
  
const orders = [
  { order_number: "ORD-1001", total_price: 1890000 },
  { order_number: "ORD-1002", total_price: 920000 },
  { order_number: "ORD-1003", total_price: 3450000 },
  { order_number: "ORD-1004", total_price: 2760000 },
  { order_number: "ORD-1005", total_price: 1580000 },
  { order_number: "ORD-1006", total_price: 480000 },
  { order_number: "ORD-1007", total_price: 5790000 },
];

const OrderChartHome = ({isDark}) => {
const data = {
  labels: orders.map((order) => order.order_number),
  datasets: [
    {
      label: "مبلغ سفارش (تومان)",
      data: orders.map((order) => order.total_price),
      backgroundColor: isDark ? "oklch(35.9% 0.144 278.697)" : 'oklch(50% 0.134 242.749)',
      borderRadius: 6,
      maxBarThickness: 40,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          return `${Number(context.raw).toLocaleString("fa-IR")} تومان`;
        },
      },
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

  return (
    <div className="pb-12 shadow-lg bg-gradient-to-b from-gray-100 to-gray-200 dark:from-[#202020] dark:to-[#101010] rounded-2xl h-[300px] w-full p-6 ">
      <h2 className="dark:text-white text-black font-bold">
        <span>نمودار سفارش ها</span> 
      </h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default OrderChartHome;
