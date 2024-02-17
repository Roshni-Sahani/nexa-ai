import React from "react";
import Button from "./Button";
import gryellipse1 from "../assets/images/gryellipse1.png";

const Ready = () => {
  return (
    <div className="lg:pt-72 pb-2 relative z-[1] pt-[50px]" id="token">
      <div className="max-w-[1140px] px-3 mx-auto container">
        <div className="flex flex-row flex-wrap">
          <div
            className="lg:w-1/2 px-3 w-full"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div>
              <p className="ff-rech font-bold lg:leading-[52px] md:text-[40px] text-white max-w-[517px] text-[30px]">
                Ready to get started{" "}
                <sapn className="text-[#02CDCF]">Talk to us Today</sapn>{" "}
              </p>
            </div>
          </div>
          <div
            className="lg:w-1/2 px-3 w-full lg:justify-end flex items-center mt-5 lg:mt-0"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <Button text="Get Started" />
          </div>
        </div>
        <div className="w-[288px] h-[288px] blur-[200px] bg-[#02CDCF] rounded-full absolute top-[0%] left-0 z-[-1]"></div>
      </div>
      <img
        src={gryellipse1}
        alt="gryellipse1"
        className="absolute bottom-0 right-[1%]"
      />
      <div className="w-[288px] h-[288px] blur-[200px] bg-[#02CDCF] rounded-full absolute bottom-[-55%] right-0 z-[-1]"></div>
    </div>
  );
};

export default Ready;
