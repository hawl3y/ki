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
    <main className="min-h-screen bg-stone-50">
      <div className="max-w-2xl mx-auto px-6 pt-32 pb-24">
        <h1 className="font-display text-5xl tracking-[0.18em] text-stone-700 uppercase mb-20 text-center">
          Updates
        </h1>

        {updates.length === 0 ? (
          <p className="text-stone-400 text-center text-[11px] tracking-widest uppercase">
            More soon.
          </p>
        ) : (
          <div className="flex flex-col divide-y divide-stone-200">
            {updates.map((update) => (
              <article key={update.slug} className="py-14 first:pt-0">
                <p className="text-[11px] tracking-[0.3em] uppercase text-stone-400 mb-4">
                  {formatDate(update.date)}
                </p>
                {update.imageUrl && (
                  <img
                    src={update.imageUrl}
                    alt={update.title}
                    className="w-full h-auto mb-7 rounded-sm"
                  />
                )}
                <h2 className="font-display text-3xl text-stone-800 mb-4">{update.title}</h2>
                <div className="text-stone-600 text-sm leading-relaxed space-y-4">
                  {update.content.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                {update.link && (
                  <a
                    href={update.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-5 text-[11px] tracking-[0.3em] uppercase text-stone-500 border-b border-stone-300 pb-0.5 hover:text-stone-800 transition-colors"
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
