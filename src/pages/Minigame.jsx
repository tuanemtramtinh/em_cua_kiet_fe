import React from "react";
import MinigameMiddle from "../components/MinigamePage/MinigameMiddle";

const Minigame = () => {
  return (
    <div className="flex min-h-[calc(100vh-200px)] flex-1 flex-col bg-[url(/background.svg)] bg-cover bg-center">
      <div className="container mx-auto flex flex-1 flex-col py-10">
        <h2
          className="mb-4 text-center text-5xl font-bold"
          style={{ color: "#ff9c33" }}
        >
          MINIGAME
        </h2>
        <div className="mt-4 w-full">
          <MinigameMiddle />
        </div>
      </div>
    </div>
  );
};

export default Minigame;
