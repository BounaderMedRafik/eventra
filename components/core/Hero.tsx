import { events } from "@/db/data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SearchComponent } from "./Nav";

const Hero = () => {
  return (
    <div className=" min-h-[70vh] p-5 pt-14 flex items-center justify-center flex-col bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] ">
      <div className=" text-3xl  font-semibold">
        <span className=" text-primary">Eventra</span>: All events In One Place
      </div>
      <div className=" text-xs text-start mt-2 opacity-75 max-w-lg md:text-center">
        Eventra is a one-stop-shop for all your event management needs. It
        offers a comprehensive suite of services to help you plan, execute, and
        promote your events.
      </div>

      <div className=" mt-4 w-full max-w-screen-md">
        <SearchingBar />
      </div>

      <div className="w-full max-w-screen-md">
        <StuffOfHero />
      </div>
    </div>
  );
};

const SearchingBar = () => {
  return <SearchComponent type="long" />;
};

const StuffOfHero = () => {
  return (
    <div className=" p-2 mt-4 grid  grid-cols-1 md:grid-cols-4 w-full gap-2 ">
      <div className="col-span-2 hover:-translate-y-1.5 transition-all duration-300 group h-48 rounded-lg overflow-hidden">
        <Link href={`/events/${events[events.length - 1].id}`}>
          <div className=" relative h-full">
            <div className=" absolute top-1 left-1.5 z-30 mt-1 w-fit px-2 py-0.5 text-xs bg-primary text-background rounded-md">
              Latest Event!
            </div>
            <img
              className=" absolute top-0 z-10 group-hover:opacity-60 transition-all duration-300 ease-in-out  opacity-50 left-0 h-full w-full"
              src={events[events.length - 1].ImageOfEvent}
            />
            <div className=" relative z-20 p-3 h-full flex items-start flex-col justify-end">
              <div className=" text-lg font-semibold">
                {events[events.length - 1].title}
              </div>
              <div className=" text-xs  opacity-75  line-clamp-2 ">
                {" "}
                {events[events.length - 1].desc}
              </div>
              <div className=" mt-1 w-fit px-2 py-0.5 text-xs bg-background rounded-md">
                {events[events.length - 1].typeOfEvent}
              </div>
            </div>
          </div>
        </Link>
      </div>

      <Link href={"#EventsWeek"}>
        <div className=" col-span-1 relative h-48 hover:-translate-y-1.5 transition-all duration-300">
          <img
            className="  absolute top-0 left-0 w-full h-full object-cover rounded-lg overflow-hidden z-10"
            src="https://www.adobe.com/content/dam/www/us/en/events/overview-page/eventshub_evergreen_opengraph_1200x630_2x.jpg"
            alt=""
          />
          <div className=" relative z-20 bg-background/70 p-3 h-full flex items-start flex-col justify-end">
            <div className=" text-sm font-semibold">events Of The Week</div>

            <div className=" mt-1 w-fit px-2 py-0.5 text-xs bg-background rounded-md">
              <div className="flex items-center gap-2">
                <div>Check events</div>
                <div>
                  <ArrowUpRight size={13} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link href={"/"}>
        <div className=" col-span-1 relative h-48 hover:-translate-y-1.5 transition-all duration-300">
          <img
            className="  absolute top-0 left-0 w-full h-full object-cover rounded-lg overflow-hidden z-10"
            src="https://images.pexels.com/photos/6892902/pexels-photo-6892902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className=" relative z-20 bg-background/70 p-3 h-full flex items-start flex-col justify-end">
            <div className=" text-sm font-semibold">events TimeTable</div>

            <div className=" mt-1 w-fit px-2 py-0.5 text-xs bg-background rounded-md">
              <div className="flex items-center gap-2">
                <div>Check</div>
                <div>
                  <ArrowUpRight size={13} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Hero;
