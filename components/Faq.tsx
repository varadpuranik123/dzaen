import { useState } from "react";
import Image from "next/image";
import data from "./data";
import { motion } from "framer-motion";

const Faq = () => {
    const [selected, setSelected] = useState<string | null>(null);

    function handleSingleSelection(getCurrentId: string) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    return (
        <div className="w-full min-h-[80vh] flex flex-col justify-center items-center">
            <div className="faq-container w-[90%] h-[80%] border-t-[2px] py-10 border-[#FF7A30] flex flex-col space-y-8 lg:space-y-0 lg:flex-row">
                <div className="lg:w-1/2 w-full lg:text-start text-center h-full">
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
                        className="lg:text-6xl text-4xl font-semibold lg:max-w-[26rem] leading-[1.15] ">
                        You Got Any Questions 
                        <motion.span className="text-[#FF7A30] font-bold"> Boss</motion.span>
                    </motion.p>
                </div>
                <div className=" lg:w-1/2 w-full flex flex-col h-full  ">
                    <div className="accordion">
                        {data && data.length > 0 ? (
                            data.map((dataItem) => (
                                <motion.div
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
                                    className="border-t-2 w-full border-[#ff7a30] item py-2 lg:px-6 "
                                    key={dataItem.id}
                                >
                                    <div
                                        className="title flex w-full justify-between items-center"
                                        onClick={() =>
                                            handleSingleSelection(dataItem.id)
                                        }
                                    >
                                        <h3 className="lg:text-xl w-[95%] text-lg font-semibold">
                                            {dataItem.question}
                                        </h3>
                                        <span
                                            className={`transition duration-200  ${selected === dataItem.id
                                                    ? "-rotate-45"
                                                    : ""
                                                }`}
                                        >
                                            <Image
                                                src="./plus.svg"
                                                width={0}
                                                height={0}
                                                className="lg:w-6 lg:h-6 w-3 h-3"
                                                alt=""
                                            />
                                        </span>
                                    </div>
                                    {selected === dataItem.id ? (
                                        <div className="lg:text-xl text-lg font-semibold text-[#333]/70 py-3">{dataItem.answer}</div>
                                    ) : null}
                                </motion.div>
                            ))
                        ) : (
                            <div>no data found</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;

