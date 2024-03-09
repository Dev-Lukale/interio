import React from "react";
import IconWithName, { IconWithNameProps } from "./IconWithName";
import { Divider } from "@nextui-org/react";

import { cn } from "@/lib/utils";

export type HorizontalIconListProps = {
  items: IconWithNameProps[];
  className?: string;
};

const HorizontalIconList = ({ items, className }: HorizontalIconListProps) => {
  const horizontalIconListClassName = cn(
    "flex items-center justify-center w-full",
    className
  );
  return (
    <div className={horizontalIconListClassName}>
      {items.map((item: IconWithNameProps, index: number) => {
        return (
          <React.Fragment key={index}>
            <IconWithName Icon={item.Icon} title={item.title} borderColor={item.borderColor} />
            {index !== items.length - 1 && (
              <Divider
                orientation="horizontal"
                className="w-32 m-0 p-0"
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default HorizontalIconList;
