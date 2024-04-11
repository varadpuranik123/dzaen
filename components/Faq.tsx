"use client";
import { useState } from "react"
import Image from "next/image";
import data from "./data";

const Faq = () => {

    

    return (
        <div className="w-full min-h-[80vh] flex flex-col justify-center items-center">
            <div className="faq-container w-[90%] h-[80%] border-t-[2px] py-10 border-[#FF7A30] flex flex-col md:flex-row">
                <div className="md:w-1/2 w-full md:text-start text-center h-full">
                    <p className="md:text-6xl text-4xl font-semibold md:max-w-[26rem] leading-[1.15] ">You Got Any Questions <span className="text-[#FF7A30] font-bold">Boss</span></p>
                </div>
                <div className="md:w-1/2 w-full flex flex-col h-full  ">
                    
                </div>
            </div>
        </div>
    );
};

export default Faq;
