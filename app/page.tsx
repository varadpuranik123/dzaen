import About from "@/components/About";
import BentoBox from "@/components/BentoBox";
import Excute from "@/components/Excute";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import Project from "@/components/Project";
import Reviews from "@/components/Reviews";
import React from "react";

export default function Home() {
  return (
    <div className="text-[#333] border-2 w-full min-h-screen bg-[#fffff7] " >
      <Hero />
      <About />
      <BentoBox />
      <Excute />
      <Project />
      <Reviews />
      <Plans />
      <Faq />
      <Footer />
    </div>
  );
}
