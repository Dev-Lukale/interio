import { cn } from "@/lib/utils";

export function Wrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const wrapperClassName = cn("w-[80vw] mx-auto",className);

  return <div className={wrapperClassName}>{children}</div>;
}
