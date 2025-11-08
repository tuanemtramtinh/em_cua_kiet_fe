import React, { useState } from 'react';

const MinigameMiddle = () => {
  const [images, setImages] = useState({
    image1: null,
    image2: null
  });

  const [previews, setPreviews] = useState({
    image1: null,
    image2: null
  });

  const handleImageUpload = (e, imageKey) => {
    const file = e.target.files[0];
    if (file) {
      setImages(prev => ({
        ...prev,
        [imageKey]: file
      }));
      
      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setPreviews(prev => ({
        ...prev,
        [imageKey]: previewUrl
      }));
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-2xl font-bold mb-6 text-[#ff9c33]">THÊM HÌNH ĐỂ HOÀN THÀNH TRÒ CHƠI</h3>
      
      <div className="grid grid-cols-2 gap-8 w-full max-w-4xl">
        {/* First Image Upload Section */}
        <div className="flex flex-col items-center">
          <label className="w-full aspect-square border-4 border-[#ff9c33] rounded-lg overflow-hidden bg-white relative cursor-pointer hover:border-[#e88e2e] transition-colors">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 'image1')}
              className="hidden"
            />
            {previews.image1 ? (
              <img
                src={previews.image1}
                alt="Preview 1"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-2xl font-bold text-[#ff9c33]">
                <span>PREVIEW</span>
                <span className="text-base mt-2">Click để thêm hình</span>
              </div>
            )}
          </label>
          <p className="mt-4 text-center text-gray-700 font-medium">Nhiệm vụ 1</p>
        </div>

        {/* Second Image Upload Section */}
        <div className="flex flex-col items-center">
          <label className="w-full aspect-square border-4 border-[#ff9c33] rounded-lg overflow-hidden bg-white relative cursor-pointer hover:border-[#e88e2e] transition-colors">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 'image2')}
              className="hidden"
            />
            {previews.image2 ? (
              <img
                src={previews.image2}
                alt="Preview 2"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-2xl font-bold text-[#ff9c33]">
                <span>PREVIEW</span>
                <span className="text-base mt-2">Click để thêm hình</span>
              </div>
            )}
          </label>
          <p className="mt-4 text-center text-gray-700 font-medium">Nhiệm vụ 2</p>
        </div>
      </div>
    </div>
  );
};

export default MinigameMiddle;
