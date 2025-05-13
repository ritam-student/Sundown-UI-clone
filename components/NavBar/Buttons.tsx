import "@/app/globals.css";

export default function Button({content} : {content : string}){
    return (
        <div className="buttons px-4 py-2 border-2 border-[#C6BCB5] hover:border-0 rounded-full cursor-pointer relative overflow-hidden font-[neu] hover:text-white">
            <p className="z-10  relative">
                {content}
            </p>
        </div>
    )
}