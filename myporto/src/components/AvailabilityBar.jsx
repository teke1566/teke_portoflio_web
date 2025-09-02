import React from "react";
import { useContent } from "../content/ContentContext";

const AvailabilityBar = () => {
  const { content } = useContent();
  const a = content?.availability;
  if (!a?.status) return null;

  return (
    <div className="w-full bg-blue-600/15 border-b border-blue-500/30 backdrop-blur py-3">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4">
        <span className="text-sm md:text-base text-blue-200">{a.status}</span>
        {a.calendly && (
          <a
            href={a.calendly}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-md bg-blue-500 text-white text-sm hover:bg-blue-600 transition"
          >
            {a.ctaLabel || "Book a call"}
          </a>
        )}
      </div>
    </div>
  );
};

export default AvailabilityBar;
