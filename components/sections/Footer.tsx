"use client";

import { useEffect, useState } from 'react';

export default function Footer() {
  const [count, setCount] = useState<number | null>(null);
  const year = new Date().getFullYear();

  useEffect(() => {
    const counted = sessionStorage.getItem('ki_counted');
    const method = counted ? 'GET' : 'POST';

    fetch('/api/visit', { method })
      .then((r) => r.json())
      .then((data) => {
        setCount(data.count);
        if (!counted) sessionStorage.setItem('ki_counted', '1');
      })
      .catch(() => {});
  }, []);

  return (
    <footer className="bg-stone-100 border-t border-stone-200 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-400 tracking-[0.2em] uppercase">
        <p>© {year} Kiyomi Hawley</p>
        {count !== null && (
          <p>{count.toLocaleString()} visitors</p>
        )}
      </div>
    </footer>
  );
}
