import Image from "next/image"
import play_station from "../../../public/PlayStation.png"
import ear_pods from "../../../public/hero.png"
import vision_pro from "../../../public/vision pro.png"
import macbook from "../../../public/Screen.png"
import macbookbody from "../../../public/Body.png"


export default function Hero_Section2(){
    return(
        // main div... having two child div sections(left and right)
        <div className="w-[1440px] h-[600px] flex justify-center ">
            {/* first div left section ... with two portions(up side and bottom side sections*/}
            <div className="w-[720px] h-[600px]">
                {/* up side play station portion */}
                <div className="w-[720px] h-[328px] pl-[334px] pr-[48px] py-0 bg-white flex items-center justify-end">
                    {/* image */}
                    <Image src={play_station} alt="Play Station image" className="w-[360px] h-[343px] p-0"/>
                    {/* text part */}
                    <div className="w-[338px] h-[128px] space-y-16 ">
                        <div className="w-[338px] h-[40px] font-medium text-[49px] justify-start text-[#000000]">
                            Playstation 5
                        </div>
                        <div className="w-[338px] h-[72px] text-[#909090] font-medium text-[14px] align-top text-left text-wrap">
                        Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
                        </div>
                    </div>
                </div>
                {/* bottom side  ... having two child elements*/}
                <div className="w-[720px] h-[272px] flex ">
                   {/* Ear Pods first child elements */}
                    <div className="flex items-center bg-[#EDEDED]">
                        {/* Left-aligned image */}
                        <Image src={ear_pods} alt="Apple Ear Pods" className="w-[104px] h-[272px]" />
                        {/* Text section */}
                        <div className="flex flex-col justify-center mx-[48px]">
                            <div className="text-[29px] text-[#000000] leading-[40px]">
                                Apple <br />
                                AirPods <br />
                                <strong>Max</strong>
                            </div>
                            <div className="text-[#6e6e6e] text-[16px] mt-4">
                                Computational audio. <br />
                                Listen, it's powerful.
                            </div>
                        </div>
                    </div>
                    {/* vision pro ...second child element*/}
                    <div className="w-[360px] h-[272px] bg-[#353535] flex items-center">
                        {/* left align image */}
                        <Image src={vision_pro} alt="Apple Vision pro 36" className="w-[136px] h-[190px] pl-0"/>
                        {/* text portion */}
                        <div className="w-[160px] h-[144px] space-y-8 p-0 justify-center items-center">
                            <div className="w-[160px] h-[80px] text-white text-[29px] text-left align-top text-nowrap">
                                Apple<br/>
                                Vision <strong>Pro</strong>
                            </div>
                            <div className="w-[160px] h-[72px] font-medium text-[14px] text-[#909090] text-left text-wrap">
                                An immersive way to experience entertainment
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* second div ..right section having two child section text n image*/}
            <div className="w-[720px] h-[600px] py-[44px] px-[56px] bg-[#EDEDED] space-x-[56px] flex justify-center items-center">
                {/* text section */}
                <div className="w-[360px] h-[272px] space-y-16 pl-[56px]">
                    {/* information text */}
                    <div className="w-[360px] h-[200px] space-y-16 text-left">
                        <div className="w-[360px] h-[112px] text-[#000000] text-[64px] font-thin">
                            Macbook<br/><strong>Air</strong>
                        </div>
                        <div className="w-[360px] h-[72px] text-left font-medium text-[14px] text-[#909090] text-wrap">
                        The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
                        </div>
                    </div>
                    {/* button  */}
                    <button className="w-[191px] h-[56px] px-[56px] py-[16px] border border-black rounded text-black text-[16px] font-medium whitespace-nowrap ">
                        Shop Now
                    </button>
                </div>
                {/* image */}
                <Image src={macbook} alt="Macbook image" className="w-[292px] h-[502px] mx-0 "/>
                
            </div>
        </div>
    )
}