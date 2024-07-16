import React, { useState } from 'react'
import Logo from "../assets/images/ebits-logo 3.png";
import Notification from "../assets/icons/Notification.png";
import Profile from "../assets/images/profile.jpg";
import { IoIosArrowDown } from "react-icons/io";
import UserOptions from './UserOptions';

const Header = () => {

    const [isProfileOpen, setIsProfileOpen] = useState(false)

    const handleProfile = () =>{
        setIsProfileOpen( !isProfileOpen)
    }

  return (
    <div className="relative flex items-center justify-between w-full">
      <img className="" src={Logo} alt="ebits logo" />
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 hover:bg-[#EAECF0] rounded-full flex justify-center items-center cursor-pointer">
          <img className="h-6 w-6" src={Notification} alt="notification icon" />
        </div>
        <div className="flex items-center gap-2">
          <figure className="h-[2.5rem] w-[2.5rem] " onClick={handleProfile}>
            <img
              className="h-[2.5rem] w-[2.5rem] border-none border rounded-full outline-none"
              src={Profile}
              alt="user image"
            />
          </figure>
          <IoIosArrowDown onClick={handleProfile} />
        </div>
      </div>
      {
        isProfileOpen &&
      <UserOptions name="Olivia Rhye" email="oliviarhye@example.com" image={Profile}/>
      }
    </div>
  );
}

export default Header