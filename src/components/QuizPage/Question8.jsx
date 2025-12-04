import React, { useState } from 'react';

const Question8 = ({ onAnswer }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (score) => {
    setSelected(score);
    onAnswer(score);
  };

  return (
    <div>
      <p className="text-center mb-4 text-2xl font-bold">Tại các diễn đàn bạn tham gia, bạn sẽ ưa chuộng bài đăng của người nổi tiếng, người thân hay đa dạng người dùng khác nhau?</p>
      <div className="flex justify-around">
        <button
          onClick={() => handleClick(0)}
          className={`px-6 py-3 rounded-full border-2 font-bold text-lg ${selected === 0 ? 'bg-orange-500 text-white border-orange-500' : 'bg-yellow-200 border-yellow-400'}`}
        >
          Đa dạng
        </button>
        <button
          onClick={() => handleClick(1)}
          className={`px-6 py-3 rounded-full border-2 font-bold text-lg ${selected === 1 ? 'bg-orange-500 text-white border-orange-500' : 'bg-yellow-200 border-yellow-400'}`}
        >
          Người thân
        </button>
        <button
          onClick={() => handleClick(2)}
          className={`px-6 py-3 rounded-full border-2 font-bold text-lg ${selected === 2 ? 'bg-orange-500 text-white border-orange-500' : 'bg-yellow-200 border-yellow-400'}`}
        >
          Người nổi tiếng
        </button>
      </div>
    </div>
  );
};

export default Question8;