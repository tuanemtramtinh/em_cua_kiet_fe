import React from 'react';

const Result = ({ totalScore }) => {

  let group = '';
  let icon = '';
  if (totalScore >= 18 && totalScore <= 24) {
    group = 'Người sáng tạo';
    icon = '/src/assets/creative.png';
  } else if (totalScore >= 8 && totalScore <= 17) {
    group = 'Người kết nối';
    icon = '/src/assets/connect.png';
  } else if (totalScore >= 0 && totalScore <= 7) {
    group = 'Người quan sát';
    icon = '/src/assets/observe.png';
  }

  return (
    <div className="bg-[url(/background.svg)] bg-cover bg-center min-h-screen">
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
        <div className="bg-yellow-100 p-30 rounded-2xl shadow-lg w-3/4 relative flex flex-col items-center justify-center" style={{minHeight: 400}}>
          <div className="absolute top-6 left-10 text-4xl font-extrabold">Bạn thuộc nhóm</div>
          <div className="flex flex-col items-center w-full mt-8">
            <img src={icon} alt={group} className="w-40 h-40 object-contain mb-4" />
            <div className="text-5xl font-extrabold text-orange-500 underline mb-2">{group}</div>
          </div>
          <button
            onClick={() => window.location.href = '/passport'}
            className="bg-orange-500 text-white font-bold px-10 py-3 rounded-full hover:bg-orange-600 text-xl absolute right-10 bottom-8"
          >
            XEM HỘ CHIẾU &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;