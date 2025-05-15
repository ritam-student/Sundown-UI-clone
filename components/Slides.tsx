import Slide from "./UI/Slide";
import "@/app/globals.css";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Slides() {
    return <div className="min-h-[90vh] h-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 py-10 ">
        <div className="flex items-center gap-2 ml-10">
            <div className="h-3 w-3 bg-[#FE330A] rounded-[100%] inline-block "></div>
            <h3 className="inline-block ">WHO WE WORK WITH</h3>
        </div>

        <div className="mt-15 mx-10">
        <Swiper
        slidesPerView={3.5}
        spaceBetween={30}
        
        className="mySwiper"
      >
        <SwiperSlide className="cursor-grab"><Slide imgUrl="nike.svg" content={"Retained Production support across retail and events in NY, CHI, LA. Creative Design, Design Management, Production/Project Management, and execution of work from concept to installation across the Country."} /></SwiperSlide>
        <SwiperSlide className="cursor-grab"><Slide imgUrl="converse.svg" content="Creative Concepting, Design, Design Management, Project Management, and execution of work from concept to installation across the Country. Cross functional communication and management of third party partners." /></SwiperSlide>
        <SwiperSlide className="cursor-grab"><Slide imgUrl="arc.svg" content="Production and design along with install oversight and execution support for the SoHo store opening on Broadway St, New York. Also working on creative and production work for a new store opening in Glendale, California." /></SwiperSlide>
        <SwiperSlide className="cursor-grab"><Slide imgUrl="hunter.svg" content="Design and Production partner for Hunter Holiday 2022 Pop-in at Nordstrom 57th St, New York, including activations in Women’s, Men’s and Kid’s zones. Thirty-five (35) additional smaller take-downs in Nordstrom stores across the US. Concept design for Holiday boot customization events in stores across winter 2022." /></SwiperSlide>
        <SwiperSlide className="cursor-grab"><Slide imgUrl="medialink.svg" content="Creative, Design, and Production Partner for 2023 CES. Scope Included creation of Branding Identity, Assets, and Digital Content, Design, Production design, Production oversight and Installation of client activations for IBM, Delta, Instacart, and more." /></SwiperSlide>
        <SwiperSlide className="cursor-grab"><Slide imgUrl="afterpay.svg" content="Creative, Design, and Production Partner for 2022 NY Fashion Week Pop-Up space. In Partnership with B-Reel scope including creation of Final Design, Design Assets, 3D Renders, Production design, Production/Partner oversight and creation of a two (2) story pop-up for Afterpay’s clients such as Crocs, JD Sports, Container Store, & Revolve." /></SwiperSlide>
      </Swiper>
        </div>
    </div>
}