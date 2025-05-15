import Image from "next/image";
import "@/app/globals.css";


export default function WeAre() {
    return <div className="min-h-[80vh] h-auto w-full mt-30 relative px-4 sm:px-6 md:px-8 lg:px-10 ">
        {/**  foreground part   */}
        <div className="flex flex-col justify-between h-full w-full py-5 relative  bg-transparent">
            <div className="flex justify-around gap-4 flex-col md:flex-row bg-transparent">
                <h1 className="text-3xl lg:text-4xl xl:text-6xl font-bold tracking-tight leading-8 md:leading-10 lg:leading-11 xl:leading-15 w-full md:w-2/3 bg-transparent z-10">
                We are a group of design- <br />driven, goal-focused creators, <br />producers, and designers who <br />believe that the details make <br />all the difference.
                </h1>
                <div className="w-[300px] self-end mx-right px-4 py-4 flex justify-between flex-col gap-10 mt-15 md:mt-10 bg-transparent z-10">
                    <div className="object-center  rounded-xl overflow-hidden scale-105">
                        <Image src="/Image1.webp" width={300} height={300} alt="Image 1"></Image>
                    </div>
                    <h4 className="font-thin text-right md:text-left">We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into reality. We’re here to partner with you through every step of the process and know that relationships are the most important things we build.</h4>
                </div>
            </div>
            <span className="flex items-center mt-8 ">
                <div className="h-3 w-3 rounded-[100%] bg-[#FE330A] "></div>
                <h5 className="font-thin ml-3">FEATURED PROJECTS</h5>
            </span>
        </div>

        {/**   background part   */}
        <div className="absolute inset-0  flex items-center justify-center pt-20">
            <div className="h-[330px] w-[330px] md:w-[500px] md:h-[500px] rounded-[100%] blur-[20px] animate"></div>
        </div>
    </div>
    
}