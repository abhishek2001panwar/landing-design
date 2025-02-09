import CaseStudy from "@/components/CaseStudy";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Proposal from "@/components/Proposal";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Navbar />
   <Hero />
   <Services  />
   <Proposal />
   <CaseStudy />
   </>
  );
}
