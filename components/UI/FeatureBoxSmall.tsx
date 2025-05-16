import Image from "next/image";

export default function FeatureBoxSmall ({main , company , image , env} : {main: string , company: string , image: string , env ?: string}) {
    return <div className="w-auto h-[600px]  my-10 mx-4 ">
        <div className="w-full h-[80%] rounded-3xl object-cover object-center overflow-hidden">
            <Image src={`/${image}`} alt="Company Image" placeholder="empty" width={100} height={100} className="w-full h-full " />
        </div>
        <div className="w-full h-[20%] px-4 py-2">
            <h1 className="text-4xl mt-3">{main}</h1>
            <h4 className="text-xl font-thin mt-2">{company}</h4>
            <h5 className="text-lg font-thin text-gray-400">{env ? "Experiencal" : "Environment"}</h5>
        </div>
    </div>
}