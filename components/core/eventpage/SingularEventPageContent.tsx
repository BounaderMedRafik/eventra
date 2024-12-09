"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { events } from "@/db/data";
import { Info } from "lucide-react";
import { useState } from "react";

const SingularEventPageContent = ({ id }: { id: string }) => {
  // Find the event that matches the provided id
  const theEvent = events.find((event) => event.id === id);

  // Check if the event exists
  if (!theEvent) {
    return <div className="text-center text-red-500">Event not found</div>;
  }

  return (
    <div className="max-w-screen-lg pt-24 mx-auto px-4">
      <div className="w-full h-96 mb-6">
        <img
          src={theEvent.ImageOfEvent}
          alt={theEvent.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold ">{theEvent.title}</h1>
        <div className="flex items-center gap-0.5">
          <PARTICAPATION />
          <RESERVATION />
        </div>
      </div>
      <p className="text-gray-600 mb-4">{theEvent.desc}</p>
      <div className="text-gray-500 mb-4">
        <p>
          <strong>Date:</strong> {theEvent.date}
        </p>
        <p>
          <strong>Location:</strong> {theEvent.location}
        </p>
        <p>
          <strong>Type of Event:</strong> {theEvent.typeOfEvent}
        </p>
      </div>
      <h2 className="text-2xl font-semibold mb-2">Participants</h2>
      <ul className="list-disc list-inside mb-4">
        {theEvent.participant.map((participant, index) => (
          <li key={index}>
            {participant.name} - <em>{participant.category}</em>
          </li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Event Images</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {theEvent.Images.map((image, index) => (
          <div key={index} className="h-48 overflow-hidden rounded-lg">
            <img
              src={image}
              alt={`Event image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const RESERVATION = () => {
  const [plan, setPlan] = useState("stand");
  const [reserved, setReserved] = useState(false);

  const handleReserve = () => {
    setReserved(true);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            size={"sm"}
            variant={"default"}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            <div className="flex items-center gap-2">
              <div>Book a Reservation</div>
              <div>
                <Info size={13} />
              </div>
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-white rounded-lg shadow-md p-4">
          {reserved ? (
            <div>
              <DialogHeader className="flex justify-between items-center mb-4">
                <DialogTitle className="text-lg font-bold">
                  Reservation Successful
                </DialogTitle>
              </DialogHeader>
              <p className="text-gray-600 mb-4 flex items-center justify-center">
                Your reservation has been successfully made.
              </p>
              <div className=" mt-7 flex w-full justify-end ">
                <Button size={"sm"} onClick={() => setReserved(false)}>
                  Back
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <DialogHeader className="flex justify-between items-center mb-4">
                <DialogTitle className="text-lg font-bold">
                  Book a Reservation
                </DialogTitle>
              </DialogHeader>
              <div className="mb-4">
                <Label className="block mb-2">Card Information</Label>
                <Input
                  type="number"
                  className="w-full p-2  text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="0000 - XXXX - XXXX - XXXX"
                />
              </div>
              <div className="mb-4">
                <Label className="block mb-2">Select a Plan</Label>
                <div className="flex gap-2">
                  <Button
                    size={"sm"}
                    className={`${
                      plan === "stand"
                        ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded"
                    }`}
                    onClick={() => setPlan("stand")}
                  >
                    Standard Plan (400da)
                  </Button>
                  <Button
                    size={"sm"}
                    className={`${
                      plan === "premium"
                        ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded"
                    }`}
                    onClick={() => setPlan("premium")}
                  >
                    Premium Plan (800da)
                  </Button>
                </div>
              </div>
              <div className=" mt-7 flex w-full justify-end ">
                <Button size={"sm"} onClick={handleReserve}>
                  Reserve Now!
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

const PARTICAPATION = () => {
  const [participationType, setParticipationType] = useState("");
  const [participationMethod, setParticipationMethod] = useState("");
  const [participated, setParticipated] = useState(false);

  const handleParticipate = () => {
    setParticipated(true);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button size={"sm"} variant={"outline"}>
            <div className="flex items-center gap-2">
              <div>Participate</div>
              <div>
                <Info size={13} />
              </div>
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-white rounded-lg shadow-md p-4">
          {participated ? (
            <div>
              <DialogHeader className="flex justify-between items-center mb-4">
                <DialogTitle className="text-lg font-bold">
                  Participation Successful
                </DialogTitle>
              </DialogHeader>
              <p className="text-gray-600 mb-4 flex items-center justify-center">
                Your participation has been successfully registered.
              </p>
              <div className=" mt-7 flex w-full justify-end ">
                <Button size={"sm"} onClick={() => setParticipated(false)}>
                  Back
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <DialogHeader className="flex justify-between items-center mb-4">
                <DialogTitle className="text-lg font-bold">
                  Participate
                </DialogTitle>
              </DialogHeader>
              <div className="mb-4">
                <Label className="block mb-2">
                  What will you participate with?
                </Label>
                <Input
                  type="text"
                  className="w-full p-2  text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="e.g. Music, Help, Devices, Services. ect"
                  value={participationMethod}
                  onChange={(e) => setParticipationMethod(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <Label className="block mb-2">Type of Participation</Label>
                <div className="flex gap-2">
                  <Button
                    size={"sm"}
                    className={`${
                      participationType === "individual"
                        ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded"
                    }`}
                    onClick={() => setParticipationType("individual")}
                  >
                    Individual
                  </Button>
                  <Button
                    size={"sm"}
                    className={`${
                      participationType === "team"
                        ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded"
                    }`}
                    onClick={() => setParticipationType("team")}
                  >
                    Team
                  </Button>
                </div>
              </div>
              <div className=" mt-7 flex w-full justify-end ">
                <Button size={"sm"} onClick={handleParticipate}>
                  Participate Now!
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SingularEventPageContent;
