import React from "react";

const MucLuc = () => {
  return (
    <div className="w-[calc((100%*1/4)-20px)]">
      <h2 className="mb-[25px] text-4xl font-bold text-[#FF9C33]">MỤC LỤC</h2>
      <ul className="flex flex-col gap-3 rounded-2xl bg-[#FFD89B] p-5 text-lg font-bold">
        <li className="flex justify-between">
          <span>Thông tin cá nhân</span>
          <span>Trang 1</span>
        </li>
        <li className="flex justify-between">
          <span>Định danh bản thân</span>
          <span>Trang 2</span>
        </li>
        <li className="flex justify-between">
          <span>Video</span>
          <span>Trang 3</span>
        </li>
        <li className="flex justify-between">
          <span>Cẩm nang</span>
          <span>Trang 4</span>
        </li>
        <li className="flex justify-between">
          <span>Chứng nhận</span>
          <span>Trang 5</span>
        </li>
      </ul>
    </div>
  );
};

export default MucLuc;
