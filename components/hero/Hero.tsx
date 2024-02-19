"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Wrapper } from "../Wrapper";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import { SliderImages } from "@/lib/constants";

type Props = {};

const Hero = (props: Props) => {
  const [activeIndx, setActiveIndx] = useState(0);

 
  return (
    <section className=" h-[calc(100svh-10vh)] w-full pt-16  ">
      <div className="bg-secondary absolute top-0 left-0 w-[70vw] z-0 h-[100vh]"></div>
      <div className="bg-secondary-foreground absolute top-0 right-0 w-[30vw] z-0 h-[100vh]"></div>
      <Wrapper className="flex h-full ">
        <div className="w-2/5  z-10 flex flex-col justify-between  pb-2 ">
          <div className="flex flex-col items-start justify-evenly grow  py-4">
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
              <span className="capitalize">
                <span className="text-accent">Interio</span> The Modern
              </span>{" "}
              <br /> art of simplicity
            </h1>
            <p className="mt-8 text-md">
              We are tending to thousands of details it takes to create a custom
              home tailored to your lifestyle{" "}
            </p>
            <Button
              asChild
              variant="default"
              size="lg"
              className="bg-accent rounded font-semibold pl-4 py-1 pr-1 hover:bg-accent/80 transition-all duration-150 ease-in-out"
            >
              <Link href="/explore" className="space-x-2 group">
                <span>Explore More</span>

                <span className="bg-background text-primary h-full w-8 flex items-center justify-center group-hover:bg-background/80 ">
                  <ArrowRightIcon className="h-4 group-hover:translate-x-2 transition-all duration-150 ease-in-out" />
                </span>
              </Link>
            </Button>
          </div>

          <div className="flex flex-row gap-x-2 items-end ">
            {SliderImages.map((item, index) => {
              return (
                <Image
                  onClick={() => setActiveIndx(index)}
                  key={item.id}
                  height={index === activeIndx ? 200 : 100}
                  width={index === activeIndx ? 200 : 100}
                  alt="NextUI hero Image with delay"
                  className="rounded aspect-video object-cover"
                  src={item.src}
                />
              );
            })}
          </div>
        </div>

        {SliderImages.map((item, index) => {
          
          if (index === activeIndx) {
            const customClass =
              "absolute -top-[2rem] right-[4rem] z-[5] w-40  h-40 " + item.bgColor
            console.log(customClass);
            return (
              <div key={item.id} className="relative flex-1">
                <Image
                  key={item.id}
                  height={200}
                  width={700}
                  alt="NextUI hero Image with delay"
                  className="rounded aspect-video z-[999]  relative"
                  src={item.src}
                />
                <div
                  className='absolute -top-[2rem] right-[4rem] z-[5] w-40  h-40 h-100vh ' 
                  style={{ backgroundColor: `${item.bgColor}` }}
                ></div>
              </div>
            );
          };
          return null
        })}
      </Wrapper>
    </section>
  );
};

export default Hero;
