import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="sticky top-0 z-10 ">
      <div className="md:h-[80px] h-[60px] 
       flex justify-between items-center bg-[#333333] px-4 py-3">
        <a
          href="#"
          className="cursor-pointer md:text-2xl text-xl font-bold text-red-600"
        >
          Hotty.com
        </a>
        <div className="text-white font-bold text-[20px] flex gap-2 items-center">
          <div onClick={() => setToggle(!toggle)} className="md:hidden">
            <FaBars />
          </div>
          <div className="hidden md:flex gap-2 items-center">
            <a href="#" className="cursor-pointer">
              Home
            </a>
            <a href="#" className="cursor-pointer">
              Contact
            </a>
            <a href="#" className="cursor-pointer">
              About
            </a>
          </div>
        </div>
      </div>

      {toggle && (
        <div
          className=" md:hidden
          flex justify-between items-center text-xl font-bold 
        absolute top-18 mt-1  left-0 w-full h-full bg-[#333333] px-8 py-6"
        >
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
