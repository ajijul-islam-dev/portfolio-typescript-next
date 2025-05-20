import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaMailBulk,
  FaTelegram,
  FaTwitter,
  FaVoicemail,
  FaWhatsapp,
} from "react-icons/fa";
import { Boxbg } from "../ui/boxBg";
import { LinkPreview } from "../ui/link-preview";
import Swal from "sweetalert2";

const Contacts = () => {
  const form: any = useRef();

  const handleMail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_YOUR_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID}`,
        form.current,
        {
          publicKey: `${process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY}`,
        }
      )
      .then(
        () => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Message Sent",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        },
        (error) => {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: error.message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  };
  return (
    <div id="contact" className="w-[90vw] mx-auto my-20">
      <div className="">
        <SectionTitle title="Contact " />
      </div>
      <div className="grid  md:grid-cols-3 my-16 gap-10">
        <div className="flex flex-col gap-3">
          <LinkPreview url="/">
            <Boxbg>
              {" "}
              <button
                className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="submit"
              >
                <FaGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  ajijulislamdev@gmail.com
                </span>
              </button>{" "}
            </Boxbg>
          </LinkPreview>
          <LinkPreview url="https://www.facebook.com/ajijul.islam.dev">
            <Boxbg>
              {" "}
              <button
                className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="submit"
              >
                <FaFacebookMessenger className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Messenger
                </span>
              </button>{" "}
            </Boxbg>
          </LinkPreview>
          <LinkPreview url="hhttps://www.facebook.com/ajijul.islam.dev">
            <Boxbg>
              {" "}
              <button
                className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="submit"
              >
                <FaFacebook className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Facebook
                </span>
              </button>{" "}
            </Boxbg>
          </LinkPreview>
          <LinkPreview url="/">
            <Boxbg>
              {" "}
              <button
                className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="submit"
              >
                <FaTwitter className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Twitter
                </span>
              </button>{" "}
            </Boxbg>
          </LinkPreview>
          <LinkPreview url="/">
            <Boxbg>
              {" "}
              <button
                className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="submit"
              >
                <FaWhatsapp className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  +880 1320929384
                </span>
              </button>{" "}
            </Boxbg>
          </LinkPreview>
          <LinkPreview url="https://github.com/ajijul-islam-dev">
            <Boxbg>
              {" "}
              <button
                className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="submit"
              >
                <FaGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Github
                </span>
              </button>{" "}
            </Boxbg>
          </LinkPreview>
          <LinkPreview url="ttps://bd.linkedin.com/in/ajijul-islam-dev">
            <Boxbg>
              {" "}
              <button
                className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="submit"
              >
                <FaLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Linkedin{" "}
                </span>
              </button>{" "}
            </Boxbg>
          </LinkPreview>
        </div>
        <div className="md:col-span-2 gap-3">
          <form ref={form} onSubmit={handleMail}>
            <div className="grid md:grid-cols-2 gap-1">
              <Boxbg>
                <input
                  className="w-full p-2.5 rounded-md"
                  name="user_name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </Boxbg>
              <Boxbg>
                <input
                  className="w-full p-2.5 rounded-md"
                  name="user_email"
                  type="email"
                  placeholder="Enter your Email"
                  required
                />
              </Boxbg>
            </div>
            <div className="grid md:grid-cols-2 gap-1">
              <Boxbg>
                <input
                  className="w-full p-2.5 rounded-md"
                  name="phone"
                  type="number"
                  placeholder="Enter your Phone optional"
                />
              </Boxbg>
              <Boxbg>
                <input
                  className="w-full p-2.5 rounded-md"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                />
              </Boxbg>
            </div>
            <Boxbg>
              <textarea
                className="w-full h-56 p-2.5 rounded-md"
                name="message"
                placeholder="Enter your Message"
              />
            </Boxbg>
            <Boxbg>
              <button
                type="submit"
                className=" w-full inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                Send Email
              </button>
            </Boxbg>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
