import { SOUNDCLOUD_URL } from '@/lib/config';

export default function Music() {
  const src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(SOUNDCLOUD_URL)}&color=%23000000&visual=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`;

  return (
    <section className="bg-neutral-950 py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-4xl tracking-[0.18em] text-stone-300 uppercase mb-12 text-center">
          Music
        </h2>
        <iframe
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={src}
          className="w-full h-[300px]"
          title="Kiyomi Hawley on SoundCloud"
        />
      </div>
    </section>
  );
}
