import { Redis } from '@upstash/redis';

const REDIS_TOKEN_KEY = 'instagram_token';

function getRedis(): Redis | null {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) return null;
  return Redis.fromEnv();
}

export async function getInstagramToken(): Promise<string | null> {
  const redis = getRedis();
  if (redis) {
    const stored = await redis.get<string>(REDIS_TOKEN_KEY);
    if (stored) return stored;
  }
  return process.env.INSTAGRAM_ACCESS_TOKEN ?? null;
}

export async function setInstagramToken(token: string): Promise<void> {
  const redis = getRedis();
  if (redis) await redis.set(REDIS_TOKEN_KEY, token);
}

export interface InstagramPost {
  id: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
}

export async function fetchInstagramPosts(limit = 12): Promise<InstagramPost[]> {
  const token = await getInstagramToken();
  if (!token) return [];

  const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink&limit=${limit}&access_token=${token}`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const data = await res.json();
    return data.data ?? [];
  } catch {
    return [];
  }
}
