import React from "react";
import ReactTyped from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center space-y-3 p-4">
        <p className="text-primary font-bold ">GROWING WITH DATA ANALYTICS</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold ">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, flexible financing for
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-yellow-400"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={100}
            backSpeed={120}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platforms.
        </p>
        <div>
          <button className=" bg-primary w-[200px] rounded-md font-medium mt-8 mx-auto py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
