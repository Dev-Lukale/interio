import React from "react";
import { Wrapper } from "../Wrapper";
import { ShoppingBagIcon } from "lucide-react";
import Image from "next/image";

type Props = {};

const ChooseUs = (props: Props) => {
  return (
    <section className="h-[100svh] py-14 text-primary  w-full ">
      <div className="flex flex-row  h-full relative  w-[90vw] float-right">
        {/* left */}
        <div className="flex-1 flex-col items-start justify-evenly space-y-8 w-[80%] pl-[.2%]">
          <h2 className="mt-8 text-lg font-bold tracking-wide sm:text-xl lg:text-3xl text-secondary">
            Why Choose Us
          </h2>
          <p className="line-clamp-2 w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo a
            explicabo corporis in esse pariatur earum necessitatibus, rem quidem
            eveniet eaque voluptas nobis saepe ad facilis obcaecati blanditiis
            sed! Adipisci?
          </p>
          <div className="w-full  grid grid-col-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-4  ">
            <IconCrad
              Icon={ShoppingBagIcon}
              title="Sample Title"
              content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo a
            explicabo corporis in esse pariatur earum necessitatibus, rem quidem
            eveniet eaque voluptas nobis saepe ad facilis obcaecati blanditiis
            sed! Adipisci?"
            />
            <IconCrad
              Icon={ShoppingBagIcon}
              title="Sample Title"
              content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo a
            explicabo corporis in esse pariatur earum necessitatibus, rem quidem
            eveniet eaque voluptas nobis saepe ad facilis obcaecati blanditiis
            sed! Adipisci?"
            />
            <IconCrad
              Icon={ShoppingBagIcon}
              title="Sample Title"
              content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo a
            explicabo corporis in esse pariatur earum necessitatibus, rem quidem
            eveniet eaque voluptas nobis saepe ad facilis obcaecati blanditiis
            sed! Adipisci?"
            />
            <IconCrad
              Icon={ShoppingBagIcon}
              title="Sample Title"
              content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo a
            explicabo corporis in esse pariatur earum necessitatibus, rem quidem
            eveniet eaque voluptas nobis saepe ad facilis obcaecati blanditiis
            sed! Adipisci?"
            />
          </div>
        </div>
        {/* right */}
        <div className="flex-1 h-full flex-col flex py-16   pl-14 group  ">
          <div className="  h-full relative ">
            <div className="dotted-div absolute -top-[8%] -left-[5%] group-hover:scale-105 transition-all duration-200 ease-in-out group-hover:-rotate-2"></div>
            <Image
              fill
              alt="NextUI hero Image with delay"
              className="rounded aspect-square z-[999]  object-cover relative group-hover:scale-95 group-hover:rotate-1 group-hover:blur-[.5px] transition-all duration-200 ease-in-out"
              src="/slider1.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;

export type IconCradProps = {
  Icon: React.ComponentType<any>;
  title: string;
  content: string;
};
const IconCrad = ({ Icon, title, content }: IconCradProps) => {
  return (
    <div className="flex flex-col items-start space-y-3 p-4 shadow-md rounded ">
      <Icon className="shadow-sm" />
      <h3 className="font-semibold">{title}</h3>
      <p className="line-clamp-3 text-sm">{content}</p>
    </div>
  );
};
