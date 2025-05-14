import Image from "next/image";
import Button from "./UI/Buttons";


export default function NavBar() {
    return <nav className="w-full h-auto py-4 pt-10 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="w-auto h-auto object-center scale-75 sm:scale-100 ">
            <Image src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg" alt="Sundown studio" width={130} height={100}></Image>
        </div>

        <div className="w-auto h-auto flex items-center justify-around gap-2 md:gap-4 font-medium text-lg">
            <Button content="Work"/>
            <Button content="Studio"/>
            <Button content="Contact"/>
        </div>
    </nav>
}