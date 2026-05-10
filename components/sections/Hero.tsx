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
            href="/music"
            className="flex flex-col bg-neutral-950/60 backdrop-blur-sm border border-stone-700/40 rounded-sm overflow-hidden w-56 md:w-72 hover:border-stone-500/60 transition-colors"
          >
            <img
              src="/images/meet-you-there-cover.jpg"
              alt="Meet You There"
              className="w-full aspect-square object-cover"
            />
            <div className="p-4 md:p-5">
              <p className="text-[10px] tracking-[0.25em] text-stone-400 uppercase mb-2">Available Now</p>
              <p className="font-display text-stone-100 text-xl md:text-2xl leading-tight">Meet You There</p>
              <p className="text-[10px] tracking-[0.2em] text-stone-400 uppercase mt-3">Listen →</p>
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
            className="font-display text-5xl md:text-6xl tracking-[0.12em] text-stone-100"
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
