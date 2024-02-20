import React from 'react'
const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="h-[1px] w-full bg-white "></div>
      <div className=" my-4 text-center text-lg font-bold">
        © 2023 {" "}
        <a className=" text-blue-500 underline" href="#">
          Duckist
        </a>
       .{" "}All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
