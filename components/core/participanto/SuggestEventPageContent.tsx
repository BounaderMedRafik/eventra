"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SuggestEventPageContent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    // Here you can add your form submission logic
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-lg p-5 pb-44 mx-auto pt-24">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-2xl font-semibold font-mono">
            Participation Area
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
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>

      {isSubmitted && (
        <div className="mt-4 text-green-600">
          Success! Your event has been submitted.
        </div>
      )}
    </div>
  );
};

export default SuggestEventPageContent;
