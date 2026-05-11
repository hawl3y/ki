import { NextRequest, NextResponse } from 'next/server';
import { getInstagramToken, setInstagramToken } from '@/lib/instagram';

export async function GET(request: NextRequest) {
  const auth = request.headers.get('authorization');
  if (process.env.CRON_SECRET && auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const token = await getInstagramToken();
  if (!token) {
    return NextResponse.json({ error: 'No token found' }, { status: 500 });
  }

  const res = await fetch(
    `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`
  );

  if (!res.ok) {
    const detail = await res.text();
    return NextResponse.json({ error: 'Refresh failed', detail }, { status: 500 });
  }

  const data = await res.json();
  await setInstagramToken(data.access_token);

  return NextResponse.json({ ok: true, expires_in: data.expires_in });
}
