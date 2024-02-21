import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gryellipse3 from "../assets/images/gryellipse3.png";
const data = [
  {
    para: "NexAi, Turn on light",
  },
  {
    para: "NexAi, set alarm of 5:00 am",
  },
  {
    para: "NexAi, measure this table",
  },
  {
    para: "NexAi, Turn on music",
  },
];
const data2 = [
  {
    para: "NexAi, measure this table",
  },
  {
    para: "NexAi, Turn on music",
  },
  {
    para: "NexAi, Turn on light",
  },
  {
    para: "NexAi, is the front door locked?",
  },
];
const data3 = [
  {
    para: "NexAi, Turn on TV",
  },
  {
    para: "NexAi, Turn on music",
  },
  {
    para: "NexAi, Turn of AC.",
  },
  {
    para: "NexAi, Lock the front door",
  },
];

const Nexaslider = () => {
  var slider1 = {
    dots: false,
    infine: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    pauseOnHover: false,
    cssEase: "linear",
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 4,
    pauseOnFocus: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  var slider2 = {
    dots: false,
    infine: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    pauseOnHover: false,
    cssEase: "linear",
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 4,
    pauseOnFocus: false,
    slidesToScroll: -1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  var slider3 = {
    dots: false,
    infine: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    pauseOnHover: false,
    cssEase: "linear",
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 4,
    pauseOnFocus: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const sliderdata1 = data.map((data, i) => (
    <div
      key={i}
      className="h-[220px] w-[340px] rounded-[16px]  shadow-[0px_4px_20px_0px_#02CDCF29] bg-[#090909] py-[72px] mx-4 hover:scale-[1.03] duration-500 transition-all"
    >
      <p className="ff-rech text-white md:text-[24px] sm:text-xl text-base leading-[38.4px] font-bold max-w-[254px] text-center mx-auto">
        {data.para}
      </p>
    </div>
  ));
  const sliderdata2 = data.map((data, i) => (
    <div
      key={i}
      className="h-[220px] w-[340px] rounded-[16px]  shadow-[0px_4px_20px_0px_#02CDCF29] bg-[#090909] py-[72px] mx-4 hover:scale-[1.03] duration-500 transition-all"
    >
      <p className="ff-rech text-white md:text-[24px] sm:text-xl text-base leading-[38.4px] font-bold max-w-[254px] text-center mx-auto">
        {data.para}
      </p>
    </div>
  ));
  const sliderdata3 = data.map((data, i) => (
    <div
      key={i}
      className=" mx-4 h-[220px] w-[340px] rounded-[16px] shadow-[0px_4px_20px_0px_#02CDCF29] bg-[#090909] py-[72px] hover:scale-[1.03] duration-500 transition-all"
    >
      <p className="ff-rech text-white md:text-[24px] sm:text-xl text-base leading-[38.4px] font-bold max-w-[254px] text-center mx-auto">
        {data.para}
      </p>
    </div>
  ));
  return (
    <>
      <div className="lg:pt-[200px] pt-[100px] relative z-[1]">
        <p className="ff-rech font-bold lg:leading-[50.4px] text-center md:text-[40px] text-[25px] text-[#02CDCF]">
          NexAi does all this. And more.
        </p>
        <p className="font-poppins font-normal md:text-base text-sm text-center max-w-[912px] text-[#B4B4B4] mx-auto pt-4 lg:pb-[90px] pb-7">
          Nexai is an advanced home assistant that will revolutionize the way we
          interact with our smart devices at home. Powered by sophisticated
          artificial intelligence, it leverages blockchain technology to offer a
          secure and efficient user experience.
        </p>
        <Slider {...slider1} className="slider-gap">
          {sliderdata1}
        </Slider>
        <Slider {...slider2} className="slider-gap my-5">
          {sliderdata2}
        </Slider>
        <Slider {...slider3} className="slider-gap">
          {sliderdata3}
        </Slider>
        <div className="w-[288px] h-[288px] blur-[200px] bg-[#02CDCF] rounded-full absolute top-[0%] right-0 z-[-1]"></div>
        <img
          src={gryellipse3}
          alt="gryellipse3"
          className="absolute top-0 left-0"
        />
      </div>
    </>
  );
};

export default Nexaslider;
