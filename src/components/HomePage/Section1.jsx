import React from "react";
import Section1Left from "./Section1Left";
import Section1Right from "./Section1Right";

const Section1 = () => {
  return (
    <div className="flex items-center gap-14 py-8">
      <Section1Left />
      <Section1Right />
    </div>
  );
};

export default Section1;
