import React from "react";
import { Facebook, Twitr, Telegram } from "./Icon";

const Footer = () => {
  return (
    <>
      <div className="bg-[url(./assets/images/footbg.webp)] bg-no-repeat bg-cover bg-center">
        <div
          className="max-w-[1140px] px-3 mx-auto"
          data-aos="zoom-in-right"
          data-aos-duration="2000"
        >
          <div className="flex flex-row flex-wrap lg:pt-[145px] w-full sm:pt-[50px] relative z-[1]">
            <div className="md:w-1/2 px-3 pt-9">
              <p className="ff-rech font-bold text-[#B4B5B5] text-base max-w-[356px] pb-[20px]">
                Nullam viverra natoque amet et sed scelerisque viverra fringilla
                platea. Ullamcorper.
              </p>
              <div className="flex gap-[12px]">
                <a href="https://www.facebook.com/" target="_blank">
                  <Facebook />
                </a>
                <a href="https://twitter.com/i/flow/login" target="_blank">
                  {" "}
                  <Twitr />
                </a>
                <a href="https://web.telegram.org/k/" target="_blank">
                  <Telegram />
                </a>
              </div>
            </div>
            <div className="md:w-1/2 px-3 w-full">
              <div className="flex flex-row flex-wrap -mx-3 pb-[30px] pt-8 lg:pt-0">
                <div className="w-1/2 px-3 flex lg:justify-end">
                  <ul>
                    <li className="font-bold text-[18px] ff-rech leading-[21.6px] text-white">
                      Quick links
                    </li>
                    <li className="pt-5">
                      <a
                        href=""
                        className="font-bold ff-rech leading-[19.2px] text-[#B7BAB9] text-base hover:text-[#fff] after:rounded-[10px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[white]"
                      >
                        Home
                      </a>
                    </li>
                    <li className="pt-5">
                      <a
                        href=""
                        className="font-bold ff-rech leading-[19.2px] text-[#B7BAB9] text-base  hover:text-[#fff] after:rounded-[10px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[white]"
                      >
                        Features
                      </a>
                    </li>
                    <li className="pt-5">
                      <a
                        href=""
                        className="font-bold ff-rech leading-[19.2px] text-[#B7BAB9] text-base  hover:text-[#fff] after:rounded-[10px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[white]"
                      >
                        Marketplace
                      </a>
                    </li>
                    <li className="pt-5">
                      <a
                        href=""
                        className="font-bold ff-rech leading-[19.2px] text-[#B7BAB9] text-base  hover:text-[#fff] after:rounded-[10px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[white]"
                      >
                        Tokens
                      </a>
                    </li>
                    <li className="pt-5">
                      <a
                        href=""
                        className="font-bold ff-rech leading-[19.2px] text-[#B7BAB9] text-base  hover:text-[#fff] after:rounded-[10px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[white]"
                      >
                        NexChat
                      </a>
                    </li>
                    <li className="pt-5">
                      <a
                        href=""
                        className="font-bold ff-rech leading-[19.2px] text-[#B7BAB9] text-base  hover:text-[#fff] after:rounded-[10px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[white]"
                      >
                        About
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-1/2 px-3 flex lg:justify-end">
                  <ul>
                    <li className="font-bold text-[18px] ff-rech leading-[21.6px] text-white">
                      Information's
                    </li>
                    <li className="pt-5">
                      <a
                        href=""
                        className="font-bold ff-rech leading-[19.2px] text-[#B7BAB9] text-base  hover:text-[#fff] after:rounded-[10px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[white]"
                      >
                        Contact
                      </a>
                    </li>
                    <li className="pt-5">
                      <a
                        href=""
                        className="font-bold ff-rech leading-[19.2px] text-[#B7BAB9] text-base  hover:text-[#fff] after:rounded-[10px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[white]"
                      >
                        Phone
                      </a>
                    </li>
                    <li className="pt-5">
                      <a
                        href=""
                        className="font-bold ff-rech leading-[19.2px] text-[#B7BAB9] text-base  hover:text-[#fff] after:rounded-[10px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[white]"
                      >
                        terms
                      </a>
                    </li>
                    <li className="pt-5">
                      <a
                        href=""
                        className="font-bold ff-rech leading-[19.2px] text-[#B7BAB9] text-base  hover:text-[#fff] after:rounded-[10px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[white]"
                      >
                        Privacy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border-b h-[2px] border-[#696F6E]"></div>
          <p className="py-5 text-[#B4B6B6] text-base ff-rech font-bold text-center">
            @Copyright.nexai
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
