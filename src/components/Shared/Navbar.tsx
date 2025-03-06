"use client";

import React from "react";
import { FloatingNav } from "../ui/floating-navbar";

export function Navbar() {
  // Navigation items
  const navItems = [
    { name: "Projects", link: "#projects" },
    { name: "About", link: "#about" },
    { name: "Education", link: "#education" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="relative w-full">
      {/* Floating navigation component */}
      <FloatingNav navItems={navItems} />
    </div>
  );
}
