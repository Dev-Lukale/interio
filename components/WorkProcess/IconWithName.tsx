import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export type IconWithNameProps = {
  Icon: ReactNode;
  title: string;
  className?: string;
};

const IconWithName = ({ Icon, title, className }: IconWithNameProps) => {
  const IconWithName = cn(
    "flex flex-col items-center justify-center space-y-2 ",
    className
  );
  return (
    <div className={IconWithName}>
      {Icon}
      <div className="rounded-full bg-background w-4 h-4 flex items-center justify-center border-primary border-4"></div>
      <div className="mt-2 text-sm">{title}</div>
    </div>
  );
};

export default IconWithName;
