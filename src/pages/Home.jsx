import { useEffect, useState } from "react";
import { CardCount } from "../components/cardCount/CardCount";
import LineChart from "../components/chart/LineChart";
import { Navbar } from "../components/navbar/Navbar";
import { Sidebar } from "../components/sidebar/Sidebar";
import OrderChartHome from "../components/chart/orderChartHome";

export const Home = () => {

  const [Dark, setDark] = useState(false);
  
  useEffect(() => {
    const classList = document.documentElement.classList;
    setDark(classList.contains("dark"));
  }, []);

 

  return (
    <>
      <div className="grid grid-cols-10 dark:bg-[#020202] max-md:block text-black dark:text-white">
        <Sidebar/>
        <div className="col-span-8 min-h-screen max-lg:col-span-7">
          <Navbar setDark={setDark}/>
          <div className="px-4 py-6">
            <div className=" gap-10 text-center rounded-md dark:bg-black dark:shadow-md max-lg:grid-cols-1 max-lg:gap-3 p-3 grid grid-cols-3 place-items-center">
              <CardCount title="تعداد کاربران فعال" duration={3} end={112} delay={0.3}/>
              <CardCount title="تعداد جامع محصولات" duration={4} end={65} delay={0.3}/>
              <CardCount title="تعداد کل سفارش ها" duration={5} end={23} delay={0.3}/>
            </div>
            <div>
              <LineChart isDark={Dark}/>
            </div>
            <div className="mr-3">
              <OrderChartHome isDark={Dark}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
