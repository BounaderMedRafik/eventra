"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

const CreatingEventPageContent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-lg mx-auto pt-24 pb-44 p-5">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-2xl font-semibold font-mono">
            Create An Event{" "}
          </div>
          <div className="text-xs opacity-75 max-w-96 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            quod possimus distinctio magni!
          </div>
        </div>
      </div>
      <div className="mb-4">
        <Label>Title Of Event</Label>
        <Input type="text" placeholder="Enter the title of the event" />
      </div>
      <div className="mb-4">
        <Label>Type Of Event</Label>
        <Input type="text" placeholder="Enter the type of event" />
      </div>
      <div className="mb-4">
        <Label>Date Of Event</Label>
        <Input type="date" />
      </div>
      <div className="mb-4">
        <Label>Participants</Label>
        <Input type="text" placeholder="Enter participants' names" />
      </div>
      <div className="mb-4">
        <Label>Event Address</Label>
        <Input type="text" placeholder="Enter the event address" />
      </div>
      <div className="mb-4">
        <Label>Description Of Event</Label>
        <Input type="text" placeholder="Enter a description of the event" />
      </div>

      <div className="flex items-center justify-end">
        <div>
          <Button onClick={handleSubmit}>Create Event</Button>
        </div>
      </div>

      {isSubmitted && (
        <div className="mt-4 text-green-600">
          Success! Your event has been Created.
        </div>
      )}
    </div>
  );
};

export default CreatingEventPageContent;
