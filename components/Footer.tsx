import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className=" w-full md:h-[130vh] py-4 md:py-0 flex flex-col items-center justify-center bg-[#FF995F]/50 text-[#fffcce] ">
        <div className="footer-container w-[97%] h-[90%] flex flex-col  ">
            <div className="footer-items w-full md:h-[30%] flex flex-col md:flex-row px-4 md:px-0 justify-between space-y-4 md:space-y-0  ">
                <div className="w-full h-full ">
                    <Image src="./logoWhite.svg" width={55} height={55} alt={''}></Image>
                </div>
                <div className=" text-xl w-full h-full tracking-wider flex flex-col">
                    <h5 className="font-semibold ">Navigation</h5>
                    <p className="">Home</p>
                    <p className="">About</p>
                    <p className="">Work</p>
                    <p className="">Plans</p>
                </div>
                <div className=" text-xl w-full h-full tracking-wider  flex flex-col">
                    <h5 className="font-semibold ">Socials</h5>
                    <p className="">Instagram</p>
                    <p className="">X(twitter)</p>
                    <p className="">LinkedIn</p>
                    <p className="">Youtube</p>
                </div>
                <div className="w-full h-full "></div>
            </div>
            <div className="w-full md:h-[60%] items-center overflow-hidden justify-center  flex flex-col ">
                <p className="md:text-[480px] text-[120px] font-[300] text-[#fffcce]/60  ">DZAEN</p>
            </div>
            <div className="w-full md:h-[10%] mb-2 md:mb-0 flex md:items-end items-center justify-between px-4 ">
                <p className="md:text-lg">All rights reserved</p>
                <p className="md:text-3xl underline underline-offset-8 ">Back To Top <span className=""><Image className="inline-block mb-1 scale-75 md:scale-100" src="./upArrow.svg" width={20} height={20} alt={''}></Image></span> </p>
            </div>
        </div>
    </div>
  )
}

export default Footer