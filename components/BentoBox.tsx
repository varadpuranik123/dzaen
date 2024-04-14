import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const BentoBox = () => {
  return (
    <div className="flex flex-col items-center w-full lg:h-[119vh] lg:pt-0 pt-16">
      <div className="w-full text-center space-y-2">
        <motion.p
              initial={{
                opacity:0,
                y:20
              }}
    
              whileInView={{
                opacity:1,
                y:0
              }}
    
              transition={{
                duration:0.5
              }}
    
              viewport={{
                once:true
               }}
        className="text-[#333] lg:text-6xl text-4xl font-semibold">
          <span className="text-[#FF995F] font-bold">Boss,</span> Explore Our Digital Mastery!
        </motion.p>
        <motion.p
              initial={{
                opacity:0,
                y:20
              }}
    
              whileInView={{
                opacity:1,
                y:0
              }}
    
              transition={{
                duration:0.5
              }}
    
              viewport={{
                once:true
               }}
        className="text-[#333]/80 font-semibold lg:text-lg text-xs">Unlock Your Brand&apos;s Potential Online.</motion.p>
      </div>
      <div className="w-[90%] flex flex-col lg:flex-row h-full lg:space-x-4 lg:space-y-0 space-y-4 mt-10">
        <div className="w-full h-full space-y-4 flex flex-col">
          <motion.div
          initial={{
            opacity:0,
            y:50
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.5
          }}

          viewport={{
            once:true
           }}
          className="overflow-hidden flex flex-col justify-center items-center text-start lg:p-10 p-6 buttons w-full h-full border-[2px] border-[#333] rounded-xl">
            <Image src="./bespoke.svg" className="lg:w-full lg:h-full w-80 h-24 object-fil -translate-y-2" alt={""} width={0} height={0}></Image>
            <h3 className="mt-1 lg:text-[28px] text-[22px] font-semibold leading-tight w-full">Bespoke Design</h3>
            <p className="text-[#333]/80 font-extrabold">Every pixel meticulously crafted to reflect your brand&apos;s essence, ensuring an unforgettable digital identity.</p>
          </motion.div>
          <motion.div 
          initial={{
            opacity:0,
            y:50
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.5
          }}

          viewport={{
            once:true
           }}
          className="py-2 overflow-hidden items-center text-start flex flex-col justify-center lg:p-10 p-6 buttons w-full h-full border-[2px] border-[#333] rounded-xl">
            <div className="w-[50%] h-[50%] flex">
              <Image src="./responsive.svg" className="mt-1 lg:scale-[1.5] lg:w-full lg:h-full w-80 h-32 object-fil" alt={""} width={0} height={0}></Image>
            </div>
            <div className="w-full">
              <h3 className="mt-1 lg:text-[28px] text-[22px] font-semibold leading-tight">Responsive Mastery</h3>
            </div>
            <p className="text-[#333]/80 font-extrabold">Seamlessly adapting your landing page across all devices, ensuring impeccable user experiences no matter the screen size.</p>
          </motion.div>
        </div>
        <motion.div
        initial={{
          opacity:0,
          y:50
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:0.5
        }}

        viewport={{
          once:true
         }}
        className="flex justify-center items-center buttons w-full h-full border-[2px] border-[#333] rounded-xl">
          <div className="w-[80%] flex flex-col lg:py-0 py-10 h-[90%] space-y-4 lg:space-y-0">
            <div className="w-full h-[10%] flex items-center">
              <p className="lg:text-3xl text-[22px] font-semibold">Interactive Wizardry</p>
            </div>
            <div className="w-full h-[15%]">
              <p className="text-[#333]/80 font-extrabold">Captivate your audience with dynamic elements, from eye-catching animations to immersive video backgrounds.</p>
            </div>
            <div className="w-full h-[15%]">
              <button className="w-full h-12 bg-white font-[500] border-[2px] border-[#333] rounded-lg">Click me</button>
            </div>
            <div className="w-full h-[60%] flex justify-center items-center">
              <Image src="./wand.svg" className="lg:w-full lg:h-full w-60 h-60" width={0} height={0} alt={""}></Image>
            </div>
          </div>
        </motion.div>
        <div className="w-full flex flex-col space-y-4 h-full">
          <motion.div
          initial={{
            opacity:0,
            y:50
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.5
          }}

          viewport={{
            once:true
           }}
          className="overflow-hidden items-center text-start flex flex-col justify-center lg:p-10 p-8 buttons w-full h-full border-[2px] border-[#333] rounded-xl">
            <div className="w-[90%] h-[90%] flex justify-center items-center ">
              <Image src="./visual.svg" className="-translate-y-6 mt-1 lg:w-full lg:h-52 w-72 h-28 object-fil" alt={""} width={0} height={0}></Image>
            </div>
            <div className="w-full">
              <h3 className="mt-1 text-[22px] lg:text-[28px] font-semibold leading-tight">Visual Enchantment</h3>
            </div>
            <p className="text-[#333]/80 font-extrabold">Illustrations that breathe life into your narrative, transforming concepts into captivating visual stories.</p>
          </motion.div>
          <motion.div
          initial={{
            opacity:0,
            y:50
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.5
          }}

          viewport={{
            once:true
           }}
          className="lg:py-2 overflow-hidden space-y-2 items-center text-start flex flex-col justify-center lg:p-10 p-8 buttons w-full lg:h-full border-[2px] border-[#333] rounded-xl">
            <div className="w-[80%] h-[80%] flex justify-center items-center">
              <Image src="./logomagic.svg" className="lg:-translate-y-2 -translate-y-4 mt-1 lg:w-full lg:h-full w-80 h-24 object-fil" alt={""} width={0} height={0}></Image>
            </div>
            <div className="w-full -translate-y-4">
              <h3 className="mt-1 text-[22px] lg:text-[28px] font-semibold  leading-tight">Logo Magic</h3>
            </div>
            <p className="-translate-y-4 text-[#333]/80 font-extrabold">Craft a distinctive logo that serves as the cornerstone of your brand identity, leaving a lasting impression on your audience.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BentoBox;
