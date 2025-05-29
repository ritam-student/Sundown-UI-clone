import "@/app/globals.css";

export default function Button({content} : {content : string}){
    return (
        <div className="buttons text-sm sm:text-md md:text-xl px-2 py-1 md:px-4 md:py-2 border-2 border-[#C6BCB5] hover:border-0 rounded-full cursor-pointer relative overflow-hidden font-[neu] hover:text-white">
            <p className="z-10  relative ">
                {content}
            </p>
        </div>
    )
}