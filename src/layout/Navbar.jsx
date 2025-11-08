import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../contexts/AppContext";

const Navbar = () => {
  const { user } = useContext(AppContext);

  return (
    <div className="bg-[#FF9C33] py-3 font-bold text-white">
      <ul className="container mx-auto flex justify-between text-xl">
        <li>
          <Link to="/">Trang Chủ</Link>
        </li>
        <li>
          <Link to="/quiz">Trắc Nghiệm</Link>
        </li>
        <li>
          <Link to="/passport">Hộ Chiếu</Link>
        </li>
        <li>
          <Link to="/video">Video</Link>
        </li>
        <li>
          <Link to="/contact">Liên Hệ</Link>
        </li>
        <li>
          <Link to="/minigame">Minigame</Link>
        </li>
        {user && user.username === "admin" && (
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
