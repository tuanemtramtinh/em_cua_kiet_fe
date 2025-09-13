import React from "react";

const Result = ({ totalScore }) => {
  let group = "";
  let icon = "";
  if (totalScore >= 18 && totalScore <= 24) {
    group = "Người sáng tạo";
    icon = "/creative.png";
  } else if (totalScore >= 8 && totalScore <= 17) {
    group = "Người kết nối";
    icon = "/connect.png";
  } else if (totalScore >= 0 && totalScore <= 7) {
    group = "Người quan sát";
    icon = "/observe.png";
  }

  return (
    <div className="min-h-screen bg-[url(/background.svg)] bg-cover bg-center">
      <div className="flex min-h-[calc(100vh-64px)] items-center justify-center">
        <div
          className="relative flex w-3/4 flex-col items-center justify-center rounded-2xl bg-yellow-100 p-30 shadow-lg"
          style={{ minHeight: 400 }}
        >
          <div className="absolute top-6 left-10 text-4xl font-extrabold">
            Bạn thuộc nhóm
          </div>
          <div className="mt-8 flex w-full flex-col items-center">
            <img
              src={icon}
              alt={group}
              className="mb-4 h-40 w-40 object-contain"
            />
            <div className="mb-2 text-5xl font-extrabold text-orange-500 underline">
              {group}
            </div>
          </div>
          <button
            onClick={() => (window.location.href = "/passport")}
            className="absolute right-10 bottom-8 rounded-full bg-orange-500 px-10 py-3 text-xl font-bold text-white hover:bg-orange-600"
          >
            XEM HỘ CHIẾU &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
