import React from "react";

const ContactLeft = () => {
  return (
    <div className="flex-1">
      <h2 className="my-6 text-center text-8xl font-bold text-[#FF9C33]">HỘ CHIẾU VĂN HÓA SỐ</h2>
        <div className="mt-4 space-y-6">
            <p className="flex items-center text-xl"><span className="mr-2">📍</span> 218-216 Nguyễn Tất Thành, phường Xóm Chiếu, TPHCM </p>
            <p className="flex items-center text-xl"><span className="mr-2">📞</span> (+84) 825 377 706</p>
            <p className="flex items-center text-xl"><span className="mr-2">✉️</span> phuonggiakhai@gmail.com</p>
      </div>
    </div>
  );
};

export default ContactLeft;