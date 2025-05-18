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
      {/* Background image with full dark overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 w-full h-full bg-[url(../5.jpeg)] bg-cover bg-center" />
        <div className="absolute inset-0 w-full h-full bg-black opacity-80" />
      </div>
      
      {/* Logo carousel section */}
     

      {/* Background gradients - positioned left and moved down by ~2cm (75px) */}
      <div className="absolute w-full h-[1091px] top-[20px] left-0 right-0 pointer-events-none">
        {/* Teal gradient - shifted left and moved down */}
        <div className="absolute w-full h-[1034px] top-[20px] left-[-40%] blur-[100px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(0,178,169,0.7)_0%,rgba(0,0,0,0)_70%)] z-10" />
        
        {/* Blue gradient - reduced opacity and moved down */}
        <div className="absolute w-[1152px] h-[720px] top-[20px] right-0 [background:radial-gradient(50%_50%_at_50%_50%,rgba(56,162,191,0.4)_0%,rgba(0,0,0,0)_70%)] blur-[100px] z-10" />

        {/* Main content section */}
      <div className="relative w-full max-w-[1440px] mx-auto pt-20 md:pt-[280px] z-20 px-4 md:px-0">
      <div className="flex flex-col max-w-[690px] gap-6 md:gap-8 md:px-12 mt-40 md:mt-24">
        <div className="pt-2 pb-0 flex flex-col items-start">
          <h1 className="font-['Figtree',Helvetica] font-normal text-white text-4xl md:text-5xl lg:text-[62px] leading-tight md:leading-[90px]">
            For learning and networking
            
            solutions where 'good enough'
           
            isn't enough.
          </h1>
        </div>

        <p className="font-['Inter',Helvetica] font-normal text-white text-base md:text-xl leading-6 md:leading-7">
         Tired of outdated learning systems or traditional business cards? We build custom LMS
          <br className="hidden md:block" />
          platforms and Digital Visiting Cards tailored to your needs—scalable,engaging, and modern.
          <br className="hidden md:block" />
       
        </p>

        <button className="inline-flex items-center justify-center gap-3 px-6 md:px-[29px] py-3 md:py-[17px] rounded-[40px] bg-[#00b2a9] border border-solid text-white text-sm font-['Inter',Helvetica] w-fit">
          LET&apos;S TALK
          <img
            className="w-[13px] h-3"
            alt="Arrow icon"
            src="/component-1-26.svg"
          />
        </button>

        <div className="mt-4 md:mt-2 font-['Figtree',Helvetica] font-normal text-white text-2xl md:text-[32px] leading-tight md:leading-[38px]">
          Trusted by 300+ companies worldwide
        </div>
      </div>
    </div>
      </div>
      <div className="mt-8 [font-family:'Figtree',Helvetica] font-normal text-white text-[32px] leading-[38px] ml-auto mr-12">
          Trusted by 300+ companies worldwide, including industry leaders
          like:
        </div>
    </div>
  );
};