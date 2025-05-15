import Image from "next/image";


export default function Slide({content , imgUrl} : {content?: string , imgUrl ?: string}){
    return <div  className="h-auto flex-shrink-0  w-auto min-w-[400px] min-h-[300px] px-6 border-l-[1px] border-gray-400">
        <div className="w-1/2 h-[100px] object-center object-cover overflow-hidden">
            <Image src={`/${imgUrl}`} alt="Company Logo" width={100} height={100} className="w-full h-full " />
        </div>
        <h4 className="font-thin mt-6"> {content} </h4>
    </div>
}