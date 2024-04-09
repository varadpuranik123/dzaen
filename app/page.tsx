"use client";

import About from "@/components/About";
import BentoBox from "@/components/BentoBox";
import Excute from "@/components/Excute";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Plans from "@/components/Plans";
import Project from "@/components/Project";
import Reviews from "@/components/Reviews";
import LocomotiveScroll from 'locomotive-scroll';

export default function Home() {
  
  const locomotiveScroll = new LocomotiveScroll();


  return (
    <div className="overflow-x-hidden text-[#333] border-2 w-full font-satoshi min-h-screen bg-[#fffff7] " >
      <Navbar />
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


