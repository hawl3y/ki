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
    <section className="bg-neutral-900 py-28 px-6">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-[11px] tracking-[0.35em] uppercase text-stone-600 mb-4">{date}</p>
        <h2 className="font-display text-4xl text-stone-200 mb-5">{latest.title}</h2>
        <p className="text-stone-500 text-sm leading-relaxed mb-10">{latest.excerpt}</p>
        <Link
          href="/updates"
          className="text-[11px] tracking-[0.3em] uppercase text-stone-400 border-b border-stone-700 pb-0.5 hover:text-stone-200 hover:border-stone-500 transition-colors"
        >
          All Updates
        </Link>
      </div>
    </section>
  );
}
