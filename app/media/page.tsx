import Footer from '@/components/sections/Footer';
import { airplay, interviews, press, type MediaItem } from '@/lib/media';

export const metadata = {
  title: 'Media — Kiyomi Hawley',
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-3xl tracking-[0.15em] text-stone-700 uppercase mb-8">
      {children}
    </h2>
  );
}

function ItemList({ items }: { items: MediaItem[] }) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((item) => (
        <li key={item.outlet} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
          {item.link ? (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-800 hover:text-stone-500 transition-colors underline underline-offset-2 decoration-stone-300"
            >
              {item.outlet}
            </a>
          ) : (
            <span className="text-stone-800">{item.outlet}</span>
          )}
          {item.detail && (
            <span className="text-[11px] tracking-[0.2em] uppercase text-stone-400">{item.detail}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-6 pt-40 pb-24">
        <h1 className="font-display text-5xl tracking-[0.18em] text-stone-700 uppercase mb-20 text-center">
          Media
        </h1>

        {/* Radio & Distribution */}
        <section className="mb-20">
          <SectionHeading>Radio & Distribution</SectionHeading>
          <ItemList items={airplay} />
        </section>

        {/* Interviews */}
        <section className="mb-20">
          <SectionHeading>Interviews</SectionHeading>
          <ItemList items={interviews} />
        </section>

        {/* Press & Reviews */}
        <section className="mb-20">
          <SectionHeading>Press & Reviews</SectionHeading>
          <ItemList items={press} />
        </section>
      </div>

      <Footer />
    </main>
  );
}
