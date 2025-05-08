// Corrected Layout Component (app/layout.tsx or app/[folder]/layout.tsx)
import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";

export default function Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <main className="font-work-sans">
      <Navbar />
      {children}
    </main>
  );
}
