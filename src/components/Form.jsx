import React from "react";
import Input from "./Input";
import Button from "./Button";

const Form = ({ title, style = "", listInput = [], button = null }) => {
  return (
    <form
      className={`flex w-1/2 flex-col gap-8 rounded-4xl bg-[#FCFFED] p-10 shadow-md ${style}`}
    >
      <div className="text-center text-3xl font-bold text-[#FF9C33]">
        {title}
      </div>
      {listInput.map((input) => (
        <Input key={input.id} {...input} />
      ))}
      {button && (
        <Button
          style={`${button.style} cursor-pointer`}
          content={button.content}
        />
      )}
    </form>
  );
};

export default Form;
