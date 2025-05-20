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
import Navbar from "../../nav/nav";


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
       <Navbar/>
      </div>
    </div>
  );
};
