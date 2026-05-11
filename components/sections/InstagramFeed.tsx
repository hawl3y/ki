import Image from 'next/image';
import { fetchInstagramPosts } from '@/lib/instagram';

export default async function InstagramFeed() {
  const posts = await fetchInstagramPosts(12);
  if (posts.length === 0) return null;

  return (
    <div className="grid grid-cols-3 gap-1">
      {posts.map((post) => {
        const src =
          post.media_type === 'VIDEO'
            ? (post.thumbnail_url ?? post.media_url)
            : post.media_url;

        return (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-square overflow-hidden group"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 768px) 33vw, 20vw"
              className="object-cover transition-opacity duration-300 group-hover:opacity-75"
              unoptimized
            />
          </a>
        );
      })}
    </div>
  );
}
