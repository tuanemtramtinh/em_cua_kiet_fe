import React, { useContext } from "react";
import Form from "../components/Form";
import { rules } from "eslint-plugin-react-refresh";
import api from "../lib/axios";
import AppContext from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AppContext);

  const listInput = [
    {
      label: "Họ và tên: ",
      type: "text",
      id: "name",
      placeholder: "Nhập họ và tên của bạn",
      labelStyle: "text-lg font-semibold",
      inputStyle: "rounded-2xl bg-[#FFF8CE] w-full",
      rules: {
        required: "Vui lòng nhập họ và tên",
      },
    },
    {
      label: "Username: ",
      type: "text",
      id: "username",
      placeholder: "Nhập username của bạn",
      labelStyle: "text-lg font-semibold",
      inputStyle: "rounded-2xl bg-[#FFF8CE] w-full",
      rules: {
        required: "Vui lòng nhập username",
      },
    },
    {
      label: "Email: ",
      type: "email",
      id: "email",
      placeholder: "Nhập email của bạn",
      labelStyle: "text-lg font-semibold",
      inputStyle: "rounded-2xl bg-[#FFF8CE] w-full",
      rules: {
        required: "Vui lòng nhập email",
      },
    },
    {
      label: "Ngày sinh: ",
      type: "date",
      id: "dob",
      placeholder: "Nhập ngày sinh của bạn",
      labelStyle: "text-lg font-semibold",
      inputStyle: "rounded-2xl bg-[#FFF8CE] w-full",
      rules: {
        required: "Vui lòng nhập ngày sinh",
      },
    },
    {
      label: "Giới tính: ",
      type: "select",
      id: "sex",
      placeholder: "Chọn giới tính",
      labelStyle: "text-lg font-semibold",
      inputStyle: "rounded-2xl bg-[#FFF8CE] w-full",
      options: [
        { label: "Nam", value: "male" },
        { label: "Nữ", value: "female" },
      ],
      rules: {
        required: "Vui lòng chọn giới tính",
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
    content: "Đăng ký",
  };

  const onSubmit = async (data) => {
    console.log(data);
    const response = await api.post("user/register", data);
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
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
