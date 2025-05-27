import { useMemo, useState } from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Sidebar } from "../components/sidebar/Sidebar";
import { users } from "../data/users";
import PaginationWrapper from "../components/pagination/PaginationWrapper ";

export const Users = () => {

  const [search,setSearch] = useState("")
  const [online,setOnline] = useState(false)
  const [admin,setAdmin] = useState(false)
  const [currentUsers, setCurrentUsers] = useState([]);

  
  const getUser = useMemo(()=>{
    if(admin && online){
      return users.filter(user=>{
        return user.role == "ادمین" && user.status == "online"
      })
    }else if(admin){
      return users.filter(user=>{
        return user.role == "ادمین"
      })
    }else if(online){
      return users.filter(user=>{
        return user.status == "online"
      })
    }else{
      return users
    }
  },[online,admin])

  const deleteUser = (id)=>{
    setCurrentUsers(item=>{
      return item.filter(i => i.id != id)
    })
  }

  const getUserSearch = useMemo(() => {
    return getUser.filter(user => 
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  
  
  return (
    <>
      <div className="grid grid-cols-10 dark:bg-[#020202] max-md:block text-black dark:text-white">
        <Sidebar/>
        <div className="col-span-8 max-lg:col-span-7">
          <Navbar/>
          <div className="pt-4 pb-8 px-6 max-sm:px-3 flex flex-col gap-3">
            <div className="flex flex-col gap-2 pb-3">
              <p className="dark:text-gray-500 text-gray-700">فیلتر بر اساس</p>
              <div className="flex gap-4">
                <label htmlFor="ch" className="flex gap-2 items-center w-fit p-2">
                  <div className="">
                    <input type="checkbox" name="ch" id="ch" onChange={()=>setOnline(!online)} className="sr-only peer"/>
                    <div className="w-5 h-5 border-2 border-gray-400 rounded peer-checked:bg-blue-600 peer-checked:border-blue-600 transition" />
                    <div className="absolute left-1 top-0.5 w-3 h-3 bg-white hidden peer-checked:block rounded" />
                  </div>
                  <span>آنلاین</span>
                </label>
                <label htmlFor="eck" className="flex gap-2 items-center w-fit p-2">
                  <div className="">
                    <input type="checkbox" name="eck" id="eck" onChange={()=>setAdmin(!admin)} className="sr-only peer"/>
                    <div className="w-5 h-5 border-2 border-gray-400 rounded peer-checked:bg-blue-600 peer-checked:border-blue-600 transition" />
                    <div className="absolute left-1 top-0.5 w-3 h-3 bg-white hidden peer-checked:block rounded" />
                  </div>
                  <span>ادمین</span>
                </label>
              </div>
            </div>
            <div className="relative ">
              <input placeholder="جستجو بر اساس نام کاربر" type="text" onChange={(e)=>setSearch(e.target.value)} value={search} className="bg-gray-200 w-full rounded-lg px-4 py-3 border-none outline-none dark:bg-gray-900"/>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute left-3 top-1/2 -translate-y-1/2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
            <div className="max-sm:overflow-x-scroll h-[315px] max-sm:h-[346px] scroll">
              <table className="w-full max-sm:text-sm h-fit  max-sm:mx-auto text-right border-b px-4 dark:bg-gray-800">
                <thead>
                  <tr className="border-b dark:bg-gray-950 bg-gray-200">
                    <th className="px-4 py-1 max-sm:px-2 max-sm:py-0.5">اسم</th>
                    <th className="px-4 py-1 max-sm:px-2 max-sm:py-0.5">ایمیل</th>
                    <th className="px-4 py-1 max-sm:px-2 max-sm:py-0.5">نقش</th>
                    <th className="px-4 py-1 max-sm:px-2 max-sm:py-0.5">وضعیت</th>
                    <th className="px-4 py-1 max-sm:px-2 max-sm:py-0.5">حذف</th>
                  </tr>
                </thead>
                <tbody className="">
                  {
                    currentUsers.map((item,i)=>{
                      return (
                        <tr className="even:bg-gray-200 even:dark:bg-gray-950" key={i}>
                          <td className="px-4 py-4 max-sm:px-3 max-sm:py-3">{item.name}</td>
                          <td className="px-4 py-4 max-sm:px-3 max-sm:py-3">{item.email}</td>
                          <td className="px-4 py-4 max-sm:px-3 max-sm:py-3">{item.role}</td>
                          {item.status == "online" ? <td className="px-4 py-4 max-sm:px-3 max-sm:py-3"><span className="px-[11px] bg-green-400 rounded-full max-sm:px-[9.5px]"></span></td> : <td className="px-4 py-4 max-sm:px-3 max-sm:py-3"><span className="px-[11px] bg-red-600 rounded-full max-sm:px-[9.5px]"></span></td>}
                          <td className="px-4 py-4 max-sm:px-3 max-sm:py-3" onClick={()=>deleteUser(item.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
            <PaginationWrapper data={search== "" ? getUser : getUserSearch} itemsPerPage={5} onPageDataChange={setCurrentUsers}/> 
          </div>
        </div>
      </div>
    </>
  );
};