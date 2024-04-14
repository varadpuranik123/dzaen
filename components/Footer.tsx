import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <div className=" w-full lg:h-[130vh] py-4 lg:py-0 flex flex-col items-center justify-center bg-[#FF995F]/50 text-[#fffcce] ">
        <div className="footer-container w-[97%] h-[90%] flex flex-col  ">
            <div className="footer-items w-full lg:h-[30%] flex flex-col lg:flex-row px-4 lg:px-0 justify-between space-y-4 lg:space-y-0  ">
                <div className="w-full h-full ">
                    <Image src="./logoWhite.svg" width={55} height={55} alt={''}></Image>
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
                className=" text-xl w-full h-full tracking-wider flex flex-col">
                    <h5 className="font-semibold ">Navigation</h5>
                    <p className="">Home</p>
                    <p className="">About</p>
                    <p className="">Work</p>
                    <p className="">Plans</p>
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
                    duration:0.5
                  }}
        
                  viewport={{
                    once:true
                   }}
                className=" text-xl w-full h-full tracking-wider  flex flex-col">
                    <h5 className="font-semibold ">Socials</h5>
                    <p className="">Instagram</p>
                    <p className="">X(twitter)</p>
                    <p className="">LinkedIn</p>
                    <p className="">Youtube</p>
                </motion.div>
                <div className="w-full h-full "></div>
            </div>
            <div className="w-full lg:h-[60%] items-center overflow-hidden justify-center  flex flex-col ">
                <motion.p
                initial={{
                    opacity:0,
                    scale:0,
                    y:"-20%"
                  }}
        
                  whileInView={{
                    opacity:1,
                    scale:1,
                    y:"0%"
                  }}
        
                  transition={{
                    duration:0.5
                  }}
        
                  viewport={{
                    once:true
                   }}
                className="lg:text-[480px] text-[120px] font-[300] text-[#fffcce]/60  ">DZAEN</motion.p>
            </div>
            <div className="w-full lg:h-[10%] mb-2 lg:mb-0 flex lg:items-end items-center justify-between px-4 ">
                <p className="lg:text-lg">All rights reserved</p>
                <p className="lg:text-3xl underline underline-offset-8 "><a href="#nav">Back To Top <span className=""><Image className="inline-block mb-1 scale-75 lg:scale-100" src="./upArrow.svg" width={20} height={20} alt={''}></Image></span></a> </p>
            </div>
        </div>
    </div>
  )
}

export default Footer