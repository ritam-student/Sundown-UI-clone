import Image from "next/image";
import "@/app/globals.css";


export default function NavBar() {
    return <nav className="w-full h-auto py-4 pt-10 flex items-center justify-between ">
        <div>
            <Image src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg" alt="Sundown studio" width={130} height={100}></Image>
        </div>

        <div className="flex items-center justify-around gap-4 font-medium text-lg">
            <div className="buttons px-4 py-2 border-2 border-[#C6BCB5] hover:border-0 rounded-full cursor-pointer relative overflow-hidden hover:text-white"><p className="z-10  relative">Work</p></div>
            <div className="buttons px-4 py-2 border-2 border-[#C6BCB5] hover:border-0 rounded-full cursor-pointer relative overflow-hidden hover:text-white"><p className="z-10  relative">Studio</p></div>
            <div className="buttons px-4 py-2 border-2 border-[#C6BCB5] hover:border-0 rounded-full cursor-pointer relative overflow-hidden hover:text-white"><p className="z-10  relative">Contact</p></div>
        </div>
    </nav>
}