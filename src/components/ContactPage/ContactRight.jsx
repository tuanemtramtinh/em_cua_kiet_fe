import React from "react";

const ContactRight = () => {
  return (
    <div className="relative flex-1 rounded-lg bg-yellow-200 p-6">
      <h3 className="my-6 text-center text-4xl font-bold text-[#FF9C33]">
        BẠN CẦN HỖ TRỢ?
      </h3>
      <form className="mt-4 space-y-6">
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-full bg-[#fff8ce] p-2"
        />
        <input
          type="text"
          placeholder="Họ và tên"
          className="w-full rounded-full bg-[#fff8ce] p-2"
        />
        <textarea
          placeholder="Nội dung"
          className="h-24 w-full rounded-2xl bg-[#fff8ce] p-2"
        ></textarea>
        <button
          type="submit"
          className="w-full rounded-full bg-yellow-300 px-6 py-3 text-center font-bold text-[#FF9C33]"
        >
          GỬI
        </button>
      </form>
    </div>
  );
};

export default ContactRight;
