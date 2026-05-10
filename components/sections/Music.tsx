const SPOTIFY_TRACK_ID = '0zYroTvrnjDjd1nWHbkgZR';
const YOUTUBE_VIDEO_ID = 'OWvJKu5QcQw';

export default function Music() {
  return (
    <section className="bg-stone-50 py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl tracking-[0.18em] text-stone-700 uppercase mb-16 text-center">
          Music
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-stone-400 mb-4">Listen</p>
            <iframe
              src={`https://open.spotify.com/embed/track/${SPOTIFY_TRACK_ID}?utm_source=generator`}
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Kiyomi Hawley on Spotify"
              className="rounded-sm"
            />
          </div>
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-stone-400 mb-4">Watch</p>
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title="Kiyomi Hawley on YouTube"
                className="rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
