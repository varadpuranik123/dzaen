"use client";

import FollowCursor from "@/components/FollowCursor";
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
import { useEffect } from "react";

export default function Home() {
  
  useEffect(() => {
    import('locomotive-scroll').then(LocomotiveScroll => {
      const locomotiveScroll = new LocomotiveScroll.default();
    }).catch(error => {
      console.error('Failed to load LocomotiveScroll:', error);
    });
  }, []);


  return (
    <div className=" select-blue overflow-x-hidden text-[#333] w-full font-satoshi min-h-screen bg-[#fffff7] " >
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


