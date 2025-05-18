import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const SectionByAnima = (): JSX.Element => {
  // Social media icons data
  const socialMediaIcons = [
    {
      src: "/component-1-8.svg",
      alt: "Social media icon 1",
      row: 1,
      position: 1,
    },
    {
      src: "/component-1-21.svg",
      alt: "Social media icon 2",
      row: 1,
      position: 2,
    },
    {
      src: "/component-1-9.svg",
      alt: "Social media icon 3",
      row: 1,
      position: 3,
    },
    {
      src: "/component-1-53.svg",
      alt: "Social media icon 4",
      row: 2,
      position: 1,
    },
    {
      src: "/component-1-20.svg",
      alt: "Social media icon 5",
      row: 2,
      position: 2,
    },
    {
      src: "/component-1-43.svg",
      alt: "Social media icon 6",
      row: 2,
      position: 3,
    },
  ];

  // Menu items
  const menuItems = [
    { text: "About us", top: "116px" },
    { text: "Services", top: "160px" },
    { text: "Portfolio", top: "204px" },
    { text: "Careers", top: "248px" },
    { text: "Resources", top: "292px" },
    { text: "Blog", top: "336px" },
  ];

  // Delivery centers
  const deliveryCenters = [
    {
      name: "Poznań (HQ)",
      address: ["ul. Mostowa 38", "61-854 Poznań", "Poland"],
      top: "115px",
      addressTop: "142px",
    },
    {
      name: "Merida",
      address: ["C.11 310 Col. Santa Gertrudis Copo", "97305 Merida", "Mexico"],
      top: "243px",
      addressTop: "270px",
    },
  ];

  // Offices
  const offices = [
    {
      name: "London",
      address: ["77 Farringdon Road EC1M 3JU", "United Kingdom"],
      top: "115px",
      addressTop: "142px",
    },
    {
      name: "Eschborn",
      address: [
        "c/o Rödl RAe, Taunus Tower, Mergenthalerallee 73-75,",
        "65760 Eschborn",
        "Germany",
      ],
      top: "215px",
      addressTop: "242px",
    },
    {
      name: "Houston",
      address: [
        "City Place 1401 Lake Plaza Dr, Ste. 200",
        "Spring, TX 77389",
        "United States",
      ],
      top: "343px",
      addressTop: "370px",
    },
  ];

  // Key services
  const keyServices = [
    { text: "AI Development", left: "939px" },
    { text: "Data Engineering", left: "1061px" },
    { text: "Machine Learning", left: "1192px" },
    { text: "Cloud", left: "1327px" },
    { text: "Product Design", left: "1392px" },
    { text: "Python Development", left: "1512px" },
  ];

  return (
    <div className="relative self-stretch w-full h-[621px] bg-[#f6f6f6]">
      {/* Logo and contact section */}
      <div className="flex flex-col max-w-[153.3px] w-[153px] items-start absolute top-16 left-72">
        <div className="inline-flex max-w-[153.3px] items-start relative flex-[0_0_auto]">
          <div className="flex flex-col w-[148px] h-[30px] items-center justify-center relative">
            <img
              className="relative w-[148px] h-[30px]"
              alt="Company logo"
              src="/component-1-7.svg"
            />
          </div>
        </div>
      </div>

      <div className="absolute w-[101px] top-[141px] left-72 font-normal text-black text-sm tracking-[0] leading-5 whitespace-nowrap">
        GET IN TOUCH
      </div>

      <div className="flex flex-col w-[153px] items-start absolute top-[170px] left-72">
        <div className="relative w-fit mt-[-1.00px] font-normal text-black text-sm leading-5 tracking-[0] whitespace-nowrap">
          business@stxnext.com
        </div>
      </div>

      <div className="absolute w-16 top-[237px] left-72 font-normal text-black text-sm tracking-[0] leading-5 whitespace-nowrap">
        Follow us
      </div>

      {/* Social media icons */}
      {socialMediaIcons.map((icon, index) => (
        <div
          key={index}
          className={`inline-flex flex-col max-w-[153.3px] items-start absolute top-[${icon.row === 1 ? "274px" : "331px"}] left-[${icon.position === 1 ? "288px" : icon.position === 2 ? "345px" : "401px"}]`}
        >
          <div className="inline-flex max-w-10 items-start relative flex-[0_0_auto]">
            <div className="flex flex-col w-10 h-[41px] items-center justify-center relative">
              <img
                className="relative w-10 h-[41px]"
                alt={icon.alt}
                src={icon.src}
              />
            </div>
          </div>
        </div>
      ))}

      {/* Vertical separator */}
      <Separator
        orientation="vertical"
        className="absolute h-[392px] top-16 left-[548px] bg-[#dde6ec]"
      />

      {/* Menu section */}
      <div className="absolute w-11 top-[63px] left-[655px] font-normal text-black text-base tracking-[0] leading-5 whitespace-nowrap">
        Menu
      </div>

      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col w-[70px] items-start absolute top-[${item.top}] left-[655px]`}
        >
          <div className="relative w-fit mt-[-1.00px] font-normal text-black text-sm leading-5 tracking-[0] whitespace-nowrap">
            {item.text}
          </div>
        </div>
      ))}

      {/* Vertical separator */}
      <Separator
        orientation="vertical"
        className="absolute h-[392px] top-16 left-[831px] bg-[#dde6ec]"
      />

      {/* Delivery Centers section */}
      <div className="absolute w-[129px] top-[63px] left-[939px] font-normal text-black text-base tracking-[0] leading-5 whitespace-nowrap">
        Delivery Centers
      </div>

      {deliveryCenters.map((center, index) => (
        <React.Fragment key={index}>
          <div
            className={`absolute w-[86px] top-[${center.top}] left-[939px] font-normal text-[#00b2a9] text-sm tracking-[0] leading-5 whitespace-nowrap`}
          >
            {center.name}
          </div>
          <div
            className={`absolute w-[231px] top-[${center.addressTop}] left-[939px] font-normal text-black text-sm tracking-[0] leading-7`}
          >
            {center.address.map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < center.address.length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
        </React.Fragment>
      ))}

      {/* Offices section */}
      <div className="absolute w-14 top-[63px] left-[1273px] font-normal text-black text-base tracking-[0] leading-5 whitespace-nowrap">
        Offices
      </div>

      {offices.map((office, index) => (
        <React.Fragment key={index}>
          <div
            className={`absolute w-[65px] top-[${office.top}] left-[1273px] font-normal text-[#00b2a9] text-sm tracking-[0] leading-5 whitespace-nowrap`}
          >
            {office.name}
          </div>
          <div
            className={`absolute w-[359px] top-[${office.addressTop}] left-[1273px] font-normal text-black text-sm tracking-[0] leading-7`}
          >
            {office.address.map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < office.address.length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
        </React.Fragment>
      ))}

      {/* Horizontal separator */}
      <Separator className="w-[1344px] top-[476px] left-72 bg-[#dde6ec] absolute h-px" />

      {/* Key services section */}
      <div className="w-[90px] top-[496px] left-72 text-black text-xs tracking-[0] leading-5 absolute font-medium whitespace-nowrap">
        Key Services →
      </div>

      {keyServices.map((service, index) => (
        <div
          key={index}
          className="inline-flex flex-col h-5 items-start absolute top-[497px] left-[{service.left}]"
        >
          <div className="relative w-fit mt-[-1.00px] font-medium text-black text-xs leading-5 tracking-[0] whitespace-nowrap">
            {service.text}
          </div>
        </div>
      ))}

      {/* Footer section */}
      <div className="absolute w-[248px] top-[536px] left-72 font-medium text-black text-xs tracking-[0] leading-5 whitespace-nowrap">
        © 2005-2025 STX Next, All rights reserved
      </div>

      <div className="inline-flex flex-col h-5 items-start absolute top-[537px] left-[1436px]">
        <div className="relative w-fit mt-[-1.00px] font-medium text-black text-xs leading-5 tracking-[0] whitespace-nowrap">
          Cookies policy
        </div>
      </div>

      <div className="inline-flex flex-col h-5 items-start absolute top-[537px] left-[1552px]">
        <div className="relative w-fit mt-[-1.00px] font-medium text-black text-xs leading-5 tracking-[0] whitespace-nowrap">
          Privacy policy
        </div>
      </div>
    </div>
  );
};
