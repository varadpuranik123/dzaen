import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <div className="  w-full min-h-[100vh] flex flex-col justify-center items-center " >
        <div className="mt-32 w-full text-center space-y-1">
            <p className=" text-[#333] text-6xl ">There is Somethings We Want to Show <span className="text-[#FF995F] font-bold ">Boss</span></p>
            <p className=" text-[#333]/60 font-medium text-lg ">Explore Our Showcase of Standout Projects</p>
        </div>
        <div className="mt-10 project-section flex w-[80%] h-[80vh] ">
            <div className="w-[30%] flex flex-col justify-center items-center border-l-2 border-t-2 border-b-2 rounded-r-md border-r buttons-2  border-black h-full ">
                <div className="flex flex-col w-[85%] h-[90%]  ">
                    <div className="w-full h-[60%] flex flex-col ">
                        <div className="heading  flex w-full h-[20%]  justify-between items-center text-3xl ">
                            <p className=" ">UI Factory</p>
                            <Image src='/arrow.png' className="-rotate-45  " alt={''} width={38} height={38} ></Image>
                        </div>
                        <div className="w-full mt-4 h-[40%] text-sm ">
                            Utilize Tailwind CSS to craft reusable components like buttons and cards, optimizing development with modular, scalable design and utility classes. 
                        </div>
                    </div>
                    <div className=" w-full h-[40%] flex flex-col justify-end space-y-2 ">
                        <button className="buttons-2 w-full h-12 tracking-wide text-sm font-[500] border-2 border-[#333] rounded-xl"> Explore Project</button>
                        <button className=" flex justify-center items-center buttons-2 w-full h-12  text-sm border-2 border-[#fff] bg-[#FF995f] rounded-xl text-[#fff] "> Visit Website <span className=""><Image src='./arrow_circle.svg' className=" text-white ml-2" width={13} height={13} alt={''}></Image></span> </button>
                    </div>
                </div>
            </div>
            <div className="rounded-xl ml-10 w-[70%] h-full flex justify-center items-center">
                <Image src='./tailwindProject.svg' alt={''} className=" scale-110 w-[90%] h-[90%]  " width={0} height={0} ></Image>
            </div>
        </div>
        <div className="mt-20 project-section flex w-[80%] h-[80vh] ">
            <div className="w-[30%] flex flex-col justify-center items-center border-l-2 border-t-2 border-b-2 rounded-r-md border-r buttons-2 border-black h-full ">
                <div className="flex flex-col w-[85%] h-[90%]  ">
                    <div className="w-full h-[60%] flex flex-col ">
                        <div className="heading  flex w-full h-[20%]  justify-between items-center text-3xl ">
                            <p className=" ">Pimzza</p>
                            <Image src='/arrow.png' className="-rotate-45  " alt={''} width={38} height={38} ></Image>
                        </div>
                        <div className="w-full mt-4 h-[40%] text-sm ">
                            Crafted a website for your pizzeria, showcasing the art of pizza making with vibrant visuals, easy menu navigation, and online ordering capabilities. 
                        </div>
                    </div>
                    <div className=" w-full h-[40%] flex flex-col justify-end space-y-2 ">
                        <button className="buttons-2 w-full h-12  text-sm font-[500] tracking-wide border-2 border-[#333] rounded-xl"> Explore Project</button>
                        <button className=" flex justify-center items-center buttons-2 w-full h-12  text-sm border-2 border-[#fff] bg-[#FF995f] rounded-xl text-[#fff] "> Visit Website <span className=""><Image src='./arrow_circle.svg' className=" text-white ml-2" width={13} height={13} alt={''}></Image></span> </button>
                    </div>
                </div>
            </div>
            <div className="rounded-xl ml-10 w-[70%] h-full flex justify-center items-center">
                <Image src='./pimmza.svg' alt={''} className=" scale-110 w-[90%] h-[90%]  " width={0} height={0} ></Image>
            </div>
        </div>
    </div>
    
  )
}

export default Project