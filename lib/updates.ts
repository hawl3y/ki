export interface Update {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
  link?: string;
  type: 'event' | 'article' | 'news';
}

export const updates: Update[] = [
  {
    slug: 'book-launch',
    date: '2026-11-11',
    type: 'event',
    title: 'Book Launch — 11.11.2026',
    excerpt: 'More details coming soon.',
    content: 'More details coming soon. Check back here for updates.',
  },
];
