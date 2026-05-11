import { Redis } from '@upstash/redis';
import { NextRequest, NextResponse } from 'next/server';

const COUNTER_KEY = 'visitor_count';
const HLL_KEY = 'visitors_hll';

function getRedis(): Redis | null {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) return null;
  return Redis.fromEnv();
}

export async function POST(request: NextRequest) {
  const redis = getRedis();
  if (!redis) return NextResponse.json({ count: null });

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    request.headers.get('x-real-ip') ??
    'unknown';

  const isNew = await redis.pfadd(HLL_KEY, ip);
  if (isNew) await redis.incr(COUNTER_KEY);

  const count = await redis.get<number>(COUNTER_KEY);
  return NextResponse.json({ count });
}

export async function GET() {
  const redis = getRedis();
  if (!redis) return NextResponse.json({ count: null });

  const count = await redis.get<number>(COUNTER_KEY);
  return NextResponse.json({ count });
}
