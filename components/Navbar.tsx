//import Image from "next/image"


//const navbar = () => {
//  return (
//    <div className="w-full h-20 flex  ">
//      <nav className=" navbar w-full h-full md:flex flex-col md:flex-row items-center justify-between md:px-10 px-0">
//        <div className="logo overflow-hidden md:w-[40%] w-full h-full flex items-center justify-between md-px-0 px-4 ">
//          <Image className="w-[30%] h-[70%] " src="./logo.svg" width={100} height={100} alt={""}></Image>
//          <Image className=" md:hidden block " src="./navbutton.svg" width={40} height={40} alt={""}></Image>
//        </div>
//        <div className="absolute md:translate-y-0 md:space-y-0 space-y-2 md:right-10 md:w-[60%] w-full md:h-fit h-full justify-between md:flex items-center">
//            <div className="nav-elem md:flex  md:space-x-8 md:space-y-0 space-y-4 bg-white buttons-2 border-2 border-[#333] rounded-md md:w-auto px-10 py-4 ">
//              <p className="text-[#333]/40 hover:text-[#333] text-center transition-all duration-200 cursor-pointer md:text-base text-2xl ">Home</p>
//              <p className="text-[#333]/40 hover:text-[#333] text-center transition-all duration-200 cursor-pointer md:text-base text-2xl ">About</p>
//              <p className="text-[#333]/40 hover:text-[#333] text-center transition-all duration-200 cursor-pointer md:text-base text-2xl ">Work</p>
//              <p className="text-[#333]/40 hover:text-[#333] text-center transition-all duration-200 cursor-pointer md:text-base text-2xl ">Plans</p>
//            </div>
//            <div className="nav-button">
//              <button className="md:w-auto w-full px-12 py-2 buttons-2 hover:bg-[#fffcce] transition duration-200 font-semibold bg-white border-2 border-[#333] rounded-md "> Contact Us</button>
//            </div>
//        </div>
//      </nav>
//    </div>
//  )
//}

//export default navbar

"use client";

import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen); //Toggle the value of isOpen
  };

  return (
    <div className=" z-[90]  w-full flex overflow-hidden">
      <nav className="navbar bg-[#fffff7] w-full h-full md:flex flex-col md:flex-row items-center justify-between md:px-10 px-0 py-2 ">
        <div className="logo overflow-hidden  md:w-[42%] w-full h-full flex items-center justify-between md-px-0 px-4 ">
          <Image className="md:w-36 md:h-24 w-24 h-24" src="./logo.svg" width={100} height={100} alt={""}></Image>
          <Image onClick={handleToggle} className="md:hidden block" src="./navbutton.svg" width={40} height={40} alt={""}></Image>
        </div>
        <div className={` md:w-[58%] w-full bg-[#fffff7] absolute md:translate-y-0 md:space-y-0 space-y-2 md:right-10 right-0  md:h-fit h-full justify-between md:flex items-center transition-all ${isOpen ? 'translate-x-0 opacity-100 z-[90] px-2 lg:px-0 ' : 'lg:-z-[0] -z-[90] md:opacity-100 opacity-0 translate-x-100'}`}>
          <div className="nav-elem md:flex md:space-x-8 md:space-y-0 space-y-4 bg-white buttons-2 border-2 border-[#333] rounded-md md:w-auto px-10 py-4 ">
            <p className="text-[#333]/40 hover:text-[#333] text-center transition-all duration-200 cursor-pointer md:text-base text-2xl ">Home</p>
            <p className="text-[#333]/40 hover:text-[#333] text-center transition-all duration-200 cursor-pointer md:text-base text-2xl ">About</p>
            <p className="text-[#333]/40 hover:text-[#333] text-center transition-all duration-200 cursor-pointer md:text-base text-2xl ">Work</p>
            <p className="text-[#333]/40 hover:text-[#333] text-center transition-all duration-200 cursor-pointer md:text-base text-2xl ">Plans</p>
          </div>
          <div className="nav-button">
            <button className="md:w-auto w-full px-12 py-2 buttons-2 hover:bg-[#fffcce] transition duration-200 font-semibold bg-white border-2 border-[#333] rounded-md "> Contact Us</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;





