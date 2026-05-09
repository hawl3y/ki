"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const path = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-sm bg-neutral-950/40">
      <Link
        href="/"
        className="font-display text-base tracking-[0.2em] text-stone-200 uppercase hover:text-white transition-colors"
      >
        Kiyomi
      </Link>
      <Link
        href="/updates"
        className={`text-[11px] tracking-[0.3em] uppercase transition-colors ${
          path === '/updates' ? 'text-stone-200' : 'text-stone-500 hover:text-stone-300'
        }`}
      >
        Updates
      </Link>
    </nav>
  );
}
