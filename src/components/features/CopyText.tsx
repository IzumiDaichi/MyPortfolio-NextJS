"use client";

import { useState } from "react";

interface CopyTextProps {
  text: string;
  hoverText?: string;
}

export default function CopyText({ text, hoverText = "Copy to Clipboard" }: CopyTextProps) {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p
        onClick={handleCopy}
        className="hyperlink text-[#EB9730] hover:text-[#ffa538]"
      >
        {copied ? text : text}
      </p>

      {/* Hover card */}
      {isHovered && !copied && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1 text-sm text-white bg-gray-800 rounded-md shadow-md whitespace-nowrap transition-opacity duration-200">
          {hoverText}
        </div>
      )}

      {/* Copy confirmation */}
      {copied && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1 text-sm text-white bg-gray-800 rounded-md shadow-md whitespace-nowrap transition-opacity duration-200">
          copied!
        </div>
      )}
    </div>
  );
}
