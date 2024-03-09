import { WorkProcessFeatures, WorkProcessSteps } from "@/constants";

import React, { ReactNode } from "react";
import HorizontalIconList from "./HorizontalIconList";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

type Props = {};

const WorkProcess = (props: Props) => {
  return (
    <section className="h-[100svh] py-14 text-primary  w-full ">
      <div className="flex flex-row  h-full relative  w-[90vw]">
        {/* left */}
        <div className="w-1/2 flex flex-col  ">
          <div className="relative w-full h-[70%]">
            <Image
              src="/slider2.jpg"
              fill
              alt="Workprocess steps"
              className="object-cover aspect-square"
            />
          </div>
          <HorizontalIconList
            items={WorkProcessSteps}
            className="w-full  h-[30%]"
          />
        </div>
        {/* right */}
        <div className="w-1/2 p-16">
          <div className="space-y-8">
            <h2 className="mt-8 text-lg font-bold tracking-wide sm:text-xl lg:text-3xl ">
              <span className="text-secondary">Our Work Process</span>
              <br />
              Makes Your Dreams True
            </h2>
            <div className=" space-y-4  text-justify">
              <Accordion
                type="single"
                collapsible
                className="w-full text-primary"
              >
                {WorkProcessFeatures.map((item, index) => (
                  <AccordionItem key={index} value={item.title}>
                    <AccordionTrigger className="font-semibold">{item.title}</AccordionTrigger>
                    <AccordionContent>{item.content}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
