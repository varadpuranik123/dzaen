import { motion } from 'framer-motion';
import React from 'react';

const About = () => {
  return (
    <div className="w-full lg:h-[80vh] h-full flex flex-col items-center">
      <div className="about w-[90%] lg:px-8 px-4 lg:py-2 py-4 flex flex-col lg:flex-row lg:h-96 border-2 border-[#333] mt-10 rounded-xl">
        <motion.div
        initial={{
          opacity:0,
          y:30,
          scale:1.5
        }}
        whileInView={{
          opacity:1,
          y:0,
          scale:1
        }}

        transition={{
          duration:0.5
        }}

        viewport={{
          once:true
         }}
        className="w-full h-full flex justify-center items-center lg:text-[60px] text-4xl font-semibold">
          Hey there, <span className="font-bold text-[#ff995f]">Boss!</span>
        </motion.div>
        <div className="flex flex-col w-full h-full space-y-2 lg:space-y-0 px-4 py-4">
          <motion.div
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
          className="w-full h-full lg:text-[20px]  text-sm text-[#333]/80 font-semibold">
            So, here&apos;s the scoop about us we&apos;re the dream team behind DZAEN. Yeah, that&apos;s right, you&apos;re the boss, and we&apos;re here to make your digital dreams a reality.
          </motion.div>
          <motion.div
          initial={{
            opacity:0,
            y:20
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.7
          }}

          viewport={{
            once:true
           }}
          className="w-full h-full lg:text-[20px]  text-sm text-[#333]/80 font-semibold">
            We eat, breathe, and sleep design and development. Seriously, it&apos;s our thing. Whether you&apos;re a small business trying to make a big splash or a seasoned entrepreneur looking to level up your online presence, we&apos;ve got your back.
          </motion.div>
        </div>
        <div className="flex flex-col w-full h-full space-y-2 lg:space-y-0 px-4 py-4">
          <motion.div
          initial={{
            opacity:0,
            y:20
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.9
          }}

          viewport={{
            once:true
           }}
          className="w-full h-full lg:text-[20px]  text-sm text-[#333]/80 font-semibold">
            Think of us as your creative sidekick in the digital world. We craft custom landing pages that look stunning and drive results. Let&apos;s make your online presence unforgettable.
          </motion.div>
          <motion.div
          initial={{
            opacity:0,
            y:20
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:1
          }}

          viewport={{
            once:true
           }}
          className="w-full h-full lg:text-[20px]  text-sm text-[#333]/80 font-semibold">
            Our mission? Simple. We&apos;re here to make you shine like a rockstar online. With our expertise and passion, we&apos;ll elevate your brand and help you stand out.
          </motion.div>
        </div>
      </div>
      <motion.div
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
      className="mt-4 font-semibold px-8 lg:px-0 lg:text-lg text-xs text-center">
        So, what do you say, <span className="text-[#ff995f]">Boss?</span> Ready to take your online presence to the next level? Let&apos;s do this!
      </motion.div>
    </div>
  );
};

export default About;
