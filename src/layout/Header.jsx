import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="flex py-[18px] items-center">
        <h1 className="flex-1 text-4xl font-bold">Logo</h1>
        <ul className="flex gap-[52px] font-bold text-[16px] mr-[45px]">
          <li>
            <Link to={"/"}>Trang Chủ</Link>
          </li>
          <li>
            <Link to={"quiz"}>Trắc Nghiệm</Link>
          </li>
          <li>
            <Link to={"resource"}>Tài Nguyên</Link>
          </li>
          <li>
            <Link to={"passport"}>Hộ chiếu</Link>
          </li>
          <li>
            <Link to={"contact"}>Liên hệ</Link>
          </li>
        </ul>
        <div className="bg-[#131313] p-2.5 rounded-full flex items-center">
          <FaUser className="text-[#131313] text-[45px] bg-white rounded-full p-2 mr-[10px]" />
          <Link to={"user"} className="text-white text-[16px] font-bold">
            Người dùng
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
