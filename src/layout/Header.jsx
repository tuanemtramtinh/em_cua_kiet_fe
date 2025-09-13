import React, { useContext } from "react";
import { MdLogout } from "react-icons/md";
import { IoLogIn } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa6";
import Navbar from "./Navbar";
import HeaderButton from "../components/HeaderButton";
import AppContext from "../contexts/AppContext";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AppContext);

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    setUser(null);
    navigate("/");
  };

  return (
    <>
      <header className="bg-[#D8E49A]">
        <div className="container mx-auto flex items-center justify-between py-4">
          <img src="/Logo.png" alt="Logo" className="w-[7%]" />
          <div className="flex gap-5">
            {user ? (
              <>
                <div className="flex items-center gap-4">
                  <Link to="/profile">
                    <FaUser className="text-2xl" />
                  </Link>
                  <span className="text-lg font-semibold text-[#333333]">
                    Xin chào, {user.name}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="inline-flex cursor-pointer items-center gap-2 rounded-4xl bg-[#F8FCE1] px-3 py-2 text-xl font-bold text-[#FF9C33]"
                  >
                    <span>Đăng Xuất</span> <MdLogout />
                  </button>
                </div>
              </>
            ) : (
              <>
                <HeaderButton
                  icon={<IoLogIn />}
                  label="Đăng Nhập"
                  link="/login"
                />
                <HeaderButton
                  icon={<FaUserPlus />}
                  label="Đăng Ký"
                  link="/register"
                />
              </>
            )}
          </div>
        </div>
        <Navbar />
      </header>
    </>
  );
};

export default Header;
