"use client"
import FeatureBox from "./UI/FeatureBox";
import { Dispatch, SetStateAction } from "react";
import FeatureBoxSmall from "./UI/FeatureBoxSmall";

export default function Features ({setImage , setIsVissible} : {setImage: Dispatch<SetStateAction<string>> , setIsVissible : Dispatch<SetStateAction<boolean>>}) {

    return <>
        <div
        onMouseEnter={() => {
            setIsVissible(true);
        }}
        onMouseLeave={() => {
            setIsVissible(false);
        }}
        className=" h-auto w-full relative mt-10 overflow-hidden bg-transparent hidden md:block ">
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

        <div className="block md:hidden  h-auto w-full relative mt-10 overflow-hidden bg-transparent ">
            <FeatureBoxSmall main="Play New Kidvision" company="NIKE" image="img1.webp" />
            <FeatureBoxSmall main="SOHO NYC" company="ARC'TERYX" image="img2.webp" />
            <FeatureBoxSmall main="Makers Studio HOI" company="NIKE" env="false" image="img3.webp" />
            <FeatureBoxSmall main="SOHO 2023" company="CONVERSE" image="img4.webp" />
            <FeatureBoxSmall main="NYFW Popup" company="AFTERPAY" env="false" image="img5.webp" />
            <FeatureBoxSmall main="Air Force 1 2021" company="NIKE" image="img6.webp" />
            <FeatureBoxSmall main="50th Anniversary" company="NIKE" image="img7.webp" />
        </div>
    </>
}