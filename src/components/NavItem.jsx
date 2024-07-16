import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const NavItem = ({ text, icon, displayDownIcon }) => {
  return (
    <li
      className="flex py-[0.625rem] pl-[1.313rem] pr-[1.75rem] hover:bg-[#EAECF0]"
      
    >
      <div className="flex items-center w-[100%] justify-between">
        <div className="flex gap-[0.625rem] items-center">
          {typeof icon === "string" ? (
            <svg className="w-6 h-6">
              <use xlinkHref={icon} className=" fill-white stroke-black"></use>
            </svg>
          ) : (
            icon
          )}
          <span>{text}</span>
        </div>
        {displayDownIcon && <IoIosArrowDown />}
      </div>
    </li>
  );
};

export default NavItem;
