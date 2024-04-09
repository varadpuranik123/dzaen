import Image from "next/image"

const hero = () => {
  return (
    <div className="w-full md:h-screen flex justify-center md:items-center font-[900]">
        <div className=" flex flex-col bg-[#fffff1] md:px-10 px-6 md:py-6 py-6 w-[90%] h-fit md:h-[90%] border-[2px] border-[#333] rounded-2xl ">
          <div className="flex flex-col md:flex-row w-full md:h-[40%] ">
            <div className="z-[1] relative md:text-[200px] text-7xl flex md:items-start items-center font-bold md:w-[60%] leading-tight tracking-tight ">
              <p className=" ">Hii <span className="text-[#fffff1] ">BOSS</span></p>
              <Image className="md:w-[485px] h-full md:h-[67%] w-[65%] absolute md:top-[49px] top-15 md:right-4 right-2 -z-[4] " src="./rect.svg" alt={""} width={0} height={0} ></Image>
            </div>
            <div className="md:w-[40%] h-full flex md:justify-center justify-around items-center ">
              <Image src="./star.svg" alt={""} width={100} height={100} className="md:w-full md:h-full w-24 h-24 " />
              <Image src="./star2.svg" alt={""} width={100} height={100} className="md:w-full md:h-full w-24 h-24 " />
              <Image src="./star.svg" alt={""} width={100} height={100} className="md:w-full md:h-full md:hidden w-24 h-24 " />
            </div>
          </div>
          <div className="w-full md:h-[50%] h-12 items-center flex ">
            <div className="md:w-[20%] w-24 md:h-full h-16 flex items-center justify-center ">
              <Image src="./circles.svg" alt={""} width={30} height={30} className="md:w-full md:h-full w-36 h-36 " ></Image>
            </div>
            <div className="md:w-[80%] w-full md:h-full h-16 flex md:items-start items-center ">
              <p className="md:text-[100px] text-xl md:pl-6 pl-2 md:pb-6 leading-tight tracking-tight font-semibold ">What design you want</p>
            </div>
          </div>
          <div className="w-full flex h-full space-y-4 md:space-y-0 flex-col md:flex-row ">
            <div className="md:w-[70%] md:h-full ">
              <Image src="./art.svg" width={10} height={10} className="object-cover md:w-[100%] md:h-[100%] w-96 h-30 " alt={""}></Image>
            </div>
            <div className="w-full flex flex-col justify-center items-center md:gap-y-4 gap-y-2 md:h-full">
              <button className="buttons border-2 border-[#333] md:px-10 px-4 md:py-8 py-4 w-full md:w-[90%] rounded-full font-semibold text-sm md:text-2xl">Join Us Now</button>
              <button className="buttons border-2 border-[#fff] md:px-10 px-4 md:py-8 py-4 w-full md:w-[90%] rounded-full bg-[#ff995f] text-white font-semibold text-sm md:text-2xl">See OUR design</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default hero