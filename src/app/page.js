'use client'
import CaseStudy from "@/components/CaseStudy";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Paralle from "@/components/Paralle";
import Proposal from "@/components/Proposal";
import Services from "@/components/Services";
import Video from "@/components/Video";
import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { Power4 } from "gsap/dist/gsap";

import { PiStarFourFill } from "react-icons/pi";

export default function Home() {
  const navRef = useRef(null);

  React.useEffect(() => {
    gsap.from(navRef.current, {
      y: -200,

      duration: 1.3,
      ease: "power3.inOut",
    });
    gsap.from(".atags a", {
      y: -250,
      opacity: 0,
      duration: 2,
      ease: Power4.easeInOut,
      stagger: 0.2,
    });
  });
  return (
   <>
   <div
         ref={navRef}
         className="max-w-screen-2xl container px-5 mt-5 md:px-3 py-5   md:flex flex-wrap items-center justify-between mx-auto"
       >
         <a href="#" className="flex items-center gap-2">
           <span className="self-center text-2xl text-center font-bold  whitespace-nowrap text-black">
             <PiStarFourFill className="text-4xl animate-bounce transition-none duration-1000 text-center inline-block mr-2" />
             WizardZ
           </span>
         </a>
         <nav className="hidden atags md:block">
           <ul className="flex space-x-8 gap-6 items-center">
             <li>
               <a href="#" className="text-black hover:text-gray-200">
                 Home
               </a>
             </li>
             <li>
               <a href="#" className="text-black hover:text-gray-200">
                 About
               </a>
             </li>
             <li>
               <a href="#" className="text-black hover:text-gray-200">
                 Services
               </a>
             </li>
             <li>
               <a href="#" className="text-black hover:text-gray-200">
                 Pricing
               </a>
             </li>
             <li>
               <a href="#" className="text-black hover:text-gray-200">
                 Contact
               </a>
             </li>
             <button className="border-[1px] border-black rounded-md px-6 py-2 ">
               Request a Quote
             </button>
           </ul>
         </nav>
       </div>
   <Hero />

   <Services  />
   <Video />
   {/* <Paralle /> */}
   <Proposal />
   <CaseStudy />
   </>
  );
}
