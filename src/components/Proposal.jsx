import React from "react";

export default function Proposal() {
  return (
    <div className="max-w-screen-2xl relative mt-20 md:mt-32 lg:mt-40 container mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 bg-zinc-200 h-auto md:h-[50vh] rounded-md md:rounded-[5vh] p-6 md:p-10 lg:p-16">
      <div className="md:w-1/2 p-2 md:p-10">
        <h1 className="text-3xl md:text-4xl font-semibold">Proposal</h1>
        <p className="mt-6 md:mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta et,
          illo nobis officia pariatur non iure repellat earum molestiae quod
          optio aperiam eveniet facere adipisci qui reprehenderit fuga impedit
          molestias?
        </p>
        <button className="mt-6 md:mt-8 rounded-md bg-black text-white px-5 py-2 md:px-6 md:py-3 text-sm md:text-base">
          Get your free Proposal
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        {/* Add your image below */}
        {/* <img className="w-full max-w-xs md:max-w-md lg:max-w-lg" src="https://i.pinimg.com/736x/cd/d2/18/cdd2181d025db8b90d20ee0207b0c0d0.jpg" alt="Proposal Image" /> */}
      </div>
    </div>
  );
}
