import React, { useContext } from "react";
import Form from "../components/Form";
import api from "../lib/axios";
import AppContext from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const { setUser } = useContext(AppContext);

  const listInput = [
    {
      label: "Username: ",
      type: "text",
      id: "username",
      placeholder: "Nhập tên đăng nhập của bạn",
      labelStyle: "text-lg font-semibold",
      inputStyle: "rounded-2xl bg-[#FFF8CE] w-full",
      rules: {
        required: "Vui lòng nhập tên đăng nhập",
      },
    },
    {
      label: "Mật khẩu: ",
      type: "password",
      id: "password",
      placeholder: "Nhập mật khẩu của bạn",
      labelStyle: "text-lg font-semibold",
      inputStyle: "rounded-2xl bg-[#FFF8CE] w-full",
      rules: {
        required: "Vui lòng nhập mật khẩu",
      },
    },
  ];

  const button = {
    style: "rounded-3xl bg-[#FF9C33] text-white",
    content: "Đăng nhập",
  };

  const onSubmit = async (data) => {
    const response = await api.post("user/login", data);
    const userInfo = response.data.data;
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    setUser(userInfo);
    navigate("/");
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
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
