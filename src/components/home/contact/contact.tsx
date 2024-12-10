import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import littleboy from "@/app/assets/littleboy-min.png";
import Image from "next/image";
const Contact = () => {
  return (
    <div className="min-h-screen mt-20 lg:mt-0 px-5 lg:px-20 " id="contact">
      <h1 className="text-center font-arimo font-bold my-2 text-5xl">
        Contact
      </h1>
      <div className="flex justify-center items-center ">
        <div className="w-full lg:w-2/6">
          <form className="flex flex-col  gap-3">
            <Input
              className="border-r-4 border-b-4 border-black focus:border-blue-600"
              type="text"
              placeholder="Name"
            />
            <Input
              className="border-r-4 border-b-4 border-black focus:border-blue-600"
              type="email"
              placeholder="Email"
            />
            <Textarea
              className="border-r-4 border-b-4 border-black focus:border-blue-600"
              placeholder="Type your message here."
            />
            <input
              type="submit"
              value="Send"
              className="group  w-1/2 mt-3 relative inline-flex h-9 items-center justify-center overflow-hidden rounded-md   bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f6f7ff] to-[#f5f6ff] dark:border-[rgb(76_100_255)] border-2 border-[#263381] bg-transparent px-6  dark:text-white text-black transition-all duration-100 dark:[box-shadow:5px_5px_rgb(76_100_255)] [box-shadow:5px_5px_rgb(38_51_129)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(38_51_129)] dark:active:[box-shadow:0px_0px_rgb(76_100_255)] font-bold font-playrite"
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
    </div>
  );
};

export default Contact;
