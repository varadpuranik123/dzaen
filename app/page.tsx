import About from "@/components/About";
import BentoBox from "@/components/BentoBox";
import Excute from "@/components/Excute";
import Hero from "@/components/Hero";
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
    </div>
  );
}
