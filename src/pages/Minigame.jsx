import React from "react";
import MinigameMiddle from "../components/MinigamePage/MinigameMiddle";

const Minigame = () => {
  return (
    <div className="bg-[url(/background.svg)] bg-cover bg-center min-h-screen">
      <div className="container mx-auto py-10">
        <h2 className="text-7xl text-center font-bold mb-4" style={{ color: '#ff9c33' }}>MINIGAME</h2>
        <p className="text-xl text-center text-gray-700 font-bold mb-8">
          Hãy hoàn thành các nhiệm vụ bằng cách thêm hình ảnh vào các ô trống bên dưới
        </p>
        <div className="mt-16">
          <MinigameMiddle />
        </div>
      </div>
    </div>
  );
};

export default Minigame;
