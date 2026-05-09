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
    slug: 'spring-show',
    date: '2026-05-01',
    type: 'event',
    title: 'Spring Show — Coming Soon',
    excerpt: 'New dates being announced. Check back here for details.',
    content: 'New dates being announced. Check back here for details.',
  },
];
