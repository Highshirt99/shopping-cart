import React, { useContext, useEffect} from "react";
import { CartContext } from "../App";
import NavLinks from "./NavLinks";
import avatar from "../assets/image-avatar.png";
import cartIcon from "../assets/icon-cart.svg";
import logo from "../assets/logo.svg";
import { CartContextType } from "../types";

const Navbar = () => {
  const { toggleCartIsOpen } = useContext<CartContextType>(CartContext);
  const { products, setProducts, productsArr } = useContext(CartContext);
  // const [prods, setProds] = useState(products);

   
    const getProducts = () => {
      let productsFromStorage = localStorage.getItem("products") || "";

      if (productsFromStorage.length > 0) {
        productsFromStorage = JSON.parse(productsFromStorage); 
     
        if (Array.isArray(productsFromStorage)) {
          setProducts(productsFromStorage);
        }
      }
     
    };

 useEffect(() => {
   getProducts();
 }, [])
 



  return (
    <div className="hidden relative lg:block md:block border-b border-b-gray-300  p-3 w-[90%] mx-auto">
      <div className="flex items-center gap-8 ">
        <img src={logo} alt="logo" width="80px" />
        <NavLinks />
        <div className="absolute right-0 flex items-center justify-center gap-8">
          <div className="relative cursor-pointer">
            {products!?.length > 0 && (
              <div className="bg-Orange absolute -right-1 -top-1 w-[18px] h-[12px]  p-1 flex items-center  text-white rounded-[40%] ">
                <span className="text-[8px] mx-auto">{products?.length}</span>
              </div>
            )}
            <img
              src={cartIcon}
              alt=""
            
              width="20px"
              onClick={toggleCartIsOpen}
            />
          </div>
          <img
            src={avatar}
            alt=""
            width="50px"
            className="border border-red-300 rounded-[50%] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
