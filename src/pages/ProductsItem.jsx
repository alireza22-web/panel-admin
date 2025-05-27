import { useParams } from "react-router-dom"
import { Sidebar } from "../components/sidebar/Sidebar";
import { Navbar } from "../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { products } from "../data/product";

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
          
          <img src={data.image}  alt="" />  
          
        </div>
      </div>
    </>
  )
}