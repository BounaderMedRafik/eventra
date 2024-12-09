import { events } from "@/db/data";
import Link from "next/link";
import React from "react";

const EventsPageContent = () => {
  return (
    <div className=" max-w-screen-lg mx-auto pt-24 pb-24">
      <div>
        <div className=" text-2xl font-semibold">All Events</div>
        <div className=" w-96 text-sm opacity-75">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iure
          inventore eveniet aperiam doloribus.
        </div>
      </div>

      <div className=" grid grid-cols-2 gap-4 mt-10">
        {events
          .slice()
          .reverse()
          .map((item, i) => (
            <Link
              className=" hover:opacity-75 transition-all duration-300 "
              href={`/events/${item.id}`}
              key={i}
            >
              <div className=" w-full h-64">
                <img
                  className=" h-full w-full object-cover"
                  src={item.ImageOfEvent}
                />
              </div>
              <div className=" mt-4">
                <div>
                  <div className=" text-sm opacity-50">{item.date}</div>
                  <div className=" text-2xl font-semibold">{item.title}</div>
                  <div className=" w-96 text-sm opacity-75">{item.desc}</div>
                  <div className=" bg-foreground text-background px-4 py-0.5 text-xs w-fit rounded-full mt-3">
                    {item.typeOfEvent}
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default EventsPageContent;
