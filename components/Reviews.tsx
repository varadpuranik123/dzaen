import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'

const Reviews = () => {
    
    return (
    <div className="w-full h-full lg:h-[80vh] flex flex-col items-center ">
        <div className="mt-32 w-full text-center space-y-2">
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
            className=" text-[#333] px-1 lg:px-0 lg:text-6xl text-4xl font-semibold "><span className="text-[#FF995F] font-bold ">Boss</span> Hear What Others Are Saying! </motion.p>
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
            className=" text-[#333]/80 font-semibold text-xs lg:text-lg ">Discover Testimonials from Satisfied Clients and Partners.</motion.p>
        </div>
        <motion.div

            initial={{
                x:"100%"
            }}

            transition={{
                ease: "linear",
                repeat: Infinity,
                duration: 15
            }}

            animate={{
                x:"-100%" 
            }}

        className=" testimonials space-x-3 mt-12 lg:w-[100%] w-[950px] h-[40%] flex flex-row lg:flex-row">
        <div className=" flex flex-col items-center justify-center buttons-3 w-full h-full rounded-xl border-2 border-[#333] bg-[#FF995F]/15">
                <div className="flex flex-col w-[90%] h-[80%] py-2  ">
                    <div className=" w-full h-[35%] flex items-center py-3 lg:p-0 ">
                        <div className=" lg:w-[20%] h-full flex ">
                            <div className="lg:w-16 lg:h-16 w-10 h-10 rounded-full bg-[#FF995F]"></div>
                        </div>
                        <div className=" w-[60%] h-full ml-2 ">
                            <p className=" w-full h-[50%] leading-tight tracking-[0.02em] flex items-end lg:text-lg text-lg font-bold ">harry putter</p>
                            <p className=" w-full h-[50%] leading-tight lg:text-[13px] text-xs text-[#333]/70 font-semibold ">UI factory</p>
                        </div>
                        <div className=" w-[20%] flex items-center justify-end lg:justify-center h-full">
                            <Image className="lg:w-14 lg:h-14 w-10 h-10 " src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smirking%20Face.png" alt="Smirking Face" width="25" height="25" />
                        </div>
                    </div>
                    <div className="w-full h-[65%] lg:mt-4 mt-2  ">
                        <p className=" text-xs lg:text-sm tracking-wide font-bold text-[#333]/70 ">
                            I was blown away by the professionalism and expertise of the team at DZAEN. From start to finish, they guided us through the process with ease, delivering a stunning landing page that exceeded our expectations
                        </p>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col items-center justify-center buttons-3 w-full h-full rounded-xl border-2 border-[#333] bg-[#FF995F]/15">
                <div className="flex flex-col w-[90%] h-[80%] py-2 ">
                    <div className=" w-full h-[35%]  flex items-center py-3 lg:p-0 ">
                        <div className=" lg:w-[20%] h-full flex ">
                            <div className="lg:w-16 lg:h-16 w-10 h-10 rounded-full bg-[#FF995F]"></div>
                        </div>
                        <div className=" w-[60%] h-full  ml-2">
                            <p className=" w-full h-[50%] leading-tight tracking-[0.02em] flex items-end lg:text-lg text-lg font-semibold ">harry putter</p>
                            <p className=" w-full h-[50%] leading-tight text-xs lg:text-[13px] font-semibold text-[#333]/70 ">UI factory</p>
                        </div>
                        <div className=" w-[20%] flex items-center justify-end lg:justify-center h-full ">
                            <Image className="lg:w-14 lg:h-14 w-10 h-10 " src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smirking%20Face.png" alt="Smirking Face" width="25" height="25" />
                        </div>
                    </div>
                    <div className="w-full h-[65%] lg:mt-4 mt-2  ">
                        <p className=" text-xs lg:text-sm tracking-wide font-bold text-[#333]/70 ">
                            I was blown away by the professionalism and expertise of the team at DZAEN. From start to finish, they guided us through the process with ease, delivering a stunning landing page that exceeded our expectations
                        </p>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col items-center justify-center buttons-3 w-full h-full rounded-xl border-2 border-[#333] bg-[#FF995F]/15">
                <div className="flex flex-col w-[90%] h-[80%]  py-2">
                    <div className=" w-full h-[35%]  flex items-center py-3 lg:p-0 ">
                        <div className=" lg:w-[20%] h-full flex ">
                            <div className="lg:w-16 lg:h-16 w-10 h-10 rounded-full bg-[#FF995F]"></div>
                        </div>
                        <div className=" w-[60%] h-full  ml-2">
                            <p className=" w-full h-[50%] leading-tight tracking-[0.02em] flex items-end lg:text-lg text-lg font-semibold ">harry putter</p>
                            <p className=" w-full h-[50%] leading-tight text-xs lg:text-[13px] font-semibold text-[#333]/70 ">UI factory</p>
                        </div>
                        <div className=" w-[20%] flex items-center justify-end lg:justify-center h-full ">
                            <Image className="lg:w-14 lg:h-14 w-10 h-10 " src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smirking%20Face.png" alt="Smirking Face" width="25" height="25" />
                        </div>
                    </div>
                    <div className="w-full h-[65%] lg:mt-4 mt-2  ">
                        <p className=" text-xs lg:text-sm tracking-wide font-bold text-[#333]/70 ">
                            I was blown away by the professionalism and expertise of the team at DZAEN. From start to finish, they guided us through the process with ease, delivering a stunning landing page that exceeded our expectations
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default Reviews