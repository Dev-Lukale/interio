import { WorkProcessSteps } from "@/constants";
import { Divider } from "@nextui-org/react";
import { Key } from "lucide-react";

import React, { ReactNode } from "react";
import HorizontalIconList from "./HorizontalIconList";
import Image from "next/image";

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
          <HorizontalIconList items={WorkProcessSteps} className=" h-[30%]" />
        </div>
        {/* right */}
        <div className="w-1/2 bg-green-400">yuu</div>
      </div>
    </section>
  );
};

export default WorkProcess;
