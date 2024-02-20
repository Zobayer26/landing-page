import { HeroImage } from "../utils/Image";
import React from 'react'
const Hero = () => {
  return (
    <div className=" mt-2 lg:flex lg:max-w-[1200px] md:max-w-[660px] max-w-[420px] mx-auto">
      <a href="#" className="flex cursor-pointer flex-wrap justify-between gap-y-8">
        {HeroImage.map((item) => (
          <img key={item.id} src={item.src} alt="" width={180} height={180} />
        ))}
      </a> 
    </div>
  );
};

export default Hero;
