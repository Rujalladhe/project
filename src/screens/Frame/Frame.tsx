import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { BackgroundByAnima } from "./sections/BackgroundByAnima";
import { BackgroundWrapperByAnima } from "./sections/BackgroundWrapperByAnima";
import { ContainerWrapperByAnima } from "./sections/ContainerWrapperByAnima";
import { DivByAnima } from "./sections/DivByAnima";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima";
import { SectionByAnima } from "./sections/SectionByAnima/SectionByAnima";
import Footer from "./sections/fotter/fotter";


export const Frame = (): JSX.Element => {
  // Navigation menu items data
  const menuItems = [
    { label: "What we do", hasDropdown: true },
    { label: "Industries", hasDropdown: true },
    { label: "Portfolio", hasDropdown: true },
    { label: "Insights", hasDropdown: true },
    { label: "About us", hasDropdown: false },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      <div className="flex flex-col w-full items-start relative bg-white">
        <div className="flex flex-col items-start relative self-stretch w-full">
          <BackgroundByAnima />
          <BackgroundWrapperByAnima />
        
          
          <DivByAnima />
          <Footer/>
          
        </div>

        
        {/* Navigation Bar */}
        <header className="w-full h-[72px] bg-[#1e1e1e] fixed top-0 left-0 z-50">
          <div className="relative w-[1440px] h-full mx-auto">
            {/* Logo */}
            <div className="inline-flex flex-col min-w-[120px] items-start absolute top-6 left-12">
              <div className="flex max-w-[120px] w-[120px] items-start relative">
                <div className="flex flex-col w-[120px] h-6 items-center justify-center relative">
                  <img
                    className="relative w-[120px] h-6"
                    alt="Logo"
                    src="/component-1-29.svg"
                  />
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="inline-flex h-[72px] items-center justify-between absolute top-0 left-[388px]">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className={`relative h-[72px] ${item.hasDropdown ? "px-2.5" : "px-2.5"} flex items-center`}
                >
                  <div className="font-normal text-white text-sm leading-[16.8px] [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap">
                    {item.label}
                  </div>

                  {item.hasDropdown && (
                    <ChevronDownIcon className="w-[13px] h-[7px] ml-2 text-white" />
                  )}
                </div>
              ))}
            </nav>

            {/* Careers Link */}
            <div className="inline-flex max-w-[246.13px] h-[72px] items-center pt-[27.09px] pb-[27.91px] px-2.5 absolute top-0 left-[1146px]">
              <div className="relative w-fit mt-[-1.00px] font-normal text-white text-sm leading-[16.8px] [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap">
                Careers
              </div>
            </div>

            {/* Let's Talk Button */}
            <Button className="absolute w-[150px] h-[42px] top-[15px] left-[1242px] rounded-[20px] bg-[#00b2a9] border border-solid text-white hover:bg-[#00a29a]">
              <span className="font-normal text-sm leading-6 [font-family:'Inter',Helvetica]">
                LET&#39;S TALK
              </span>
              <ChevronRightIcon className="w-[13px] h-3 ml-2" />
            </Button>
          </div>
        </header>
      </div>
    </div>
  );
};
