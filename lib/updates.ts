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
