import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { events } from "@/db/data";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "../ui/button";

const EventsWeek = () => {
  return (
    <div
      id="EventsWeek"
      className="min-h-[90vh] flex items-center justify-center overflow-hidden rounded-3xl"
    >
      <Carousel className=" rounded-xl w-[70%] ">
        <div className="flex items-center justify-between">
          <div>
            <div className=" text-2xl font-semibold  font-mono">
              Events Of The Week
            </div>
            <div className=" text-sm  opacity-75 max-w-96 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              quod possimus distinctio magni!
            </div>
          </div>
          <div>
            <Link
              className={buttonVariants({
                variant: "default",
                size: "sm",
              })}
              href={"/events"}
            >
              <div className="flex items-center gap-2">
                <div>Check All Events</div>
                <div>
                  <ArrowUpRight size={13} />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <CarouselContent className=" w-full rounded-xl">
          {events.map((item, i) => (
            <CarouselItem
              style={{
                backgroundImage: `url(${item.ImageOfEvent})`,
                backgroundSize: "cover", // Ensures the image covers the entire area
                backgroundPosition: "center", // Centers the image
                height: "100%", // Ensures the item has a height
                width: "100%", // Ensures the item has a width
                minHeight: "70vh",
              }}
              className=" relative"
              key={i}
            >
              <div className="bg-background/50 hover:bg-background/0 transition-all duration-300 absolute top-0 left-0 w-full h-full z-10 flex items-end justify-end flex-col  ">
                <div className=" px-10 text-sm opacity-75">{item.date}</div>
                <div className=" text-xl px-10  font-bold">{item.title}</div>
                <div className=" max-w-md text-sm text-end p-2 px-10">
                  {item.desc}
                </div>
                <div className="px-10 mb-5">
                  <Link
                    className={buttonVariants({
                      variant: "default",
                      size: "sm",
                    })}
                    href={`/events/${item.id}`}
                  >
                    <div className="flex items-center gap-2">
                      <div>Event&apos;s Details</div>
                      <div>
                        <ArrowUpRight size={13} />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default EventsWeek;
