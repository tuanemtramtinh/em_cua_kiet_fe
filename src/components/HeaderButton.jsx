import React from "react";
import { Link } from "react-router-dom";

const HeaderButton = ({ icon, label, link }) => {
  return (
    <div className="flex items-center gap-2 rounded-4xl bg-[#F8FCE1] px-3 py-2 text-xl font-bold text-[#FF9C33]">
      {icon}
      <span>
        <Link to={link}>{label}</Link>
      </span>
    </div>
  );
};

export default HeaderButton;
