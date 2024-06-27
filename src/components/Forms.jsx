import React from 'react'
import FormsInput from './FormsInput'
import { AiOutlineEye } from "react-icons/ai";
import Button from './Button';
import Select from './Select';

const Forms = () => {
  return (
    <div className='flex justify-center'>
      <form action="" className='flex flex-col space-y-[1.25rem] pt-5'>
        <Select />
        <FormsInput 
        label="Username"
        placeholder="Enter your username"
        icon={<AiOutlineEye />}
        type="text"
        />
        <FormsInput 
        label="Password"
        placeholder="Enter your password"
        icon={<AiOutlineEye />}
        type="text"
        />
        <div className='flex justify-between'>
         <label htmlFor="checkbox">
                <input type="checkbox" />
                <span>Remember me</span>
            </label>
            <button className='text-[#0086C9]'>Forgot Password</button>
        </div>
        <Button />
      </form>
    </div>
  )
}

export default Forms
