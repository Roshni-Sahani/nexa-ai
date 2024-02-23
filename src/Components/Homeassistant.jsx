import React from "react";
import artboardimg from "../assets/images/artboardimg.webp";
import Button from "./Button";
const Homeassistant = () => {
  return (
    <div
      className="lg:pt-[80px] lg:pb-[120px] pb-[80px] relative pt-[50px]"
      id="home"
    >
      <div className="container xl:max-w-[1246px] xl:px-3 mx-auto">
        <div className="flex flex-wrap flex-row">
          <div className="lg:w-1/2 px-3 w-full flex justify-center">
            <img src={artboardimg} alt="artboardimg" className="max-w-[90%]" />
            <div className="w-[288px] h-[288px] blur-[200px] bg-[#02CDCF] rounded-full absolute top-[20%] left-[14%] z-[-1]"></div>
          </div>
          <div className="lg:w-1/2 px-3 w-full flex flex-col justify-center">
            <p
              className="ff-rech font-bold md:text-[40px] text-[25px] lg:leading-[50.4px] text-[#02CDCF] lg:max-w-[517px] pt-4 lg:pt-0 text-center lg:text-start lg:mx-0 mx-auto"
              data-aos="fade-right"
            >
              Ai-Powered Home Assistant
            </p>
            <p
              className="font-poppins text-base font-normal text-[#B4B4B4] max-w-[517px] pt-4 pb-1.5 text-center lg:text-start lg:mx-0 mx-auto"
              data-aos="fade-up"
            >
              {" "}
              data-aos="fade-up" Nexai is an advanced AI-powered home assistant
              that brings the future to your fingertips. With its ability to
              engage in natural, fluent conversations in over 15 languages,
            </p>
            <p className="font-poppins text-base font-normal text-[#B4B4B4] max-w-[517px] pb-1.5 leading-[25.6px] text-center lg:text-start lg:mx-0 mx-auto">
              Nexai offers an incredibly futuristic experience. It can take the
              initiative to ask about your day, schedule meetings, provide
              timely reminders
            </p>
            <p
              className="font-poppins text-base font-normal text-[#B4B4B4] max-w-[505px] leading-[25.6px] text-center lg:text-start mx-auto lg:mx-0"
              data-aos="fade-up"
            >
              assist with cooking by suggesting ingredients, track your fitness
              and nutrition goals, and even handle bill payments.
            </p>
            <div
              className="flex justify-center lg:justify-start "
              data-aos="flip-right"
            >
              <Button name="!lg:mt-[40px] mt-[20px]" text="Learn More" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[288px] h-[288px] blur-[200px] bg-[#02CDCF] rounded-full absolute top-[20%] right-0 "></div>
    </div>
  );
};

export default Homeassistant;
