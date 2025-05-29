import { useEffect, useMemo, useState } from "react";
import { CardCount } from "../components/cardCount/CardCount";
import LineChart from "../components/chart/LineChart";
import { Navbar } from "../components/navbar/Navbar";
import { Sidebar } from "../components/sidebar/Sidebar";
import OrderChartHome from "../components/chart/orderChartHome";
import { users } from "../data/users";
import { products } from "../data/product";
import { Link } from "react-router-dom";

export const Home = () => {

  const [Dark, setDark] = useState(false);
  useEffect(() => {
    const classList = document.documentElement.classList;
    setDark(classList.contains("dark"));
  }, []);

  const dataUser = users.filter(user=>{
    return user.status == "online"
  })
  const dataProduct = products.filter(product=>{
    return product.inventory == 0
  })
    
 
  
  

  return (
    <>
      <div className="grid grid-cols-10 dark:bg-[#020202] max-md:block text-black dark:text-white">
        <Sidebar/>
        <div className="col-span-8 min-h-screen max-lg:col-span-7">
          <Navbar setDark={setDark}/>
          <div className="px-4 py-6">
            <div className=" gap-10 text-center rounded-md dark:bg-black dark:shadow-md max-lg:grid-cols-1 max-lg:gap-3 p-3 grid grid-cols-3 place-items-center">
              <CardCount title="تعداد کاربران فعال" duration={5} end={112} delay={1}/>
              <CardCount title="تعداد جامع محصولات" duration={5} end={65} delay={1}/>
              <CardCount title="تعداد کل سفارش ها" duration={5} end={23} delay={1}/>
            </div>
            <div>
              <LineChart isDark={Dark}/>
            </div>
            <div className="xl:grid xl:grid-cols-3 max-xl:flex max-xl:flex-col max-xl:w-full gap-5 mt-5">
              <div className="xl:mr-3 max-xl:w-full xl:col-span-1 max-xl:px-3">
                <OrderChartHome isDark={Dark}/>
              </div>
              <div className="flex lg:pl-3 max-lg:flex-col gap-6 w-full col-span-2">{/* تو اینجا دوتا جدول داریم */}
                <div className="flex-col items-start w-full flex gap-4 max-lg:px-3">
                  <h2 className="font-bold text-xl">کاربران آنلاین</h2>
                  <table className="text-right dark:bg-[#202020] w-full  bg-gray-100 shadow-xl rounded-lg overflow-hidden">
                    <thead>
                      <tr className="dark:bg-[#080808] bg-gray-200">
                        <td className="py-1 px-2">نام کاربر</td>
                        <td className="py-1 px-2">ایمیل کاربر</td>
                        <td className="py-1 px-2">نقش کابر</td>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        dataUser.slice(0,3).map(item=>{
                          return (
                            <tr className="even:dark:bg-[#101010] even:bg-gray-200">
                              <td className="max-[1335px]:px-1 max-[1335px]:py-4 px-5 py-4">{item.name}</td>
                              <td className="max-[1335px]:px-1 max-[1335px]:py-4 px-5 py-4">{item.email}</td>
                              <td className="max-[1335px]:px-1 max-[1335px]:py-4 px-5 py-4">{item.role}</td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                  <button className="cursor-pointer max-lg:w-full max-lg:py-2 rounded-md transition-colors duration-150 px-4 py-1 bg-sky-500 dark:bg-[#101010] hover:bg-sky-400 hover:dark:bg-[#404040]">
                    <Link to={`/users`}>
                      <span>مشاهده همه کاربران</span>
                    </Link>
                  </button>
                </div>
                <div className="flex-col items-start max-lg:px-3 w-full flex gap-4">
                  <h2 className="font-bold text-xl">محصولات تمام شده</h2>
                  <table className="text-center dark:bg-[#202020] w-full bg-gray-100 shadow-xl rounded-lg overflow-hidden">
                    <thead>
                      <tr className="dark:bg-[#080808] bg-gray-200">
                        <td className="py-1">نام کاربر</td>
                        <td className="py-1">ایمیل کاربر</td>
                        <td className="py-1">نقش کابر</td>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        dataProduct.slice(0,3).map(item=>{
                          return (
                            <tr className="even:dark:bg-[#101010] even:bg-gray-200">
                              <td className="px-6 py-2">
                                <img src={item.image} className="w-10 h-10" alt="" />
                              </td>
                              <td className="px-6 py-2">{item.name}</td>
                              <td className="px-6 py-2 ">
                                <span className="text-red-500">موجودی ندارد</span>
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                  <button className="cursor-pointer rounded-md transition-colors max-lg:w-full duration-150 px-4 py-1 bg-sky-500 dark:bg-[#101010] hover:bg-sky-400 hover:dark:bg-[#404040]">
                    <Link to={`/products`}>
                      <span>مشاهده همه محصولات</span>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
