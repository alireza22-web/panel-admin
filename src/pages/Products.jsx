import { useEffect, useMemo, useState } from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Sidebar } from "../components/sidebar/Sidebar";
import { products } from "../data/product";
import PaginationWrapper from "../components/pagination/PaginationWrapper ";
import { toPersianNumber } from "../components/units/toPersianNumber";
import { Link } from "react-router-dom";

export const Products = () => {
  const [currentUsers, setCurrentUsers] = useState([]);
  const [category, setCategory] = useState("all");
  const [filter, setFilter] = useState(products);
  const [search, setSearch] = useState("");
  const [warning,setWarning] = useState(true)

  useEffect(() => {
    const filtered = getProducts(category);
    setFilter(filtered);
  }, [category]);

  const getProducts = (val) => {
    if (val == "all") {
      return products;
    } else {
      return products.filter((product) => {
        return product.category == val;
      });
    }
  };

  const getUserSearch = useMemo(() => {
    return filter.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <>
      <div className="grid grid-cols-10 dark:bg-[#020202] min-h-screen max-md:block text-black dark:text-white">
        <Sidebar />
        <div className="col-span-8 max-lg:col-span-7">
          <Navbar />
          <div>
            <div className="pt-4 pb-8 px-6 max-sm:px-3 min-h-screen flex flex-col gap-3">
              {
                
                <div className={`${warning ? '' : 'hidden'} text-justify transition-all max-[480px]:text-sm max-[480px]:px-6 max-[480px]:py-4 duration-200 dark:bg-[#202020] dark:border-gray-800 dark:text-gray-400  flex flex-col gap-0.5 bg-gray-200 text-gray-700 border border-gray-300 rounded-lg px-8 relative py-5 items-start justify-start`}>
                  <div className="gap-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 inline ml-1 text-red-500">
                      <path fillRule="evenodd" d="M11.484 2.17a.75.75 0 0 1 1.032 0 11.209 11.209 0 0 0 7.877 3.08.75.75 0 0 1 .722.515 12.74 12.74 0 0 1 .635 3.985c0 5.942-4.064 10.933-9.563 12.348a.749.749 0 0 1-.374 0C6.314 20.683 2.25 15.692 2.25 9.75c0-1.39.223-2.73.635-3.985a.75.75 0 0 1 .722-.516l.143.001c2.996 0 5.718-1.17 7.734-3.08ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75ZM12 15a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75H12Z" clipRule="evenodd"/>
                    </svg>
                    این ایکون   
                    نشانه موجود نبودن محصول مورد نظر است.
                  </div>
                  <div>
                    با ضربه زدن روی عکس محصولات وارد بخش مشاهده کامل محصول میشود.
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} onClick={()=>setWarning(false)} stroke="currentColor" className="cursor-pointer size-6 absolute top-1 right-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </div>
              }
              <div className="flex flex-col gap-2">
                <div className="text-gray-700 dark:text-gray-400">فیلتر بر اساس</div>
                <div>
                  <select
                    onChange={(e) => setCategory(e.target.value)}
                    className="dark:text-gray-200 active:border-gray-300 dark:active:border-gray-800 dark:border-gray-900 dark:bg-[#303030] border-gray-300 rounded-md focus:border-gray-100 dark:focus:border-gray-950 ring-white px-3 text-gray-800 py-0.5 border"
                  >
                    <option value={"all"}>همه</option>
                    <option value={"shirt"}>لباس مردانه</option>
                    <option value={"shirt-women"}>لباس زنانه</option>
                    <option value={"electronic"}>الکترونیکی</option>
                    <option value={"jewelery"}>جواهرات</option>
                  </select>
                </div>
              </div>
              <div className="relative ">
                <input
                  placeholder="جستجو بر اساس نام محصول"
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  className="bg-gray-200 w-full rounded-lg px-4 py-3 border-none outline-none dark:bg-[#404040]"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 absolute left-3 top-1/2 -translate-y-1/2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
              <div className="max-sm:overflow-x-scroll h-[380px]">
                <table className="w-full max-sm:text-sm h-fit  max-sm:mx-auto text-right border-b px-4 dark:bg-[#202020]">
                  <thead>
                    <tr className="border-b dark:bg-[#080808] bg-gray-200">
                      <th className="px-4 py-1 max-sm:px-2 max-sm:py-0.5">
                        تصویر
                      </th>
                      <th className="px-4 py-1 max-sm:px-2 max-sm:py-0.5">
                        اسم
                      </th>
                      <th className="px-4 py-1 max-sm:px-2 max-sm:py-0.5">
                        قیمت
                      </th>
                      <th className="px-4 py-1 max-sm:px-2 max-sm:py-0.5">
                        موجودی
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {currentUsers.map((item, i) => {
                      return (
                        <tr
                          className="even:bg-gray-200 even:dark:bg-[#080808]"
                          key={i}
                        >
                          <td>
                            <Link to={`/products/${item.id}`}>
                              <img
                                className="w-[70px] h-[70px]"
                                src={item.image}
                                alt=""
                              />
                            </Link>
                          </td>
                          <td className="px-4 py-4 max-sm:px-3 max-sm:py-3">
                            {item.name}
                          </td>
                          <td className="px-4 py-4 max-sm:px-3 max-sm:py-3">
                            {toPersianNumber(item.price)}
                          </td>
                          <td className="px-4 py-4 max-sm:px-3 max-sm:py-3">
                            {item.inventory == 0 ? (
                              <span className="flex items-center text-red-500 gap-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="size-6"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M11.484 2.17a.75.75 0 0 1 1.032 0 11.209 11.209 0 0 0 7.877 3.08.75.75 0 0 1 .722.515 12.74 12.74 0 0 1 .635 3.985c0 5.942-4.064 10.933-9.563 12.348a.749.749 0 0 1-.374 0C6.314 20.683 2.25 15.692 2.25 9.75c0-1.39.223-2.73.635-3.985a.75.75 0 0 1 .722-.516l.143.001c2.996 0 5.718-1.17 7.734-3.08ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75ZM12 15a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75H12Z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            ) : (
                              <span>{toPersianNumber(item.inventory)}</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <PaginationWrapper
                data={search == "" ? filter : getUserSearch}
                itemsPerPage={5}
                onPageDataChange={setCurrentUsers}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
