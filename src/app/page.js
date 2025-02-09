import CaseStudy from "@/components/CaseStudy";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Paralle from "@/components/Paralle";
import Proposal from "@/components/Proposal";
import Services from "@/components/Services";
import Video from "@/components/Video";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Navbar />
   <Hero />

   <Services  />
   <Video />
   {/* <Paralle /> */}
   <Proposal />
   <CaseStudy />
   </>
  );
}
