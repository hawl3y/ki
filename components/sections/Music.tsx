const SOUNDCLOUD_TRACK_URL = 'https://soundcloud.com/kiyomi/03-meet-you-there';
const YOUTUBE_VIDEO_ID = 'OWvJKu5QcQw';

const soundcloudSrc =
  `https://w.soundcloud.com/player/?url=${encodeURIComponent(SOUNDCLOUD_TRACK_URL)}` +
  `&visual=true&auto_play=false&hide_related=true&show_comments=false` +
  `&show_user=false&show_reposts=false&show_teaser=false`;

export default function Music() {
  return (
    <section className="bg-stone-50 py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl tracking-[0.18em] text-stone-700 uppercase mb-16 text-center">
          Music
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-stone-400 mb-4">Listen</p>
            <div className="aspect-video w-full">
              <iframe
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={soundcloudSrc}
                width="100%"
                height="100%"
                title="Kiyomi Hawley on SoundCloud"
              />
            </div>
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
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
