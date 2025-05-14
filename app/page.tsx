"use client"
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import WeAre from "@/components/WhoWeAre";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [image , setImage] = useState("/img1.webp");
  const [isVisible , setIsVissible] = useState(false);

  return (
    <>
      {
        isVisible && 
        <div onMouseOver={() => setIsVissible(true)} id="parent-box" className="fixed h-[150px] w-[120px]  lg:h-[350px] lg:w-[300px] bg-red-500 bottom-[15%]  right-[30%] z-20 rounded-2xl object-center object-cover ">
          <Image id="image" src={`${image}`}  alt="image not found" width={100} height={100} className="w-full h-full rounded-2xl"  />
        </div>
      }
      <div className="bg-[#EFEAE3] min-h-[100vh] h-auto w-full ">
        <NavBar />
        <Hero />
        <WeAre />
        <Features setImage={setImage} setIsVissible={setIsVissible} />
      </div>
    </>
    
  );
}
