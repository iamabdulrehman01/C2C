import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gradient" | "white" | "glass" | "outline" | "link";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "gradient",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "rounded-xl font-semibold transition duration-200 text-center inline-flex items-center justify-center gap-2";

  const variants = {
    gradient:
      "bg-gradient-to-r from-brand-500 to-accent-500 text-white shadow-glow hover:opacity-95",
    white: "bg-white text-brand-950 hover:bg-brand-50 active:bg-brand-100",
    glass: "glass text-white hover:bg-white/10",
    outline: "border border-white/30 text-white hover:bg-white/10",
    link: "text-white/80 hover:text-white font-normal text-sm p-0 transition",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
