import React from "react";

interface BadgeProps {
  variant?: "glass" | "solid" | "subtle";
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ variant = "glass", children, className = "" }: BadgeProps) {
  const baseStyles = "inline-flex items-center gap-2 rounded-full text-xs font-semibold";
  const variants = {
    glass: "glass px-4 py-1.5 text-white/80",
    solid: "bg-accent-500 text-white px-3 py-1",
    subtle: "text-brand-400 uppercase tracking-[0.2em] font-medium text-xs",
  };

  return <div className={`${baseStyles} ${variants[variant]} ${className}`}>{children}</div>;
}
