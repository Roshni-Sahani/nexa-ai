import React from "react";
import { Clock, Game, Message, Setting } from "./Icon";
const Unique = () => {
  return (
    <div
      id="marketplace"
      className="lg:pb-[160px] pb-[80px] relative"
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <div className="max-w-[1340px] px-3 mx-auto container">
        <div className="bg-[url(./assets/images/bgservices.webp)] bg-cover bg-no-repeat bg-center border border-solid border-[#fcfcfc] rounded-[32px] sm:px-[100px] px-8 sm:py-20 py-8  h-[810px]">
          <p className="text-center text-white font-bold leading-[50.4px] md:text-[40px] text-[25px] ff-rech text-">
            Unique features
          </p>
          <p className="text-center font-normal text-base leading-[25.6px] lg:pt-4 font-poppins text-[#b7b7b7] pb-8 max-w-[397px] mx-auto">
            ability to engage in natural, fluent conversations in over 15
            languages,
          </p>
          <div className="overflow-y-scroll no-scroll h-[570px]">
            <div className="flex flex-row flex-wrap">
              <div className="md:w-1/2 px-3 w-full">
                <div className="md:max-w-[364px] bg-white rounded-[16px] sm:px-[24px] px-4 sm:py-[30px] py-4 md:mb-[150px] mb-5 hover:scale-[1.05] my-3 transition-all duration-700">
                  <Setting />
                  <p className="md:text-xl text-sm ff-rech !lg:leading-[32px] font-bold md::pt-[30px] pt-[5px] pb-[10px]">
                    Remote Access and File Management
                  </p>
                  <p className="font-poppins md:text-base text-sm font-normal text-[#545454] md:max-w-[316px] md:pb-5">
                    {" "}
                    Imagine you're at work, and you realize you forgot to bring
                    an important file stored on your desktop computer at home.
                    No worries! Simply open the Nexai app on your phone,
                    initiate a call with Nexai, and request access to your
                    computer.{" "}
                  </p>
                </div>
                <div className="md:max-w-[364px] bg-white rounded-[16px] px-[24px] py-[30px] hover:scale-[1.05] my-3 transition-all duration-700">
                  <Message />
                  <p className="lg:text-xl ff-rech lg:leading-[32px] font-bold lg:pt-[30px] pt-5 lg:pb-[10px]">
                    Autonomous and Natural Language Communication
                  </p>
                  <p className="font-poppins lg:text-base text-sm font-normal text-[#545454] md:max-w-[316px] lg:pb-5">
                    {" "}
                    Nexai goes beyond standard home assistants by taking
                    proactive initiatives and engaging in natural language
                    conversations. It communicates with you as if you're talking
                    to a friend,{" "}
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 px-3 md:pt-[300px] flex-col lg:items-end flex pb-10 w-full pt-5">
                <div className="md:max-w-[364px] bg-white rounded-[16px] px-[24px] py-[30px] md:mb-[150px] mb-5 hover:scale-[1.05] my-3 transition-all duration-700">
                  <Clock />
                  <p className="lg:text-xl  text-sm ff-rech lg:leading-[32px] font-bold lg:pt-[30px] pt-[5px] pb-[10px]">
                    Real-time Home Monitoring
                  </p>
                  <p className="font-poppins lg:text-base text-sm font-normal text-[#545454] md:max-w-[316px] lg:pb-5">
                    {" "}
                    While you're out with your family, you may wonder if you
                    remembered to turn off the stove. Thanks to Nexai, this is
                    no longer a concern. Using the Nexai app, you can initiate a
                    video call with Nexai and activate the mini drone stationed
                    in your home.
                  </p>
                </div>
                <div className="md:max-w-[364px] bg-white rounded-[16px] px-[24px] py-[30px] hover:scale-[1.05] my-3 transition-all duration-700">
                  <Game />
                  <p className="lg:text-xl ff-rech lg:leading-[32px] font-bold lg:pt-[30px] pt-5 lg:pb-[10px]">
                    Intelligent Contextual Awareness
                  </p>
                  <p className="font-poppins lg:text-base text-sm font-normal text-[#545454] md:max-w-[316px] lg:pb-5">
                    {" "}
                    Nexai utilizes the hardware sensors placed throughout your
                    home to understand your location and deliver relevant
                    information or actions. For instance, if you're in the
                    bedroom and there's a smart TV present, Nexai will
                    automatically display on the TV screen.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[262px] h-[262px] blur-[200px] bg-[#02CDCF] rounded-full absolute bottom-[30%] left-0"></div>
          <div className="w-[262px] h-[262px] blur-[200px] bg-[#02CDCF] rounded-full absolute top-[30%] right-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Unique;
