import SingularEventPageContent from "@/components/core/eventpage/SingularEventPageContent";
import React from "react";

export default async function SingularEventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const slug = (await params).id;
  return (
    <div>
      <SingularEventPageContent id={slug} />
    </div>
  );
}
