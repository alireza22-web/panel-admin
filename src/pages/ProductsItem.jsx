import { useParams } from "react-router-dom"
import { Sidebar } from "../components/sidebar/Sidebar";
import { Navbar } from "../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { products } from "../data/product";
import { toPersianNumber } from "../components/units/toPersianNumber";

export const ProductsItem = ()=>{

  const [data,setData] = useState([])
  const {id} = useParams()

  useEffect(()=>{
    const data = products.find(product => product.id == id)
    setData(data);
  },[])

  

  return (
    <>
      <div className="grid grid-cols-10 dark:bg-[#020202] max-md:block text-black dark:text-white">
        <Sidebar/>
        <div className="col-span-8 max-lg:col-span-7">
          <Navbar/>
          <div className="pt-4 max-lg:w-full lg:grid grid-cols-10 max-lg:grid-cols-1 pb-8 px-6 max-sm:px-3 place-items-center gap-4">
            <div className="col-span-7 flex max-lg:flex-col max-lg:text-center gap-2">
              <div className="">
                <img src={data.image} className="w-80 h-80 max-lg:mx-auto object-cover" alt="" />  
              </div>
              <div className="p-4 flex flex-col gap-4">
                <div className="text-gray-900 dark:text-gray-100 text-4xl font-bold">
                  {data.name}
                </div>
                <div className="text-lg text-gray-900 dark:text-gray-200">
                  {toPersianNumber(data.price)} تومان 
                </div>
                <p className="text-gray-600 dark:text-gray-500">
                  {data.description}
                </p>
              </div>
            </div>
            <div className="lg:col-span-3 max-lg:mx-auto flex flex-col justify-between border border-gray-300 rounded-lg dark:border-gray-700 p-4 w-full h-full text-gray-700 dark:text-gray-400">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <span>امتیاز : <span className="text-black dark:text-white">{toPersianNumber(data.rating?.rate)}</span></span>
                  <span>تعداد نظرات : <span className="text-black dark:text-white">{toPersianNumber(data.rating?.count)}</span></span>
                </div>
                <p className="text-justify">
                  توضیحات مربوطه : <span className="text-black dark:text-white">{data.description}</span>
                </p>
              </div>
              <div className="w-full bg-sky-300 dark:bg-sky-900 rounded-md  px-4 py-3 text-center">
                تعداد موجودی : {data.inventory == 0 ? <span className="text-red-600">موجودی کافی نیست</span> : <span className="text-black dark:text-white">{data.inventory}</span>}
              </div>
            </div>
          </div>    
        </div>
      </div>
    </>
  )
}