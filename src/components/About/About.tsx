import React from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Background } from "../ui/Background";
import { AboutBg } from "../ui/about-bg";
import { HeroEffectBox } from "../ui/HeroEffectBox";
import { LinkPreview } from "../ui/link-preview";
import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-Effect";
import { Button } from "../ui/moving-border-button";
import { LightEffect } from "../LightEffect/LightEffect";

const About = () => {
  return (
    <div className="w-[90vw] mx-auto relative my-32" id="about">
      <SectionTitle title="About me" />
 

      <div className="grid md:grid-cols-2 my-12 md:gap-20 backdrop-blur-[3px] border border-[rgba(255,255,255,0.1)] p-5 rounded-[10px]">
      <div className="absolute">
      <LightEffect color="blue" position="-bottom-24 right-10"/>
      </div>
        <div className="">
          
          <Image
            src="/images/ajijul.png"
            width="400"
            height="400"
            className="rounded-lg"
            alt="ajijul.png"
          />
        </div>
        <div className="flex flex-col items-start justify-between md:justify-around">
          <h2 className=" text-xl md:text-2xl my-10"><TextGenerateEffect words="Want to know about me ?"/></h2>
          <p className="">
            I'm a passionate, who specializes in full stack development
            (React.js & Node.js). I am enthusiastic about bringing the technical
            and visual aspects of digital products to life. User experience,
            pixel perfect design, and writing clear, readable, highly performant
            code matters to me.
          </p>
          <p className="">
            I began my journey as a web developer in 2021, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. I'm
            building cutting-edge web applications using modern technologies
            such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much
            more.
          </p>
          <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
            Next.js Blue
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;