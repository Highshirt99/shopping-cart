import React, { useContext, useEffect} from "react";
import deleteIcon from "../assets/icon-delete.svg";
import { CartContext } from "../App";

const Cart = () => {
  const { products, setProducts } = useContext(CartContext);

  const total = products?.reduce((prev, curr) => {
    return prev + curr.price * curr.amount!;
  }, 0);
 

  useEffect(() => {
    let productsFromStorage = localStorage.getItem("products") || "";
    if (productsFromStorage.length > 0) {
      productsFromStorage = JSON.parse(productsFromStorage);
      if (Array.isArray(productsFromStorage)) {
        setProducts(productsFromStorage);
      }
    }
  }, [setProducts]);



  const deleteFromCart = (id: number) => {
    const filtered = products?.filter((item) => item.id !== id);
    setProducts(filtered!);
    localStorage.setItem("products", JSON.stringify(filtered));
  };

  return (
    <div className=" bg-white border shadow-lg z-[1000] min-h-[200px] h-auto rounded-[15px]  py-4 lg:w-[400px] md:w-[400px] absolute md:right-12 lg:right-12 top-4 mx-4 lg:mx-0 md:mx-0 w-[90%]">
      <h1 className="font-[600] p-4">Cart</h1>
      <hr />
      {products!?.length > 0 ? (
        products?.map((product) => (
          <div
            className="relative flex items-center gap-6 p-2"
            key={product.id}
          >
            <img src={product.image} alt="" width={60} className="rounded-md" />
            <div className="mt-4">
              <p className="text-gray-400">{product.heading}</p>
              <p className="text-gray-400">
                ${product.price} x {product.amount}
              </p>
              <span className="font-bold">
                ${product.price * product.amount!}
              </span>
            </div>

            <img
              src={deleteIcon}
              alt=""
              className="absolute cursor-pointer right-5"
              onClick={() => {
                deleteFromCart(product.id);
              }}
            />
          </div>
        ))
      ) : (
        <p className="text-[13px] font-[600] text-gray-400 py-4 flex justify-center items-center">
          Your cart is empty
        </p>
      )}
      {products!?.length > 0 && (
        <div>
          <p className="m-2">Total = <span className="ml-8 font-bold"> ${total}</span></p>
          <div className="m-2">
            <button className=" text-white bg-Orange  w-[100%] p-2 hover:bg-paleOrange rounded-md text-center text-[12px]">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
