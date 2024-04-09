import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <div className="  w-full min-h-[100vh] flex flex-col justify-center items-center " >
        <div className="mt-32 w-full text-center space-y-2">
            <p className=" text-[#333] md:text-6xl text-4xl px-1 md:px-0 font-semibold ">There is Somethings We Want to Show <span className="text-[#FF995F] font-bold ">Boss</span></p>
            <p className=" text-[#333]/80 font-semibold text-xs md:text-lg ">Explore Our Showcase of Standout Projects</p>
        </div>
        <div className="mt-10 project-section flex flex-col-reverse md:gap-y-0 gap-y-10 md:flex-row w-[80%] md:h-[80vh] h-full ">
            <div className="md:w-[30%] w-full md:h-full h-96 flex flex-col justify-center items-center border-l-2 border-t-2 border-b-2 rounded-r-md border-r buttons-2  border-black  ">
                <div className="flex flex-col w-[85%] h-[90%]  ">
                    <div className="w-full h-[60%] flex flex-col ">
                        <div className="heading  flex w-full h-[20%]  justify-between items-center md:text-3xl text-xl ">
                            <p className=" font-semibold">UI Factory</p>
                            <Image src='/arrow.png' className=" scale-75 md:scale-100 -rotate-45 " alt={''} width={38} height={38} ></Image>
                        </div>
                        <div className="w-full mt-4 h-[40%] text-[#333]/60 font-bold text-sm ">
                            Utilize Tailwind CSS to craft reusable components like buttons and cards, optimizing development with modular, scalable design and utility classes. 
                        </div>
                    </div>
                    <div className=" w-full h-[40%] flex flex-col justify-end space-y-2 ">
                        <button className="buttons-2 w-full md:md: h-10 h-10 tracking-wider text-xs md:text-sm font-extrabold border-2 border-[#333] rounded-xl"> Explore Project</button>
                        <button className="flex justify-center w-full md:md: h-10 h-10 items-center buttons-2 font-[600] tracking-wider text-xs md:text-sm border-2 border-[#fff] bg-[#FF995f] rounded-xl text-[#fff] "> Visit Website <span className=""><Image src='./arrow_circle.svg' className=" text-white ml-2" width={13} height={13} alt={''}></Image></span> </button>
                    </div>
                </div>
            </div>
            <div className="rounded-xl md:ml-10 md:w-[70%] h-full flex justify-center items-center">
                <Image src='./tailwindProject.svg' alt={''} className=" scale-110 w-[90%] h-[90%]  " width={0} height={0} ></Image>
            </div>
        </div>
        <div className="mt-20 project-section flex flex-col-reverse md:gap-y-0 gap-y-10 md:flex-row w-[80%] md:h-[80vh] h-full ">
            <div className="md:w-[30%] w-full md:h-full h-96 flex flex-col justify-center items-center border-l-2 border-t-2 border-b-2 rounded-r-md border-r buttons-2  border-black  ">
                <div className="flex flex-col w-[85%] h-[90%]  ">
                    <div className="w-full h-[60%] flex flex-col ">
                        <div className="heading  flex w-full h-[20%] justify-between items-center md:text-3xl text-xl ">
                            <p className=" font-semibold ">Pimzza</p>
                            <Image src='/arrow.png' className="scale-75 md:scale-100 -rotate-45  " alt={''} width={38} height={38} ></Image>
                        </div>
                        <div className="w-full mt-4 h-[40%] text-sm font-bold text-[#333]/60 ">
                            Crafted a website for your pizzeria, showcasing the art of pizza making with vibrant visuals, easy menu navigation, and online ordering capabilities. 
                        </div>
                    </div>
                    <div className=" w-full h-[40%] flex flex-col justify-end space-y-2 ">
                        <button className="buttons-2 w-full md:h-12 h-10 text-xs md:text-sm font-extrabold tracking-wider border-2 border-[#333] rounded-xl"> Explore Project</button>
                        <button className=" flex justify-center w-full md:h-12 h-10 items-center buttons-2 font-[600] tracking-wider text-xs md:text-sm border-2 border-[#fff] bg-[#FF995f] rounded-xl text-[#fff] "> Visit Website <span className=""><Image src='./arrow_circle.svg' className=" text-white ml-2" width={13} height={13} alt={''}></Image></span> </button>
                    </div>
                </div>
            </div>
            <div className="rounded-xl md:ml-10 md:w-[70%] h-full flex justify-center items-center">
                <Image src='./pimmza.svg' alt={''} className=" scale-110 w-[90%] h-[90%]  " width={0} height={0} ></Image>
            </div>
        </div>
    </div>
    
  )
}

export default Project