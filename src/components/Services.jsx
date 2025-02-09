"use client";
import React, { use, useEffect, useRef } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Expo, Power4 } from "gsap/dist/gsap";

export default function Services() {
  const h1Ref = useRef(null);
  const parent = useRef(null);
  const box = useRef(null);
  const divParent = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(h1Ref.current, {
      scrollTrigger: {
        trigger: parent.current,
        start: "0 50%",
      },
      x: 250,
      opacity: 0,
      duration: 2,
      ease: Power4.easeInOut,
    });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: divParent.current,
            start: "0 50%",
            end: "bottom 100%",
            scrub: 1,
            delay: 1.5,
            ease: Expo.easeInOut,
        },
    });
    tl.from(
      ".left",
      {
       
        x: -300,
        opacity: 0,
        duration: 0.5,
        
        ease: Expo.easeInOut,
        stagger: 0.2,
      },
      "a"
    );
    tl.from(
      ".right",
      {
        x: 300,
        opacity: 0,
        duration: 1,
        ease: Expo.easeInOut,
        stagger: 0.2,
      },
      "a"
    );
  }, []);

  return (
    <div
      ref={parent}
      className="max-w-screen-3xl   container mx-auto overflow-hidden  "
    >
      <div className=" md:flex items-center justify-start gap-10 p-5 mt-20">
        <h1 ref={h1Ref} className="text-2xl bg-[#bafe68] rounded-md  p-3">
          Services
        </h1>
        <p className="mt-10 md:mt-0 p-1 md:p-0 md:w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta et,
          illo nobis officia pariatur non iure repellat earum molestiae quod
          optio aperiam eveniet facere adipisci qui reprehenderit fuga impedit
        </p>
      </div>

      <div
        ref={divParent}
        className="w-full items-center justify-center flex flex-wrap gap-10 mt-20  "
      >
        <div
          ref={box}
          className=" left  md:w-[47%] flex gap-10 drop-shadow-lg rounded-xl p-5 shadow-xs shadow-black h-[35vh]  border-[1px] border-black"
        >
          <div className="flex-col flex  justify-between">
            <h1 className="text-3xl  font-semibold">
              Search Engine <br /> Optimization
            </h1>
            <div className="flex  items-center">
              <BsArrowUpRightCircle className="text-3xl text-center inline-block mr-2" />
              <h2>Learn More</h2>
            </div>
          </div>
          <div></div>
        </div>
        <div
          ref={box}
          className=" right md:w-[47%] flex gap-10 drop-shadow-lg rounded-xl p-5 shadow-xs shadow-black h-[35vh]  border-[1px] border-black"
        >
          <div className="flex-col flex  justify-between">
            <h1 className="text-3xl  font-semibold">
             Pay per click <br /> Advertising
            </h1>
            <div className="flex  items-center">
              <BsArrowUpRightCircle className="text-3xl text-center inline-block mr-2" />
              <h2>Learn More</h2>
            </div>
          </div>
          <div></div>
        </div>
        <div
          ref={box}
          className=" left md:w-[47%] flex gap-10 drop-shadow-lg rounded-xl p-5 shadow-xs shadow-black h-[35vh]  border-[1px] border-black"
        >
          <div className="flex-col flex  justify-between">
            <h1 className="text-3xl  font-semibold">
              Social media <br /> marketing
            </h1>
            <div className="flex  items-center">
              <BsArrowUpRightCircle className="text-3xl text-center inline-block mr-2" />
              <h2>Learn More</h2>
            </div>
          </div>
          <div></div>
        </div>
        <div
          ref={box}
          className=" right  md:w-[47%] flex gap-10 drop-shadow-lg rounded-xl p-5 shadow-xs shadow-black h-[35vh]  border-[1px] border-black"
        >
          <div className="flex-col flex  justify-between">
            <h1 className="text-3xl  font-semibold">
              Email media  & <br />  handling
            </h1>
            <div className="flex  items-center">
              <BsArrowUpRightCircle className="text-3xl text-center inline-block mr-2" />
              <h2>Learn More</h2>
            </div>
          </div>
          <div></div>
        </div>
        <div
          ref={box}
          className=" left md:w-[47%] flex gap-10 drop-shadow-lg rounded-xl p-5 shadow-xs shadow-black h-[35vh]  border-[1px] border-black"
        >
          <div className="flex-col flex  justify-between">
            <h1 className="text-3xl  font-semibold">
              Design and  <br /> Developement
            </h1>
            <div className="flex  items-center">
              <BsArrowUpRightCircle className="text-3xl text-center inline-block mr-2" />
              <h2>Learn More</h2>
            </div>
          </div>
          <div></div>
        </div>
        <div
          ref={box}
          className=" right  md:w-[47%] flex gap-10 drop-shadow-lg rounded-xl p-5 shadow-xs shadow-black h-[35vh]  border-[1px] border-black"
        >
          <div className="flex-col flex  justify-between">
            <h1 className="text-3xl  font-semibold">
             Deployment and  <br /> Optimization
            </h1>
            <div className="flex  items-center">
              <BsArrowUpRightCircle className="text-3xl text-center inline-block mr-2" />
              <h2>Learn More</h2>
            </div>
          </div>
          <div></div>
        </div>
        
      </div>
    </div>
  );
}
