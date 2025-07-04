import React from "react";
import DigiPass from "/DigiPass.png";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-wrap pt-[42px]">
        <div className="flex-1">
          {/* <img src={DigiPass} className='w-1/4' alt="" /> */}
          <h2 className="mb-6 text-4xl font-bold">Logo</h2>
          <p className="w-1/2 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maxime
            nam eos sit eius culpa corporis non quis aliquam reprehenderit animi
            labore voluptatum, voluptatibus eveniet repellat? Fuga ab autem
            dolor.
          </p>
        </div>
        <div className="">
          <h2 className="mb-[20px] text-[24px] font-bold">Điều hướng</h2>
          <ul className="flex flex-col gap-5 text-[16px] font-bold">
            <li>
              <Link to={"/"}>
                <FaChevronRight className="mr-2.5 inline-block" />
                <span>Trang Chủ</span>
              </Link>
            </li>
            <li>
              <Link to={"quiz"}>
                <FaChevronRight className="mr-2.5 inline-block" />
                <span>Trắc Nghiệm</span>
              </Link>
            </li>
            <li>
              <Link to={"resource"}>
                <FaChevronRight className="mr-2.5 inline-block" />
                <span>Tài Nguyên</span>
              </Link>
            </li>
            <li>
              <Link to={"passport"}>
                <FaChevronRight className="mr-2.5 inline-block" />
                <span>Hộ chiếu</span>
              </Link>
            </li>
            <li>
              <Link to={"contact"}>
                <FaChevronRight className="mr-2.5 inline-block" />
                <span>Liên hệ</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-[42px] w-full bg-black py-[10px] text-center font-bold text-white">
          © 2025 DigiPass. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
