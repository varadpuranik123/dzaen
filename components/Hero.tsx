import Image from "next/image"
import { motion } from "framer-motion"


const hero = () => {
  return (
    
    <div className=" w-full lg:h-screen h-full flex flex-col justify-center items-center font-[900]">
        <div className=" w-[90%] h-[95%] items-center flex flex-col pt-8 px-22 lg:space-y-4 space-y-2 ">
          <div className="  heading text-center">
            <div className="flex justify-center items-center space-x-2 lg:space-x-0">
            <motion.span initial={{ rotate:0 }} 
                         animate={{ rotate:-360 }}
                         transition={{ ease: "linear",
                                       repeat: Infinity,
                                       duration: 1.5 }}
                         className=""> <Image className="lg:w-32 lg:h-32 w-12 h-12" src="./star.svg" width={0} height={0} alt={""}></Image> 
            </motion.span>    
            <div className="flex items-center overflow-hidden lg:h-[110px] ">
              <motion.h1
                initial={{ y:100 }}
                animate={{ y:0 }}
                transition={{
                  duration:0.5,
                  ease:[0.68, -0.6, 0.32, 1.6]
                }}
              className=" lg:text-9xl text-4xl font-[600] tracking-tight lg:leading-[90px] ">Hii <span className="text-[#FF995F] font-bold">BOSS</span></motion.h1>  
            </div>         
            <motion.span initial={{ rotate:0 }} 
                         animate={{ rotate:360 }}
                         transition={{ ease: "linear",
                                       repeat: Infinity,
                                       duration: 1.5 }}
                         className=""> <Image className="lg:w-32 lg:h-32 w-12 h-12" src="./star.svg" width={0} height={0} alt={""}></Image> 
            </motion.span>
            </div>
            <div className="flex items-center overflow-hidden lg:h-[77px] h-[47px] justify-center">
              <motion.h1
                initial={{ y:100 }}
                animate={{ y:0 }}
                transition={{ duration:0.8,
                              ease: [0.34, 1.56, 0.64, 1]
                 }}
              className=" lg:text-6xl text-3xl font-[600] tracking-tight ">what design you want</motion.h1>
            </div>
          </div>
          <div className="overflow-hidden w-fit lg:h-32 items-center justify-center flex">
            <motion.p
                initial={{ y:100 }}
                animate={{ y:0 }}
                transition={{
                  duration:0.5,
                  ease:[0.68, -0.6, 0.32, 1.6]
                }}
            className=" border-2 py-2 scale-100 hover:scale-110 transition duration-200 lg:px-8 px-4 rounded-l-full border-[#333] border-r-0 lg:text-lg text-xs font-semibold text-center ">web design</motion.p>
            <motion.p
                initial={{ y:100 }}
                animate={{ y:0 }}
                transition={{
                  duration:0.5,
                  ease:[0.68, -0.6, 0.32, 1.6]
                }}
            className=" border-2 py-2 scale-100 hover:scale-110 transition duration-200 lg:px-8 px-4 border-[#333] lg:text-lg text-xs font-semibold text-center ">Logo design</motion.p>
            <motion.p
                initial={{ y:100 }}
                animate={{ y:0 }}
                transition={{
                  duration:0.5,
                  ease:[0.68, -0.6, 0.32, 1.6]
                }}
            className=" border-2 py-2 scale-100 hover:scale-110 transition duration-200 lg:px-8 px-4 rounded-r-full border-[#333] border-l-0 lg:text-lg text-xs font-semibold text-center ">Portfolio design</motion.p>
          </div>
          <div className="CTAS flex lg:space-x-4 space-x-2 justify-center ">
            <button className="lg:py-3 py-2 hover:scale-110 transition duration-300 lg:w-80 w-40 lg:text-xl text-xs border-2 border-[#333] bg-white hover:bg-[#fffcce] rounded-full buttons ">Join Us NOW</button>
            <button className="lg:py-3 py-2 hover:scale-110 transition font-[400] duration-300 lg:w-80 w-40 lg:text-xl text-xs border-2 border-[#fff] bg-[#FF995F] hover:bg-[#FF995F]/80 text-white rounded-full buttons ">See OUR designs</button>
          </div>
          <motion.div
            initial={{
              opacity:0,
              scale:0
            }}
            animate={{
              opacity:100,
              scale:1
            }}
          className="circle overflow-hidden lg:h-full h-36 w-full justify-center items-start  flex ">
            <Image src="./circles.svg" className="lg:w-[36rem] lg:h-[36rem] lg:-translate-y-32 -translate-y-16 w-72 h-72" width={0} height={0} alt={""}></Image>
          </motion.div>
        </div>
    </div>
  )
}

export default hero