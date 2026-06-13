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
    slug: 'newsweek-moonie-wedding',
    date: '2026-06-13',
    type: 'article',
    title: 'Newsweek Essay by Kiyomi Hawley',
    excerpt: 'A piece I wrote for Newsweek on my experience participating in a Moonie mass wedding where I had to marry a photograph.',
    content: 'A piece I wrote for Newsweek on my experience participating in a Moonie mass wedding where I had to marry a photograph.',
    imageUrl: '/images/Newsweek_Jul-13.jpg',
    link: 'https://www.newsweek.com/married-a-photograph-moonies-wedding-unification-church-12061734',
  },
  {
    slug: 'book-launch',
    date: '2021-04-05',
    type: 'event',
    title: 'Monday April 5th New York Songwriter\'s Circle',
    excerpt: '',
    content: 'Join the New York Songwriters Circle for a virtual showcase on Monday, April 5th at 7:30 PM.' + 
    ' This online event brings together a curated group of talented artists performing original music in an intimate,' + 
    ' live-streamed setting.',
    imageUrl: '/images/Circle_Apr-5.jpeg',
  },
];
