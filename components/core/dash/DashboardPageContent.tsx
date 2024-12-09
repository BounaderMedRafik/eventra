"use client";
import { buttonVariants } from "@/components/ui/button";
import { events } from "@/db/data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const DashboardPageContent = () => {
  const [participatedEvents, setParticipatedEvents] = useState(
    events.slice(-3).reverse()
  );

  const handleAcceptEvent = (eventId: string) => {
    setParticipatedEvents(
      participatedEvents.filter((event) => event.id !== eventId)
    );
  };

  const handleDeclineEvent = (eventId: string) => {
    setParticipatedEvents(
      participatedEvents.filter((event) => event.id !== eventId)
    );
  };

  return (
    <div>
      <div className=" max-w-screen-lg mx-auto pt-24 pb-10 ">
        <div className=" flex items-center justify-between">
          <div>
            <div className=" text-2xl font-semibold  font-mono">Dashboard</div>
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
              href={"/dashboard/create-event"}
            >
              <div className=" flex items-center gap-2">
                <div> Create Event</div>
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
          <div className=" grid grid-cols-2 gap-4 mt-4">
            {participatedEvents.map((item, i) => (
              <div key={i}>
                <div className=" hover:opacity-75 transition-all duration-300 ">
                  <div className=" w-full h-64">
                    <img
                      className=" h-full w-full object-cover"
                      src={item.ImageOfEvent}
                    />
                  </div>
                  <div className=" mt-4">
                    <div>
                      <div className=" text-sm opacity-50">{item.date}</div>
                      <div className=" text-2xl font-semibold">
                        {item.title}
                      </div>
                      <div className=" w-96 text-sm opacity-75">
                        {item.desc}
                      </div>
                      <div className=" bg-foreground text-background px-4 py-0.5 text-xs w-fit rounded-full mt-3">
                        {item.typeOfEvent}
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex items-center justify-end gap-0.5 mt-2">
                  <button
                    className={buttonVariants({
                      variant: "default",
                      size: "sm",
                    })}
                    onClick={() => handleAcceptEvent(item.id)}
                  >
                    Accept Event
                  </button>
                  <button
                    className={buttonVariants({
                      variant: "destructive",
                      size: "sm",
                    })}
                    onClick={() => handleDeclineEvent(item.id)}
                  >
                    Decline Event
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPageContent;
