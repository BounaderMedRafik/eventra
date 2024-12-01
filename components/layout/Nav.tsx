import { ArrowUpRight, Search } from "lucide-react";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import LOGO from "../brand/LOGO";

const navLinks = [
  {
    title: "about",
    href: "/about",
  },
  {
    title: "events",
    href: "/events",
  },
  {
    title: "Articles",
    href: "/events",
  },
];

const Nav = () => {
  return (
    <div className=" w-full  fixed border-b bg-background z-50 border-b-black/25 top-0 left-0 flex items-center justify-center">
      <div className=" max-w-screen-lg w-full flex items-center justify-between py-2 px-3.5">
        <div>
          <LOGO />
        </div>
        <div className=" flex items-center gap-2">
          <div>
            <Button variant={"ghost"} size={"icon"}>
              <Search size={15} />
            </Button>
          </div>

          <div className="flex items-center gap-0.5">
            {navLinks.map((item, i) => (
              <div key={i}>
                <Link
                  className={buttonVariants({
                    variant: "link",
                    size: "sm",
                  })}
                  href={item.href}
                >
                  <div>{item.title}</div>
                  <div>
                    <ArrowUpRight size={13} />
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div>
            <Link
              className={buttonVariants({
                variant: "default",
                size: "sm",
              })}
              href={"/signup"}
            >
              Sign Up!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
