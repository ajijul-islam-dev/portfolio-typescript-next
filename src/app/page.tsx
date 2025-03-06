"use client";
import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import { LightEffect } from "@/components/LightEffect/LightEffect";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import { Background } from "@/components/ui/Background";
import { TextGenerateEffect } from "@/components/ui/text-generate-Effect";
import { motion } from "framer-motion";
import { IoSettingsOutline } from "react-icons/io5";
import * as React from "react";

import { useTheme } from "next-themes";
import { IoIosArrowRoundUp } from "react-icons/io";
import Skills from "@/components/Skills/Skills";

import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

import Projects from "@/components/Projects/Projects";
import Footer from "@/components/Footer/Footer";
import Contacts from "@/components/Contacts/Contacts";
import Education from "@/components/Education/Education";

export default function Home() {
  const { setTheme } = useTheme();

  const [mood, setMood] = React.useState("dark");

  return (
    <main className="relative overflow-hidden" id="home">
      <Background className="">
        <div className="rounded-md flex items-center justify-center absolute left-0 top-0">
          <LightEffect />
        </div>

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contacts />
        <div className="fixed left-0 px-10 md:px-32 w-full z-50 top-20 md:top-14 bg-transparent flex justify-between items-center">
          <div className="">
            <a
              className=" text-xl md:text-3xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-r from-green-500 via-blue-500 to-purple font-bold"
              href="#home"
            >
              AJIJUL ISLAM
            </a>
          </div>
          <div className=" text-3xl">
            <div className="">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="outline-0 border-0"
                    variant="default"
                    size="icon"
                  >
                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="p-4 border text-sm"
                  align="start"
                >
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        <a
          className="bottom-16 right-10 fixed animate animate-bounce z-50"
          href="#home"
        >
          <button className=" w-10 h-10 rounded-full shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] p-4 text-3xl flex items-center justify-center bg-[#0070f3] text-white font-light transition duration-200 ease-linear">
            <div>
              <IoIosArrowRoundUp />
            </div>
          </button>
        </a>
      </Background>
    </main>
  );
}
