import React from "react";
import loaderimg from "../assets/images/loaderimg.gif";
import logo from "../assets/images/logo.png";

const Loader = () => {
  return (
    <>
      <div className="loading bg-gradient-to-b from-[#000] to-[#000] min-h-screen fixed flex flex-col justify-center items-center left-0 right-0">
        <div className="typewriter">
          <h1 className="ff_luckydino font-normal cursor-pointer leading-[94%] drop-shadow-[0px_1.337px_0px_#000] sm:text-[80px] text-[50px] ff-lucky animate-bounce">
            <div className="flex justify-center relative">
              <img
                src={loaderimg}
                alt="loaderimg"
                className="w-[40%] h-[40%]"
              />
            </div>
            <div className="flex justify-center">
              <p className="ff-rech text-[70px] font-bold text-center text-[#02CDCF]">
                Nex
              </p>
              <img src={logo} alt="logo" className="pl-3 w-[10%] h-[10%]" />
            </div>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Loader;
