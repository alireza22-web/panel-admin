// OrderChart.js
import React from "react";
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
import { Bar, Line } from "react-chartjs-2";

// ثبت پلاگین‌ها
ChartJS.register(CategoryScale,ArcElement, LinearScale, BarElement, Title, Tooltip, Legend);

// دیتاهای سفارش
const orders = [
  { order_number: "ORD-1001", total_price: 1890000 },
  { order_number: "ORD-1002", total_price: 920000 },
  { order_number: "ORD-1003", total_price: 3450000 },
  { order_number: "ORD-1004", total_price: 2760000 },
  { order_number: "ORD-1005", total_price: 1580000 },
  { order_number: "ORD-1006", total_price: 480000 },
  { order_number: "ORD-1007", total_price: 5790000 },
];

const data = {
  labels: orders.map((order) => order.order_number),
  datasets: [
    {
      label: "مبلغ سفارش (تومان)",
      data: orders.map((order) => order.total_price),
      // borderColor: isDark ? "oklch(35.9% 0.144 278.697)" : "#3b82f6",
      backgroundColor: "#3b82f6",
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
    y: {
      ticks: {
        callback: (value) => value.toLocaleString("fa-IR"),
      },
    },
  },
};

const OrderChart = () => {
  return (
    <div className="pb-12 shadow-lg bg-gradient-to-b from-gray-100 to-gray-200 dark:from-[#202020] dark:to-[#101010] rounded-2xl h-[300px] w-full mt-5 p-6 ">
      <h2 className="dark:text-white text-black">
        <span>نمودار سفارش ها</span> 
      </h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default OrderChart;
