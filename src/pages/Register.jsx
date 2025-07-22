import React from "react";
import Form from "../components/Form";

const Register = () => {
  const listInput = [
    {
      label: "Họ và tên: ",
      type: "text",
      id: "name",
      placeholder: "Nhập họ và tên của bạn",
      labelStyle: "text-lg font-semibold",
      inputStyle: "rounded-2xl bg-[#FFF8CE] w-full",
    },
    {
      label: "Số điện thoại: ",
      type: "tel",
      id: "phone",
      placeholder: "Nhập số điện thoại của bạn",
      labelStyle: "text-lg font-semibold",
      inputStyle: "rounded-2xl bg-[#FFF8CE] w-full",
    },
    {
      label: "Email: ",
      type: "email",
      id: "email",
      placeholder: "Nhập email của bạn",
      labelStyle: "text-lg font-semibold",
      inputStyle: "rounded-2xl bg-[#FFF8CE] w-full",
    },
    {
      label: "Mật khẩu: ",
      type: "password",
      id: "password",
      placeholder: "Nhập mật khẩu của bạn",
      labelStyle: "text-lg font-semibold",
      inputStyle: "rounded-2xl bg-[#FFF8CE] w-full",
    },
  ];

  const button = {
    style: "rounded-3xl bg-[#FF9C33] text-white",
    content: "Đăng ký",
  };

  return (
    <>
      <div className="flex flex-1 flex-col bg-[url(/background.svg)] bg-cover bg-center">
        <div className="container mx-auto flex flex-1 flex-col">
          <div className="relative flex flex-1 items-center justify-center py-10">
            <img
              className="absolute top-0 right-60 w-[150px]"
              src="/Shape2.png"
              alt=""
            />
            <img
              className="absolute -bottom-10 left-55 w-[175px] -rotate-12"
              src="/PassportIllustration.svg"
              alt=""
            />
            <Form
              style={""}
              title={"Đăng Ký"}
              listInput={listInput}
              button={button}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
