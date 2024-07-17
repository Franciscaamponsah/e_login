import React from "react";
import { CiSettings } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";
import { Link} from "react-router-dom";

const UserOptions = ({ image, name, email }) => {
  return (
    <div className="absolute right-0 top-[4.4rem] w-[18.875rem] bg-white rounded-lg border border-bg-[#EAECF0]">
      <div className="border flex gap-3 items-center px-2 py-4">
        <figure className="w-10 h-10 border rounded-full">
          <img
            className="w-10 h-10 border rounded-full"
            src={image}
            alt="user image"
          />
        </figure>
        <div className="">
          <p className="text-[#344054] leading-6 font-medium">{name}</p>
          <p className="text-[#667085]">{email}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <button className="px-4 py-2 hover:bg-[#EAECF0] flex">
          <CiSettings size="1.8rem" />
          <span className="pl-3">Account settings</span>
        </button>
        <Link to={"/"} className="px-4 py-2 hover:bg-[#EAECF0] flex">
          <FiLogOut size="1.5rem" />
          <span className="pl-3">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default UserOptions;
