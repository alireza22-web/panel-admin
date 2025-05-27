import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { CartContextfunc } from "./context/CartCantext";
import { Orders } from "./pages/Orders";
import { Users } from "./pages/Users";
import { Products } from "./pages/Products";
import { ProductsItem } from "./pages/ProductsItem";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextfunc>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/products/:id" element={<ProductsItem/>} />
            <Route path="/users" element={<Users/>} />
          </Routes>
        </CartContextfunc>
      </BrowserRouter>
    </>
  );
}

export default App;
