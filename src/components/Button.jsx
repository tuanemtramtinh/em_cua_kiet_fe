import React from "react";
import { Link } from "react-router-dom";

const Button = ({ href = "", style = "", content = "", handle = () => {} }) => {
  return (
    <>
      {href ? (
        <Link
          to={href}
          className={`${style} px-5 py-2 text-center text-xl font-bold`}
        >
          {content}
        </Link>
      ) : (
        <button
          className={`${style} px-5 py-2 text-center text-xl font-bold`}
          onClick={handle}
        >
          {content}
        </button>
      )}
    </>
  );
};

export default Button;
