"use client";
import { events } from "@/db/data";
import { ArrowUpRight, Menu, Search, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { usePathname } from "next/navigation";
import EVENTRA from "./brand/EVENTRA";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const navLinks = [
  {
    title: "about",
    href: "/about",
  },
  {
    title: "events",
    href: "/events",
  },
];

const Nav = () => {
  const path = usePathname();
  const [role, setRole] = useState("normal");

  const handleRoleChange = () => {
    if (role === "normal") {
      setRole("participant");
    } else if (role === "participant") {
      setRole("admin");
    } else {
      setRole("normal");
    }
  };

  const getNavLinks = () => {
    if (role === "normal") {
      return navLinks;
    } else if (role === "participant") {
      return [
        ...navLinks,
        { title: "Participant Area", href: "/participant-area" },
      ];
    } else {
      return [...navLinks, { title: "Dashboard", href: "/dashboard" }];
    }
  };

  return (
    <div className=" w-full fixed top-0 left-0  md:py-5 py-0 z-50 flex items-center justify-center">
      <div className=" max-w-4xl bg-background w-full mx-auto flex items-center justify-between border px-4 py-1.5 md:rounded-md rounded-none ">
        <div className=" font-semibold text-sm opacity-75  cursor-default">
          <EVENTRA />
        </div>

        <div className="flex items-center gap-0.5">
          <div className=" hidden md:flex px-4">
            {getNavLinks().map((item, i) => (
              <Link
                key={i}
                className={buttonVariants({
                  variant: "link",
                  size: "sm",
                })}
                href={item.href}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className=" block md:hidden">
            <NavMobile role={role} />
          </div>
          {path != "/signup" && (
            <div>
              <Link
                className={buttonVariants({
                  variant: "default",
                  size: "sm",
                })}
                href="/signup"
              >
                <div className="flex items-center gap-2">
                  <div>Sign up</div>
                  <div>
                    <ArrowUpRight size={12} />
                  </div>
                </div>
              </Link>
            </div>
          )}
          <div>
            <SearchComponent type="button" />
          </div>
          <div>
            <Button
              size={"icon"}
              variant={"outline"}
              onClick={handleRoleChange}
            >
              {role === "normal" ? (
                <User size={13} />
              ) : role === "participant" ? (
                <FaHandHoldingHeart size={13} />
              ) : (
                <MdOutlineAdminPanelSettings size={13} />
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SearchComponent = ({ type }: { type: "long" | "button" }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(events.slice(-3));

  const handleSearch = (event: {
    target: {
      value: string;
    };
  }) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value) {
      const filtered = events.filter((event) =>
        event.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredEvents(filtered);
    } else {
      setFilteredEvents(events);
    }
  };
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          {type == "button" ? (
            <Button variant={"outline"} size={"icon"}>
              <Search size={13} />
            </Button>
          ) : (
            <div className=" w-full">
              <div className=" w-full py-3 flex items-center justify-between px-5 bg-foreground/5 rounded-lg hover:opacity-75 transition-all duration-300 cursor-pointer border border-foreground/10 text-sm">
                <div className=" opacity-75">Search Now ...</div>
                <div>
                  <Search size={14} />
                </div>
              </div>
            </div>
          )}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Search For Events</DialogTitle>
          </DialogHeader>
          <Input
            placeholder="Write Event Title ..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <div>
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, i) => (
                <div key={i}>
                  <Link
                    className=" hover:-translate-y-3 transition-all duration-200 hover:opacity-75"
                    href={`/events/${event.id}`}
                  >
                    <div className=" mt-2">
                      <div className="flex gap-3  items-center justify-start">
                        <div className="relative w-24 h-24 flex-shrink-0">
                          <img
                            className="absolute rounded-lg left-0 top-0 w-full h-full object-cover object-center transition duration-50"
                            loading="lazy"
                            src={event.ImageOfEvent}
                          />
                        </div>

                        <div>
                          <div className="text-gray-700 text-xs">
                            {event.date}
                          </div>

                          <div className="text-base font-bold">
                            {event.title}
                          </div>

                          <div className="text-gray-500 text-xs">
                            {event.desc}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className=" py-20 flex w-full justify-center items-center text-xs opacity-75">
                There&apos;s Nothing To Show...
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const NavMobile = ({ role }: { role: string }) => {
  const getNavLinks = () => {
    if (role === "normal") {
      return navLinks;
    } else if (role === "participant") {
      return [
        ...navLinks,
        { title: "Participant Area", href: "/participant-area" },
      ];
    } else {
      return [...navLinks, { title: "Dashboard", href: "/dashboard" }];
    }
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"outline"} size={"icon"}>
            <Menu size={13} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {getNavLinks().map((item, i) => (
            <div key={i}>
              <DropdownMenuItem>
                <Link href={item.href}>{item.title}</Link>
              </DropdownMenuItem>
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Nav;
