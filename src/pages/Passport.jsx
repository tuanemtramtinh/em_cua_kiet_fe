// @ts-nocheck
import React from "react";
import MucLuc from "../components/PassportPage/MucLuc";
import HTMLFlipBook from "react-pageflip";

const Passport = () => {
  return (
    <>
      <div className="flex-1 bg-[url(/background.svg)] bg-cover bg-center">
        <div className="container mx-auto py-10">
          <div className="flex">
            <MucLuc />
            <div className="flex flex-2 items-center justify-center">
              <HTMLFlipBook
                width={250}
                height={360}
                maxShadowOpacity={0.5}
                drawShadow={true}
                showCover={true}
                size="fixed"
              >
                <div className="page h-full w-full bg-[url(/CoverLeft.svg)] bg-cover bg-center"></div>
                <div className="page h-full w-full bg-[url(/PassportLeft.svg)] bg-cover bg-center"></div>
                <div className="page h-full w-full bg-[url(/PassportRight.svg)] bg-cover bg-center"></div>
                <div className="page h-full w-full bg-[url(/PassportLeft.svg)] bg-cover bg-center"></div>
                <div className="page h-full w-full bg-[url(/PassportRight.svg)] bg-cover bg-center"></div>
                <div className="page h-full w-full bg-[url(/CoverRight.svg)] bg-cover bg-center"></div>
              </HTMLFlipBook>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Passport;
