import { useState } from "react";
import { CardCount } from "../components/cardCount/CardCount";
import { CardOrderCount } from "../components/cardCount/CardOrderCount";
import OrderChart from "../components/chart/orderChart";
import { Navbar } from "../components/navbar/Navbar";
import { Sidebar } from "../components/sidebar/Sidebar";
import orders from "../data/orders";
import PaginationWrapper from "../components/pagination/PaginationWrapper ";
import { toPersianNumber } from "../components/units/toPersianNumber";

export const Orders = () => {
  const [currentOrders, setCurrentOrders] = useState([]);

  function paymentStatus(val) {
    if (val == "پرداخت شده") {
      return <span className="text-green-600">{val}</span>;
    } else {
      return <span className="text-red-500">{val}</span>;
    }
  }

  function orderStatus(val) {
    if (val == "تحویل داده شده") {
      return <span className="text-green-600">{val}</span>;
    }else if(val == "لغو شده"){
      return <span className="text-red-500">{val}</span>;
    }else if(val == "در انتظار پردازش"){
      return <span className="text-yellow-500">{val}</span>;
    }else{
      return <span className="text-sky-600">{val}</span>;
    }
  }

  return (
    <>
      <div className="grid grid-cols-10 dark:bg-[#020202] max-md:block text-black dark:text-white">
        <Sidebar />
        <div className="col-span-8 min-h-screen max-lg:col-span-7 flex flex-col">
          <Navbar />
          <div className="px-6 max-md:px-2 flex flex-col min-h-screen py-2 pb-10">
            <div className="lg:grid max-lg:flex max-lg:flex-col grid-cols-3 place-items-center max-lg:grid-cols-1 max-lg:gap-5">
              <div className="w-full px-6 col-span-2">
                <OrderChart />
              </div>
              <div className="w-full col-span-1 px-12 ml-12 max-lg:mx-0 max-lg:px-6 flex flex-col gap-6">
                <CardOrderCount end={35} title="سفارشات ارسال شده" />
                <CardOrderCount end={28} title="سفارشات پرداخت شده" />
                <CardOrderCount end={7} title="سفارشات لغو شده" />
              </div>
            </div>
            <div className="px-6 py-3 mt-4 h-[270px] max-[860px]:h-[410px] max-[768px]:h-[270px] max-[585px]:h-[400px] max-[490px]:overflow-x-scroll">
              <table className="w-full text-right">
                <thead>
                  <tr className="border-b dark:bg-[#080808] bg-gray-200">
                    <td className="px-2">نام مشتری</td>
                    <td className="px-2">تعداد محصول</td>
                    <td className="px-2">قیمت کل</td>
                    <td className="px-2">وضعیت پرداخت</td>
                    <td className="px-2">وضعیت سفارش</td>
                  </tr>
                </thead>
                <tbody>
                  {currentOrders.map((item) => {
                    return (
                      <tr
                        key={item.id}
                        className="even:bg-gray-200 even:dark:bg-[#080808]"
                      >
                        <td className="px-2 py-3">{item.customer_name}</td>
                        <td className="px-2 py-3">
                          {toPersianNumber(item.items_count)}
                        </td>
                        <td className="px-2 py-3">
                          {toPersianNumber(item.total_price)}
                        </td>
                        <td className="px-2 py-3">
                          {paymentStatus(item.payment_status)}
                        </td>
                        <td className="px-2 py-3">
                          {orderStatus(item.order_status)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <PaginationWrapper
              data={orders}
              itemsPerPage={5}
              onPageDataChange={setCurrentOrders}
            />
          </div>
        </div>
      </div>
    </>
  );
};
