import Image from "next/image";
import PopularProducts from "./../../../public/Group 1.png";
import IpadPro from "./../../../public/image 64.png";
import SamsungGalaxy from "./../../../public/image 41.png";
import MacPro from "./../../../public/Macbook 1.png";

export default function Category() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
      
      {/* Card 1: Popular Products */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center h-full">
        <Image src={PopularProducts} alt="Popular Products" width={360} height={327} layout="responsive" className="mb-4" />
        <h3 className="text-lg font-semibold mb-2">Popular Products</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
        </p>
        <div className="mt-auto">
          <a href="#" className="inline-block px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition text-center">
            Shop Now
          </a>
        </div>
      </div>

      {/* Card 2: iPad Pro */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center h-full">
        <Image src={IpadPro} alt="iPad Pro" width={360} height={366} layout="responsive" className="mb-4" />
        <h3 className="text-lg font-semibold mb-2">iPad Pro</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
        </p>
        <div className="mt-auto">
          <a href="#" className="inline-block px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition text-center">
            Shop Now
          </a>
        </div>
      </div>

      {/* Card 3: Samsung Galaxy */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center h-full">
        <Image src={SamsungGalaxy} alt="Samsung Galaxy" width={360} height={360} layout="responsive" className="mb-4" />
        <h3 className="text-lg font-semibold mb-2">Samsung Galaxy</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
        </p>
        <div className="mt-auto">
          <a href="#" className="inline-block px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition text-center">
            Shop Now
          </a>
        </div>
      </div>

      {/* Card 4: Macbook Pro */}
      <div className="bg-gray-800 text-white rounded-lg shadow-md p-6 flex flex-col items-center text-center h-full">
        <Image src={MacPro} alt="Macbook Pro" width={360} height={376} layout="responsive" className="mb-4" />
        <h3 className="text-lg font-semibold mb-2">Macbook Pro</h3>
        <p className="text-gray-300 text-sm mb-4 flex-grow">
          iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
        </p>
        <div className="mt-auto">
          <a href="#" className="inline-block px-4 py-2 bg-white text-gray-800 rounded-md hover:bg-gray-300 transition text-center">
            Shop Now
          </a>
        </div>
      </div>

    </div>
  );
}
