import React, { useState } from "react";

const FormGroup = ({ icon, label, children }) => {
  const [username, setUsername] = useState("");
  return (
    <div className="flex flex-col relative">
      <label htmlFor="" className="text-[0.875rem] leading-5 pb-[0.375rem]">
        {label}
      </label>
      <span className="absolute right-[0.875rem] bottom-3">{icon}</span>
      {children}
    </div>
  );
};

export default FormGroup;
