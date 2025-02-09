"use client";
import React, { use, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Expo, Power4 } from "gsap/dist/gsap";

export default function Hero() {
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const buttonRef = useRef(null);
  const imgRef = useRef(null);
  const mainDiv = useRef(null);

  useEffect(() => {
    gsap.from(
      ".img img",
      {
        y: -250,
        opacity: 0,
        duration: 2,
        ease: Power4.easeInOut,
        stagger: 0.2,
      },
      []
    );
    gsap.from(mainDiv.current, {
      x: -250,
      opacity: 0,
      duration: 2,
      ease: Power4.easeInOut,
      stagger: 0.2,
    });
    gsap.from(".flex-image img", {
      x: 250,
      opacity: 0,
      duration: 2,
      ease: Power4.easeInOut,
      stagger: 0.2,
    });
  }, []);

  return (
    <>
      <div className=" h-[100vh] md:h-[80vh]  md:flex container mx-auto ">
        <div
          ref={mainDiv}
          className="md:w-1/2  pt-32 md:pt-0  px-4 md:px-6 md:mt-20"
        >
          <h1 ref={h1Ref} className="text-2xl md:text-6xl font-bold">
            Navigating the <br /> digital landscape <br /> for success
          </h1>
          <p ref={pRef} className=" text-md md:text-xl mt-10 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta et,
            illo nobis officia pariatur non iure repellat earum molestiae quod
            optio aperiam eveniet facere adipisci qui reprehenderit fuga impedit
            molestias?
          </p>
          <button
            ref={buttonRef}
            className="border-[1px] border-black hover:bg-black hover:text-white duration-150 rounded-md px-4 md:px-6 py-2 "
          >
            Book a consultation
          </button>
        </div>
        <div className="flex-image md:w-1/2 p-16 md:p-20  mt-10  md:mt-0   ">
          <img
            src="https://img.freepik.com/premium-vector/marketing-illustration_878233-772.jpg?w=996"
            alt=""
          />
        </div>
      </div>
      <div
        ref={imgRef}
        className="container  img mx-auto -mt-20 md:-mt-10  gap-32 items-center justify-evenly flex overflow-x-scroll scrollbar-hide "
      >
        <img
          className="w-40 "
          src="https://th.bing.com/th/id/OIP.aMPycnf90FzfxkFtK45mYQAAAA?pid=ImgDet&w=100&h=100&c=7&dpr=1.3"
          alt=""
        />
        <img
          className="w-40 "
          src="https://cdn.valuecom.com/ccsimg/c855fc244cf62f9ad975cd152ea7162d.webp"
          alt=""
        />
        <img
          className="w-40 "
          src="https://th.bing.com/th/id/OIP.JB3bAcfbyYPpmPleJoLSnwHaDU?w=800&h=358&rs=1&pid=ImgDetMain"
          alt=""
        />
        <img
          className="w-40 "
          src="https://th.bing.com/th/id/OIP.qnL7yN8tcRYxAaRrBvoEQwAAAA?w=100&h=100&rs=1&pid=ImgDetMain"
          alt=""
        />
        <img
          className="w-40 "
          src="https://th.bing.com/th/id/OIP.r01QJAp0eLrEKPt74-R93wAAAA?w=137&h=57&rs=1&pid=ImgDetMain"
          alt=""
        />
      </div>
    </>
  );
}
