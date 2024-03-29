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
  thumbnails: [];
  images: {img: string;
    id: number}[]
}

export type CartContextType = {
  cartIsOpen: boolean;
  setCartIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleCartIsOpen: () => any;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleIsOpen: () => any;
  products: ProductType[] | null;
  setProducts:  React.Dispatch<React.SetStateAction<ProductType[]>>;
  productsArr: ProductType[],
  cartItemsLength: number | null,
  setCartItemsLength: React.Dispatch<React.SetStateAction<number | null>>;
  index: number;
  setIndex:  React.Dispatch<React.SetStateAction<number>>;


};


