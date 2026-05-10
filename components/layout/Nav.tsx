"use client";

import Link from 'next/link';
import Image from 'next/image';
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
      <Link href="/" className="opacity-90 hover:opacity-100 transition-opacity duration-300">
        <Image
          src="/images/kiyomi-logo.png"
          alt="Kiyomi Hawley"
          width={160}
          height={40}
          className="h-12 w-auto [filter:drop-shadow(0_1px_3px_rgba(0,0,0,0.35))]"
        />
      </Link>
      <div className="flex items-center gap-6">
        {(['media', 'music', 'updates'] as const).map((page) => (
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
