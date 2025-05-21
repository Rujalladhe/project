import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const BackgroundByAnima = (): JSX.Element => {
  // Company logos data for mapping
  const logoImages = [
    { src: "/component-1-35.svg", alt: "Company logo 1" },
    { src: "/component-1-59.svg", alt: "Company logo 2" },
    { src: "/component-1-33.svg", alt: "Company logo 3" },
    { src: "/component-1-34.svg", alt: "Company logo 4" },
    { src: "/component-1-42.svg", alt: "Company logo 5" },
    { src: "/component-1-39.svg", alt: "Company logo 6" },
    { src: "/component-1-49.svg", alt: "Company logo 7" },
    { src: "/component-1-44.svg", alt: "Company logo 8" },
  ];
  
  return (
    <div className="relative w-full h-[1034px]">
      {/* Background image with no blur */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 w-full h-full bg-[url(/purple3.jpg)] bg-cover bg-center" />
        
        {/* Gradient overlay that fades to black at the bottom */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black" />
      </div>
      
      {/* Main content section - moved up by approximately 3cm (112px) */}
      <div className="relative w-full max-w-[1440px] mx-auto pt-20 md:pt-[130px] z-20 px-4 md:px-0">
        <div className="flex flex-col max-w-[690px] gap-6 md:gap-8 md:px-12 mt-40 md:mt-24">
          <div className="pt-1 pb-0 flex flex-col items-start">
            <h1 className="font-['Figtree',Helvetica] font-normal text-white text-4xl md:text-5xl mb-12 lg:text-[70px] leading-10 md:leading-[75px]">
              VSB infotech empowers growth through learning and networking solutions that go far beyond ordinary.
            </h1>
          </div>
          
          <p className="font-['Figtree',Helvetica] font-bold text-white mb-5 text-md md:text-2xl leading-6 md:leading-9">
            Tired of outdated learning systems or traditional business cards? We have out own LMS 
            platforms and Custom Digital Visiting Cards tailored to your needs—scalable,engaging, and modern.
          </p>
          
          <button className="inline-flex items-center justify-center gap-3 px-6 md:px-[29px] py-5 md:py-[10px] rounded-[40px] bg-[#00b2a9] border border-solid text-white text-sm font-['Inter',Helvetica] w-fit" onClick={() => window.location.href = '/contact'}>
            LET&apos;S TALK
            <img
              className="w-[13px] h-3"
              alt="Arrow icon"
              src="/component-1-26.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundByAnima;