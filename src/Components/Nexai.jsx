import React from "react";
import Button from "./Button";
import Aiimg from "../assets/images/AI-img.webp";
import aiimg from "../assets/images/aiimg.png";

const Nexai = () => {
  return (
    <div
      className="lg:py-[160px] px-3 relative z-[1] md:py-[80px] py-[50px]"
      id="about"
    >
      <div className="max-w-[1340px] mx-auto  border border-solid lg:py-[163px] py-[50px] border-[#FCFCFC] rounded-3xl bg-[url(./assets/images/AI-img.webp)] bg-cover bg-center bg-no-repeat">
        <div className="max-w-[1140px] px-3 mx-auto container">
          <div className="flex flex-row flex-wrap">
            <div className="lg:w-1/2 px-3 w-full">
              <p className="md:text-[40px] text-[25px] font-bold text-[#02CDCF] leading-[50.4px] ff-rech text-center lg:text-start mx-auto lg:mx-0">
                What is NexAi?
              </p>
              <p className="text-[#B8B8BA] font-poppins font-normal leadin-[25.6px] max-w-[546px] pt-4 pb-2 text-center lg:text-start mx-auto lg:mx-0">
                Beyond its convenience, Nexai revolutionizes the way you
                interact with your home environment. It enhances productivity,
                efficiency, and overall well-being. From managing your schedules
                to transforming the way you experience smart living, Nexai opens
                up a world of possibilities.
              </p>
              <p className="text-[#B8B8BA] font-poppins font-normal leadin-[25.6px] max-w-[564px] text-center lg:text-start mx-auto lg:mx-0">
                Nexai's software can be installed on all your smart devices,
                including smartphones, computers, smart TVs, and kitchen
                appliances. It acts as a centralized control hub, allowing you
                to manage and interact with all your devices seamlessly. Whether
                it's adjusting the temperature, turning on appliances, or even
                accessing files on your home computer from anywhere, Nexai
                empowers you with effortless control.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Button name="!mt-[40px]" text="Learn More" />
              </div>
            </div>
            <div className="lg:w-1/2 px-3 w-full flex justify-center">
              <img src={aiimg} alt="Aiimg" className="mix-blend-lighten" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[288px] h-[288px] blur-[200px] bg-[#02CDCF] rounded-full absolute top-[20%] right-0 z-[-1]"></div>
      <div className="w-[288px] h-[288px] blur-[200px] bg-[#02CDCF] rounded-full absolute top-[20%] right-0"></div>
    </div>
  );
};

export default Nexai;
