"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-950">
      <Image
        src="/images/ki.jpg"
        alt="Kiyomi Hawley"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-neutral-950/55" />

      <div className="absolute bottom-12 left-0 right-0 z-10 flex flex-col items-center gap-8 px-6 md:flex-row md:items-end md:justify-between md:px-16">

        {/* Promo box — first in DOM so it stacks on top on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="https://soundcloud.com/kiyomi/03-meet-you-there?utm_source=clipboard&utm_campaign=wtshare&utm_medium=widget&utm_content=https%253A%252F%252Fsoundcloud.com%252Fkiyomi%252F03-meet-you-there" target="_new"
            className="flex flex-row h-24 md:h-auto md:flex-col bg-neutral-950/60 backdrop-blur-sm border border-stone-700/40 rounded-sm overflow-hidden w-full max-w-xs md:w-72 hover:border-stone-500/60 transition-colors"
          >
            <img
              src="/images/meet-you-there-cover.jpg"
              alt="Meet You There"
              className="w-24 h-24 shrink-0 object-cover md:w-full md:h-auto md:aspect-square"
            />
            <div className="px-4 flex flex-col justify-center md:p-5">
              <p className="text-[10px] tracking-[0.25em] text-stone-400 uppercase mb-1 md:mb-2">Now Streaming</p>
              <p className="font-display text-stone-100 text-lg md:text-2xl leading-tight">Meet You There</p>
              <p className="text-[10px] tracking-[0.2em] text-stone-400 uppercase mt-2 md:mt-3">Listen →</p>
            </div>
          </Link>
        </motion.div>

        {/* Name + tagline */}
        <motion.div
          className="flex flex-col items-center text-center"
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.18 }}
        >
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-6xl tracking-[0.12em] text-stone-100 uppercase"
          >
            Kiyomi Hawley
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-xs tracking-[0.35em] text-stone-400 uppercase whitespace-nowrap"
          >
            Singer &nbsp;·&nbsp; Songwriter &nbsp;·&nbsp; Artist
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
}
