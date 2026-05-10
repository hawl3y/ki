"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-950">
      <Image
        src="/images/hero.jpg"
        alt="Kiyomi Hawley"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-neutral-950/55" />

      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 md:left-16 md:translate-x-0 z-10 text-center md:text-left px-6 md:px-0"
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.18 }}
      >
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl tracking-[0.12em] text-stone-100 uppercase"
        >
          Kiyomi Hawley
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 text-xs sm:text-sm tracking-[0.35em] text-stone-400 uppercase"
        >
          Singer &nbsp;·&nbsp; Songwriter &nbsp;·&nbsp; Artist
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <div className="h-10 w-px bg-stone-400/40" />
      </motion.div>
    </section>
  );
}
