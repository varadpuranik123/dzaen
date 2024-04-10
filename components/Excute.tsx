import React from "react";

const Excute = () => {
  return (
    <div className="flex flex-col w-full md:h-[190vh] h-full " >
        <div className="mt-28 h-[8%] w-full text-center space-y-2">
            <p className=" text-[#333] text-4xl md:text-6xl font-semibold ">This is the Way we Execute <span className="text-[#FF995F] font-bold ">Boss</span></p>
            <p className=" text-[#333]/80 font-semibold text-xs md:text-lg ">Efficiency, Precision, Excellence: Our Signature Approach</p>
        </div>
        <div className="flex flex-col w-full h-[92%] mt-10 ">
            <div className="flex flex-col md:flex-row w-full h-full border-t border-[#FF995F] ">
                <div className="flex flex-col md:py-16 md:px-20 px-10 py-4 space-y-4 w-full h-full ">
                    <div className=" flex items-center w-full h-[20%] border-l-[4px] rounded-lg bg-gradient-to-r from-[#FF995F]/20 md:pl-4 pl-2 border-[#FF995F] ">
                        <p className="md:text-4xl text-2xl font-bold ">Initial Consultation</p>
                    </div>
                    <div className="w-full h-[80%] ">
                        <p className=" md:text-[22px] md:leading-8 md:w-[34rem] w-full  text-[#333]/80 font-extrabold ">We start with a detailed discussion to understand your goals, preferences, and target audience. We gather insights into your brand identity, desired aesthetics, and functionality requirements.</p>
                    </div>
                </div>
                <div className="flex flex-col md:py-16 md:px-20 px-10 py-4 space-y-4 w-full h-full border-l md:border-t-0 border-t border-[#FF995F] ">
                    <div className=" flex items-center w-full h-[20%] border-l-[4px] rounded-lg bg-gradient-to-r from-[#FF995F]/20 pl-4 border-[#FF995F] ">
                        <p className="md:text-4xl text-2xl font-bold ">Conceptualization and Planning</p>
                    </div>
                    <div className="w-full h-[80%] ">
                        <p className=" md:text-[22px] md:leading-8 md:w-[36rem] w-full text-[#333]/80 font-extrabold ">Our team brainstorms ideas and develops a strategic plan tailored to your objectives. We create wireframes and prototypes to visualize the layout and flow of your landing page.</p>
                    </div>
                </div>
            </div>
            <div className="flex w-full h-full flex-col md:flex-row border-t border-[#FF995F]  ">
            <div className="flex flex-col md:py-16 md:px-20 px-10 py-4 space-y-4 w-full h-full ">
                <div className=" flex items-center w-full h-[20%] border-l-[4px] rounded-lg bg-gradient-to-r from-[#FF995F]/20 pl-4 border-[#FF995F] ">
                        <p className="md:text-4xl text-2xl font-bold ">Design and Development</p>
                    </div>
                    <div className="w-full h-[80%] ">
                        <p className="md:text-[22px] md:leading-8 md:w-[34rem] w-full text-[#333]/80 font-extrabold ">Once the plan is approved, we proceed to the design phase. Our designers craft a custom layout, incorporating your brand elements and design preferences. Simultaneously, our developers bring the design to life, ensuring seamless functionality and responsiveness across devices.</p>
                    </div>
                </div>
                <div className="flex flex-col md:py-16 md:px-20 px-10 py-4 space-y-4 w-full h-full border-l md:border-t-0 border-t border-[#FF995F] ">
                    <div className=" flex items-center w-full h-[20%] border-l-[4px] rounded-lg bg-gradient-to-r from-[#FF995F]/20 pl-4 border-[#FF995F] ">
                        <p className="md:text-4xl text-2xl font-bold ">Feedback and Revisions</p>
                    </div>
                    <div className="w-full h-[80%] ">
                        <p className=" md:text-[22px] md:leading-8 md:w-[34rem] w-full text-[#333]/80 font-extrabold ">We present the initial design for your feedback and input. Based on your suggestions, we make revisions to refine the design until it meets your expectations.</p>
                    </div>
                </div>
            </div>
            <div className="flex w-full h-full flex-col md:flex-row border-t border-b border-[#FF995F]  ">
            <div className="flex flex-col md:py-16 md:px-20 px-10 py-4 space-y-4 w-full h-full ">
                <div className=" flex items-center w-full h-[20%] border-l-[4px] rounded-lg bg-gradient-to-r from-[#FF995F]/20 pl-4 border-[#FF995F] ">
                        <p className="md:text-4xl text-2xl font-bold ">Delivery and Launch</p>
                    </div>
                    <div className="w-full h-[80%] ">
                        <p className=" md:text-[22px] md:leading-8 md:w-[34rem] w-full text-[#333]/80 font-extrabold ">Once everything is polished and perfected, we deliver the final product to you. We assist with the deployment process and provide support during the launch phase to ensure a smooth transition.</p>
                    </div>
                </div>
                <div className="flex flex-col md:py-16 md:px-20 px-10 py-4 space-y-4 w-full h-full border-l md:border-t-0 border-t border-[#FF995F] ">
                    <div className=" flex items-center w-full h-[20%] border-l-[4px] rounded-lg bg-gradient-to-r from-[#FF995F]/20 pl-4 border-[#FF995F] ">
                        <p className="md:text-4xl text-2xl font-bold ">Post-launch Support</p>
                    </div>
                    <div className="w-full h-[80%] ">
                        <p className=" md:text-[22px] md:leading-8 md:w-[34rem] w-full text-[#333]/80 font-extrabold ">Our commitment doesn&apos;t end with the launch. We offer ongoing support and maintenance to address any issues and ensure your landing page continues to perform at its best.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Excute;
