import Image from "next/image";
import iPhone1 from "../../../public/Iphone Image.png";

export default function Banner() {
    return (
        <div className="w-full max-w-[1440px] h-auto px-8 md:px-16 lg:px-[160px] bg-black flex flex-col lg:flex-row justify-center items-center mx-auto">
            {/* Left Text Section */}
            <div className="w-full lg:w-[714px] space-y-6 lg:space-y-[24px] text-left mb-8 lg:mb-0">
                {/* Header Section */}
                <div className="space-y-2 lg:space-y-[24px]">
                    <div className="text-[#FFFFFF] text-lg lg:text-[25px] opacity-40 font-semibold">
                        Pro.Beyond.
                    </div>
                    <div className="text-[#FFFFFF] text-5xl lg:text-[96px] leading-tight lg:leading-[72px] tracking-[-0.01em] font-thin">
                        iPhone 14 <strong>Pro</strong>
                    </div>
                </div>
                
                {/* Subtitle */}
                <div className="text-[#909090] text-base lg:text-[18px] font-medium">
                    Created to change everything for the better. For everyone.
                </div>
                
                {/* Shop Now Button */}
                <button 
                    aria-label="Shop Now"
                    className="w-48 lg:w-[191px] h-12 lg:h-[56px] px-6 py-2 lg:px-[56px] flex items-center justify-center text-white border border-white rounded"
                >
                    Shop Now
                </button>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-auto flex justify-center lg:justify-end">
                <Image 
                    src={iPhone1} 
                    alt="iPhone 14 Pro" 
                    width={406} 
                    height={632} 
                    className="w-48 md:w-64 lg:w-[406px] h-auto"
                    priority
                />
            </div>
        </div>
    );
}
