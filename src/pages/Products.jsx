import { Navbar } from "../components/navbar/Navbar";
import { Sidebar } from "../components/sidebar/Sidebar";

export const Products = () => {
  return (
    <>
      <div className="grid grid-cols-10 dark:bg-[#020202] max-md:block text-black dark:text-white">
        <Sidebar/>
        <div className="col-span-8 max-lg:col-span-7">
          <Navbar/>
          product
        </div>
      </div>
    </>
  );
};