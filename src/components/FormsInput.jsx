import React from 'react'

const FormsInput = ({ icon, label, placeholder, type }) => {
    return (
      <div className="flex flex-col relative">
        <label htmlFor="" className="text-[0.875rem] leading-5 pb-[0.375rem]">
          {label}
        </label>
        <span className="absolute right-[0.875rem] bottom-3">
          {icon}
        </span>
        <input
          type={type}
          placeholder={placeholder}
          className="w-[16.375rem] rounded-lg pl-[0.875rem] pr-9 py-[0.625rem] border space-x-[0.375rem]"
        />
        {/* <label for="category" class="text-sm font-medium text-gray-700">Category:</label>
            <select id="category" name="category" class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            </select> */}
      </div>
    );
}

export default FormsInput