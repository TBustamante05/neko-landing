import "./Home.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="relative min-h-screen h-full bg-gradient-to-b from-[#1E3AD9] to-black text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Scroller lateral izquierdo */}
      <motion.div
        className="absolute h-full bottom-0 flex left-2 sm:left-4 lg:left-10 flex-col text-[#FFFFFF]/90 text-lg sm:text-xl lg:text-2xl font-bold tracking-tighter gap-[20px] sm:gap-[30px] infinite-scroll z-50"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.p
            key={`left-1-${index}`}
            className="writing-mode-vertical"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
          >
            Neko Swag
          </motion.p>
        ))}
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.p
            aria-hidden="true"
            key={`left-2-${index}`}
            className="writing-mode-vertical"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + (index + 6) * 0.1 }}
          >
            Neko Swag
          </motion.p>
        ))}
      </motion.div>

      {/* Scroller lateral derecho */}
      <motion.div
        className="absolute h-full bottom-0 flex right-2 sm:right-4 lg:right-10 flex-col text-[#FFFFFF]/90 text-lg sm:text-xl lg:text-2xl font-bold tracking-tighter gap-[20px] sm:gap-[30px] infinite-scroll"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.p
            key={`right-1-${index}`}
            className="writing-mode-vertical"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
          >
            Neko Swag
          </motion.p>
        ))}
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.p
            aria-hidden="true"
            key={`right-2-${index}`}
            className="writing-mode-vertical"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + (index + 6) * 0.1 }}
          >
            Neko Swag
          </motion.p>
        ))}
      </motion.div>

      {/* Contenedor imagen + decoraciones */}
      <motion.div
        className="absolute inset-0 pt-10 flex items-end justify-center h-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
      >
        <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-full w-fit">
          {/* Decoración superior (blanca) */}
          <motion.div
            className="absolute top-8 sm:top-10 lg:top-15 left-0
                       w-[100px] sm:w-[160px] md:w-[220px] lg:w-[300px]
                       h-full
                       bg-white/30 z-0 pointer-events-none"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />

          {/* Imagen principal */}
          <motion.img
            src="/neko.png"
            alt="neko"
            className="h-full object-cover relative z-20 -bottom-1"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          />

          {/* Decoración inferior (roja) */}
          <motion.div
            className="absolute bottom-0 right-0
                       w-[100px] sm:w-[160px] md:w-[220px] lg:w-[300px]
                       h-[80px] sm:h-[120px] md:h-[160px] lg:h-1/2
                       bg-[#F21D2F]/50 z-20 pointer-events-none"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            style={{ transformOrigin: "right" }}
          />
        </div>
      </motion.div>

      {/* Título */}
      <motion.div
        className="w-full relative top-20 z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      >
        <motion.h1
          className="text-[clamp(7rem,15vw,19rem)] md:text-[15rem] lg:text-[clamp(4.5rem,15vw,19rem)] text-shadow-lg
                     text-white font-bold uppercase leading-none tracking-tighter text-center"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        >
          Neko Swag
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}
