import React from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import Image from "next/image";
import { Boxbg } from "../ui/boxBg";
import { FaUserGraduate } from "react-icons/fa";

const educationData = [
  {
    year: "2022 - Present",
    degree: "Diploma in Computer Engineering",
    institution: "Mohastan Garh Polytechnic Institute",
  },
  {
    year: "2022 - Present",
    degree: "Higher Secondary Certificate",
    institution: "Mohastan Garh Polytechnic Institute",
  },
  {
    year: "2018 - 2020",
    degree: "Secondary School Certificate",
    institution: "Bamon Para High School",
  },
];

// ✅ Define the props type
type EducationItem = {
  year: string;
  degree: string;
  institution: string;
};

const EducationCard = ({ year, degree, institution }: EducationItem) => (
  <Boxbg className="w-full rounded-lg overflow-hidden">
    <div className="w-full bg-white dark:bg-zinc-900 p-5 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-center text-green-500">
        {year}
      </h2>
      <div className="flex items-center gap-4 mt-3">
        <FaUserGraduate className="text-3xl text-green-400" />
        <div>
          <h1 className="text-lg md:text-xl font-bold uppercase">{degree}</h1>
          <h2 className="text-sm text-muted-foreground font-semibold">
            {institution}
          </h2>
        </div>
      </div>
    </div>
  </Boxbg>
);

const Education = () => {
  return (
    <div id="education" className="my-20 w-[90vw] md:w-[80vw] mx-auto">
      <SectionTitle title="Education" />
      <div className="grid md:grid-cols-2 gap-10 my-16 items-center">
        <div className="flex items-center justify-center">
          <Image
            src="/images/education.png"
            height={300}
            width={450}
            alt="Education Illustration"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col gap-5">
          {educationData.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
