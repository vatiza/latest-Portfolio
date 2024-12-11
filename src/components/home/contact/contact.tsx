/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import littleboy from "@/app/assets/littleboy-min.png";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import TypingAnimation from "@/components/ui/typing-animation";
const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) {
      toast.error("Form is not available.");
      return;
    }
    setIsLoading(true);
    const loadingToastId = toast.loading("Sending message...");
    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_SERVICE_KEY}`,
        `${process.env.NEXT_PUBLIC_TEMP_KEY}`,
        form.current,
        {
          publicKey: `${process.env.NEXT_PUBLIC_EMAILJS_KEY}`,
        }
      )
      .then(
        () => {
          toast.dismiss(loadingToastId);
          toast.success("Message Sent!");
          setIsLoading(false);
          console.log("SUCCESS!");
        },
        (error) => {
          toast.dismiss(loadingToastId);
          toast.error("Message Send Fail.");
          setIsLoading(false);
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="min-h-screen mt-20 lg:mt-0 px-5 lg:px-20 " id="contact">
      <h1 className="text-center font-arimo font-bold my-2 text-5xl">
        Contact
      </h1>
      <TypingAnimation
        className="font-playrite text-sm mt-3 lg:mt-0"
        text="Have project in mind? Let's discuss !"
      />
      <div className="flex mt-5 justify-center items-center ">
        <div className="w-full lg:w-2/6">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col  gap-3"
          >
            <Input
              className="border-r-4 border-b-4 border-black focus:border-blue-600"
              type="text"
              name="user_name"
              placeholder="Name"
              required
            />
            <Input
              className="border-r-4 border-b-4 border-black focus:border-blue-600"
              type="email"
              name="user_email"
              placeholder="Email"
              required
            />
            <Textarea
              className="border-r-4 border-b-4 border-black focus:border-blue-600"
              placeholder="Type your message here."
              name="message"
              required
            />
            <input
              type="submit"
              value="Send"
              className="group cursor-pointer  w-1/2 mt-3 relative inline-flex h-9 items-center justify-center overflow-hidden rounded-md   bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f6f7ff] to-[#f5f6ff] dark:border-[rgb(76_100_255)] border-2 border-[#263381] bg-transparent px-6  dark:text-white text-black transition-all duration-100 dark:[box-shadow:5px_5px_rgb(76_100_255)] [box-shadow:5px_5px_rgb(38_51_129)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(38_51_129)] dark:active:[box-shadow:0px_0px_rgb(76_100_255)] font-bold font-playrite"
            />
          </form>
        </div>
        <div className="hidden lg:block">
          <Image
            priority
            src={littleboy}
            width={400}
            height={400}
            alt="rakib hero img"
          />
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Contact;
