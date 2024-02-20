import React from 'react'
type HeaderType = {
  header: string;
  icon: any;
  text: string;
};
const Header: React.FC<HeaderType> = ({ header, icon: Icon, text }) => {
  return (
    <div className="mx-auto mt-4 gap-8 flex flex-col  text-white ">
      <div className="text-center text-2xl">{header}</div>
      <div className="mx-auto relative w-[180px]">
        <div className="bg-rose-500 h-[6px]"></div>
        <div
          className=" flex justify-center items-center absolute top-[-15px] right-16 w-[40px] h-[40px]
        rounded-full bg-rose-500"
        >
          <Icon />
        </div>
      </div>
      <div className="font-bold mx-auto text-center text-lg">{text}</div>
    </div>
  );
};

export default Header;
