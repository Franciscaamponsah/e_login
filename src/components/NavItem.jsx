import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const NavItem = ({ text, icon, displayDownIcon, onHandleShareHolder }) => {
  return (
    <li
      onClick={() => {
        onHandleShareHolder();
      }}
      className="flex py-[0.625rem] pl-[1.313rem] pr-[1.2rem] hover:bg-[#EAECF0] hover:text-gray-800 active:bg-gray-50 active:text-gray-800 active:link:bg-gray-50 active:link:text-gray-800 active:visited:bg-gray-50 active:visited:text-gray-800 rounded-sm
"
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
