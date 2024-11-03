import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import iphone from "../../../public/Iphone Gold.png";
import iphone1 from "../../../public/Iphone Gold1.png";
import appleWatch from "../../../public/apple watch.png";
import airpods from "../../../public/airpods (1).png";

export default function DiscountProduct() {
  return (
    <div className="bg-white px-8 md:px-[160px] py-[56px] flex flex-col gap-8">
      
      {/* Header */}
      <div className="text-2xl font-medium leading-8">
        <p>Discounts up to -50%</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Product Card Component */}
        {[
          { image: iphone, title: "Apple iPhone 14 Pro 512GB Gold (MQ233)", price: "$1437" },
          { image: airpods, title: "AirPods Max Silver Starlight Aluminium", price: "$549" },
          { image: appleWatch, title: "Apple Watch Series 9 GPS 41mm Starlight Aluminium", price: "$399" },
          { image: iphone1, title: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)", price: "$1499" },
        ].map((product, index) => (
          <div key={index} className="relative bg-[#F6F6F6] w-full max-w-[268px] h-[432px] py-6 px-4 flex flex-col items-center rounded-lg shadow-md">
            
            {/* Heart Icon */}
            <CiHeart size={30} className="absolute top-4 right-4 text-[#909090]" />

            {/* Product Image */}
            <Image src={product.image} alt={product.title} className="mt-2 mb-4 w-[150px] h-auto object-contain" />
            
            {/* Product Info */}
            <div className="text-center px-4">
              <p className="text-[16px] font-medium text-black mb-2">{product.title}</p>
              <h1 className="text-[24px] font-semibold tracking-wide mb-4">{product.price}</h1>
              <button className="bg-black text-white h-[48px] w-[166px] rounded-lg">Buy Now</button>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}
