import Image from "next/image";
import "@/app/globals.css";


export default function Footer() {
    return <footer className="h-screen w-full fixed bottom-0 left-0 -z-10 bg-black text-white px-4 py-4 flex flex-col items-center justify-between overflow-hidden">

         <div className="h-auto py-10 w-full flex items-center justify-between px-1 sm:px-6 md:px-8 lg:px-12  ">
          <div className="w-1/3 lg:w-2/3 px-4  text-[20px] sm:text-[30px] md:text-[40px] lg:text-[45px] leading-[35px] md:leading-[45px] lg:leading-[60px] text-start">
            <h2 className="">Work</h2>
            <h2 className="">Studio</h2>
            <h2 className="">Contact</h2>
          </div>
          <div className="w-2/3 lg:w-1/3 px-4 text-right md:text-left text-[16px] md:text-[26px]  leading-[25px] md:leading-[35px] lg:leading-[40px] ">
            <p className=" font-thin">Get industry insights and creative inspiration straight to your inbox.</p>
            <div className="mt-[27px] font-thin border-b-[1px] border-gray-300 text-gray-300">Email Address</div>
          </div>

            <div id="left-footer" className="absolute md:-top-[45%] -top-[30%] -left-[35%] bg-[#FD330B] blur-[50px] h-[90%] w-[90%] -z-10 -rotate-[10deg] md:-rotate-[20deg] "></div>
            <div id="right-footer" className="absolute -top-[18%] -right-[25%] md:-right-[16%] bg-[#FD330B] blur-[50px] h-[70%] md:w-[70%] w-[90%] -z-10 rotate-[5deg] md:rotate-[18deg] "></div>
         </div>
         <div className="w-full h-auto">
            <div className="h-auto relative w-full object-cover object-center overflow-hidden">
              <Image src={"/footerLogo.svg"} alt="Footer Logo" width={100} height={100} className="w-full h-full " />
            </div>
            <div className="h-auto w-full  pt-12 ">
              <div className=" w-full h-full border-t-[1px] border-gray-400 flex items-start justify-between gap-4 text-sm md:text-lg py-10">
                <p className="font-thin w-1/4 text-center">Copyright © Sundown Studio</p>
                <p className="font-thin w-1/4 text-center">Brooklyn , NY</p>
                <p className="font-thin w-1/4 text-center">Instagram</p>
                <p className="font-thin w-1/4 text-center">LinkedIn</p>
              </div>
            </div>
         </div>
      </footer>
}