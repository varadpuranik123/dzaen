import React from 'react'
import Image from 'next/image'

const Plans = () => {
  return (
    <div className=" w-full md:h-[130vh] h-full flex flex-col" >
        <div className="mt-20 w-full h-[20%] flex flex-col justify-end text-center space-y-2">
            <p className=" text-[#333] md:text-6xl text-4xl font-semibold "><span className="text-[#FF995F] font-bold ">Boss, </span> Pick Your Power Plan </p>
            <p className=" text-[#333]/80 font-semibold text-xs md:text-lg ">Select Your Ideal Package for Digital Domination</p>
        </div>
        <div className="plans-container w-full h-[80%] flex justify-center items-center flex-col py-3 md:py-0 ">
          <div className=" w-[90%] h-[90%] flex flex-col md:flex-row md:gap-x-4 gap-y-4 md:gap-y-0 ">
            <div className="buttons bg-white flex items-center justify-center w-full md:h-full h-80 border-2 rounded-xl border-[#333] ">
              <div className=" w-[90%] h-[90%] flex flex-col md:space-y-0 space-y-4 mt-4 md:mt-0 ">
                <div className=" w-full h-[15%] flex items-end   ">
                  <h2 className="md:text-6xl text-5xl font-bold  ">$$$</h2>
                </div>
                <div className=" w-full h-[15%] flex items-center  ">
                  <button className="buttons-4 w-full md:h-[50px] h-10 border-2 border-[#fff]/40 text-white rounded-xl md:text-[17px] text-sm font-semibold tracking-wide bg-[#FF7A30] "> Upgrade To Basic</button>
                </div>
                <div className="info flex items-center w-full h-[5%] ">
                  <p className=" text-sm tracking-wide text-[#333]/65 font-bold ">This is a Basic Plan <span className=" font-semibold text-[#FF7A30]/80 ">BOSS</span> :-</p>
                </div>
                <div className=" names-container w-full md:h-[65%] h-full flex flex-col space-y-3 md:space-y-0  ">
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-lg md:text-[22px] font-bold "> Pre-made Templates</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' className="scale-75 md:scale-100" width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%] ">
                    <div className="w-[85%] flex items-center h-full ">
                      <p className=" text-lg md:text-[22px] font-bold "> Responsive Design</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center">
                      <Image src='./greenTick.svg' className="scale-75 md:scale-100" width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%] ">
                    <div className="w-[85%] flex items-center h-full ">
                      <p className=" text-lg md:text-[22px] font-bold "> Limited Revisions</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center ">
                      <Image src='./greenTick.svg' className="scale-75 md:scale-100" width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="buttons bg-white flex items-center justify-center w-full h-full border-2 rounded-xl border-[#333] ">
              <div className=" w-[90%] h-[90%] flex flex-col space-y-3 mt-4 md:space-y-0 md:mt-0 py-2 md:py-0 ">
                <div className=" w-full h-[15%] flex items-end  ">
                  <h2 className="md:text-6xl text-5xl font-bold  ">$$$</h2>
                </div>
                <div className=" w-full h-[15%] flex items-center  ">
                  <button className="buttons-4 w-full md:h-[50px] h-10 border-2 border-[#fff]/40 text-white rounded-xl md:text-[17px] text-sm font-semibold tracking-wide bg-[#FF7A30] "> Upgrade To Pro</button>
                </div>
                <div className="info flex items-center w-full h-[5%] ">
                  <p className=" text-sm text-[#333]/65 font-bold tracking-wide ">This is a Pro Plan <span className=" font-semibold text-[#FF7A30]/80 ">BOSS</span> :-</p>
                </div>
                <div className=" names-container w-full h-[65%] flex flex-col -space-y-[5px] md:-space-y-[0px] ">
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-lg md:text-[22px] font-bold "> Pre-made Templates</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' className="scale-75 md:scale-100" width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%] ">
                    <div className="w-[85%] flex items-center h-full ">
                      <p className=" text-lg md:text-[22px] font-bold "> Responsive Design</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center">
                      <Image src='./greenTick.svg' className="scale-75 md:scale-100" width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%] ">
                    <div className="w-[85%] flex items-center h-full ">
                      <p className=" text-lg md:text-[22px] font-bold "> Limited Revisions</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center ">
                      <Image src='./greenTick.svg' className="scale-75 md:scale-100" width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-lg md:text-[22px] font-bold "> Custom Design</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' className="scale-75 md:scale-100" width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-lg md:text-[22px] font-bold "> Animation</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' className="scale-75 md:scale-100" width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="buttons bg-white flex items-center justify-center w-full h-full border-2 rounded-xl border-[#333] ">
              <div className=" w-[90%] h-[90%]  flex flex-col space-y-4 mt-4 md:space-y-0 md:mt-0 py-2 md:py-0 ">
                <div className=" w-full h-[15%] flex items-end  ">
                  <h2 className="md:text-6xl text-5xl font-bold  ">$$$</h2>
                </div>
                <div className=" w-full h-[15%] flex items-center  ">
                  <button className="buttons-4 w-full md:h-[50px] h-10 border-2 border-[#fff]/40 text-white rounded-xl md:text-[17px] text-sm font-semibold tracking-wide bg-[#FF7A30] "> Upgrade To Premium</button>
                </div>
                <div className="info flex items-center w-full h-[5%] ">
                  <p className=" text-sm tracking-wide text-[#333]/65 font-bold ">This is a Premium Plan <span className=" font-semibold text-[#FF7A30]/80 ">BOSS</span> :-</p>
                </div>
                <div className=" names-container w-full h-[65%]  flex flex-col -space-y-1 md:-space-y-0 ">
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-lg md:text-[22px] font-bold "> Pre-made Templates</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' className="scale-75 md:scale-100" width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%] ">
                    <div className="w-[85%] flex items-center h-full ">
                      <p className=" text-lg md:text-[22px] font-bold "> Responsive Design</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center">
                      <Image src='./greenTick.svg' className="scale-75 md:scale-100" width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%] ">
                    <div className="w-[85%] flex items-center h-full ">
                      <p className=" text-lg md:text-[22px] font-bold "> Limited Revisions</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center ">
                      <Image src='./greenTick.svg' className="scale-75 md:scale-100" width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-lg md:text-[22px] font-bold "> Custom Design</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' className="scale-75 md:scale-100" width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-lg md:text-[22px] font-bold "> Animation</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' className="scale-75 md:scale-100" width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-lg md:text-[22px] font-bold "> Custom Illustration</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' className="scale-75 md:scale-100" width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-lg md:text-[22px] font-bold "> Expedited Delivery</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' className="scale-75 md:scale-100" width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="buttons bg-white flex items-center justify-center w-full h-full border-2 rounded-xl border-[#333] ">
              <div className=" w-[90%] h-[90%]  flex flex-col space-y-4 mt-4 md:space-y-0 md:mt-0 py-2 md:py-0 ">
                <div className=" w-full h-[15%] flex items-end  ">
                  <h2 className="md:text-6xl text-5xl font-bold  ">$$$</h2>
                </div>
                <div className=" w-full h-[15%] flex items-center   ">
                  <button className=" buttons-4  w-full md:h-[50px] h-10 border-2  text-[#333] rounded-xl md:text-[17px] text-sm font-semibold tracking-wide border-[#FF7A30] "> Contact Us</button>
                </div>
                <div className="info flex items-center w-full h-[5%] ">
                  <p className=" text-sm tracking-wide text-[#333]/65 font-bold ">This is a Enterprise Plan <span className=" font-semibold text-[#FF7A30]/80 ">BOSS</span> :-</p>
                </div>
                <div className=" names-container w-full h-[65%] flex flex-col -space-y-1 md:-space-y-0 ">
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-lg md:text-[22px] font-bold "> Pre-made Templates</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' className="scale-75 md:scale-100" width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%] ">
                    <div className="w-[85%] flex items-center h-full ">
                      <p className=" text-lg md:text-[22px] font-bold "> Responsive Design</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center">
                      <Image src='./greenTick.svg' className="scale-75 md:scale-100" width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%] ">
                    <div className="w-[85%] flex items-center h-full ">
                      <p className=" text-lg md:text-[22px] font-bold "> Limited Revisions</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center ">
                      <Image src='./greenTick.svg' className="scale-75 md:scale-100" width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-lg md:text-[22px] font-bold "> Custom Design</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' className="scale-75 md:scale-100" width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-lg md:text-[22px] font-bold "> Animation</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' className="scale-75 md:scale-100" width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-lg md:text-[22px] font-bold "> Custom Illustration</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' className="scale-75 md:scale-100" width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-lg md:text-[22px] font-bold "> Expedited Delivery</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' className="scale-75 md:scale-100" width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-lg md:text-[22px] font-bold "> Account Manager</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' className="scale-75 md:scale-100" width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-lg md:text-[22px] font-bold "> Priority Support</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' className="scale-75 md:scale-100" width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-lg md:text-[22px] font-bold "> Scalability</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' className="scale-75 md:scale-100" width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Plans