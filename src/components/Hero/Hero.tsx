import React from "react";
import { HeroEffectBox } from "../ui/HeroEffectBox";
import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-Effect";
import { FlipTexts } from "../ui/flip-texts";
import { LinkPreview } from "../ui/link-preview";
import { Button } from "../ui/moving-border-button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="mt-40 lg:mt-32 w-full relative h-full flex flex-col items-center justify-center">
      <div className=" relative flex flex-col items-center justify-center ">
        <div className=" w-[95vw] md:w-[80vw] absolute inset-0 h-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="w-[95vw]   md:w-[80vw] relative shadow-xl dark:bg-gray-900 border dark:border-gray-800  px-4 py-10 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="w-full flex flex-col items-center justify-center">
            <Image
              src="/images/avatar_2.jpeg"
              height={220}
              width={220}
              alt="avatar"
              className="mx-auto bg-white-100 rounded-full"
            />
            <div className="text-center">
              <TextGenerateEffect
                words="Md. Ajijul Islam (Coder)"
                className="text-2xl"
              />
              <FlipTexts words={words} />
              <div className="flex items-center justify-center gap-2 my-3">
                <div>
                  <LinkPreview
                    url="https://www.facebook.com/ajijul.islam.dev"
                    className="font-bold "
                  >
                    <Image
                      src="/images/facebook.png"
                      height={40}
                      width={40}
                      alt="avatar"
                      className="mx-auto  "
                    />
                  </LinkPreview>
                </div>
                <div>
                  <LinkPreview
                    url="https://github.com/ajijul-islam-dev"
                    className="font-bold "
                  >
                    <Image
                      src="/images/github.png"
                      height={40}
                      width={40}
                      alt="avatar"
                      className="mx-auto  "
                    />
                  </LinkPreview>
                </div>
                <div>
                  <LinkPreview
                    url="https://bd.linkedin.com/in/ajijul-islam-dev"
                    className="font-bold "
                  >
                    <Image
                      src="/images/linkedin.png"
                      height={40}
                      width={40}
                      alt="avatar"
                      className="mx-auto  "
                    />
                  </LinkPreview>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-10">
                <Button as={Link} href="#contact">
                  Get in Touch
                </Button>
                <Button
                  as={Link}
                  href="https://drive.google.com/file/d/1fUHeU2opaIC_MMxQUMvxnx3HjNOIdtZm/view?usp=sharing"
                >
                  Get Resume
                </Button>
              </div>
            </div>
          </div>

          <HeroEffectBox number={50} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

const words = [
  "Junior MERN Stact Developer",
  "Junior Front-end Developer",
  "Junior Back-end Developer",
  "Web Designer",
];
