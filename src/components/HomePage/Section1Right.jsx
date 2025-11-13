import React from "react";

const Section1Right = () => {
  return (
    <div className="relative flex w-full flex-1">
      <img className="z-0 w-full" src="/Shape1.svg" alt="Shape Background" />
      <img
        className="absolute top-[15%] left-[20%] z-10 w-3/5"
        src="/PassportIllustration.png"
        alt="Passport Illustration"
      />
      <img
        className="absolute top-[8%] left-[10%] w-[125px]"
        src="/Shape3.png"
        alt=""
      />
      <img
        className="absolute right-[15%] w-[125px]"
        src="/Shape2.png"
        alt=""
      />
      <img
        className="absolute right-0 bottom-0 w-[125px]"
        src="/Shape2.png"
        alt=""
      />
    </div>
  );
};

export default Section1Right;
