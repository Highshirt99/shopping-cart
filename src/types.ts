import React from "react";


export type ProductType = {
  id: number;
  image: any;
  company: string;
  heading: string;
  about: string;
  price: number;
  discount: string;
  originalPrice: number;
  amount?: number;
  thumbnails: []
}

export type CartContextType = {
  cartIsOpen: boolean;
  setCartIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleCartIsOpen: () => any;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleIsOpen: () => any;
  products: ProductType[] | null;
  setProducts:  React.Dispatch<React.SetStateAction<ProductType[] | null>>;
  productsArr: ProductType[]


};


