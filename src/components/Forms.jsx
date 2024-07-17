import React, { useState } from "react";
import FormsInput from "./FormGroup";
import { AiOutlineEye } from "react-icons/ai";
import Button from "./Button";
import Select from "./Select";
import FormGroup from "./FormGroup";
import { Navigate, useNavigate } from "react-router-dom";
import defaultCredentials from "../Data";
import loginApi from "../services/loginApi";

const Forms = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginAs, setLoginAs] = useState("");
  
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (!username || !password || !loginAs){
      return
    }
    const response = loginApi(username, password, loginAs)
    if (!response){
      return
    }
    navigate("/dashboard")
  };

  return (
    <div className="flex justify-center">
      <form className="flex flex-col space-y-[1.25rem] pt-5" onSubmit={handleLogin}>
        <FormGroup label="Login as">
          <select
            id="category"
            name="category"
            className="w-[16.375rem] rounded-lg px-[0.875rem] py-[0.625rem] border space-x-[0.375rem]"
            onChange={(e) => setLoginAs(e.target.value)}
          >
            <option value=""></option>
            <option value="administrator">Administrator</option>
            <option value="staff">Staff</option>
          </select>
        </FormGroup>
        <FormGroup label="Username">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="w-[16.375rem] rounded-lg pl-[0.875rem] pr-9 py-[0.625rem] border space-x-[0.375rem]"
          />
        </FormGroup>
        <FormGroup label="Password">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-[16.375rem] rounded-lg pl-[0.875rem] pr-9 py-[0.625rem] border space-x-[0.375rem]"
          />
        </FormGroup>

        <div className="flex justify-between gap-1">
          <label htmlFor="checkbox">
            <input type="checkbox" />
            <span className="">Remember me</span>
          </label>
          <button className="text-[#0086C9]">Reset Password</button>
        </div>
        <button
          className="w-[16.375rem] rounded-lg px-[0.875rem] py-[0.625rem] bg-[#0086C9] text-white flex justify-center hover:bg-[#44a3e3] cursor-pointer"
         
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Forms;
