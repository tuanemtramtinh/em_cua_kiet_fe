import React, { useState } from 'react';

const Question2 = ({ onAnswer }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (score) => {
    setSelected(score);
    onAnswer(score);
  };

  return (
    <div>
      <p className="text-center mb-4 text-2xl font-bold">Bạn thường chia sẻ các thông tin ở chế độ công khai, hạn chế hay riêng tư?</p>
      <div className="flex justify-around">
        <button
          onClick={() => handleClick(0)}
          className={`px-6 py-3 rounded-full border-2 font-bold text-lg ${selected === 0 ? 'bg-orange-500 text-white border-orange-500' : 'bg-yellow-200 border-yellow-400'}`}
        >
          Không
        </button>
        <button
          onClick={() => handleClick(1)}
          className={`px-6 py-3 rounded-full border-2 font-bold text-lg ${selected === 1 ? 'bg-orange-500 text-white border-orange-500' : 'bg-yellow-200 border-yellow-400'}`}
        >
          Bình thường
        </button>
        <button
          onClick={() => handleClick(2)}
          className={`px-6 py-3 rounded-full border-2 font-bold text-lg ${selected === 2 ? 'bg-orange-500 text-white border-orange-500' : 'bg-yellow-200 border-yellow-400'}`}
        >
          Có
        </button>
      </div>
    </div>
  );
};

export default Question2;