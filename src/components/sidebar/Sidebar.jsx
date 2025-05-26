import { Link, NavLink } from "react-router-dom"
import ThemeToggle from "../buttonDark/ThemeToggle"
import { useContext } from "react"
import { CartCantext } from "../../context/CartCantext"

export const Sidebar = ()=>{
  const listItem = [
    {
      title:'داشبورد',
      icon:<path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />,
      link:'/',
    },
    {
      title:'کاربران',
      icon:<path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />,
      link:'/users',
    },
    {
      title:'محصولات',
      icon:<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />,
      link:'/products',
    },
    {
      title:'سفارش ها',
      icon:<path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />,
      link:'/orders',
    },
  ]

  const {setNav,nav} = useContext(CartCantext)
  
  return (
    <>
      <div className={`col-span-2 max-lg:col-span-3 bg-gray-100 max-md:fixed z-50 max-md:top-0 max-md:w-full ${nav ? "max-md:translate-x-full" : "max-md:translate-0"} transition-all duration-100 dark:bg-black h-screen border-gray-300 p-4`}>
        <div className="mt-6 text-center font-semibold text-3xl relative">
          <span>صفحه ادمین</span>
          <button className="md:hidden absolute left-10 top-2 max-sm:left-5" onClick={()=>setNav(!nav)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="mt-12 text-lg text-gray-700 dark:text-gray-500">
          {
            listItem.map((item,i)=>{
              return (
                <li key={i} className="mt-4 py-1 border-r-2 px-4 rounded-xs border-gray-500 hover:border-gray-800 hover:pr-6 transition-all duration-150 mx-4 ">
                  <NavLink to={item.link} onClick={()=>setNav(!nav)} className="flex gap-2 items-center justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">{item.icon}</svg>
                    <div>{item.title}</div>
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
        
      </div>
    </>
  )
}