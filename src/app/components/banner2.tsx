import Image from "next/image";
import banner from "../../../public/Banner 2.png";

export default function Banner_SummerSale() {
    return (
        <div className="w-full max-w-[1440px] mx-auto">
            <Image 
                src={banner} 
                alt="Banner of Summer Sale" 
                layout="responsive"
                width={1440} 
                height={448} 
                priority
        
            />
        </div>
    );
}
