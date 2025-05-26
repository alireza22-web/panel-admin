import { useContext } from "react"
import ThemeToggle from "../buttonDark/ThemeToggle"
import { CartCantext } from "../../context/CartCantext"

export const Navbar = ({setDark})=>{
  const {setNav,nav} = useContext(CartCantext)
  return (
    <>
      <nav className="flex px-6 shadow dark:shadow-gray-800 py-3 max-md:py-5 justify-between items-center">
        <div className="profile flex max-md:text-lg items-center gap-2">
          <img className="p-4 rounded-full border"/>
          <span>علیرضا خوندابی</span>
        </div>
        <div className="flex gap-3">
          <button className="md:hidden dark:bg-gray-800 dark:text-gray-100 bg-gray-100 px-2 rounded-md" onClick={()=>setNav(!nav)}>
            منو
          </button>
          <ThemeToggle setDark={setDark}/>
        </div>
      </nav>
    </>
  )
}