"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black px-10 md:px-40 py-20">
      <div className="max-w-[1120px] mx-auto space-y-12">
        
        {/* Logo and Info Section */}
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="md:w-[384px] space-y-6">
            <Image
              src="/logo1.png"
              alt="Logo"
              width={65}
              height={23}
              className="w-auto h-auto"
            />
            <p className="text-[#CFCFCF] text-[14px] font-medium">
              We are a residential interior design firm located in Portland. Our boutique studio offers more than
            </p>
          </div>
          
          {/* Navigation Section */}
          <div className="flex flex-wrap gap-10 md:gap-20 justify-between">
            
            {/* Services Section */}
            <div className="space-y-3">
              <p className="text-white font-semibold text-[16px] mb-4">Services</p>
              <ul className="text-[#CFCFCF] text-[14px] space-y-2">
                {["Bonus program", "Gift cards", "Credit and payment", "Service contracts", "Non-cash account", "Payment"].map((item) => (
                  <li key={item} className="hover:text-white transition">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Assistance Section */}
            <div className="space-y-3">
              <p className="text-white font-semibold text-[16px] mb-4">Assistance to the buyer</p>
              <ul className="text-[#CFCFCF] text-[14px] space-y-2">
                {["Find an order", "Terms of delivery", "Exchange and return of goods", "Guarantee", "Frequently asked questions", "Terms of use of the site"].map((item) => (
                  <li key={item} className="hover:text-white transition">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Icons Section */}
        <div className="flex gap-4 justify-center">
          {[
            { href: "#", alt: "Twitter", src: "/twitter.png" },
            { href: "#", alt: "Facebook", src: "/facebook.png" },
            { href: "#", alt: "TikTok", src: "/tiktok.png" },
            { href: "#", alt: "Instagram", src: "/instagram.png" }
          ].map((icon) => (
            <Link key={icon.alt} href={icon.href} target="_blank" aria-label={icon.alt}>
              <Image src={icon.src} alt={icon.alt} width={16} height={16} className="hover:opacity-75 transition" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
