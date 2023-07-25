import React from "react";
import laptop from "../../src/assets/laptop2.jpeg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 align-middle">
        <div className=" flex items-center justify-center">
          <img className="w-[500px] mx-auto my-6" src={laptop} alt="laptop" />
        </div>
        <div className="flex flex-col justify-center space-y-2">
          <p className="text-primary font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            quis, minus ullam ad dolorum cupiditate officia dolor ducimus
            similique incidunt quidem adipisci hic reiciendis nisi quia iure
            earum aspernatur nemo?
          </p>
          <button className=" bg-black w-[200px] rounded-md font-medium my-10 mx-auto md:mx-0 py-3 text-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
