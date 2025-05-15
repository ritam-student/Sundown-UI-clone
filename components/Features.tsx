"use client"
import FeatureBox from "./UI/Feature-Box";
import { Dispatch, SetStateAction } from "react";

export default function Features ({setImage , setIsVissible} : {setImage: Dispatch<SetStateAction<string>> , setIsVissible : Dispatch<SetStateAction<boolean>>}) {

    return <div
     onMouseEnter={() => {
        setIsVissible(true);
     }}
    onMouseLeave={() => {
        setIsVissible(false);
    }}
    className="min-h-[100vh] h-auto w-full relative mt-10 overflow-hidden bg-transparent  ">
        <div onMouseOver={() => {setImage("/img1.webp"); setIsVissible(true)}}
        ><FeatureBox main="Play New Kidvision" company="NIKE" /></div>

        <div onMouseOver={() => {setImage("/img2.webp"); setIsVissible(true)}}
        ><FeatureBox main="SOHO NYC" company="ARC'TERYX" /></div>

        <div onMouseOver={() => {setImage("/img3.webp"); setIsVissible(true)}}
        ><FeatureBox main="Makers Studio HOI" company="NIKE" env="false" /></div>

        <div onMouseOver={() => {setImage("/img4.webp"); setIsVissible(true)}}
        ><FeatureBox main="SOHO 2023" company="CONVERSE" /></div>

        <div onMouseOver={() => {setImage("/img5.webp"); setIsVissible(true)}}
        ><FeatureBox main="NYFW Popup" company="AFTERPAY" env="false" /></div>

        <div onMouseOver={() => {setImage("/img6.webp"); setIsVissible(true)}}
        ><FeatureBox main="Air Force 1 2021" company="NIKE" /></div>

        <div onMouseOver={() => {setImage("/img7.webp"); setIsVissible(true)}}
        
        ><FeatureBox main="50th Anniversary" company="NIKE" /></div>
    </div>
}