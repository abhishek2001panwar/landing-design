import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";

export default function Services() {
  return (
    <div className="max-w-screen-3xl  md:h-screen container mx-auto ">
      <div className=" md:flex items-center justify-start gap-10 p-5 mt-20">
        <h1 className="text-2xl bg-[#bafe68] rounded-md  p-3">
          Services
        </h1>
        <p className="mt-10 md:mt-0 p-1 md:p-0 md:w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta et,
          illo nobis officia pariatur non iure repellat earum molestiae quod
          optio aperiam eveniet facere adipisci qui reprehenderit fuga impedit
        </p>
      </div>

      <div className="w-full items-center justify-center flex flex-wrap gap-10 mt-20  ">
        <div className=" md:w-[47%] flex gap-10 drop-shadow-lg rounded-xl p-5 shadow-xs shadow-black h-[35vh]  border-[1px] border-black">
          <div className="flex-col flex  justify-between">
            <h1 className="text-3xl  font-semibold">Search Engine <br /> Optimization</h1>
          <div className="flex  items-center">
          <BsArrowUpRightCircle className="text-3xl text-center inline-block mr-2" />
          <h2>Learn More</h2>
          </div>
          </div>
          <div>
          </div>
        </div>
        <div className=" md:w-[47%] flex gap-10 drop-shadow-lg rounded-xl p-5 shadow-xs shadow-black h-[35vh]  border-[1px] border-black">
          <div className="flex-col flex  justify-between">
            <h1 className="text-3xl  font-semibold">Search Engine <br /> Optimization</h1>
          <div className="flex  items-center">
          <BsArrowUpRightCircle className="text-3xl text-center inline-block mr-2" />
          <h2>Learn More</h2>
          </div>
          </div>
          <div>
          </div>
        </div>
        <div className=" md:w-[47%] flex gap-10 drop-shadow-lg rounded-xl p-5 shadow-xs shadow-black h-[35vh]  border-[1px] border-black">
          <div className="flex-col flex  justify-between">
            <h1 className="text-3xl  font-semibold">Search Engine <br /> Optimization</h1>
          <div className="flex  items-center">
          <BsArrowUpRightCircle className="text-3xl text-center inline-block mr-2" />
          <h2>Learn More</h2>
          </div>
          </div>
          <div>
          </div>
        </div>
        <div className=" md:w-[47%] flex gap-10 drop-shadow-lg rounded-xl p-5 shadow-xs shadow-black h-[35vh]  border-[1px] border-black">
          <div className="flex-col flex  justify-between">
            <h1 className="text-3xl  font-semibold">Search Engine <br /> Optimization</h1>
          <div className="flex  items-center">
          <BsArrowUpRightCircle className="text-3xl text-center inline-block mr-2" />
          <h2>Learn More</h2>
          </div>
          </div>
          <div>
          </div>
        </div>
      
      </div>
    </div>
  );
}
