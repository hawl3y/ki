import Footer from '@/components/sections/Footer';
import { releases } from '@/lib/music';

export const metadata = {
  title: 'Music — Kiyomi Hawley',
};

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <h1 className="font-display text-5xl tracking-[0.18em] text-stone-700 uppercase mb-20 text-center">
          Music
        </h1>

        <div className="flex flex-col divide-y divide-stone-200">
          {releases.map((release) => (
            <div key={release.title} className="py-8 first:pt-0">
              <div className={release.imageUrl ? 'flex gap-6 items-start' : undefined}>
                {release.imageUrl && (
                  <img
                    src={release.imageUrl}
                    alt={release.title}
                    className="w-24 h-24 object-cover rounded-sm shrink-0"
                  />
                )}
                <div>
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    {release.link ? (
                      <a
                        href={release.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-2xl text-stone-800 hover:text-stone-500 transition-colors"
                      >
                        {release.title}
                      </a>
                    ) : (
                      <span className="font-display text-2xl text-stone-800">{release.title}</span>
                    )}
                    <span className="text-[11px] tracking-[0.25em] uppercase text-stone-400">
                      {release.type} · {release.year}
                    </span>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">{release.description}</p>
                  {release.tracks && (
                    <ul className="mt-3 flex flex-col gap-1">
                      {release.tracks.map((track, i) => (
                        <li key={track} className="flex items-center gap-2 text-sm text-stone-500">
                          {release.tracksNumbered
                            ? <span className="w-4 text-right text-stone-300 shrink-0 tabular-nums">{i + 1}.</span>
                            : <span className="w-1 h-1 rounded-full bg-stone-300 shrink-0" />
                          }
                          {track}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
