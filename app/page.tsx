"use client"
import Features from "@/components/Features";
import FooterCover from "@/components/FooterCover";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import WeAre from "@/components/WhoWeAre";
import Image from "next/image";
import { useEffect, useState } from "react";
import "@/app/globals.css";
import Projects from "@/components/Projects";
import Slides from "@/components/Slides";
import Footer from "@/components/Footer";

export default function Home() {
  const [image , setImage] = useState("/img1.webp");
  const [isVisible , setIsVissible] = useState(false);
  const [isLoading , setIsLoading] = useState(true);
  const [loadingContent , setLoadingContent] = useState("Environment");

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    } , 3000);

    const timer1 = setTimeout(() => {
      setLoadingContent("Experiences");
    } , 1000);

    const timer2 = setTimeout(() => {
      setLoadingContent("Content");
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer1);
      clearTimeout(timer2);
    }
  } , []);



  return (
    <div>

      {/***    Loader     */}

      {
        isVisible && 
        <div onMouseOver={() => setIsVissible(true)} id="parent-box" className="fixed hidden md:block md:h-[350px] md:w-[320px] bg-red-500 bottom-[15%]  right-[30%] z-20 rounded-2xl object-center  ">
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
      <Footer />

      <div className={`bg-black text-orange-500 ${isLoading ? "h-screen" : "h-0"} transition-all duration-1000 ease-linear w-full fixed top-0 left-0 z-40  flex items-center justify-center text-7xl`}>{isLoading ? <p>{loadingContent}</p> : ""}</div>
    </div>
    
  );
}
