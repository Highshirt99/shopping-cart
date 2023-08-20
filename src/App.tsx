import React, { createContext, useState } from "react";
import "./App.css";
import Template from "./components/Template";
import { CartContextType, ProductType } from "./types";

export const CartContext = createContext<CartContextType>({
  cartIsOpen: false,
  setCartIsOpen: () => {},
  toggleCartIsOpen: () => {},
  isOpen: false,
  toggleIsOpen: () => {},
  setIsOpen: () => {},
  products: [],
  setProducts: () => {},
  productsArr: [],
  cartItemsLength: null,
  setCartItemsLength: () => {},
});

function App() {
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [cartItemsLength, setCartItemsLength] = useState<number | null>(null);
  const productsArr: ProductType[] = [];

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleCartIsOpen = () => {
    setCartIsOpen(!cartIsOpen);
  };

  return (
    <CartContext.Provider
      value={{
        cartIsOpen,
        setCartIsOpen,
        toggleCartIsOpen,
        isOpen,
        toggleIsOpen,
        setIsOpen,
        products,
        setProducts,
        productsArr,
        cartItemsLength,
        setCartItemsLength,
      }}
    >
      <div className="lg:px-[4rem] md:px-[3rem] font-bodyFont">
        <Template />
      </div>
    </CartContext.Provider>
  );
}

export default App;
