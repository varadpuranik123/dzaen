import About from "@/components/About";
import Hero from "@/components/Hero";
import React from "react";

export default function Home() {
  return (
    <div className="text-[#333] w-full min-h-screen bg-[#fffff7] " >
      <Hero />
      <About />
    </div>
  );
}
