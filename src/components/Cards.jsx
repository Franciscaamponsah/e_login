import React from "react";

const Cards = ({ name, icon, handleOnClick }) => {
  return (
    // <div className='grid-cols-2'>

    <div className="flex justify-center " onClick={handleOnClick}>
      <div className="w-[9.313rem] h-24 border rounded-lg flex justify-center items-center hover:bg-[#E0F2FE] hover:border-[#0086C9] hover:text-[#0086C9] hover:stroke-[#0086C9] cursor-pointer focus:bg-[#0086C9] active:bg-[#E0F2FE]">
        <div className="flex flex-col justify-center text-center items-center">
          <svg className="w-6 h-6">
            <use
              xlinkHref={icon}
              className="stroke-[#344054] fill-white hover:stroke-[#0086C9]"
            ></use>
          </svg>
          <p className="leading-5">{name}</p>
        </div>
      </div>
      {/* <div className='w-[9.313rem] h-24 border rounded-lg px-[1.125rem] flex justify-center items-center mt-[1.438rem]'>
                <p className='w-[7.313rem] h-[2.5rem] leading-5 text-center'>{name}</p>
            </div> */}
    </div>
    // </div>
  );
};

export default Cards;
