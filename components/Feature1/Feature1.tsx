import React from "react";

import Image from "next/image";

import CustomButton from "../Button";
import { Wrapper } from "../Wrapper";

type Props = {};

const Feature1 = (props: Props) => {
  return (
    <section className="h-[100svh] py-20 text-primary  w-full ">
      <Wrapper className="flex flex-row   h-full ">
        <div className=" w-2/3 grid grid-cols-2 grid-rows-3 relative gap-x-2">
          <div className="row-start-1 row-end-4 col-span-1 relative ">
            <Image
              src="/slider2.jpg"
              fill
              alt="gallery image"
              className="object-cover"
            />
          </div>
          <div className="row-start-1 row-end-3  col-span-1 relative">
            <Image
              src="/slider1.jpg"
              fill
              alt="gallery image"
              className="object-cover"
            />{" "}
          </div>
          <div className="absolute -bottom-12 w-[60%] h-[37%] bg-white shadow-md  rounded  right-0 px-8 py-8 space-y-8">
            <p className="border-l-4  border-secondary px-4 text-primary/80 line-clamp-3">
              &quot; Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Itaque delectus ab corporis facilis quae incidunt architecto
              dolorem modi &quot;
            </p>
            <div className="flex flex-row space-x-4 items-center ">
              <Image
                src="/slider1.jpg"
                height={40}
                width={40}
                alt="gallery image"
                className="object-cover rounded-full"
              />
              <span className="text-primary/80">Jane Kaluki</span>
            </div>
          </div>
        </div>
        <div className=" w-1/3 pl-8 space-y-8 self-center">
          <h2 className="mt-8 text-lg font-bold tracking-wide sm:text-xl lg:text-2xl">
            Award Winning <br />
            Interior
            <span className="text-secondary ml-2">Design Studio</span>
          </h2>
          <div className="text-justify space-y-4">
            <p className="text-base ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat a
              quam reprehenderit consectetur fuga laborum, repellat corrupti
              iste. Ducimus placeat similique in ex aspernatur, nemo delectus
              nam magni temporibus sequi!
            </p>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat a
              quam reprehenderit consectetur fuga laborum, repellat corrupti
              iste. Ducimus placeat similique in ex aspernatur, nemo delectus
              nam magni temporibus sequi!
            </p>
          </div>
          <CustomButton text="Read More" href="/about" />
        </div>
      </Wrapper>
    </section>
  );
};

export default Feature1;
