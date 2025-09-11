import React from "react";

const ContactLeft = () => {
  return (
    <div className="flex-1">
      <h2 className="my-6 text-center text-8xl font-bold text-[#FF9C33]">HỘ CHIẾU VĂN HÓA SỐ</h2>
        <div className="mt-4 space-y-6">
            <p className="flex items-center text-xl"><span className="mr-2">📍</span> địa chỉ</p>
            <p className="flex items-center text-xl"><span className="mr-2">📞</span> số điện thoại</p>
            <p className="flex items-center text-xl"><span className="mr-2">✉️</span> email</p>
      </div>
    </div>
  );
};

export default ContactLeft;