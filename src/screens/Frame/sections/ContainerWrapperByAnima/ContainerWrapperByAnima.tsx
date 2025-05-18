import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContainerWrapperByAnima = (): JSX.Element => {
  // Team members data for mapping
  const teamMembers = [
    {
      id: 1,
      name: "Łukasz Tuszyński",
      title: "HEAD OF BACKEND",
      image: "/lukasz-tuszynski-expert-stx-graphics.png",
      bio: "An experienced software development manager, proud Management 3.0 evangelist, and Agile practitioner. His core skills include business relationship management and process optimization.",
    },
    {
      id: 2,
      name: "Paweł Kulpa",
      title: "HEAD OF JS",
      image: "/pawel-kulpa-expert-stx-graphics.png",
      bio: "A seasoned IT professional with over 15 years of experience in development and management. He believes in transparency and trust, which lay a solid foundation for building a collaborative space and fostering effective team and portfolio development.",
    },
    {
      id: 3,
      name: "Bohdan Masliannykov",
      title: "JAVASCRIPT DEVELOPER",
      image:
        "/bohdan-masliannykov-expert-javascript-developer-stx-graphics.png",
      bio: "A front-end developer with 8 years of experience in TypeScript, Angular, and React. Passionate about technology and creating a positive work environment, he has mentored at Girls.js and Klimaton dla Miast, where his team won first place for an eco-friendly project.",
    },
    {
      id: 4,
      name: "Grzegorz Długokęcki",
      title: "JAVASCRIPT DEVELOPER",
      image:
        "/grzegorz-dlugokecki-expert-javascript-developer-stx-graphics.png",
      bio: "A front-end developer with 6 years of experience in React, TypeScript, and Next.js, and extensive work with React Native for mobile apps. He's dedicated to modern web technologies, continuously improving his skills and contributing to innovative projects.",
    },
  ];

  return (
    <section className="flex items-start justify-center py-20 px-0 relative w-full bg-[#f4f4f4] border-b border-neutral-200">
      <div className="w-full max-w-[1440px] px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="font-['Figtree',Helvetica] font-normal text-[#232323] text-5xl text-center leading-[58px] mb-5">
            Meet your web app development experts
          </h2>
          <p className="font-['Inter',Helvetica] font-normal text-[#6d6d6d] text-xl text-center leading-7 max-w-[644px]">
            Get ready to meet the talented individuals who make it all happen.
            <br />
            Our team isn't just a group of skilled developers – they're the
            people
            <br />
            who turn your biggest challenges into great solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="border-none shadow-none">
              <CardContent className="p-0">
                <div
                  className="w-full h-[287px] mb-6 bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
                <h3 className="font-['Inter',Helvetica] font-medium text-[#232323] text-xl leading-7 mb-1">
                  {member.name}
                </h3>
                <p className="font-['Inter',Helvetica] font-medium text-[#757575] text-[10px] tracking-[1.00px] leading-[14px] mb-4">
                  {member.title}
                </p>
                <p className="font-['Inter',Helvetica] font-normal text-[#6d6d6d] text-base leading-[22px]">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
