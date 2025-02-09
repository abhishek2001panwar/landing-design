'use client'
import React from "react";
import { motion } from "framer-motion";

export default function Paralle() {
  return (
    <div className="max-w-screen-xl container mx-auto md:mt-52">
      <div className="grid grid-cols-2 md:grid-cols-2  overflow-hidden gap-20 justify-center items-center mt-20">
        <motion.img
        data-scroll
        data-scroll-speed="-.8"
          className="w-[80vh] rounded-md h-[70vh] object-cover"
          src="https://i.pinimg.com/736x/7c/51/17/7c5117031389503e8645291471c1a594.jpg"
          alt=""
        />
        <motion.img
        data-scroll
        data-scroll-speed="-.8"
          className="w-[80vh] rounded-md h-[100vh] object-cover"
          src="https://i.pinimg.com/736x/e1/b7/e5/e1b7e5794d4555efb56b8986700d920a.jpg"
          alt=""
        />
        <motion.img
        data-scroll
        data-scroll-speed="-.8"
          className="w-[60vh] rounded-md h-[100vh] object-cover"
          src="https://i.pinimg.com/236x/23/7f/90/237f9005bace03e6d3f61bd312a9022f.jpg"
          alt=""
        />
        <motion.img
        data-scroll
        data-scroll-speed="-.8"
          className="w-[70vh] rounded-md h-[60vh] object-cover"
          src="https://i.pinimg.com/236x/37/4d/b7/374db7b842359ff1f989364a3446f0c6.jpg"
          alt=""
        />
        <motion.img
        data-scroll
        data-scroll-speed="-.8"
          className="w-[50vh] rounded-md h-[50vh] object-cover "
          src="https://i.pinimg.com/236x/1d/6b/c0/1d6bc03c3dd55bc1c59cec84edb81a46.jpg"
          alt=""
        />
        <video
          muted
          loop
          autoPlay
          src="https://player.vimeo.com/progressive_redirect/playback/1001982172/rendition/720p/file.mp4?loc=external&log_user=0&signature=b92eb1ab8119f2ffaaa03f075ef271714f5ee63065ee8d29f4e188ce30202de0"
        ></video>
      </div>
    </div>
  );
}
