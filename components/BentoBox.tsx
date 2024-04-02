import React from 'react'
import Image from 'next/image'

const BentoBox = () => {
  return (
    <div className=" flex flex-col items-center w-full h-[111vh] ">
      <div className="w-full text-center space-y-1">
        <p className=" text-[#333] text-6xl "><span className="text-[#FF995F] font-bold ">Boss,</span> Explore Our Digital Mastery!</p>
        <p className=" text-[#333]/60 font-medium text-lg ">Unlock Your Brand's Potential Online.</p>
      </div>
      <div className="w-[90%] flex h-full  space-x-4 mt-4">
        <div className="w-full h-full space-y-4 flex flex-col  ">
          <div className="  overflow-hidden flex flex-col justify-center items-start p-10 buttons w-full h-full border-[2px] border-[#333] rounded-xl  ">
              <Image src='./bespoke.svg' className="w-full h-full object-fil -translate-y-2" alt={''} width={0} height={0} ></Image>
              <h3 className="mt-1 text-[28px] font-[500] tracking-tight leading-tight ">Bespoke Design</h3>
              <p className=" font-[600] text-[#333]/60 ">Every pixel meticulously crafted to reflect your brand's essence, ensuring an unforgettable digital identity.</p>
          </div>
          <div className=" py-2 overflow-hidden items-center text-start flex flex-col justify-center p-10 buttons w-full h-full border-[2px] border-[#333] rounded-xl  ">
              <div className="w-[50%] h-[50%] ">
                <Image src='./responsive.svg' className=" mt-1 scale-[1.6] w-full h-full  object-fil " alt={''} width={0} height={0} ></Image>
              </div>
              <div className="w-full ">
                <h3 className="mt-1 text-[28px] font-[500] tracking-tight leading-tight ">Responsive Mastery</h3>
              </div>
              <p className=" font-[600] text-[#333]/60 ">Seamlessly adapting your landing page across all devices, ensuring impeccable user experiences no matter the screen size.</p>
          </div>
        </div>
        <div className=" flex justify-center items-center buttons w-full h-full border-[2px] border-[#333] rounded-xl ">
            <div className="w-[80%] flex flex-col h-[90%]  ">
              <div className="w-full h-[10%] flex items-center  ">
               <p className=" text-3xl font-[500] ">Interactive Wizardry</p>
              </div>
              <div className="w-full h-[15%]  ">
                <p className="font-[600] text-[#333]/60 ">Captivate your audience with dynamic elements, from eye-catching animations to immersive video backgrounds.</p>
              </div>
              <div className="w-full h-[15%]">
                <button className=" w-full h-12 bg-white font-[500] border-[2px] border-[#333] rounded-md "> Click me</button>
              </div>
              <div className="w-full h-[60%]  ">
                <Image src='./wand.svg' className="w-full h-full" width={0} height={0} alt={''}></Image>
              </div>
            </div>
        </div>
        <div className="w-full flex flex-col space-y-4 h-full  ">
          <div className="overflow-hidden items-center text-start flex flex-col justify-center p-10 buttons w-full h-full border-[2px] border-[#333] rounded-xl  ">
              <div className="w-[100%] h-[100%] ">
                <Image src='./visual.svg' className=" -translate-y-6 mt-1 w-full h-full  object-fil " alt={''} width={0} height={0} ></Image>
              </div>
              <div className="w-full ">
                <h3 className="mt-1 text-[28px] font-[500] tracking-tight leading-tight ">Visual Enchantment</h3>
              </div>
              <p className=" font-[600] text-[#333]/60 ">Illustrations that breathe life into your narrative, transforming concepts into captivating visual stories.</p>
          </div>
          <div className=" py-2 overflow-hidden items-center text-start flex flex-col justify-center p-10 buttons w-full h-full border-[2px] border-[#333] rounded-xl  ">
              <div className="w-[80%] h-[80%] ">
                <Image src='./logomagic.svg' className=" -translate-y-2 mt-1  w-full h-full  object-fil " alt={''} width={0} height={0} ></Image>
              </div>
              <div className="w-full -translate-y-4 ">
                <h3 className="mt-1 text-[28px] font-[500] tracking-tight leading-tight ">Logo Magic</h3>
              </div>
              <p className=" -translate-y-4 font-[600] text-[#333]/60 ">Craft a distinctive logo that serves as the cornerstone of your brand identity, leaving a lasting impression on your audience.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BentoBox