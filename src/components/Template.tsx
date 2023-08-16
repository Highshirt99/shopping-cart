import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Cart from "./Cart";
import avatar from "../assets/image-avatar.png";
import menuIcon from "../assets/icon-menu.svg";
import cartIcon from "../assets/icon-cart.svg";
import logo from "../assets/logo.svg";
import { CartContext } from "../App";
import { CartContextType } from "../types";
import Products from "./Products";


const Template = () => {
  const { cartIsOpen, toggleCartIsOpen, toggleIsOpen, setProducts, products} =
    useContext<CartContextType>(CartContext);


    useEffect(() => {
      const getProducts = () => {
        let productsFromStorage = localStorage.getItem("products") || "";
  
        if (productsFromStorage.length > 0) {
          productsFromStorage = JSON.parse(productsFromStorage);
          // console.log((productsFromStorage));
          if (Array.isArray(productsFromStorage)) {
            setProducts(productsFromStorage);
          }
        }
      };
      return getProducts();
  }, [setProducts]);
  

  return (
    <div className="relative">
      <Navbar />
      <div className="flex items-center gap-8 px-8 py-8 border-b lg:hidden md:hidden">
        <img
          src={menuIcon}
          alt=""
          onClick={toggleIsOpen}
          className="cursor-pointer"
          width="12px"
        />
        <img src={logo} alt="logo" width="80px" />
        <div className="absolute flex items-center gap-6 right-12">
        <div className="relative cursor-pointer">
           {products!?.length > 0 && <div className="bg-Orange absolute -right-1 -top-1 w-[18px] h-[12px]  p-1 flex items-center  text-white rounded-[40%] ">
              <span className="text-[8px] mx-auto">{products!?.length}</span>
            </div>}
            <img
              src={cartIcon}
              alt=""
              className="cursor-pointer"
              width="20px"
              onClick={toggleCartIsOpen}
            />
          </div>
          <img
            src={avatar}
            alt=""
            width="40px"
            className="border border-red-300 rounded-[50%] cursor-pointer"
          />
        </div>
        
      </div>
      {<Sidebar />}

      <main className="relative">
        {cartIsOpen && <Cart />}
        <Products />
      </main>
    </div>
  );
};

export default Template;
