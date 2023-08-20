import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../App";
import { productsList } from "../productsList";
import next from "../assets/icon-next.svg";
import previous from "../assets/icon-previous.svg";
import plus from "../assets//icon-plus.svg";
import minus from "../assets/icon-minus.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { ProductType } from '../types';

const Products = () => {
  let { productsArr, setCartIsOpen, setCartItemsLength } =
    useContext(CartContext);
  const [amount, setAmount] = useState<number>(1);

  const [allProducts, setAllProducts] = useState<any[] | null>(null);

  useEffect(() => {
    setAllProducts(productsList);
  }, []);

  const addToCart = (item: any) => {
    let existingProducts = localStorage.getItem("products") || "";

    // Checking if products exist in the local storage.
    if (existingProducts.length > 0) {
      // console.log(existingProducts)
      existingProducts = JSON.parse(existingProducts);

      if (Array.isArray(existingProducts)) {
        // Checking if item already exists in the cart.
        const checkIndex = existingProducts.findIndex(
          (product) => product.id === item.id
        );

        if (checkIndex !== -1) {
          existingProducts[checkIndex].amount++;
        } else {
          existingProducts.push({ ...item });
        }
        localStorage.setItem("products", JSON.stringify(existingProducts));
        setCartItemsLength(existingProducts.length);
      }
    }

    // if no item exists initially.
    else {
      productsArr.push({ ...item });
      localStorage.setItem("products", JSON.stringify(productsArr));
      setCartItemsLength(productsArr.length);
    }

    // setProducts((prev:ProductType[] ) => [...prev, item])

    setCartIsOpen(false);
  };

  const handleIncrement: any = (id: number) => {
    productsList.forEach((product) => {
      if (product.id === id) {
        product.amount++;

        setAmount(amount + 1);
      }
    });
  };
  const handleDecrement = (id: number) => {
    productsList.forEach((product) => {
      if (product.id === id && product.amount! > 1) {
        product.amount--;
        setAmount(amount - 1);
      }
    });
  };

  return (
    <div className="lg:px-[3rem] p-[2rem] mb-4 flex flex-col gap-12">
      {allProducts?.map((product) => {
        return (
          <div
            className="flex flex-col lg:flex-row lg:gap-[8rem] gap-[2rem]"
            key={product.id}
          >
            <div className="w-fit">
              <div className="relative">
                <img
                  src={product.image}
                  alt="product.heading"
                  className="rounded-[10px] lg:w-[300px] w-full h-[250px] object-cover"
                />
                <img
                  src={previous}
                  alt=""
                  className="absolute left-3 top-[50%] cursor-pointer rounded-sm bg-white p-1"
                />
                <img
                  src={next}
                  alt=""
                  className="absolute right-8  md:right-10 bg-white p-1 top-[50%] cursor-pointer rounded-sm"
                />
              </div>
              <div className="flex gap-4 mt-8">
                {product.thumbnails.map((thumbnail: any) => (
                  <img
                    key={thumbnail}
                    src={thumbnail}
                    alt=""
                    className="rounded-[10px] w-[100px] h-[100px] object-cover"
                  />
                ))}
              </div>
            </div>
            <aside className="lg:mt-[3rem] md:mt-[3rem] lg:w-[500px] w-[320px]">
              <div className="mb-4">
                <h6 className="text-[10px] text-Orange font-bold mb-1">
                  {product.company}
                </h6>
                <h1 className="font-bold text-[20px] tracking-wide w-[250px]">
                  {product.heading}
                </h1>
              </div>
              <p className="text-[16px] text-gray-500 mb-4">{product.about}</p>
              <div className="flex justify-between mb-4 md:gap-4 lg:gap-4 lg:flex-col md:flex-col">
                <div className="flex gap-4">
                  <p className="text-[24px] font-bold">${product.price}</p>
                  <span className="text-Orange bg-paleOrange text-[16px] w-[50px] flex justify-center items-center p-[2px] rounded-sm">
                    {product.discount}
                  </span>
                </div>
                <span className="text-gray-400 line-through">
                  ${product.originalPrice}
                </span>
              </div>
              <div className="flex flex-col gap-5 lg:flex-row md:flex-row">
                <div className="flex items-center md:justify-center h-[50px] bg-lightGrayishBlue  lg:h-[30px] md:h-[30px] w-[100%] md:w-[100px] lg:w-[100px] md:gap-5 lg:gap-5 justify-around lg:justify-center rounded-md">
                  <img
                    onClick={() => handleDecrement(product.id)}
                    src={minus}
                    alt=""
                    className="cursor-pointer"
                  />
                  <span className="font-bold"> {product.amount} </span>
                  <img
                    onClick={() => handleIncrement(product.id)}
                    src={plus}
                    alt=""
                    className="cursor-pointer"
                  />
                </div>

                <button
                  onClick={() => {
                    addToCart(product);
                  }}
                  className="flex h-[50px] lg:h-[30px] md:h-[30px] hover:bg-paleOrange  text-white w-[100%] md:w-[120px] lg:w-[120px] gap-2 justify-center items-center bg-Orange p-1 rounded-md cursor-pointer"
                >
                  <AiOutlineShoppingCart className="text-[15px]" />

                  <span className="mt-1 text-[10px]">Add to cart</span>
                </button>
              </div>
            </aside>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
