"use client"
import Features from "@/components/Features";
import FooterCover from "@/components/FooterCover";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import WeAre from "@/components/WhoWeAre";
import Image from "next/image";
import { useState } from "react";
import "@/app/globals.css";
import Projects from "@/components/Projects";
import Slides from "@/components/Slides";

export default function Home() {
  const [image , setImage] = useState("/img1.webp");
  const [isVisible , setIsVissible] = useState(false);

  return (
    <>
      {
        isVisible && 
        <div onMouseOver={() => setIsVissible(true)} id="parent-box" className="fixed h-[150px] w-[120px]  lg:h-[350px] lg:w-[320px] bg-red-500 bottom-[15%]  right-[30%] z-20 rounded-2xl object-center  ">
          <Image id="image" src={`${image}`}  alt="image not found" width={100} height={100} placeholder="empty" className="w-full h-full rounded-2xl"  />
        </div>
      }
      <div className=" min-h-[100vh] h-auto w-full ">
        <div className="h-full w-full bg-[#EFEAE3]">
          <NavBar />
          <Hero />
          <WeAre />
          <Features setImage={setImage} setIsVissible={setIsVissible} />
          <Projects />
          <Slides />
        </div>
        <FooterCover />
      </div>
      <footer className="h-[100vh] w-full fixed bottom-0 left-0 -z-10 bg-black text-white px-4 py-4 flex flex-col items-center justify-end overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-auto min-h-[35vh] bg-[#FE330A] pt-8  flex items-center justify-between px-20 text-[38px] leading-12">
          <div>
            <h4>Work</h4>
            <h4>Studio</h4>
            <h4>Contact</h4>
          </div>
          <div>
            <p className="text-2xl font-thin">Get industry insights and creative <br />inspiration straight to your inbox.</p>
            <div className="py-2 font-thin text-xl text-gray-300/80 border-b-2 border-gray-300/80 mt-7 pl-1">Email Address</div>
          </div>
          <div className="absolute -bottom-53 -left-6 h-[260px] rounded-br-[130%] w-3/4 bg-[#FE330A] blur-[20px] "></div>
          <div className="absolute -bottom-115 -right-6 h-[500px] w-[40%] rounded-bl-[100%] bg-[#FE330A] blur-[20px] "></div>
        </div>
        <p className=" text-[350px]   tracking-tighter scale-112  z-10">Sundown</p>
        <div className="w-auto h-auto border-t-2 font-thin text-lg border-gray-400/50  min-h-[15vh] absolute bottom-0 left-4 right-4 text-white px-4 py-3 flex pt-8 justify-between">
          <p className="font-thin">Copyright © Sundown Studio</p>
          <p className="font-thin">Brooklyn , NY</p>
          <p className="font-thin">Instagram</p>
          <p className="font-thin">LinkedIn</p>
        </div>
      </footer>
    </>
    
  );
}
