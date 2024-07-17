import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaArrowUp } from "react-icons/fa6";
import ArrowUp from "../assets/icons/arrow-up.png";

const Card = ({ name, icon, number, percentage }) => {
  return (
    <div className="h-[7.5rem] w-[23.375rem] border border-bg-[#D0D5DD] rounded-lg shadow shadow-[#D0D5DD] flex flex-col gap-2 p-6 font-Poppins ">
      <div className="flex justify-between items-center">
        <p className="text-[#667085] text-[0.875rem]">{name}</p>
        <svg className="w-5 h-5">
          <use xlinkHref={icon} className=" fill-white stroke-black"></use>
        </svg>
      </div>
      <div className="flex justify-between items-center font-Poppins">
        <p className="leading-[2.75rem] tracking-[-2%] font-semibold text-[1.5rem]">
          {number}
        </p>
        <div className="w-[4.375rem] h-6 rounded-2xl bg-[#ECFDF3] flex justify-center items-center gap-1">
          <img src={ArrowUp} alt="arrow up" />
          <p className="text-[#027A48] leading-5 font-normal text-[0.875rem]">
            {percentage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
