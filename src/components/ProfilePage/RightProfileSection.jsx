import React from 'react';

const RightProfileSection = ({ formData }) => {
  return (
    <div className="w-1/3 flex flex-col items-center justify-center">
      <div className="relative mb-6">
        <img src="/avatar-placeholder.svg" alt="Avatar" className="w-72 h-72 rounded-full bg-yellow-200" />
      </div>
      <button
        type="submit"
        className="bg-[#ff9c33] text-white font-bold rounded-full border-2 border-[#ff9c33] px-10 py-2"
        style={{ maxWidth: '220px', width: '100%' }}
      >
        CHỈNH SỬA
      </button>
    </div>
  );
};

export default RightProfileSection;