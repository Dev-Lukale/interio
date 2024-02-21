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
    "flex items-center justify-evenly !last:>div:text-accent last:border-accent",
    className
  );
  return (
    <div className={horizontalIconListClassName}>
      {items.map((item: IconWithNameProps, index: number) => {
        return (
          <React.Fragment key={index}>
            <IconWithName Icon={item.Icon} title={item.title} />
            {index !== items.length - 1 && (
              <Divider
                orientation="horizontal"
                className="w-16 h-1 last:>div:text-accent"
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default HorizontalIconList;
