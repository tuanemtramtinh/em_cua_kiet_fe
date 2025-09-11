import React from "react";
import Input from "./Input";
import Button from "./Button";
import { useForm } from "react-hook-form";

const Form = ({
  title,
  style = "",
  listInput = [],
  button = null,
  onSubmit = () => {},
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      className={`flex w-1/2 flex-col gap-8 rounded-4xl bg-[#FCFFED] p-10 shadow-md ${style}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="text-center text-3xl font-bold text-[#FF9C33]">
        {title}
      </div>
      {listInput.map((input) => (
        <Input
          key={input.id}
          {...input}
          {...register(input.id, input.rules)}
          error={errors[input.id]?.message}
        />
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
