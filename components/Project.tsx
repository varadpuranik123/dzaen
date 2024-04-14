import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Project = () => {
    return (
        <div className="  w-full min-h-[100vh] flex flex-col justify-center items-center " >
            <div className="mt-32 w-full text-center space-y-2">
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 20
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 0.8
                    }}

                    viewport={{
                        once: true
                    }}
                    className=" text-[#333] lg:text-6xl text-3xl px-2 lg:px-0 font-semibold ">There is Somethings We Want to Show <span className="text-[#FF995F] font-bold ">Boss</span></motion.p>
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 20
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 0.8
                    }}

                    viewport={{
                        once: true
                    }}
                    className=" text-[#333]/80 font-semibold text-xs lg:text-lg ">Explore Our Showcase of Standout Projects</motion.p>
            </div>
            <div className="mt-10 project-section flex flex-col-reverse lg:gap-y-0 gap-y-10 lg:flex-row w-[80%] lg:h-[80vh] h-full ">
                <motion.div
                initial={{
                    opacity: 0,
                    x: -100
                }}

                whileInView={{
                    opacity: 1,
                    x: 0
                }}

                transition={{
                    duration: 0.5,
                    ease:[0.68, -0.6, 0.32, 1.6]
                }}

                viewport={{
                    once: true
                }}
                className="lg:w-[30%] w-full lg:h-full h-96 flex flex-col justify-center items-center border-l-2 border-t-2 border-b-2 rounded-r-lg border-r buttons-2  border-black  ">
                    <div className="flex flex-col w-[85%] h-[90%]  ">
                        <div className="w-full h-[60%] flex flex-col ">
                            <div className="heading  flex w-full h-[20%]  justify-between items-center lg:text-3xl text-xl ">
                                <p className=" font-semibold">UI Factory</p>
                                <Image src='/arrow.png' className=" scale-75 lg:scale-100 -rotate-45 " alt={''} width={38} height={38} ></Image>
                            </div>
                            <div className="w-full mt-4 h-[40%] text-[#333]/60 font-bold text-sm ">
                                Utilize Tailwind CSS to craft reusable components like buttons and cards, optimizing development with modular, scalable design and utility classes.
                            </div>
                        </div>
                        <div className=" w-full h-[40%] flex flex-col justify-end space-y-2 ">
                            <button className="buttons-2 w-full lg:h-12 h-10 tracking-wider text-xs lg:text-sm font-extrabold border-2 border-[#333] rounded-xl hover:scale-95 transition duration-200 hover:bg-[#fffcce] "> Explore Project</button>
                            <button className="flex justify-center w-full lg:h-12 h-10 items-center buttons-2 font-[600] tracking-wider text-xs lg:text-sm hover:scale-95 transition duration-200 hover:bg-[#FF995f]/80  border-2 border-[#fff] bg-[#FF995f] rounded-xl text-[#fff] "> Visit Website <span className=""><Image src='./arrow_circle.svg' className=" text-white ml-2" width={13} height={13} alt={''}></Image></span> </button>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                                initial={{
                                    opacity: 0,
                                    x: 100
                                }}
                
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    
                                }}
                
                                transition={{
                                    duration: 0.5,
                                    amount: 0.5,
                                    ease:[0.68, -0.6, 0.32, 1.6]
                                }}
                
                                viewport={{
                                    once: true
                                }}
                className="rounded-xl lg:ml-10 lg:w-[70%] h-full flex justify-center items-center">
                    <Image src='./tailwindProject.svg' alt={''} className=" scale-110 w-[90%] h-[90%]  " width={0} height={0} ></Image>
                </motion.div>
            </div>
            <div className="mt-20 project-section flex flex-col-reverse lg:gap-y-0 gap-y-10 lg:flex-row w-[80%] lg:h-[80vh] h-full ">
                <motion.div
                                initial={{
                                    opacity: 0,
                                    x: -100
                                }}
                
                                whileInView={{
                                    opacity: 1,
                                    x: 0
                                }}
                
                                transition={{
                                    duration: 0.5,
                                    ease:[0.68, -0.6, 0.32, 1.6]
                                }}
                
                                viewport={{
                                    once: true
                                }}
                className="lg:w-[30%] w-full lg:h-full h-96 flex flex-col justify-center items-center border-l-2 border-t-2 border-b-2 rounded-r-lg border-r buttons-2  border-black  ">
                    <div className="flex flex-col w-[85%] h-[90%]  ">
                        <div className="w-full h-[60%] flex flex-col ">
                            <div className="heading  flex w-full h-[20%] justify-between items-center lg:text-3xl text-xl ">
                                <p className=" font-semibold ">Pimzza</p>
                                <Image src='/arrow.png' className="scale-75 lg:scale-100 -rotate-45  " alt={''} width={38} height={38} ></Image>
                            </div>
                            <div className="w-full mt-4 h-[40%] text-sm font-bold text-[#333]/60 ">
                                Crafted a website for your pizzeria, showcasing the art of pizza making with vibrant visuals, easy menu navigation, and online ordering capabilities.
                            </div>
                        </div>
                        <div className=" w-full h-[40%] flex flex-col justify-end space-y-2 ">
                            <button className="buttons-2 w-full lg:h-12 h-10 text-xs lg:text-sm font-extrabold tracking-wider border-2 border-[#333] rounded-xl hover:scale-95 transition duration-200 hover:bg-[#fffcce]"> Explore Project</button>
                            <button className=" flex justify-center w-full lg:h-12 h-10 items-center buttons-2 font-[600] tracking-wider text-xs lg:text-sm border-2 border-[#fff] bg-[#FF995f] rounded-xl text-[#fff] hover:scale-95 transition duration-200 hover:bg-[#FF995f]/80 "> Visit Website <span className=""><Image src='./arrow_circle.svg' className=" text-white ml-2" width={13} height={13} alt={''}></Image></span> </button>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                                initial={{
                                    opacity: 0,
                                    x: 100
                                }}
                
                                whileInView={{
                                    opacity: 1,
                                    x: 0
                                }}
                
                                transition={{
                                    duration: 0.5,
                                    ease:[0.68, -0.6, 0.32, 1.6]
                                }}
                
                                viewport={{
                                    once: true
                                }}
                className="rounded-xl lg:ml-10 lg:w-[70%] h-full flex justify-center items-center">
                    <Image src='./pimmza.svg' alt={''} className=" scale-110 w-[90%] h-[90%]  " width={0} height={0} ></Image>
                </motion.div>
            </div>
        </div>

    )
}

export default Project