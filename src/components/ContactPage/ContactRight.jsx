import React from "react";

const ContactRight = () => {
  return (
    <div className="flex-1 bg-yellow-200 p-6 rounded-lg relative">
      <h3 className="my-6 text-center text-3xl font-bold text-[#FF9C33] absolute top-7 bottom-1/2 left-1/2 transform -translate-x-2/2 -translate-y-1/2">BẠN CẦN HỖ TRỢ?</h3>
      <form className="mt-4 space-y-6">
        <input type="email" placeholder="Email" className="w-full p-2 rounded-full bg-[#fff8ce]" />
        <input type="text" placeholder="Họ và tên" className="w-full p-2 rounded-full bg-[#fff8ce]" />
        <textarea placeholder="Nội dung" className="w-full p-2 rounded-2xl bg-[#fff8ce] h-24"></textarea>
        <button type="submit" className="w-full bg-yellow-300 text-[#FF9C33] px-6 py-3 rounded-full font-bold text-center">GỬI</button>
      </form>
    </div>
  );
};

export default ContactRight;