import React from "react";
import { FiUser } from "react-icons/fi";
import { HiOutlineUsers, HiOutlineUserGroup } from "react-icons/hi";

const Cards = () => {
  return (
    <div className="bg-white w-full py-[10rem] px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 px-6">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <FiUser size={100} className="w-20 mx-auto mt-[-3rem] bg-white" />
          <h2 className="text-2xl font-bold text-center py-4">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium mt-4">
            <p className="py-2 border-b mx-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 User Allowed</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-primary text-black w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 ">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300 bg-gray-100">
          <HiOutlineUsers
            size={100}
            className="w-20 mx-auto mt-[-4rem] bg-transparent"
          />
          <h2 className="text-2xl font-bold text-center py-4">Partnership</h2>
          <p className="text-center text-4xl font-bold">$199</p>
          <div className="text-center font-medium mt-4">
            <p className="py-2 border-b mx-8">1 TB Storage</p>
            <p className="py-2 border-b mx-8">3 Users Allowed</p>
            <p className="py-2 border-b mx-8">Send up to 10 GB</p>
          </div>
          <button className="bg-black text-primary   w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 ">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <HiOutlineUserGroup
            size={100}
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-4">Group Account</h2>
          <p className="text-center text-4xl font-bold">$299</p>
          <div className="text-center font-medium mt-4">
            <p className="py-2 border-b mx-8">5 TB Storage</p>
            <p className="py-2 border-b mx-8">10 Users Allowed</p>
            <p className="py-2 border-b mx-8">Send up to 20 GB</p>
          </div>
          <button className="bg-primary text-black w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 ">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
