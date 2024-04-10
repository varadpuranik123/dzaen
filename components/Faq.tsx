"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Faq = () => {
    const [isOpen, setIsOpen] = useState([false, false]);
    const [viewportWidth, setViewportWidth] = useState<number | null>(null);

    const toggleDetails = (index:any) => {
        const updatedIsOpen = [...isOpen];
        updatedIsOpen[index] = !updatedIsOpen[index];
        setIsOpen(updatedIsOpen);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Accessing window.innerWidth to get the viewport width
            setViewportWidth(window.innerWidth);

            // Adding event listener to update viewport width on resize
            const handleResize = () => {
                setViewportWidth(window.innerWidth);
            };

            window.addEventListener('resize', handleResize);

            // Clean up the event listener when the component unmounts
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    return (
        <div className="w-full min-h-[80vh] flex flex-col justify-center items-center">
            <div className="faq-container w-[90%] h-[80%] border-t-[2px] py-10 border-[#FF7A30] flex flex-col md:flex-row">
                <div className="md:w-1/2 w-full md:text-start text-center h-full">
                    <p className="md:text-6xl text-4xl font-semibold md:max-w-[26rem] leading-[1.15] ">You Got Any Questions <span className="text-[#FF7A30] font-bold">Boss</span></p>
                </div>
                <div className="md:w-1/2 w-full flex flex-col h-full  ">
                    <div className="w-full md:h-fit h-full space-y-4 ">
                        <details className={`w-full ${isOpen[0] ? "h-auto" : "h-14"} border-t-2 border-[#FF7A30] `} onClick={() => toggleDetails(0)}>
                            <summary className="w-full h-16 flex items-center md:px-4 justify-between">
                                <p className="md:text-xl text-lg font-semibold text-[#333]/80 ">How do I get started?</p>
                                <Image className={`transform ${isOpen[0] ? "rotate-45" : "rotate-0"} transition`} src="./plus.svg" alt={""} width={20} height={20}></Image>
                            </summary>
                            <div className={`px-4 py-3 md:text-xl text-lg font-bold text-[#333]/60 ${isOpen[0] ? "block" : "hidden"}`}>
                                Simply reach out to us via our contact form or email, and one of our team members will be in touch to discuss your project and guide you through the process.
                            </div>
                        </details>
                        <details className={`w-full ${isOpen[5] ? "h-auto" : "h-14"} border-t-2 border-[#FF7A30] `} onClick={() => toggleDetails(5)}>
                            <summary className="w-full h-16 flex items-center md:px-4 justify-between">
                                <p className="md:text-xl text-lg font-semibold text-[#333]/80 ">How long does it take to create a landing page?</p>
                                <Image className={`transform ${isOpen[5] ? "rotate-45" : "rotate-0"} transition`} src="./plus.svg" alt={""} width={20} height={20}></Image>
                            </summary>
                            <div className={`px-4 py-3 md:text-xl text-lg font-bold text-[#333]/60 ${isOpen[5] ? "block" : "hidden"}`}>
                                The timeframe depends on the complexity of the project and the chosen plan. Typically, our pre-made templates can be deployed quickly, while custom designs may take longer. Contact us for a personalized estimate based on your requirements.
                            </div>
                        </details>
                        <details className={`w-full ${isOpen[1] ? "h-auto" : "h-14"} border-t-2 border-[#FF7A30] `} onClick={() => toggleDetails(1)}>
                            <summary className="w-full h-16 flex items-center md:px-4 justify-between">
                                <p className="md:text-xl text-lg font-semibold text-[#333]/80 ">Can I request changes to my landing page after it&apos;s been created?</p>
                                <Image className={`transform ${isOpen[1] ? "rotate-45" : "rotate-0"} transition`} src="./plus.svg" alt={""} width={20} height={20}></Image>
                            </summary>
                            <div className={`px-4 py-3 md:text-xl text-lg font-bold text-[#333]/60 ${isOpen[1] ? "block" : "hidden"}`}>
                            Yes, revisions are included in our Pro, Premium, and Enterprise plans. Simply let us know your feedback, and we&apos;ll make the necessary adjustments until you&apos;re satisfied with the result.
                            </div>
                        </details>
                        <details className={`w-full ${isOpen[2] ? "h-auto" : "h-14"} border-t-2 border-[#FF7A30] `} onClick={() => toggleDetails(2)}>
                            <summary className="w-full h-16 flex items-center md:px-4 justify-between">
                                <p className="md:text-xl text-lg font-semibold text-[#333]/80 ">Do you provide hosting services for landing pages?</p>
                                <Image className={`transform ${isOpen[2] ? "rotate-45" : "rotate-0"} transition`} src="./plus.svg" alt={""} width={20} height={20}></Image>
                            </summary>
                            <div className={`px-4 py-3 md:text-xl text-lg font-bold text-[#333]/60 ${isOpen[2] ? "block" : "hidden"}`}>
                            We focus on design and development, but we can recommend reputable hosting providers to ensure your landing page is live and accessible to your audience.
                            </div>
                        </details>
                        <details className={`w-full ${isOpen[3] ? "h-auto" : "h-14"} border-t-2 border-[#FF7A30] `} onClick={() => toggleDetails(3)}>
                            <summary className="w-full h-16 flex items-center md:px-4 justify-between">
                                <p className="md:text-xl text-lg font-semibold text-[#333]/80 ">What happens if I&apos;m not satisfied with the final result?</p>
                                <Image className={`transform ${isOpen[3] ? "rotate-45" : "rotate-0"} transition`} src="./plus.svg" alt={""} width={20} height={20}></Image>
                            </summary>
                            <div className={`px-4 py-3 md:text-xl text-lg font-bold text-[#333]/60 ${isOpen[3] ? "block" : "hidden"}`}>
                            Client satisfaction is our priority. If you&apos;re not completely happy with the outcome, we&apos;ll work closely with you to address any concerns and make revisions until you&apos;re delighted with your landing page.
                            </div>
                        </details>
                        <details className={`w-full ${isOpen[4] ? "h-auto" : "h-14"} border-t-2 md:border-b-2 border-[#FF7A30] `} onClick={() => toggleDetails(4)}>
                            <summary className="w-full h-16 flex items-center md:px-4 justify-between">
                                <p className="md:text-xl text-lg font-semibold text-[#333]/80 ">Can I upgrade or downgrade my plan at any time?</p>
                                <Image className={`transform ${isOpen[4] ? "rotate-45" : "rotate-0"} transition`} src="./plus.svg" alt={""} width={20} height={20}></Image>
                            </summary>
                            <div className={`px-4 py-3 md:text-xl text-lg font-bold text-[#333]/60 ${isOpen[4] ? "block" : "hidden"}`}>
                                Absolutely! You can upgrade or downgrade your plan at any time to better suit your evolving needs. Just get in touch with us, and we&apos;ll handle the rest.
                            </div>
                        </details>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
