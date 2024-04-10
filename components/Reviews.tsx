import Image from 'next/image'
import React from 'react'

const Reviews = () => {
  return (
    <div className="w-full h-full md:h-[80vh] flex flex-col items-center ">
        <div className="mt-32 w-full text-center space-y-2">
            <p className=" text-[#333] px-1 md:px-0 md:text-6xl text-4xl font-semibold "><span className="text-[#FF995F] font-bold ">Boss</span> Hear What Others Are Saying! </p>
            <p className=" text-[#333]/80 font-semibold text-xs md:text-lg ">Discover Testimonials from Satisfied Clients and Partners.</p>
        </div>
        <div className=" testimonials md:space-x-3 space-y-3 md:space-y-0 mt-12 w-[90%] h-[40%] flex flex-col md:flex-row">
        <div className=" flex flex-col items-center justify-center buttons-3 w-full h-full rounded-xl border-2 border-[#333] bg-[#FF995F]/15">
                <div className="flex flex-col w-[90%] h-[80%] py-2  ">
                    <div className=" w-full h-[35%] flex items-center py-3 md:p-0 ">
                        <div className=" md:w-[20%] h-full flex ">
                            <div className="md:w-16 md:h-16 w-10 h-10 rounded-full bg-[#FF995F]"></div>
                        </div>
                        <div className=" w-[60%] h-full ml-2 ">
                            <p className=" w-full h-[50%] leading-tight tracking-[0.02em] flex items-end md:text-lg text-md font-bold ">harry putter</p>
                            <p className=" w-full h-[50%] leading-tight md:text-[13px] text-xs text-[#333]/70 font-semibold ">UI factory</p>
                        </div>
                        <div className=" w-[20%] flex items-center justify-end md:justify-center h-full">
                            <Image className="md:w-16 md:h-16 w-10 h-10 " src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smirking%20Face.png" alt="Smirking Face" width="25" height="25" />
                        </div>
                    </div>
                    <div className="w-full h-[65%] md:mt-4 mt-2  ">
                        <p className=" text-xs md:text-sm tracking-wide font-bold text-[#333]/70 ">
                            I was blown away by the professionalism and expertise of the team at DZAEN. From start to finish, they guided us through the process with ease, delivering a stunning landing page that exceeded our expectations
                        </p>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col items-center justify-center buttons-3 w-full h-full rounded-xl border-2 border-[#333] bg-[#FF995F]/15">
                <div className="flex flex-col w-[90%] h-[80%] py-2 ">
                    <div className=" w-full h-[35%]  flex items-center py-3 md:p-0 ">
                        <div className=" md:w-[20%] h-full flex ">
                            <div className="md:w-16 md:h-16 w-10 h-10 rounded-full bg-[#FF995F]"></div>
                        </div>
                        <div className=" w-[60%] h-full  ml-2">
                            <p className=" w-full h-[50%] leading-tight tracking-[0.02em] flex items-end md:text-lg text-md font-semibold ">harry putter</p>
                            <p className=" w-full h-[50%] leading-tight text-xs md:text-[13px] font-semibold text-[#333]/70 ">UI factory</p>
                        </div>
                        <div className=" w-[20%] flex items-center justify-end md:justify-center h-full ">
                            <Image className="md:w-16 md:h-16 w-10 h-10 " src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smirking%20Face.png" alt="Smirking Face" width="25" height="25" />
                        </div>
                    </div>
                    <div className="w-full h-[65%] md:mt-4 mt-2  ">
                        <p className=" text-xs md:text-sm tracking-wide font-bold text-[#333]/70 ">
                            I was blown away by the professionalism and expertise of the team at DZAEN. From start to finish, they guided us through the process with ease, delivering a stunning landing page that exceeded our expectations
                        </p>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col items-center justify-center buttons-3 w-full h-full rounded-xl border-2 border-[#333] bg-[#FF995F]/15">
                <div className="flex flex-col w-[90%] h-[80%]  py-2">
                    <div className=" w-full h-[35%]  flex items-center py-3 md:p-0 ">
                        <div className=" md:w-[20%] h-full flex ">
                            <div className="md:w-16 md:h-16 w-10 h-10 rounded-full bg-[#FF995F]"></div>
                        </div>
                        <div className=" w-[60%] h-full  ml-2">
                            <p className=" w-full h-[50%] leading-tight tracking-[0.02em] flex items-end md:text-lg text-md font-semibold ">harry putter</p>
                            <p className=" w-full h-[50%] leading-tight text-xs md:text-[13px] font-semibold text-[#333]/70 ">UI factory</p>
                        </div>
                        <div className=" w-[20%] flex items-center justify-end md:justify-center h-full ">
                            <Image className="md:w-16 md:h-16 w-10 h-10 " src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smirking%20Face.png" alt="Smirking Face" width="25" height="25" />
                        </div>
                    </div>
                    <div className="w-full h-[65%] md:mt-4 mt-2  ">
                        <p className=" text-xs md:text-sm tracking-wide font-bold text-[#333]/70 ">
                            I was blown away by the professionalism and expertise of the team at DZAEN. From start to finish, they guided us through the process with ease, delivering a stunning landing page that exceeded our expectations
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews