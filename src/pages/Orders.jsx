import OrderChart from "../components/chart/orderChart";
import { Navbar } from "../components/navbar/Navbar";
import { Sidebar } from "../components/sidebar/Sidebar";

export const Orders = () => {
  return (
    <>
      <div className="grid grid-cols-10 dark:bg-[#020202] max-md:block text-black dark:text-white">
        <Sidebar/>
        <div className="col-span-8 min-h-screen max-lg:col-span-7 flex flex-col">
          <Navbar/>
          <div className="w-full px-6">
            <OrderChart/>
          </div>
        </div>
      </div>
    </>
  );
};