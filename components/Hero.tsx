import "@/app/globals.css";
import gsap from "gsap";
import { MouseEvent, useRef, useState } from "react";

export default function Hero(){

    const [hover , setHover] = useState(false);

    const mask = useRef(null);
    const move = (e : MouseEvent) => {
        const x = e.clientX;
        const y = e.clientY;
        const rect = document.querySelector(".mask")?.getBoundingClientRect();
        let left , top;
        const size = hover ? 200 : 0
        if(rect) {
            left = (x - rect?.left) - size / 2 ;
            top = (y - rect?.top) - size / 2 ;
        }



        gsap.to(".mask" , {
            maskPosition: `${left}px ${top}px`,
            webkitMaskPosition : `${left}px ${top}px`,
            ease: "power2.out"
        })
    }

    const hide = () => {
        gsap.to(".mask" , {
            opacity: 0
        })
    }

    const show = () => {
        gsap.to(".mask" , {
            opacity: 1,
        })
    }

    return (
        <div className="w-full h-auto px-4 sm:px-6 md:px-8 lg:px-10 ">
            <div className="w-full h-auto border-b-2 border-gray-300 flex flex-col-reverse md:flex-row  items-end justify-between pb-10 md:pb-20 pt-25">
                <div className="w-full md:w-1/2 text-left mt-10 md:mt-0 text-3xl font-bold tracking-tighter leading-8">Sundown is a multi-disciplinary <br />studio focused on creating <br />unique, end-to-end experiences <br />and environments.</div>
                <div onMouseLeave={hide} onMouseEnter={show} className="w-auto cursor-pointer flex items-end justify-end  relative">
                    <div onMouseMove={move}  onMouseOver={() => setHover(true)} className=" text-right font-bold text-[70px] sm:text-[90px] md:text-[100px] lg:text-[130px] leading-20 lg:leading-28 tracking-tight  inline-block">SPACES <br /> THAT <br />INSPIRE</div>
                    <div  onMouseMove={move} ref={mask} onMouseOver={() => setHover(true)} className="mask absolute inset-0 text-right font-bold text-[70px] sm:text-[90px] md:text-[100px] lg:text-[130px] leading-20 lg:leading-28 tracking-tight  inline-block">SPACES <br /> THAT <br />INSPIRE</div>
                </div>
            </div>

            {/**  video section  */}
            <div className="h-auto pb-20 rounded-3xl pt-15 w-full relative ">
                <div className="absolute -top-15 md:-top-25 -right-[2.5%] lg:-right-10 w-[70%] md:w-1/2 rounded-bl-[90%] rounded-tl-[80%]  h-[70%] blur-[15px] bg-[#FE330C] ">
                    <div id="box" className="h-[35%] w-[40%] rounded-[100%] left-30 bg-[#FE330C] blur-[20px]"></div>
                </div>
                <div className="h-auto w-full  rounded-3xl overflow-hidden relative ">
                    <video src="./video.mp4" autoPlay muted loop ></video>
                </div>
            </div>

            {/**  moving text  */}
            <div id="moving-text" className="flex text-[9vw] overflow-x-auto items-center justify-between gap-5 ">
                <div className="flex items-center justify-between gap-5 content">
                    <h1>CONTENT</h1>
                    <div className="bg-[#FE3E12] md:h-[70px] md:w-[70px] sm:h-[35px] sm:w-[35px] h-[28px] w-[28px] rounded-[100%] ml-4 mr-4 "></div>
                    <h1>ENVIRONMENTS</h1>
                    <div className="bg-[#FE3E12] md:h-[70px] md:w-[70px] sm:h-[35px] sm:w-[35px] h-[28px] w-[28px] rounded-[100%] ml-4 mr-4 "></div>
                    <h1>EXPERIENCES</h1>
                    <div className="bg-[#FE3E12] md:h-[70px] md:w-[70px] sm:h-[35px] sm:w-[35px] h-[28px] w-[28px] rounded-[100%] ml-4 mr-4 "></div>
                </div>
                <div className="flex items-center justify-between gap-5 content ">
                    <h1>CONTENT</h1>
                    <div className="bg-[#FE3E12] md:h-[70px] md:w-[70px] sm:h-[35px] sm:w-[35px] h-[28px] w-[28px] rounded-[100%] ml-4 mr-4 "></div>
                    <h1>ENVIRONMENTS</h1>
                    <div className="bg-[#FE3E12] md:h-[70px] md:w-[70px] sm:h-[35px] sm:w-[35px] h-[28px] w-[28px] rounded-[100%] ml-4 mr-4 "></div>
                    <h1>EXPERIENCES</h1>
                    <div className="bg-[#FE3E12] md:h-[70px] md:w-[70px] sm:h-[35px] sm:w-[35px] h-[28px] w-[28px] rounded-[100%] ml-4 mr-4 "></div>
                </div>
                <div className="flex items-center justify-between gap-5 content">
                    <h1>CONTENT</h1>
                    <div className="bg-[#FE3E12] md:h-[70px] md:w-[70px] sm:h-[35px] sm:w-[35px] h-[28px] w-[28px] rounded-[100%] ml-4 mr-4 "></div>
                    <h1>ENVIRONMENTS</h1>
                    <div className="bg-[#FE3E12] md:h-[70px] md:w-[70px] sm:h-[35px] sm:w-[35px] h-[28px] w-[28px] rounded-[100%] ml-4 mr-4 "></div>
                    <h1>EXPERIENCES</h1>
                    <div className="bg-[#FE3E12] md:h-[70px] md:w-[70px] sm:h-[35px] sm:w-[35px] h-[28px] w-[28px] rounded-[100%] ml-4 mr-4 "></div>
                </div>
            </div>
        </div>
    )
}