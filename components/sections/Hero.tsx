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
            className="flex gap-4 items-center bg-neutral-950/60 backdrop-blur-sm border border-stone-700/40 rounded-sm p-4 max-w-xs hover:border-stone-500/60 transition-colors"
          >
            <img
              src="/images/meet-you-there-cover.jpg"
              alt="Meet You There"
              className="w-16 h-16 object-cover rounded-sm shrink-0"
            />
            <div>
              <p className="text-[10px] tracking-[0.25em] text-stone-400 uppercase mb-1">Available Now</p>
              <p className="font-display text-stone-100 text-lg leading-tight">Meet You There</p>
              <p className="text-[10px] tracking-[0.2em] text-stone-400 uppercase mt-1">Listen →</p>
            </div>
          </Link>
        </motion.div>

        {/* Logo + tagline */}
        <motion.div
          className="flex flex-col items-center"
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.18 }}
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/images/white-kiyomi-hawley-logo.png"
              alt="Kiyomi Hawley"
              width={480}
              height={120}
              className="h-48 w-auto md:h-60"
            />
          </motion.div>
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
