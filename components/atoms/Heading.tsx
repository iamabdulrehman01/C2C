import React from "react";
import Badge from "./Badge";

interface HeadingProps {
  subtitle?: string;
  title: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function Heading({ subtitle, title, align = "left", className = "" }: HeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`${alignment} ${className}`}>
      {subtitle && (
        <Badge variant="subtle" className="mb-3">
          {subtitle}
        </Badge>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mt-1">
        {title}
      </h2>
    </div>
  );
}
