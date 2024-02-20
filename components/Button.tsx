
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

export type CustomButtonProps = {
    href: string,
    text:string
};

const CustomButton = ({ href, text }: CustomButtonProps) => {
  return (
    <Button
      asChild
      variant="default"
      size="lg"
      className="bg-accent rounded font-semibold pl-4 py-1 pr-1 hover:bg-accent/80 transition-all duration-150 ease-in-out"
    >
      <Link href={href} className="space-x-2 group">
              <span>{ text}</span>

        <span className="bg-background text-primary h-full w-8 flex items-center justify-center group-hover:bg-background/80 ">
          <ArrowRightIcon className="h-4 group-hover:translate-x-2 transition-all duration-150 ease-in-out" />
        </span>
      </Link>
    </Button>
  );
};

export default CustomButton