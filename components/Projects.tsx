"use client"

import { useState } from "react";
import Button from "./UI/Buttons";
import Image from "next/image";


export default function Projects() {

    const [iteration , setIteration] = useState(1);

    return <div className="h-auto  w-full px-4 sm:px-6 md:px-8 lg:px-10  py-15 ">
        <div className="inline-block">
            <Button content="All Projects ->" />
        </div>
        <div className="h-auto w-full bg-black rounded-3xl mt-15 flex flex-col md:flex-row items-center justify-between gap-4 ">
            <div className="md:w-1/2 w-full h-full px-4 md:px-10 py-3 rounded-3xl flex items-center justify-center">
                <div className=" h-auto w-auto  text-white">
                    <div className="text-6xl border-l-2 border-[#504A45] ">
                        <h1 className={` ${iteration === 0 ? 'ml-1 text-white' : 'ml-6 text-[#504A45]'} cursor-pointer`} onClick={() => setIteration(0)} >Design</h1>
                        <h1 className={` ${iteration === 1 ? 'ml-1 text-white' : 'ml-6 text-[#504A45]'} cursor-pointer`} onClick={() => setIteration(1)}>Project</h1>
                        <h1 className={` ${iteration === 2 ? 'ml-1 text-white' : 'ml-6 text-[#504A45]'} cursor-pointer`} onClick={() => setIteration(2)}>Execution</h1>
                    </div>
                    <p className="font-thin mt-6">Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.</p>
                </div>
            </div>
            <div className="md:w-1/2 w-full h-full  rounded-3xl object-cover object-center overflow-hidden">
                {
                    iteration === 0 ?
                    <Image src="/Design.webp" alt="Design image" height={200} width={200} placeholder="empty" className="h-full w-full rounded-3xl" />
                    :
                    (
                        iteration === 1 ?
                        <Image src="/project.webp" alt="Project image" height={200} width={200} placeholder="empty" className="h-full w-full rounded-3xl" />
                        :
                        <Image src="/execution.webp" alt="Execution image" height={200} width={200} placeholder="empty" className="h-full w-full rounded-3xl" />
                    )
                }
            </div>
        </div>
    </div>
}