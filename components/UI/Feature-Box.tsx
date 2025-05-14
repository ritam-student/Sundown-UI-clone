export default function FeatureBox ({main , company , env}: {main: string , company: string , env?: string}) {
    return <div className="w-full h-auto py-10 border-b-2 border-gray-300  text-5xl px-4 sm:px-6 md:px-8 lg:px-10 relative after:bg-orange-400 after:absolute after:w-[100%]  after:h-0 after:top-0 after:left-0 hover:after:h-[100%] after:transition-all after:ease after:duration-1000 ">
        <div className="relative z-10 flex items-center justify-between">
            <h1 className="">{main}</h1>
            <div className="">
                <h6 className="text-lg text-right font-thin  ">{company}</h6>
                <p className="text-[18px] text-right text-gray-400 font-thin ">{env !== "false" ? "Environment" : "Experiencal"}</p>
            </div>
        </div>
    </div>
}