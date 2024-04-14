import { motion } from "framer-motion";
import React from "react";

const Excute = () => {
    return (
        <div className="flex flex-col w-full lg:h-[190vh] h-full " >
            <div className="mt-28 h-[8%] w-full text-center space-y-2">
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
                        duration: 0.5
                    }}

                    viewport={{
                        once: true
                    }}
                    className=" text-[#333] text-4xl lg:text-6xl font-semibold ">This is the Way we Execute <span className="text-[#FF995F] font-bold ">Boss</span></motion.p>
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
                        duration: 0.5
                    }}

                    viewport={{
                        once: true
                    }}
                    className=" text-[#333]/80 font-semibold text-xs lg:text-lg ">Efficiency, Precision, Excellence: Our Signature Approach</motion.p>
            </div>
            <div className="flex flex-col w-full h-[92%] mt-10 ">
                <div className="flex flex-col lg:flex-row w-full h-full border-t border-[#FF995F] ">
                    <div className="flex flex-col lg:py-16 lg:px-20 px-10 py-4 space-y-4 w-full h-full ">
                        <motion.div
                            initial={{
                                opacity: 0
                            }}
                            whileInView={{
                                opacity: 1
                            }}
                            transition={{
                                duration: 0.5
                            }}
                            viewport={{
                                once: true
                            }}
                            className=" flex items-center w-full h-[20%] border-l-[4px] rounded-lg bg-gradient-to-r from-[#FF995F]/20 lg:pl-4 pl-2 border-[#FF995F] ">
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
                                className="lg:text-4xl text-2xl font-bold ">Initial Consultation</motion.p>
                        </motion.div>
                        <div className="w-full h-[80%] ">
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
                                    duration: 0.9
                                }}

                                viewport={{
                                    once: true
                                }}
                                className=" lg:text-[22px] lg:leading-8 lg:w-[34rem] w-full  text-[#333]/80 font-extrabold ">We start with a detailed discussion to understand your goals, preferences, and target audience. We gather insights into your brand identity, desired aesthetics, and functionality requirements.</motion.p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:py-16 lg:px-20 px-10 py-4 space-y-4 w-full h-full border-l lg:border-t-0 border-t border-[#FF995F] ">
                        <motion.div
                            initial={{
                                opacity: 0
                            }}
                            whileInView={{
                                opacity: 1
                            }}
                            transition={{
                                duration: 0.5
                            }}
                            viewport={{
                                once: true
                            }}
                            className=" flex items-center w-full h-[20%] border-l-[4px] rounded-lg bg-gradient-to-r from-[#FF995F]/20 pl-4 border-[#FF995F] ">
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
                                className="lg:text-4xl text-2xl font-bold ">Conceptualization and Planning</motion.p>
                        </motion.div>
                        <div className="w-full h-[80%] ">
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
                                    duration: 0.9
                                }}

                                viewport={{
                                    once: true
                                }}
                                className=" lg:text-[22px] lg:leading-8 lg:w-[36rem] w-full text-[#333]/80 font-extrabold ">Our team brainstorms ideas and develops a strategic plan tailored to your objectives. We create wireframes and prototypes to visualize the layout and flow of your landing page.</motion.p>
                        </div>
                    </div>
                </div>
                <div className="flex w-full h-full flex-col lg:flex-row border-t border-[#FF995F]  ">
                    <div className="flex flex-col lg:py-16 lg:px-20 px-10 py-4 space-y-4 w-full h-full ">
                        <motion.div
                            initial={{
                                opacity: 0
                            }}
                            whileInView={{
                                opacity: 1
                            }}
                            transition={{
                                duration: 0.5
                            }}
                            viewport={{
                                once: true
                            }}
                            className=" flex items-center w-full h-[20%] border-l-[4px] rounded-lg bg-gradient-to-r from-[#FF995F]/20 pl-4 border-[#FF995F] ">
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
                                className="lg:text-4xl text-2xl font-bold ">Design and Development</motion.p>
                        </motion.div>
                        <div className="w-full h-[80%] ">
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
                                    duration: 0.9
                                }}

                                viewport={{
                                    once: true
                                }}
                                className="lg:text-[22px] lg:leading-8 lg:w-[34rem] w-full text-[#333]/80 font-extrabold ">Once the plan is approved, we proceed to the design phase. Our designers craft a custom layout, incorporating your brand elements and design preferences. Simultaneously, our developers bring the design to life, ensuring seamless functionality and responsiveness across devices.</motion.p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:py-16 lg:px-20 px-10 py-4 space-y-4 w-full h-full border-l lg:border-t-0 border-t border-[#FF995F] ">
                        <motion.div
                            initial={{
                                opacity: 0
                            }}
                            whileInView={{
                                opacity: 1
                            }}
                            transition={{
                                duration: 0.5
                            }}
                            viewport={{
                                once: true
                            }}
                            className=" flex items-center w-full h-[20%] border-l-[4px] rounded-lg bg-gradient-to-r from-[#FF995F]/20 pl-4 border-[#FF995F] ">
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
                                className="lg:text-4xl text-2xl font-bold ">Feedback and Revisions</motion.p>
                        </motion.div>
                        <div className="w-full h-[80%] ">
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
                                    duration: 0.9
                                }}

                                viewport={{
                                    once: true
                                }}
                                className=" lg:text-[22px] lg:leading-8 lg:w-[34rem] w-full text-[#333]/80 font-extrabold ">We present the initial design for your feedback and input. Based on your suggestions, we make revisions to refine the design until it meets your expectations.</motion.p>
                        </div>
                    </div>
                </div>
                <div className="flex w-full h-full flex-col lg:flex-row border-t border-b border-[#FF995F]  ">
                    <div className="flex flex-col lg:py-16 lg:px-20 px-10 py-4 space-y-4 w-full h-full ">
                        <motion.div
                            initial={{
                                opacity: 0
                            }}
                            whileInView={{
                                opacity: 1
                            }}
                            transition={{
                                duration: 0.5
                            }}
                            viewport={{
                                once: true
                            }}
                            className=" flex items-center w-full h-[20%] border-l-[4px] rounded-lg bg-gradient-to-r from-[#FF995F]/20 pl-4 border-[#FF995F] ">
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
                                className="lg:text-4xl text-2xl font-bold ">Delivery and Launch</motion.p>
                        </motion.div>
                        <div className="w-full h-[80%] ">
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
                                    duration: 0.9
                                }}

                                viewport={{
                                    once: true
                                }}
                                className=" lg:text-[22px] lg:leading-8 lg:w-[34rem] w-full text-[#333]/80 font-extrabold ">Once everything is polished and perfected, we deliver the final product to you. We assist with the deployment process and provide support during the launch phase to ensure a smooth transition.</motion.p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:py-16 lg:px-20 px-10 py-4 space-y-4 w-full h-full border-l lg:border-t-0 border-t border-[#FF995F] ">
                        <motion.div
                            initial={{
                                opacity: 0
                            }}
                            whileInView={{
                                opacity: 1
                            }}
                            transition={{
                                duration: 0.5
                            }}
                            viewport={{
                                once: true
                            }}
                            className=" flex items-center w-full h-[20%] border-l-[4px] rounded-lg bg-gradient-to-r from-[#FF995F]/20 pl-4 border-[#FF995F] ">
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
                                className="lg:text-4xl text-2xl font-bold ">Post-launch Support</motion.p>
                        </motion.div>
                        <div className="w-full h-[80%] ">
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
                                    duration: 0.9
                                }}

                                viewport={{
                                    once: true
                                }}
                                className=" lg:text-[22px] lg:leading-8 lg:w-[34rem] w-full text-[#333]/80 font-extrabold ">Our commitment doesn&apos;t end with the launch. We offer ongoing support and maintenance to address any issues and ensure your landing page continues to perform at its best.</motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Excute;
