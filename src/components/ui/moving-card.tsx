"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Boxbg } from "./boxBg";

export const MovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    icon: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          scrollerRef.current?.appendChild(duplicatedItem);
        });

        // Set direction
        containerRef.current.style.setProperty(
          "--animation-direction",
          direction === "left" ? "forwards" : "reverse"
        );

        // Set speed
        let duration = "40s";
        if (speed === "fast") duration = "20s";
        else if (speed === "slow") duration = "80s";
        containerRef.current.style.setProperty(
          "--animation-duration",
          duration
        );

        setStart(true);
      }
    }

    addAnimation();
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <Boxbg key={idx}>
            <li
              className="bg-gradient-to-r from-white-100 to-white-200 dark:from-slate-800 dark:to-sky-900 p-5 flex justify-center items-center w-[150px] md:w-[200px] h-[150px] md:h-[200px] relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6"
              style={{
                background:
                  "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
              }}
            >
              <div className="text-center space-y-3 text-white-100">
                <Image
                  src={item.icon}
                  height={40}
                  width={40}
                  alt={item.title}
                  className="mx-auto"
                />
                <h2 className="text-xl font-bold">{item.title}</h2>
              </div>
            </li>
          </Boxbg>
        ))}
      </ul>
    </div>
  );
};
