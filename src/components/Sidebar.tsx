import React, { useContext } from "react";
import NavLinks from "./NavLinks";
import closeIcon from "../assets/icon-close.svg";
import { CartContext } from "../App";
import { CartContextType } from "../types";

const Sidebar = () => {
  const { isOpen, toggleIsOpen } = useContext<CartContextType>(CartContext);
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } lg:hidden md:hidden z-[10000] border px-4 fixed top-0 w-[50%] bg-white h-screen max-h-screen `}
    >
      <img
        src={closeIcon}
        alt=""
        width="12px"
        onClick={toggleIsOpen}
        className="absolute cursor-pointer left-8 top-10"
      />
      <NavLinks />
    </div>
  );
};

export default Sidebar;
