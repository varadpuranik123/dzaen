import React from 'react'
import Image from 'next/image'

const Plans = () => {
  return (
    <div className=" w-full h-[130vh] flex flex-col" >
        <div className="mt-20 w-full h-[20%] flex flex-col justify-end text-center space-y-1">
            <p className=" text-[#333] text-6xl "><span className="text-[#FF995F] font-bold ">Boss, </span> Pick Your Power Plan </p>
            <p className=" text-[#333]/60 font-medium text-lg ">Select Your Ideal Package for Digital Domination</p>
        </div>
        <div className="plans-container w-full h-[80%] flex justify-center items-center flex-col ">
          <div className=" w-[90%] h-[90%] flex gap-x-4 ">
            <div className="buttons bg-white flex items-center justify-center w-full h-full border-2 rounded-xl border-[#333] ">
              <div className=" w-[90%] h-[90%]  flex flex-col ">
                <div className=" w-full h-[15%] flex items-end  ">
                  <h2 className="text-6xl font-bold  ">$$$</h2>
                </div>
                <div className=" w-full h-[15%] flex items-center  ">
                  <button className="buttons-4 w-full h-[50px] border-2 border-[#fff]/40 text-white rounded-xl text-[17px] font-medium bg-[#FF7A30] "> Upgrade To Basic</button>
                </div>
                <div className="info flex items-center w-full h-[5%] ">
                  <p className=" text-sm font-[400] tracking-wide text-[#333]/70 ">This is a Basic Plan <span className=" font-semibold text-[#FF7A30]/80 ">BOSS</span> :-</p>
                </div>
                <div className=" names-container w-full h-[65%]  flex flex-col ">
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-[22px] tracking-tight font-medium "> Pre-made Templates</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%] ">
                    <div className="w-[85%] flex items-center h-full ">
                      <p className=" text-[22px] tracking-tight font-medium "> Responsive Design</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center">
                      <Image src='./greenTick.svg' width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%] ">
                    <div className="w-[85%] flex items-center h-full ">
                      <p className=" text-[22px] tracking-tight font-medium "> Limited Revisions</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center ">
                      <Image src='./greenTick.svg' width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="buttons bg-white flex items-center justify-center w-full h-full border-2 rounded-xl border-[#333] ">
              <div className=" w-[90%] h-[90%]  flex flex-col ">
                <div className=" w-full h-[15%] flex items-end  ">
                  <h2 className="text-6xl font-bold  ">$$$</h2>
                </div>
                <div className=" w-full h-[15%] flex items-center  ">
                  <button className="buttons-4 w-full h-[50px] border-2 border-[#fff]/40 text-white rounded-xl text-[17px] font-medium bg-[#FF7A30] "> Upgrade To Pro</button>
                </div>
                <div className="info flex items-center w-full h-[5%] ">
                  <p className=" text-sm font-[400] tracking-wide text-[#333]/70 ">This is a Pro Plan <span className=" font-semibold text-[#FF7A30]/80 ">BOSS</span> :-</p>
                </div>
                <div className=" names-container w-full h-[65%]  flex flex-col ">
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-[22px] tracking-tight font-medium "> Pre-made Templates</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%] ">
                    <div className="w-[85%] flex items-center h-full ">
                      <p className=" text-[22px] tracking-tight font-medium "> Responsive Design</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center">
                      <Image src='./greenTick.svg' width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%] ">
                    <div className="w-[85%] flex items-center h-full ">
                      <p className=" text-[22px] tracking-tight font-medium "> Limited Revisions</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center ">
                      <Image src='./greenTick.svg' width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-[22px] tracking-tight font-medium "> Custom Design</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-[22px] tracking-tight font-medium "> Animation</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="buttons bg-white flex items-center justify-center w-full h-full border-2 rounded-xl border-[#333] ">
              <div className=" w-[90%] h-[90%]  flex flex-col ">
                <div className=" w-full h-[15%] flex items-end  ">
                  <h2 className="text-6xl font-bold  ">$$$</h2>
                </div>
                <div className=" w-full h-[15%] flex items-center  ">
                  <button className="buttons-4 w-full h-[50px] border-2 border-[#fff]/40 text-white rounded-xl text-[17px] font-medium bg-[#FF7A30] "> Upgrade To Premium</button>
                </div>
                <div className="info flex items-center w-full h-[5%] ">
                  <p className=" text-sm font-[400] tracking-wide text-[#333]/70 ">This is a Premium Plan <span className=" font-semibold text-[#FF7A30]/80 ">BOSS</span> :-</p>
                </div>
                <div className=" names-container w-full h-[65%]  flex flex-col ">
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-[22px] tracking-tight font-medium "> Pre-made Templates</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%] ">
                    <div className="w-[85%] flex items-center h-full ">
                      <p className=" text-[22px] tracking-tight font-medium "> Responsive Design</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center">
                      <Image src='./greenTick.svg' width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%] ">
                    <div className="w-[85%] flex items-center h-full ">
                      <p className=" text-[22px] tracking-tight font-medium "> Limited Revisions</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center ">
                      <Image src='./greenTick.svg' width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-[22px] tracking-tight font-medium "> Custom Design</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-[22px] tracking-tight font-medium "> Animation</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-[22px] tracking-tight font-medium "> Custom Illustration</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-[22px] tracking-tight font-medium "> Expedited Delivery</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="buttons bg-white flex items-center justify-center w-full h-full border-2 rounded-xl border-[#333] ">
              <div className=" w-[90%] h-[90%]  flex flex-col ">
                <div className=" w-full h-[15%] flex items-end  ">
                  <h2 className="text-6xl font-bold  ">$$$</h2>
                </div>
                <div className=" w-full h-[15%] flex items-center   ">
                  <button className=" buttons-4  w-full h-[50px] border-2  text-[#333] rounded-xl text-[17px] font-medium border-[#FF7A30] "> Contact Us</button>
                </div>
                <div className="info flex items-center w-full h-[5%] ">
                  <p className=" text-sm font-[400] tracking-wide text-[#333]/70 ">This is a Enterprise Plan <span className=" font-semibold text-[#FF7A30]/80 ">BOSS</span> :-</p>
                </div>
                <div className=" names-container w-full h-[65%]  flex flex-col ">
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-[22px] tracking-tight font-medium "> Pre-made Templates</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%] ">
                    <div className="w-[85%] flex items-center h-full ">
                      <p className=" text-[22px] tracking-tight font-medium "> Responsive Design</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center">
                      <Image src='./greenTick.svg' width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%] ">
                    <div className="w-[85%] flex items-center h-full ">
                      <p className=" text-[22px] tracking-tight font-medium "> Limited Revisions</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center ">
                      <Image src='./greenTick.svg' width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-[22px] tracking-tight font-medium "> Custom Design</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-[22px] tracking-tight font-medium "> Animation</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-[22px] tracking-tight font-medium "> Custom Illustration</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-[22px] tracking-tight font-medium "> Expedited Delivery</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-[22px] tracking-tight font-medium "> Account Manager</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-[22px] tracking-tight font-medium "> Priority Support</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' width={40} height={40} alt={''}></Image>
                    </div>
                  </div>
                  <div className=" names w-full flex h-[10%]  ">
                    <div className="w-[85%] flex items-center h-full  ">
                      <p className=" text-[22px] tracking-tight font-medium "> Scalability</p>
                    </div>
                    <div className="w-[15%] h-full flex items-center justify-center  ">
                      <Image src='./greenTick.svg' width={40} height={40} alt={''}></Image>
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