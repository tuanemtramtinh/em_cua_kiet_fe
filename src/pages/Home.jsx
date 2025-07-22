import React from "react";
import { Link } from "react-router-dom";
import Section1Left from "../components/HomePage/Section1Left";
import Section1 from "../components/HomePage/Section1";

const Home = () => {
  return (
    <>
      <div className="bg-[url(/background.svg)] bg-cover bg-center">
        <div className="container mx-auto">
          <Section1 />
        </div>
      </div>
    </>
  );
};

export default Home;
