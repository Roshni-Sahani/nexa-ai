import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hex2 from "../assets/images/hex2.webp";
import gryellipse1 from "../assets/images/gryellipse1.png";

const mycard = [
  {
    num: 1,
    text: "Security and Privacy",
    class: "pb-[145px]",
  },
  {
    num: 2,
    text: "Transparent and Reliable Data Management",
    class: "lg:translate-y-20",
  },
  {
    num: 3,
    text: "Self-learning and Personalization",
  },
  {
    num: 4,
    text: "Automated and Transparent Transactions",
    class: "lg:translate-y-20",
  },
];
const Blockchain = () => {
  const mycards = mycard.map((mycard, e) => (
    <div
      key={e}
      className={`${mycard.class} max-w-[327px] min-h-[367px] pt-[70px]  w-full bg-[url(./assets/images/hex2.webp)] bg-full bg-center bg-no-repeat`}
    >
      <div className="flex justify-center">
        <div
          className="w-[58px] h-[58px] rounded-full bg-[#040404]  shadow-[inset_0px_4px_16px_0px#02CDCF99] flex justify-center items-center
                "
        >
          <span className="text-white sm:text-[32px] text-2xl ff-rech font-bold text-center">
            {mycard.num}
          </span>
        </div>
      </div>
      <p className="text-white sm:text-xl text-base ff-rech font-bold sm:leading-[32px] text-center max-w-[212px] mx-auto pt-[30px]">
        {mycard.text}
      </p>
    </div>
  ));
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 8000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 982,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="relative z-[1] blockchain">
      <div className="xl:max-w-[1140px] px-3 mx-auto container">
        <div>
          <p
            className="font-bold text-[#02CDCF] md:text-[40px] text-[25px] ff-rech text-center"
            data-aos="fade-right"
          >
            Blockchain & AI technology
          </p>
          <p
            className="font-normal md:text-base text-sm font-poppins text-[#B4B4B4] max-w-[997px] text-center mx-auto md:pt-4"
            data-aos="fade-left"
          >
            Nexai is an advanced home assistant that will revolutionize the way
            we interact with our smart devices at home. Powered by sophisticated
            artificial intelligence, it leverages blockchain technology to offer
            a secure and efficient user experience.
          </p>
          <p
            className="text-white ff-rech md:text-[20px] text-sm font-bold lg:leading-[32px] max-w-[662px] text-center mx-auto lg:pt-[96px] lg:pb-[60px] py-5"
            data-aos="fade-left"
          >
            By building the software on blockchain, Nexai provides the following
            advantages
          </p>
        </div>
        <Slider {...settings}>{mycards}</Slider>
      </div>
      <div className="w-[288px] h-[288px] blur-[200px] bg-[#02CDCF] rounded-full absolute top-[0%] left-0 z-10"></div>
      <div className="w-[288px] h-[288px] blur-[200px] bg-[#02CDCF] rounded-full absolute top-[0%] right-0 z-[-1]"></div>
      <img
        src={gryellipse1}
        alt="gryellipse1"
        className="absolute top-[0%] right-0"
      />
    </div>
  );
};

export default Blockchain;
