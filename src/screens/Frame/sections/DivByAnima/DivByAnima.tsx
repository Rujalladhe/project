import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Badge } from "../../../../components/ui/badge";

export const DivByAnima = (): JSX.Element => {
  // FAQ categories with their questions
  const faqCategories = [
    {
      id: "unique-services",
      label: "Unique services",
      questions: [
        "What makes your web app development services unique compared to regular web development?",
        "Are your web app development services suitable for building large-scale enterprise web applications?",
        "What are the benefits of outsourcing complex web app development to STX Next?",
      ],
    },
    {
      id: "technology-tools",
      label: "Technology & tools",
      questions: [
        "What technologies do you recommend for building scalable web applications?",
        "Can your team handle niche technologies specific to our web application's needs?",
        "Do your services include web application modernization for legacy systems?",
        "How do you handle web application integration with existing systems or third-party services?",
      ],
    },
    {
      id: "quality-security",
      label: "Quality & security",
      questions: [
        "How do you ensure quality and security in the web app development lifecycle?",
        "How do you ensure senior-level engineering expertise is applied to our web app development?",
        "How do you guarantee code quality and manage technical debt during web app development?",
        "During web application modernization, how do you handle existing technical debt?",
      ],
    },
    {
      id: "process-methodology",
      label: "Process & methodology",
      questions: [
        "How soon can we start our custom web app development project?",
        "What is your typical process for agile web app development?",
        "What happens if unexpected technical challenges arise during the web app development?",
        "How is our Intellectual Property protected during web application development?",
      ],
    },
    {
      id: "communication-management",
      label: "Communication & management",
      questions: [
        "How is communication managed for outsourced web app development projects, especially across time zones?",
        "How proactive is your team in suggesting improvements during web app development?",
        "How are your web app development teams structured?",
      ],
    },
  ];

  return (
    <section className="w-full bg-[#f4f4f4] py-16 px-4">
      
    </section>
  );
};
