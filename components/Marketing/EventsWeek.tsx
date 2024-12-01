import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Events } from "@/Data";

const EventsWeek = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center">
      <Carousel className=" rounded-xl w-[70%] ">
        <CarouselContent className=" w-full">
          {Events.map((item, i) => (
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
              <div className="bg-background/50 absolute top-0 left-0 w-full h-full z-10 flex items-end justify-end flex-col  ">
                <div className=" text-xl px-10  font-bold">{item.title}</div>
                <div></div>
                <div className=" max-w-md text-sm text-end p-2 px-10">
                  {item.desc}
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
