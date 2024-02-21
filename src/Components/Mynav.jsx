import React, { useState } from "react";
import Button from "./Button";

function Mynav() {
  const [show, setshow] = useState(true);
  function view() {
    setshow(!show);
    if (show === true) {
      document.body.classList.add("max-lg:overflow-hidden");
    } else {
      document.body.classList.remove("max-lg:overflow-hidden");
    }
  }
  return (
    <div className="xl:px-[30px] pt-4 relative z-[1]">
      <div className="pt-[13px] bg-[url(./assets/images/bgimg.webp)]  flex flex-col bg-right lg:bg-center bg-cover z-50 object-cover bg-no-repeat lg:bg-bgSize xl:min-h-screen ">
        <nav className="container max-w-[1300px] mx-auto lg:pr-3 lg:pl-32 px-3 ">
          <div className="flex items-center  py-4 justify-between">
            <div className="hidden md:block"></div>
            <ul
              className={`flex items-center gap-[20px] mb-0 py-[21px] justify-center mobileView ${
                show ? "right-[-100%]" : "right-0"
              }`}
            >
              <li>
                <a
                  href="#home"
                  onClick={view}
                  className=" font-poppins font-normal text-base text-white hover:text-[#02CDCF] after:rounded-[10px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#02CDCF]"
                >
                  Home
                </a>
              </li>
              <li onClick={view}>
                <a
                  href="#marketplace"
                  className=" font-poppins font-normal text-base text-white hover:text-[#02CDCF] after:rounded-[10px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#02CDCF]"
                >
                  Marketplace
                </a>
              </li>
              <li onClick={view}>
                <a
                  href="#about"
                  className=" font-poppins font-normal text-base text-white hover:text-[#02CDCF] after:rounded-[10px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#02CDCF]"
                >
                  About
                </a>
              </li>
              <li onClick={view}>
                <a
                  href="#nextchat"
                  className=" font-poppins font-normal text-base text-white hover:text-[#02CDCF] after:rounded-[10px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#02CDCF]"
                >
                  NexChat
                </a>
              </li>
              <li onClick={view}>
                <a
                  href="#token"
                  className=" font-poppins font-normal text-base text-white hover:text-[#02CDCF] after:rounded-[10px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#02CDCF]"
                >
                  Tokens
                </a>
              </li>
            </ul>
            <Button text="Sign Up" />
            <label
              className="cursor-pointer lg:hidden w-[32px] sm:h-[26px] h-[22px] relative z-50 flex justify-between flex-col"
              onClick={view}
            >
              <span
                className={`${
                  show
                    ? ""
                    : " rotate-[50deg] translate-y-[16px] sm:translate-y-[20px]"
                } bg-[#fff] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
              ></span>
              <span
                className={`${
                  show ? "" : "hidden"
                } bg-[#fff] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
              ></span>
              <span
                className={`${
                  show ? "" : "rotate-[-50deg] translate-y-[-50%]"
                } bg-[#fff] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
              ></span>
            </label>
          </div>
        </nav>
        <div className="flex-grow flex justify-center flex-col">
          <div className="container max-w-[1140px] mx-auto px-3  max-xl:pt-[60px] max-xl:pb-[60px]">
            <h2 className="ff-rech  font-normal text-white lg:text-[60px] sm:text-5xl text-3xl lg:leading-[75px] max-w-[577px]">
              <span className=" text-[#02CDCF]  ">Nexai</span> is an advanced
              AI-powered home assistant
            </h2>
            <p className="font-poppins font-normal text-base text-[#b3b7bb] pt-5">
              Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla
              odio.
            </p>
            <div className="lg:ml-5">
              <Button name="!mt-16 !max-sm:mt-4" text="Know More" />
            </div>
          </div>
        </div>
        <div className="w-[262px] h-[262px] blur-[200px] bg-[#02CDCF] rounded-full absolute top-[20%] left-0 z- [-1]"></div>
      </div>
    </div>
  );
}

export default Mynav;
