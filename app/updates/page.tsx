import { updates } from '@/lib/updates';
import Footer from '@/components/sections/Footer';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export const metadata = {
  title: 'Updates — Kiyomi Hawley',
};

export default function UpdatesPage() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <div className="max-w-2xl mx-auto px-6 pt-32 pb-24">
        <h1 className="font-display text-5xl tracking-[0.18em] text-stone-200 uppercase mb-20 text-center">
          Updates
        </h1>

        {updates.length === 0 ? (
          <p className="text-stone-600 text-center text-[11px] tracking-widest uppercase">
            More soon.
          </p>
        ) : (
          <div className="flex flex-col divide-y divide-stone-900">
            {updates.map((update) => (
              <article key={update.slug} className="py-14 first:pt-0">
                <p className="text-[11px] tracking-[0.3em] uppercase text-stone-600 mb-4">
                  {formatDate(update.date)}
                </p>
                {update.imageUrl && (
                  <img
                    src={update.imageUrl}
                    alt={update.title}
                    className="w-full aspect-video object-cover mb-7 rounded-sm"
                  />
                )}
                <h2 className="font-display text-3xl text-stone-200 mb-4">{update.title}</h2>
                <p className="text-stone-500 text-sm leading-relaxed">{update.content}</p>
                {update.link && (
                  <a
                    href={update.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-5 text-[11px] tracking-[0.3em] uppercase text-stone-400 border-b border-stone-700 pb-0.5 hover:text-stone-200 transition-colors"
                  >
                    Read More
                  </a>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
