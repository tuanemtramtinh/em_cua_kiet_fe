import React from "react";

const Input = React.forwardRef(
  (
    {
      // @ts-ignore
      label,
      // @ts-ignore
      type,
      // @ts-ignore
      id,
      // @ts-ignore
      placeholder = "",
      // @ts-ignore
      labelStyle = "",
      // @ts-ignore
      inputStyle = "",
      // @ts-ignore
      error,
      ...rest
    },
    ref,
  ) => {
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
          ref={ref}
          {...rest}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  },
);

export default Input;
