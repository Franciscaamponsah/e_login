import React from 'react'
import FormsInput from './FormsInput'
import { AiOutlineEye } from "react-icons/ai";
import Button from './Button';
import Select from './Select';

const Forms = () => {
  return (
    <div className="flex justify-center">
      <form action="" className="flex flex-col space-y-[1.25rem] pt-5">
        <Select />
        <FormsInput
          label="Username"
          placeholder="Enter your username"
          type="text"
        />
        <FormsInput
          label="Password"
          placeholder="Enter your password"
          icon={<AiOutlineEye />}
          type="text"
        />
        <div className="flex justify-between">
          <label htmlFor="checkbox">
            <input type="checkbox" />
            <span className="pl-1">Remember me</span>
          </label>
          <button className="text-[#0086C9]">Forgot Password</button>
        </div>
        <button
          className="w-[16.375rem] rounded-lg px-[0.875rem] py-[0.625rem] bg-[#0086C9] text-white flex justify-center hover:bg-[#44a3e3] cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            console.log("Hello World");
          }}
        >Login</button>
      </form>
    </div>
  );
}

export default Forms
