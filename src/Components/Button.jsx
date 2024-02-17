import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        className={`${props.name} bg-[#02CDCF] py-[18px] px-[32px] font-bold ff-rech rounded-[12px]  before:z-[-1] border before:ease-linear before:hover:bg-[02cccfbd] duration-300  hover:shadow-[0px_4px_20px_0px_#02cccfbd] z-[1]  hover:text-[#000]  before:transition-all  before:hover:bg-white before:duration-300 before:absolute before:top-[-100%] before:bg-transparent before:hover:top-[0] before:hover:w-full before:left-0 before:w-full before:h-full border-none outline-none hover:outline-[##02CDCF] relative overflow-hidden inline-block`}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
