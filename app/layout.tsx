import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Campus to Corporate — Student Success Platform",
  description:
    "Career mentorship, placement readiness, and interview training that takes students from campus to corporate.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-display antialiased">{children}</body>
    </html>
  );
}
