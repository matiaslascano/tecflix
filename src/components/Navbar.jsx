import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[60px] px-4">
      <div className="">
        <h1 className="text-2xl md:text-4xl">
          Tec<span className="text-red-600 font-bold">FLIX</span>
        </h1>
      </div>
      <div>
        <Image
          src="/open.png"
          alt="icono menu"
          width={20}
          height={20}
          className="object-contain md:hidden"
        />
      </div>
    </div>
  );
};

export default Navbar;
