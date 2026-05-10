import Link from 'next/link';
import { updates } from '@/lib/updates';

export default function LatestUpdate() {
  const latest = updates[0];
  if (!latest) return null;

  const date = new Date(latest.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section className="bg-stone-100 py-28 px-6">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 mb-4">{date}</p>
        <h2 className="font-display text-4xl text-stone-800 mb-5">{latest.title}</h2>
        <p className="text-stone-600 text-sm leading-relaxed mb-10">{latest.excerpt}</p>
        <Link
          href="/updates"
          className="text-[11px] tracking-[0.3em] uppercase text-stone-500 border-b border-stone-300 pb-0.5 hover:text-stone-800 hover:border-stone-500 transition-colors"
        >
          All Updates
        </Link>
      </div>
    </section>
  );
}
