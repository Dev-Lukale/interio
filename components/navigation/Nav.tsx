"use client";

import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { ShoppingCartIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Wrapper } from "../Wrapper";
const linkItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Explore Work",
    href: "/explore",
  },
  {
    name: "Shop",
    href: "/shop",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function MynavigationBar() {
  const pathname = usePathname();

  return (
    <header className=" font-[sans-serif] h-[10vh] sticky top-0  z-[999] w-full  flex  items-center text-primary  ">
      <Wrapper className="flex flex-row items-center h-full justify-between ">
        <Link className="font-bold capitalize" href="/">
          {/* <Logo /> */}Interio
        </Link>

        <nav className="flex space-x-8   items-center">
          {linkItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`hover:text-[#007bff]  block font-semibold text-[15px] ${
                pathname === item.href ? "text-primary-foreground" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Button
          asChild
          size="icon"
          variant="outline"
          className="border-secondary bg-secondary-foreground hover:bg-background text-secondary relative rounded"
        >
          <Link href="/cart">
            <span className="text-secondary font-semibold absolute -top-3 -right-3 bg-accent rounded-full h-6 w-6 flex items-center justify-center p-2">3</span>
            <ShoppingCartIcon  className="hover:scale-105"/>
          </Link>
        </Button>
      </Wrapper>
    </header>
  );
}
