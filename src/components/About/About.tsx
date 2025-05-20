import React from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { LightEffect } from "../LightEffect/LightEffect";
import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-Effect";
import { Button } from "../ui/moving-border-button";
import Link from "next/link";

const About = () => {
  return (
    <div className="w-[95vw] mx-auto relative my-32" id="about">
      <SectionTitle title="About Me" />

      <div className="grid lg:grid-cols-3 my-12 md:gap-20 dark:bg-zinc-900 backdrop-blur-[1px] border border-[rgba(255,255,255,0.1)] md:p-5 rounded-[10px] relative">
        {/* Light Effect */}
        <div className="absolute">
          <LightEffect color="white" position="-top-24 -right-60" />
        </div>

        {/* Image Section */}
        <div>
          <Image
            src="/images/ajijul.png"
            width={400}
            height={400}
            className="rounded-lg w-full"
            alt="Ajijul Islam"
          />
        </div>

        {/* Text Content Section */}
        <div className="pb-10 md:pb-0 px-4 lg:col-span-2 flex flex-col items-start justify-between md:justify-around gap-y-4">
          <h2 className="text-xl md:text-2xl my-6">
            <TextGenerateEffect words="Want to Know About Me?" />
          </h2>
          <p>
            My name is Ajijul Islam, and I am a junior MERN stack developer with
            a passion for creating dynamic and responsive web applications.
            Since starting my journey in web development, I have honed my skills
            in MongoDB, Express.js, React.js, and Node.js. I am dedicated to
            writing clean, efficient, and maintainable code, always striving to
            enhance the user experience.
          </p>
          <p>
            My enthusiasm for technology drives me to continuously learn and
            adopt the latest tools and frameworks. I am excited about building
            innovative solutions and contributing to projects that make a
            difference in the digital world.
          </p>

          <Button
            as={Link}
            href="#contact"
            className="px-8 py-2 bg-[#0070f3] text-white rounded-md font-light transition duration-200 ease-linear shadow-lg hover:shadow-xl hover:bg-[rgba(0,118,255,0.9)]"
          >
            Hire Me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
