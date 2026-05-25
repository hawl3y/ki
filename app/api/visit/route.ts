import { Redis } from '@upstash/redis';
import { NextRequest, NextResponse } from 'next/server';

const COUNTER_KEY = 'visitor_count';
const HLL_KEY = 'visitors_hll';

function getRedis(): Redis | null {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) return null;
  return Redis.fromEnv();
}

function todayKey(prefix: string): string {
  const d = new Date().toISOString().slice(0, 10);
  return `${prefix}:${d}`;
}

export async function POST(request: NextRequest) {
  const redis = getRedis();
  if (!redis) return NextResponse.json({ count: null, today: null });

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    request.headers.get('x-real-ip') ??
    'unknown';

  const dailyHll = todayKey('visitors_hll_daily');
  const dailyCounter = todayKey('visitor_count_daily');

  const [isNew, isNewToday] = await Promise.all([
    redis.pfadd(HLL_KEY, ip),
    redis.pfadd(dailyHll, ip),
  ]);

  await Promise.all([
    isNew ? redis.incr(COUNTER_KEY) : Promise.resolve(),
    isNewToday
      ? redis.incr(dailyCounter).then(() => redis.expire(dailyCounter, 172800))
      : Promise.resolve(),
    isNewToday ? redis.expire(dailyHll, 172800) : Promise.resolve(),
  ]);

  const [count, today] = await Promise.all([
    redis.get<number>(COUNTER_KEY),
    redis.get<number>(dailyCounter),
  ]);

  return NextResponse.json({ count, today });
}

export async function GET() {
  const redis = getRedis();
  if (!redis) return NextResponse.json({ count: null, today: null });

  const dailyCounter = todayKey('visitor_count_daily');
  const [count, today] = await Promise.all([
    redis.get<number>(COUNTER_KEY),
    redis.get<number>(dailyCounter),
  ]);

  return NextResponse.json({ count, today });
}
