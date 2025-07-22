import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

const Section1Left = () => {
  return (
    <div className="flex-1">
      <div className="mb-5">
        <div className="rotate-[-5deg] text-2xl font-bold">Khám phá</div>
        <h1 className="my-6 text-center text-8xl font-bold text-[#FF9C33]">
          BẢN SẮC SỐ
        </h1>
        <div className="rotate-[-5deg] text-right text-2xl font-bold">
          của bạn
        </div>
      </div>
      <p className="mb-10 text-justify text-xl font-semibold">
        "Hộ chiếu Văn hóa Số" là nền tảng giúp bạn khám phá vai trò, hành vi và
        giá trị cá nhân trong thế giới số. Tham gia trắc nghiệm, rèn luyện kỹ
        năng công dân số, tích lũy dấu mốc hành trình và nhận chứng nhận hoàn
        thành.
      </p>
      <div className="text-center">
        <Button
          href="/quiz"
          style="rounded-3xl bg-[#FF9C33] text-white"
          content="Bắt đầu ngay"
        />
      </div>
    </div>
  );
};

export default Section1Left;
