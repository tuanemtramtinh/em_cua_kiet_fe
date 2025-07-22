import React from "react";
import { Link } from "react-router-dom";
import { IoLogIn } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa6";
import Navbar from "./Navbar";
import HeaderButton from "../components/HeaderButton";

const Header = () => {
  return (
    <>
      <header className="bg-[#D8E49A]">
        <div className="container mx-auto flex items-center justify-between py-4">
          <img src="/Logo.png" alt="Logo" className="w-[7%]" />
          <div className="flex gap-5">
            <HeaderButton icon={<IoLogIn />} label="Đăng Nhập" link="/login" />
            <HeaderButton
              icon={<FaUserPlus />}
              label="Đăng Ký"
              link="/register"
            />
          </div>
        </div>
        <Navbar />
      </header>
    </>
  );
};

export default Header;
