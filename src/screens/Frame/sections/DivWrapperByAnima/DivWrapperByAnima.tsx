import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

export const DivWrapperByAnima = (): JSX.Element => {
  // Form fields data
  const formFields = [
    { id: "firstName", label: "First name*", type: "text", width: "w-full" },
    { id: "lastName", label: "Last name*", type: "text", width: "w-full" },
    { id: "email", label: "Company email*", type: "email", width: "w-full" },
    {
      id: "message",
      label: "How can we help?*",
      type: "textarea",
      width: "w-full",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-[202px] py-[80px] md:py-[100px] px-4 md:px-0 w-full bg-[#f4f4f4] border-b border-neutral-200">
      {/* Left Column - Information */}
      <div className="relative w-full max-w-[490px]">
        <h2 className="text-[40px] font-normal text-[#232323] leading-[48px] font-['Figtree',Helvetica] mb-6">
          Let's talk
        </h2>

        <p className="text-2xl font-normal text-[#232323] leading-7 font-['Figtree',Helvetica] mb-8">
          Schedule a chat with Matthew and one of our
          <br />
          senior architects to discuss your web app
          <br />
          development needs.
        </p>

        <div className="mb-4">
          <h3 className="text-xl font-medium text-[#232323] leading-7 font-['Inter',Helvetica]">
            Matthew Harris
          </h3>
          <p className="text-[10px] font-medium text-[#6d6d6d] tracking-[1px] leading-3 font-['Inter',Helvetica]">
            VP OF SALES
          </p>
        </div>

        <div className="relative w-[234px] h-[297px] mt-8 ml-32">
          <div className="w-[234px] h-[297px] bg-[url(/matthew-harris-photo-in-circle.png)] bg-cover bg-[50%_50%]" />

          <div className="absolute top-60 left-0">
            <img
              className="w-[57px] h-[57px]"
              alt="Component"
              src="/component-1-16.svg"
            />
          </div>

          <div className="absolute top-[60px] left-48">
            <img
              className="w-8 h-16"
              alt="Component"
              src="/component-1-37.svg"
            />
          </div>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="flex flex-col w-full max-w-[652px] gap-6">
        {/* First and Last Name Row */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div className="flex flex-col gap-1 w-full md:w-1/2">
            <label className="font-['Inter',Helvetica] font-normal text-[#757575] text-base leading-5">
              First name*
            </label>
            <Input className="h-[50px] bg-[#e8e8e8] rounded border-none" />
          </div>
          <div className="flex flex-col gap-1 w-full md:w-1/2">
            <label className="font-['Inter',Helvetica] font-normal text-[#757575] text-base leading-5">
              Last name*
            </label>
            <Input className="h-[50px] bg-[#e8e8e8] rounded border-none" />
          </div>
        </div>

        {/* Email Field */}
        <div className="flex flex-col gap-1 w-full">
          <label className="font-['Inter',Helvetica] font-normal text-[#757575] text-base leading-5">
            Company email*
          </label>
          <Input className="h-[50px] bg-[#e8e8e8] rounded border-none" />
        </div>

        {/* Message Field */}
        <div className="flex flex-col gap-1 w-full pb-1">
          <label className="font-['Inter',Helvetica] font-normal text-[#757575] text-base leading-5">
            How can we help?*
          </label>
          <Textarea className="h-[104px] bg-[#e8e8e8] rounded border-none resize-none" />
        </div>

        {/* Privacy Policy */}
        <div className="w-full mb-2">
          <p className="font-['Inter',Helvetica] font-normal text-[#757575] text-xs leading-4">
            The controller of your data is STX Next S.A. The legal basis of the
            processing is our legitimate interest in
            <br />
            responding to your questions and requests submitted through the
            form. You have the right to object to the
            <br />
            processing, right to access the data, right to rectify or erase the
            data and also the right to restrict the data
            <br />
            processing. More information on the processing of personal data can
            be found in the{" "}
            <a
              href="#"
              className="font-normal text-black text-xs leading-4 underline"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>

        {/* Submit Button */}
        <Button className="w-[168px] h-[52px] bg-[#00b2a9] hover:bg-[#009b93] text-white rounded-[40px] font-['Inter',Helvetica] font-normal text-sm">
          SEND
        </Button>
      </div>
    </section>
  );
};
