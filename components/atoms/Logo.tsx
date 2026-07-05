import React from "react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div
      className={`flex items-center gap-2 font-bold text-white ${className}`}
    >
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 grid place-items-center text-white font-bold">
        C2C
      </div>
      <span>
        Campus<span className="text-brand-400">2</span>Corporate
      </span>
    </div>
  );
}
