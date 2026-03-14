"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-black text-white w-full pt-20 lg:py-20 px-6 sm:px-10 overflow-hidden">
      <div className="relative">
        <motion.h1
          className="relative text-[clamp(4rem,20vw,24rem)] text-white font-bold uppercase leading-none tracking-tighter text-center z-20"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        >
          Contact
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="w-full lg:w-64 xl:w-72 ms-0 xl:ms-30 mt-6 lg:mt-10 px-0 xl:px-10 text-neutral-400"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius culpa
          vel cupiditate, ea suscipit aliquam quam distinctio corporis et quae
          numquam officiis.
        </motion.p>

        <motion.div
          initial={{ y: 200, opacity: 0, borderRadius: "50px 50px 0 0" }}
          whileInView={{ y: 0, opacity: 1, borderRadius: "0px" }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="relative lg:absolute lg:right-10 bottom-0 bg-[var(--main-color)] text-white w-full lg:w-[70%] z-20 mt-10 lg:mt-0 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-12 xl:px-24 pt-10 pb-5 gap-8 xl:gap-24">
            <div className="flex flex-col md:text-left text-center justify-center items-center md:items-start">
              <h2 className="text-7xl sm:text-[clamp(5rem,6vw,8rem)] font-bold mb-4 leading-none tracking-tighter">
                Let's get <br />
                in touch
              </h2>
              <ArrowUpRight className="w-16 h-16 md:w-24 md:h-24 lg:w-48 lg:h-48" />
            </div>

            <div className="flex flex-col">
              <form className="flex flex-col gap-4 md:gap-8 lg:gap-10 py-4 lg:py-10">
                <div className="flex flex-col gap-1 md:gap-2">
                  <label htmlFor="name" className="text-blue-100 font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="px-2 py-2 border border-x-transparent border-t-transparent outline-none bg-transparent"
                  />
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <label htmlFor="email" className="text-blue-100 font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="px-2 py-2 border border-x-transparent border-t-transparent outline-none bg-transparent"
                  />
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <label htmlFor="message" className="text-blue-100 font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="px-2 border border-x-transparent border-t-transparent outline-none bg-transparent"
                    rows={5}
                  />
                  <button
                    type="submit"
                    className="bg-black px-6 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-colors mt-5"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          <footer>
            <p className="text-center text-sm text-white/50 py-4 px-10">
              &copy; 2024 Neko Swag. All rights reserved.
            </p>
          </footer>
        </motion.div>
      </div>
    </div>
  );
}