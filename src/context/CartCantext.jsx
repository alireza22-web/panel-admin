import { createContext, useEffect, useState } from "react";

export const CartCantext = createContext()

export const CartContextfunc = ({children})=>{

  
  const [nav,setNav] = useState(false)

  return (
    <CartCantext.Provider value={{setNav,nav}}>
      {children}
    </CartCantext.Provider>
  )
} 