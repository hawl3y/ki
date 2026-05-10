"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Nav() {
  const path = usePathname();
  const isHome = path === '/';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const overHero = isHome && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-all duration-300 ${
        overHero
          ? 'bg-transparent'
          : 'bg-stone-50/95 backdrop-blur-sm border-b border-stone-200'
      }`}
    >
      <Link
        href="/"
        className={`font-display text-base tracking-[0.2em] uppercase transition-colors duration-300 ${
          overHero ? 'text-stone-100 hover:text-white' : 'text-stone-800 hover:text-stone-600'
        }`}
      >
        Kiyomi
      </Link>
      <div className="flex items-center gap-6">
        {(['media', 'updates'] as const).map((page) => (
          <Link
            key={page}
            href={`/${page}`}
            className={`text-[11px] tracking-[0.3em] uppercase transition-colors duration-300 ${
              path === `/${page}`
                ? overHero ? 'text-stone-200' : 'text-stone-800'
                : overHero ? 'text-stone-400 hover:text-stone-200' : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </Link>
        ))}
      </div>
    </nav>
  );
}
