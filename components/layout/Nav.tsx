"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const pages = ['media', 'music', 'updates'] as const;

export default function Nav() {
  const path = usePathname();
  const isHome = path === '/';
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  const overHero = isHome && !scrolled && !menuOpen;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Header row */}
      <div className={`flex items-center justify-between px-8 py-4 transition-all duration-300 ${
        menuOpen
          ? 'bg-stone-900'
          : overHero
          ? 'bg-transparent'
          : 'bg-stone-50/95 backdrop-blur-sm border-b border-stone-200'
      }`}>
        <Link href="/" className="opacity-90 hover:opacity-100 transition-opacity duration-300">
          <Image
            src="/images/kiki-logo.png"
            alt="Kiyomi Hawley"
            width={160}
            height={40}
            className="h-18 w-auto [filter:drop-shadow(0_1px_3px_rgba(0,0,0,0.35))]"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {pages.map((page) => (
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

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          className={`md:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px] transition-colors duration-300 ${
            menuOpen || overHero ? 'text-stone-300 hover:text-white' : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <span className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown — child of nav, naturally below the header row */}
      {menuOpen && (
        <div className="md:hidden border-t border-stone-700 bg-stone-800/90 backdrop-blur-md">
          <div className="flex flex-col divide-y divide-stone-700/50">
            {pages.map((page) => (
              <Link
                key={page}
                href={`/${page}`}
                className={`px-8 py-5 text-[11px] tracking-[0.3em] uppercase transition-colors duration-200 ${
                  path === `/${page}` ? 'text-white' : 'text-stone-400 hover:text-white'
                }`}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
