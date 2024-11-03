import Image from "next/image";
import left_Arrow from "../../../public/leftArrow.png";
import right_Arrow from "../../../public/rightArrow.png";
import phones from "../../../public/Phones.png";
import smartWatches from "../../../public/Smart Watches.png";
import cameras from "../../../public/Cameras.png";
import headphones from "../../../public/Headphones.png";
import computer from "../../../public/Computers.png";
import gaming from "../../../public/Gaming.png";

export default function Category() {
  return (
    // Main container
    <div className="w-full max-w-[1440px] mx-auto space-y-[32px] px-4 lg:px-[160px] py-[80px] bg-[#FAFAFA]">
      
      {/* Top section */}
      <div className="flex justify-between items-center">
        
        {/* Header text */}
        <h2 className="text-[24px] font-medium text-black">Browse By Category</h2>
        
        {/* Arrow icons */}
        <div className="flex space-x-4">
          <button className="w-8 h-8 flex justify-center items-center bg-gray-200 rounded-full">
            <Image src={left_Arrow} alt="Previous category" width={12} height={23} />
          </button>
          <button className="w-8 h-8 flex justify-center items-center bg-gray-200 rounded-full">
            <Image src={right_Arrow} alt="Next category" width={12} height={23} />
          </button>
        </div>
      </div>
      
      {/* Categories section */}
      <div className="flex justify-between gap-4 lg:gap-8 overflow-x-auto">
        
        {/* Category card component */}
        {[
          { image: phones, label: "Phones" },
          { image: smartWatches, label: "Smart Watches" },
          { image: cameras, label: "Cameras" },
          { image: headphones, label: "Headphones" },
          { image: computer, label: "Computers" },
          { image: gaming, label: "Gaming" },
        ].map((category, index) => (
          <div key={index} className="flex-shrink-0 w-[160px] h-[128px] bg-[#EDEDED] p-4 border border-[#EDEDED] rounded-[15px] flex flex-col items-center text-center space-y-2">
            <Image src={category.image} alt={`${category.label} icon`} width={48} height={48} />
            <div className="text-[16px] font-medium text-black">{category.label}</div>
          </div>
        ))}
        
      </div>
      
    </div>
  );
}
