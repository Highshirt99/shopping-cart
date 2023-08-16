import React from "react";

const NavLinks = () => {
  return (
    <div>
      <ul className="flex flex-col lg:items-center lg:flex-row md:flex-row gap-4 font-bold text-[14px] cursor-pointer py-12 px-4 lg:py-4 mt-8 lg:mt-1 md:mt-1 md:py-4 md:text-gray-500 lg:text-gray-500 ">
        <li className="hover:border-b-[3px] hover:border-b-Orange w-fit hover:text-black">
          Collections
        </li>
        <li className="hover:border-b-[3px] hover:border-b-Orange hover:text-black w-fit">Men</li>
        <li className="hover:border-b-[3px] hover:border-b-Orange w-fit hover:text-black">Women</li>
        <li className="hover:border-b-[3px] hover:border-b-Orange w-fit hover:text-black">About</li>
        <li className="hover:border-b-[3px] hover:border-b-Orange w-fit hover:text-black">Contact</li>
      </ul>
    </div>
  );
};

export default NavLinks;
