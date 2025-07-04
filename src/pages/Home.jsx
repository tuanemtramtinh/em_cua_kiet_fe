import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex flex-col py-20">
        <h2 className="text-center text-5xl font-bold capitalize">
          Bạn là ai giữa thế giới số đầy biến động?
        </h2>
        <p className="my-14 text-center text-xl">
          Website “Hộ chiếu văn hóa số” giúp bạn khám phá vai trò, hành vi, và
          giá trị cá nhân của mình thông qua hành trình tương tác độc đáo. Làm
          trắc nghiệm, rèn luyện kỹ năng công dân số, tích lũy “dấu mộc” cho
          từng chặng đường — và nhận ngay chứng nhận hoàn thành.
        </p>
        <button
          type="button"
          className="cursor-pointer self-center rounded-3xl border-2 font-bold border-[#131313] bg-[#131313] py-4 px-10 text-2xl text-white hover:bg-white hover:text-[#131313]"
        >
          Bắt đầu ngay
        </button>
      </div>

      <div className=""></div>

      <div className="">
        <h2>Mục tiêu dự án</h2>
        <p>
          Giúp học sinh hiểu và phát triển bản sắc cá nhân trong môi trường số
        </p>

        <div className="">
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Home;
