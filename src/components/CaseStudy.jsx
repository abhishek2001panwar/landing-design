import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";

export default function CaseStudy() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:mt-52">
      <div className="w-full md:flex justify-start items-center gap-10 mt-20 p-10">
        <h1 className="bg-[#bafe68] p-3 text-2xl rounded-md ">Case Study </h1>
        <p className="md:w-1/2 mt-10 md:mt-0 p-1 md:p-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta et,
          illo nobis officia pariatur non iure repellat earum molestiae quod
          optio aperiam eveniet facere adipisci qui reprehenderit fuga
        </p>
      </div>

      <div className="w-full md:flex items-center justify-between gap-10 md:gap-5 text-white h-[110vh] md:h-[50vh] rounded-md md:rounded-[5vh] bg-black pt-10 md:mt-0 md:p-10">
        <div className="md:w-1/3 md:border-r-[1px] border-white px-10">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
            delectus repellat aliquid accusantium, atque dolorem! Temporibus,
            fuga! Molestiae, ea dignissimos! Lorem ipsum dolor sit amet.
          </p>
          <div className="flex mt-16 gap-3  items-center mb-10 md:mb-0">
            <h2 className="text-lg text-[#bafe68] ">Learn More</h2>
            <BsArrowUpRightCircle className="text-3xl text-[#bafe68] font-light text-center inline-block mr-2" />
          </div>
        </div>
        <div className="md:w-1/3 md:border-r-[1px] border-white px-10">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
            delectus repellat aliquid accusantium, atque dolorem! Temporibus,
            fuga! Molestiae, ea dignissimos! Lorem ipsum dolor sit amet.
          </p>
          <div className="flex mt-16 gap-3  items-center mb-10 md:mb-0">
            <h2 className="text-lg text-[#bafe68] ">Learn More</h2>
            <BsArrowUpRightCircle className="text-3xl text-[#bafe68] font-light text-center inline-block mr-2" />
          </div>
        </div>
        <div className="md:w-1/3  px-10">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
            delectus repellat aliquid accusantium, atque dolorem! Temporibus,
            fuga! Molestiae, ea dignissimos! Lorem ipsum dolor sit amet.
          </p>
          <div className="flex mt-16 gap-3  items-center mb-10 md:mb-0">
            <h2 className="text-lg text-[#bafe68] ">Learn More</h2>
            <BsArrowUpRightCircle className="text-3xl text-[#bafe68] font-light text-center inline-block mr-2" />
          </div>
        </div>
      
      </div>
    </div>
  );
}
