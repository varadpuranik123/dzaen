import React from 'react'

const About = () => {
  return (
    <div className="w-full h-[80vh] flex flex-col items-center  " >
        <div className="about w-[90%] px-8 py-2 flex h-96 border-2 border-[#333] mt-10 rounded-xl ">
            <div className="w-full h-full  flex justify-center items-center text-[60px] text-semibold">
            Hey there, <span className="font-bold text-[#ff995f]">Boss!</span>
            </div>
            <div className="flex flex-col w-full h-full px-4 py-4">
                <div className="w-full h-full text-[20px] font-medium tracking-tight  ">So, here’s the scoop about us – we’re the dream team behind DZAEN. Yeah, that’s right, you’re the boss, and we’re here to make your digital dreams a reality.</div>
                <div className="w-full h-full text-[20px] font-medium tracking-tight ">
                We eat, breathe, and sleep design and development. Seriously, it’s our thing. Whether you’re a small business trying to make a big splash or a seasoned entrepreneur looking to level up your online presence, we’ve got your back.
                </div>
            </div>
            <div className="flex flex-col w-full h-full  p-2 py-4">
            <div className="w-full h-full text-[20px] font-medium tracking-tight  ">Think of us as your creative sidekick in the digital world. We craft custom landing pages that look stunning and drive results. Let's make your online presence unforgettable.</div>
                <div className="w-full h-full text-[20px] font-medium tracking-tight ">
                Our mission? Simple. We're here to make you shine like a rockstar online. With our expertise and passion, we'll elevate your brand and help you stand out.
                </div>
            </div>
        </div>
        <div className=" mt-4 font-semibold text-lg">So, what do you say, <span className="text-[#ff995f] ">Boss?</span> Ready to take your online presence to the next level? Let’s do this!</div>
    </div>
  )
}

export default About