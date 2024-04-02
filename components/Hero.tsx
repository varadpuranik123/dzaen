import Image from "next/image"

const hero = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <div className=" flex flex-col bg-[#fffff1] px-10 py-6 w-[90%] h-[90%] border-[2px] border-[#333] rounded-2xl ">
          <div className="flex w-full h-[40%] ">
            <div className="text-[190px] font-semibold w-[60%] leading-tight tracking-tight ">
              <p>Hii <span className="text-[#ff995f] font-bold ">BOSS</span></p>
            </div>
            <div className="w-[40%] h-full flex justify-center items-center ">
              <Image src="./star.svg" alt={""} width={100} height={100} className="w-full h-full" />
              <Image src="./star2.svg" alt={""} width={100} height={100} className="w-full h-full" />
            </div>
          </div>
          <div className="w-full h-[50%] flex ">
            <div className="w-[20%] h-full flex items-center justify-center ">
              <Image src="./circles.svg" alt={""} width={30} height={30} className="w-full h-full " ></Image>
            </div>
            <div className="w-[80%] h-full ">
              <p className="text-[100px] pl-6 pb-6 leading-tight tracking-tight font-semibold ">What design you want</p>
            </div>
          </div>
          <div className="w-full flex h-full ">
            <div className="w-[70%] h-full">
              <Image src="./art.svg" width={10} height={10} className="object-cover w-[100%] h-[100%] " alt={""}></Image>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-y-4 h-full">
              <button className="buttons border-2 border-[#333] px-10 py-8 w-[90%] rounded-full font-medium text-2xl">Join Us Now</button>
              <button className="buttons border-2 border-[#fff] px-10 py-8 w-[90%] rounded-full bg-[#ff995f] text-white font-medium text-2xl">See OUR design</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default hero