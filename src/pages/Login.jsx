import React from "react";
import Form from "../components/Form";

const Login = () => {
  const listInput = [
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
    content: "Đăng nhập",
  };

  return (
    <>
      <div className="flex flex-1 flex-col bg-[url(/background.svg)] bg-cover bg-center">
        <div className="container mx-auto flex flex-1 flex-col">
          <div className="relative flex flex-1 items-center justify-center py-10">
            <img
              className="absolute top-15 right-60 w-[150px]"
              src="/Shape2.png"
              alt=""
            />
            <img
              className="absolute bottom-15 left-60 w-[150px]"
              src="/Shape2.png"
              alt=""
            />
            <Form
              style={""}
              title={"Đăng Nhập"}
              listInput={listInput}
              button={button}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
