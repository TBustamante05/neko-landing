'use client'
import { ArrowRightCircle } from "lucide-react";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="min-h-screen lg:h-screen bg-black text-white px-4 sm:px-6 lg:px-10 pt-20 lg:overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-8 h-auto lg:h-full gap-4">

        {/* Columna izquierda */}
        <div className="flex flex-col lg:col-span-5 h-auto lg:h-full gap-4">

          {/* Hero card */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative min-h-[280px] sm:min-h-[320px] lg:h-1/2 rounded-3xl bg-[url('/main-photo2.jpeg')] bg-cover bg-center p-6 sm:p-8 lg:p-10"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold uppercase text-white leading-none">main <br />
              Projects
            </h1>
            <p className="w-full  xl:w-2/3 uppercase font-medium text-white/80 mt-3 text-sm sm:text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              doloremque, eos veritatis laborum sapiente dignissimos optio
              officiis cupiditate illo consequuntur aliquam, fugit suscipit
              nemo, natus quibusdam placeat? Consequatur, numquam velit.
            </p>
          </motion.div>

          {/* Sub-grid de imágenes */}
          <div className="grid grid-cols-5 gap-4 min-h-[180px] sm:min-h-[200px] lg:h-1/2">

            <motion.div
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative rounded-3xl col-span-2 overflow-hidden"
            >
              <img
                src="/art1.jpeg"
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-black rounded-3xl opacity-50 hover:opacity-10 transition-all duration-300 ease-in-out z-10" />
              <div className="relative z-20 h-full p-4 sm:p-6 lg:p-10 flex items-end">
                <ArrowRightCircle className="text-[var(--main-color)] p-2 w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32 hover:translate-x-2 transition-transform duration-300 ease-in-out cursor-pointer" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative rounded-3xl bg-[url(/art2.jpeg)] grayscale bg-cover bg-center col-span-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-black rounded-3xl opacity-50 hover:opacity-10 transition-all duration-300 ease-in-out z-10" />
              <div className="relative z-20" />
            </motion.div>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="flex flex-col lg:col-span-3 gap-4">

          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative rounded-3xl min-h-[280px] sm:min-h-[320px] lg:h-3/4 overflow-hidden"
          >
            <img
              src="/art4.jpeg"
              className="absolute inset-0 w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-black rounded-3xl opacity-50 hover:opacity-10 transition-all duration-300 ease-in-out z-10" />
            <div className="relative z-20 p-6 sm:p-8 lg:p-10 flex items-start justify-between">
              <h1 className="uppercase text-3xl lg:text-5xl text-[var(--secondary-color)] border border-[var(--secondary-color)] rounded-full px-6 sm:px-10 lg:px-12 py-2 font-bold">
                Simple
              </h1>
              <div className="bg-[var(--secondary-color)] w-10 h-10 sm:w-16 sm:h-16 lg:w-30 lg:h-30 rounded-full" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="rounded-3xl bg-[var(--main-color)] text-white h-auto lg:h-1/4 p-4 sm:p-6 flex flex-col justify-center gap-1"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl uppercase font-bold leading-none tracking-tighter">
              Designs
            </h1>
            <div className="flex justify-between items-center px-0 sm:px-2 mt-2 gap-4">
              <div className="flex flex-col text-sm sm:text-base">
                <span>Look at for more projects</span>
                <span className="text-white/70">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
              <ArrowRightCircle className="p-2 w-14 h-14 sm:w-20 sm:h-20 flex-shrink-0 hover:translate-x-2 transition-transform duration-300 ease-in-out cursor-pointer" />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default Projects;