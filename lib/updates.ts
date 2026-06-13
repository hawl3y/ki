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
    title: 'I Married a Photograph. Then I Met My Husband For the First Time',
    excerpt: 'Kiyomi\'s personal essay about her experience as a Moonie bride, published in Newsweek.',
    content: 'Read Kiyomi\'s personal essay in Newsweek about her experience as a young bride in the Unification Church\'s mass wedding ceremony — and the long road to finding herself.',
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
    ' live-streamed setting.\n\nThe evening features performances by Hayden Joseph, Alex Noelle, Anson Jones, Colin Kelly,' + 
    ' and Kiyomi Hawley, each bringing their own unique style and voice to the stage.' + 
    ' From acoustic storytelling to powerful vocal performances, the showcase offers a dynamic mix of genres and perspectives.' +
    ' \n\nTickets are available for $15 online, making it easy to enjoy an engaging night of live music from anywhere.' + 
    ' Whether you\'re discovering new artists or supporting the songwriting community,' + 
    ' this showcase delivers an authentic and memorable experience.',
    imageUrl: '/images/Circle_Apr-5.jpeg',
  },
];
