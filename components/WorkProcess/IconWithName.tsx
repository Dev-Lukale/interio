import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export type IconWithNameProps = {
  Icon: ReactNode;
  title: string;
  className?: string;
  borderColor?: string;
};

const IconWithName = ({ Icon, title, className, borderColor }: IconWithNameProps) => {
  
  const IconWithName = cn(
    "flex flex-col items-center justify-center  space-y-2",
    className
  );
  return (
    <div className={IconWithName}>
      {Icon}
      <div
        className={`rounded-full w-4 h-4 flex items-center justify-center border-2 bg-background ${
          borderColor ? "border-accent" : "border-primary"
        } `}
      ></div>
      <div className={`mt-2 text-sm ${
          borderColor ? "text-accent" : ""}`}>{title}</div>
    </div>
  );
};

export default IconWithName;
