import { cn } from "@/lib/utils";

export function Wrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const wrapperClassName = cn("container", className);

  return <div className={wrapperClassName}>{children}</div>;
}
