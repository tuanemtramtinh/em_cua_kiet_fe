import React from "react";

const Input = ({
  label,
  type,
  id,
  placeholder = "",
  labelStyle = "",
  inputStyle = "",
}) => {
  return (
    <div>
      <label htmlFor={id} className={`mb-3 block ${labelStyle}`}>
        {label}
      </label>
      <input
        className={`px-3 py-2 outline-none ${inputStyle}`}
        type={type}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
