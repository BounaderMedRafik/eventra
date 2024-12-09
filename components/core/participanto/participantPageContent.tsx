import { buttonVariants } from "@/components/ui/button";
import { events } from "@/db/data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const ParticipantPageContent = () => {
  return (
    <div className=" max-w-screen-lg p-5 pb-44 mx-auto pt-24 ">
      <div className=" flex flex-col md:flex-row items-start md:items-center justify-between">
        <div>
          <div className=" text-2xl font-semibold  font-mono">
            Participation Area
          </div>
          <div className=" text-xs  opacity-75 max-w-96 mb-6">
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
            href={"/participant-area/suggest-event"}
          >
            <div className=" flex items-center gap-2">
              <div> Suggest An Event</div>
              <div>
                <ArrowUpRight size={13} />
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className=" mt-10">
        <div className=" text-sm opacity-75">
          Events you currently Participated in
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {events
            .slice(2)
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
    </div>
  );
};

export default ParticipantPageContent;
