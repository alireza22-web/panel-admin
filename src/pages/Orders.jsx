import { CardCount } from "../components/cardCount/CardCount";
import { CardOrderCount } from "../components/cardCount/CardOrderCount";
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
            <div className="px-6 flex flex-col">
              <div className="lg:grid max-lg:flex max-lg:flex-col grid-cols-3 place-items-center max-lg:grid-cols-1 max-lg:gap-5">
                <div className="w-full px-6 col-span-2">
                  <OrderChart/>
                </div>
                <div className="w-full col-span-1 px-12 ml-12 max-lg:mx-0 max-lg:px-6 flex flex-col gap-6">
                  <CardOrderCount end={42} title="سفارشات ارسال شده" />
                  <CardOrderCount end={42} title="سفارشات پرداخت شده" />
                  <CardOrderCount end={42} title="سفارشات لغو شده" />
                </div>
              </div>
              <div className="px-6">
                <h2>فیلتر بر اساس : </h2>
                <div>

                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};