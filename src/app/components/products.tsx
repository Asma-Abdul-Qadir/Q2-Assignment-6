import Image from "next/image";
import like_logo from "../../../public/vector1.png"
import iphone14pro from "../../../public/Iphone 14 pro 1 (10).png"
import camera from "../../../public/Iphone 14 pro 1 (13).png"
import Apple_watch from "../../../public/Iphone 14 pro 1 (15).png"
import air_pods from "../../../public/Iphone 14 pro 1 (16).png"
import galaxy_watch from "../../../public/Iphone 14 pro 1 (17).png"
import galaxy_z from "../../../public/Iphone 14 pro 1 (18).png"
import galaxy_buds from "../../../public/Iphone 14 pro 1 (19).png"
import I_Pad from "../../../public/Iphone 14 pro 1 (20).png"

export default function Products(){
    return(
        // main box 
        <div className="w-[1440px] h-[1056px] space-y-[32px] px-[160px] py-[56px] bg-[#FFFFFF]  ">
            {/* tags section */}
            <div className="w-[1120px] h-[32px] space-x-[32px] flex justify-start items-center ">
                {/* tag 1 */}
                <div className="w-[100px] h-[32px] font-medium text-[18px] text-black justify-start items-center whitespace-nowrap hover:underline">
                    New Arrival
                </div>
                {/* tag 2 */}
                <div className="w-[86px] h-[32px]  font-medium text-[18px] text-[#8B8B8B] justify-start items-center hover:underline">
                    Bestseller
                </div>
                {/* tag 3 */}
                <div className="w-[159px] h-[32px]  font-medium text-[18px] text-[#8B8B8B] justify-start items-center whitespace-nowrap hover:underline">
                    Featured products
                </div>
            </div>
            {/* products grid .. having two rows*/}
            <div className="w-[1120px] h-[880px] space-y-[16px]">
                {/* row first ... four product boxes*/}
                <div className="w-[1120px] h-[432px] space-x-[16px] flex justify-between">
                    {/* product 1   ...I phone 14 pro max*/}
                    <div className="w-[268px] h-[432px] px-[16px] py-[24px] space-y-[16px] flex flex-col justify-center align-middle items-center bg-[#F6F6F6] border border-[#F6F6F6] rounded-9 ">
                        {/* heart icon.. bar */}
                        <div className="w-[236px] h-[32px] flex justify-end ">
                            <Image src={like_logo} alt="Like logo" className="w-[32px] h-[32px] flex justify-end"/>
                        </div>
                        {/* product image */}
                        <Image src={iphone14pro} alt="" className="w-[160px] h-[160px] justify-center align-middle"/>
                        {/* product info + button */}
                        <div className="w-[236px] h-[160px] space-y-[24px] flex flex-col justify-center ">
                            {/* text portion ... product info */}
                            <div className="w-[238px] h-[88px] space-y-[16px] flex flex-col justify-center ">
                                <div className="w-[236px] h-[48px] font-medium text-[16px] text-wrap text-center justify_center text-[#000000]">
                                Apple iPhone 14 Pro Max 128GB Deep Purple
                                </div>
                                {/* price */}
                                <div className="w-[236px] h-[24px] font-semibold text-[24px] text-[#000000] justify-center text-center align-top ">
                                    $900
                                </div>
                            </div>
                            {/* button */}
                            <button className="w-[188px] h-[48px] bg-[#000000] text-white font-medium text-[14px] border border-[#000000] rounded-8 px-[64px] py-[12px] justify-center align-middle whitespace-nowrap">
                                Buy Now
                            </button>
                        </div>
                    </div>
                    {/* product 2 ... camera*/}
                    <div className="w-[268px] h-[432px] px-[16px] py-[24px] space-y-[16px] flex flex-col justify-center items-center bg-[#F6F6F6] border border-[#F6F6F6] rounded-9 ">
                        {/* heart icon.. bar */}
                        <div className="w-[236px] h-[32px] flex justify-end ">
                            <Image src={like_logo} alt="Like logo" className="w-[32px] h-[32px] "/>
                        </div>
                        {/* product image */}
                        <Image src={camera} alt="" className="w-[160px] h-[160px] justify-center align-middle "/>
                        {/* product info + button */}
                        <div className="w-[236px] h-[160px] space-y-[24px] flex flex-col justify-center ">
                            {/* text portion ... product info */}
                            <div className="w-[238px] h-[88px] space-y-[16px] flex flex-col justify-center ">
                                <div className="w-[236px] h-[48px] font-medium text-[16px] text-wrap justify-center text-center text-[#000000]">
                                    Blackmagic Pocket Cinema Camera 6k
                                </div>
                                {/* price */}
                                <div className="w-[236px] h-[24px] font-semibold text-[24px] text-[#000000] justify-center text-center align-top ">
                                    $2535
                                </div>
                            </div>
                            {/* button */}
                            <button className="w-[188px] h-[48px] bg-[#000000] text-white font-medium text-[14px] border border-[#000000] rounded-8 px-[64px] py-[12px] justify-center align-middle whitespace-nowrap ">
                                Buy Now
                            </button>
                        </div>
                    </div>
                    {/* product 3 ... Apple watch*/}
                    <div className="w-[268px] h-[432px] px-[16px] py-[24px] space-y-[16px] flex flex-col justify-center items-center bg-[#F6F6F6] border border-[#F6F6F6] rounded-9 ">
                        {/* heart icon.. bar */}
                        <div className="w-[236px] h-[32px] flex justify-end ">
                            <Image src={like_logo} alt="Like logo" className="w-[32px] h-[32px] "/>
                        </div>
                        {/* product image */}
                        <Image src={Apple_watch} alt="" className="w-[160px] h-[160px] justify-center align-middle "/>
                        {/* product info + button */}
                        <div className="w-[236px] h-[160px] space-y-[24px] flex flex-col justify-center ">
                            {/* text portion ... product info */}
                            <div className="w-[238px] h-[88px] space-y-[16px] flex flex-col justify-center ">
                                <div className="w-[236px] h-[48px] font-medium text-[16px] text-wrap justify-center text-center text-[#000000]">
                                    Apple Watch Series 9 GPS 41mm Starlight Aluminium
                                </div>
                                {/* price */}
                                <div className="w-[236px] h-[24px] font-semibold text-[24px] text-[#000000] justify-center text-center align-top ">
                                    $399
                                </div>
                            </div>
                            {/* button */}
                            <button className="w-[188px] h-[48px] bg-[#000000] text-white font-medium text-[14px] border border-[#000000] rounded-8 px-[64px] py-[12px] justify-center align-middle whitespace-nowrap">
                                Buy Now
                            </button>
                        </div>
                    </div>
                    {/* product 4.... Air pods*/}
                    <div className="w-[268px] h-[432px] px-[16px] py-[24px] space-y-[16px] flex flex-col justify-center items-center bg-[#F6F6F6] border border-[#F6F6F6] rounded-9 ">
                        {/* heart icon.. bar */}
                        <div className="w-[236px] h-[32px] flex justify-end ">
                            <Image src={like_logo} alt="Like logo" className="w-[32px] h-[32px] "/>
                        </div>
                        {/* product image */}
                        <Image src={air_pods} alt="Air pods" className="w-[160px] h-[160px] justify-center align-middle"/>
                        {/* product info + button */}
                        <div className="w-[236px] h-[160px] space-y-[24px] flex flex-col justify-center ">
                            {/* text portion ... product info */}
                            <div className="w-[238px] h-[88px] space-y-[16px] flex flex-col justify-center ">
                                <div className="w-[236px] h-[48px] font-medium text-[16px] text-wrap justify-center text-center text-[#000000]">AirPods Max Silver
                                Starlight Aluminium</div>
                                {/* price */}
                                <div className="w-[236px] h-[24px] font-semibold text-[24px] text-[#000000] justify-center text-center align-top ">
                                    $549
                                </div>
                            </div>
                            {/* button */}
                            <button className="w-[188px] h-[48px] bg-[#000000] text-white font-medium text-[14px] border border-[#000000] rounded-8 px-[64px] py-[12px] justify-center align-middle whitespace-nowrap">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
                 {/* row second ... four product boxes*/}
                 <div className="w-[1120px] h-[432px] space-x-[16px] flex justify-between">
                    {/* product5 ... samsung galaxy watch */}
                    <div className="w-[268px] h-[432px] px-[16px] py-[24px] space-y-[16px] flex flex-col justify-center items-center bg-[#F6F6F6] border border-[#F6F6F6] rounded-9 ">
                        {/* heart icon.. bar */}
                        <div className="w-[236px] h-[32px] flex justify-end ">
                            <Image src={like_logo} alt="Like logo" className="w-[32px] h-[32px] "/>
                        </div>
                        {/* product image */}
                        <Image src={galaxy_watch} alt="" className="w-[160px] h-[160px] justify-center align-middle"/>
                        {/* product info + button */}
                        <div className="w-[236px] h-[160px] space-y-[24px] flex flex-col justify-center ">
                            {/* text portion ... product info */}
                            <div className="w-[238px] h-[88px] space-y-[16px] flex flex-col justify-center ">
                                <div className="w-[236px] h-[48px] font-medium text-[16px] text-wrap justify-center text-center text-[#000000]">
                                Samsung Galaxy Watch6 Classic 47mm Black
                                </div>
                                {/* price */}
                                <div className="w-[236px] h-[24px] font-semibold text-[24px] text-[#000000] justify-center text-center align-top ">
                                    $369
                                </div>
                            </div>
                            {/* button */}
                            <button className="w-[188px] h-[48px] bg-[#000000] text-white font-medium text-[14px] border border-[#000000] rounded-8 px-[64px] py-[12px] justify-center align-middle whitespace-nowrap">
                                Buy Now
                            </button>
                        </div>
                    </div>
                    {/* product 6 ... galaxy z fold*/}
                    <div className="w-[268px] h-[432px] px-[16px] py-[24px] space-y-[16px] flex flex-col justify-center items-center bg-[#F6F6F6] border border-[#F6F6F6] rounded-9 ">
                        {/* heart icon.. bar */}
                        <div className="w-[236px] h-[32px] flex justify-end ">
                            <Image src={like_logo} alt="Like logo" className="w-[32px] h-[32px] "/>
                        </div>
                        {/* product image */}
                        <Image src={galaxy_z} alt="galaxy z fold" className="w-[160px] h-[160px] justify-center align-middle"/>
                        {/* product info + button */}
                        <div className="w-[236px] h-[160px] space-y-[24px] flex flex-col justify-center ">
                            {/* text portion ... product info */}
                            <div className="w-[238px] h-[88px] space-y-[16px] flex flex-col justify-center ">
                                <div className="w-[236px] h-[48px] font-medium text-[16px] text-wrap justify-center text-center text-[#000000]">
                                Galaxy Z Fold5 Unlocked | 256GB | Phantom Black
                                </div>
                                {/* price */}
                                <div className="w-[236px] h-[24px] font-semibold text-[24px] text-[#000000] justify-center text-center align-top ">
                                    $1799
                                </div>
                            </div>
                            {/* button */}
                            <button className="w-[188px] h-[48px] bg-[#000000] text-white font-medium text-[14px] border border-[#000000] rounded-8 px-[64px] py-[12px] justify-center align-middle whitespace-nowrap">
                                Buy Now
                            </button>
                        </div>
                    </div>
                    {/* product7 ....galaxy buds */}
                    <div className="w-[268px] h-[432px] px-[16px] py-[24px] space-y-[16px] flex flex-col justify-center items-center bg-[#F6F6F6] border border-[#F6F6F6] rounded-9 ">
                        {/* heart icon.. bar */}
                        <div className="w-[236px] h-[32px] flex justify-end ">
                            <Image src={like_logo} alt="Like logo" className="w-[32px] h-[32px] "/>
                        </div>
                        {/* product image */}
                        <Image src={galaxy_buds} alt="galaxy buds" className="w-[160px] h-[160px] justify-center align-middle"/>
                        {/* product info + button */}
                        <div className="w-[236px] h-[160px] space-y-[24px] flex flex-col justify-center ">
                            {/* text portion ... product info */}
                            <div className="w-[238px] h-[88px] space-y-[16px] flex flex-col justify-center ">
                                <div className="w-[236px] h-[48px] font-medium text-[16px] text-wrap justify-center text-center text-[#000000]">
                                Galaxy Buds FE
                                Graphite
                                </div>
                                {/* price */}
                                <div className="w-[236px] h-[24px] font-semibold text-[24px] text-[#000000] justify-center text-center align-top ">
                                    $99.99
                                </div>
                            </div>
                            {/* button */}
                            <button className="w-[188px] h-[48px] bg-[#000000] text-white font-medium text-[14px] border border-[#000000] rounded-8 px-[64px] py-[12px] justify-center align-middle whitespace-nowrap">
                                Buy Now
                            </button>
                        </div>
                    </div>
                    {/* product8 ....Apple I   Pad */}
                    <div className="w-[268px] h-[432px] px-[16px] py-[24px] space-y-[16px] flex flex-col justify-center items-center bg-[#F6F6F6] border border-[#F6F6F6] rounded-9 ">
                        {/* heart icon.. bar */}
                        <div className="w-[236px] h-[32px] flex justify-end ">
                            <Image src={like_logo} alt="Like logo" className="w-[32px] h-[32px] "/>
                        </div>
                        {/* product image */}
                        <Image src={I_Pad} alt="Apple I Pad" className="w-[160px] h-[160px] justify-center align-middle "/>
                        {/* product info + button */}
                        <div className="w-[236px] h-[160px] space-y-[24px] flex flex-col justify-center ">
                            {/* text portion ... product info */}
                            <div className="w-[238px] h-[88px] space-y-[16px] flex flex-col justify-center ">
                                <div className="w-[236px] h-[48px] font-medium text-[16px] text-wrap justify-center text-center text-[#000000]">
                                Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021
                                </div>
                                {/* price */}
                                <div className="w-[236px] h-[24px] font-semibold text-[24px] text-[#000000] justify-center text-center align-top ">
                                    $398
                                </div>
                            </div>
                            {/* button */}
                            <button className="w-[188px] h-[48px] bg-[#000000] text-white font-medium text-[14px] border border-[#000000] rounded-8 px-[64px] py-[12px] justify-center align-middle items-center whitespace-nowrap">
                                Buy Now
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}