import "@/app/globals.css";

export default function Hero(){
    return (
        <>
            <div className="w-full h-auto border-b-2 border-gray-300 flex flex-col-reverse md:flex-row  items-end justify-between pb-10 md:pb-20 pt-25">
                <div className="w-full md:w-1/2 text-left mt-10 md:mt-0 text-3xl font-bold tracking-tighter leading-8">Sundown is a multi-disciplinary <br />studio focused on creating <br />unique, end-to-end experiences <br />and environments.</div>
                <div className="w-full md:w-1/2 text-right font-bold text-[100px] lg:text-[130px] leading-20 lg:leading-28 tracking-tight ">SPACES <br /> THAT <br />INSPIRE</div>
            </div>
            <div className="h-auto pb-20 rounded-3xl pt-15 w-full relative ">
                <div className="absolute -top-25 -right-[2.5%] lg:-right-10 w-[70%] md:w-1/2 rounded-l-[90%]  h-[70%] blur-[15px] bg-[#FE330C] ">
                    <div id="box" className="h-[35%] w-[40%] rounded-[100%] left-30 blur-[20px]"></div>
                </div>
                <div className="h-auto w-full  rounded-3xl overflow-hidden relative ">
                    <video src="./video.mp4" autoPlay muted loop ></video>
                </div>
            </div>
        </>
    )
}