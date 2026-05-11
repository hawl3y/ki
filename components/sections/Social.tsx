"use client";

import { useEffect, useRef } from 'react';
import { BEHOLD_WIDGET_ID, INSTAGRAM_URL, FACEBOOK_URL, YOUTUBE_URL } from '@/lib/config';

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={18} height={18} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={18} height={18} aria-hidden>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={18} height={18} aria-hidden>
      <rect x="2" y="5" width="20" height="14" rx="3" />
      <polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Social() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const widget = document.createElement('behold-widget');
    widget.setAttribute('feed-id', BEHOLD_WIDGET_ID);
    containerRef.current.appendChild(widget);

    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://w.behold.so/widget.js';
    document.head.appendChild(script);
  }, []);

  return (
    <section className="bg-stone-50 py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-8 mb-14">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-stone-400 hover:text-stone-800 transition-colors text-[11px] tracking-[0.3em] uppercase"
          >
            <InstagramIcon /> Instagram
          </a>
          <span className="text-stone-300">·</span>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-stone-400 hover:text-stone-800 transition-colors text-[11px] tracking-[0.3em] uppercase"
          >
            <FacebookIcon /> Facebook
          </a>
          <span className="text-stone-300">·</span>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-stone-400 hover:text-stone-800 transition-colors text-[11px] tracking-[0.3em] uppercase"
          >
            <YouTubeIcon /> YouTube
          </a>
        </div>

        <div ref={containerRef} />
      </div>
    </section>
  );
}
