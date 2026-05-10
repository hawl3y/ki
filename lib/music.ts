export interface Release {
  title: string;
  type: 'Album' | 'EP' | 'Single' | 'Book';
  year: number;
  description: string;
  link?: string;
  imageUrl?: string;
  tracks?: string[];
  tracksNumbered?: boolean;
}

export const releases: Release[] = [
  {
    title: 'Meet You There',
    type: 'EP',
    year: 2018,
    description: 'Written by Kiyomi Hawley and produced by Kevin Bents',
    link: 'https://music.apple.com/us/album/meet-you-there-ep/1437209288',
    imageUrl: '/images/meet-you-there-cover.jpg',
    tracks: ['Meet You There', 'Wedding Song', 'Miss You Love You', 'Shine', 'Little Angel'],
    tracksNumbered: true,
  },
  {
    title: 'Miss You Love You',
    type: 'Single',
    year: 2018,
    description: 'Written by Kiyomi Hawley and produced by Kevin Bents',
    link: 'https://music.apple.com/us/album/miss-you-love-you-single/1411149397',
    imageUrl: '/images/miss-you-love-you-cover.jpg',
  },
  {
    title: 'Child In Me',
    type: 'Album',
    year: 2011,
    description: '* All songs tell the story of my life, in chronological order.' + 
    ' our specific experiences differ, but hearts feel the same way. I hope my songs can speak to you somehow…',
    link: 'https://music.apple.com/us/album/child-in-me/447616731',
    imageUrl: '/images/child-in-me-cover.jpg',
    tracks: ['Child In Me', 'Little Girl Smiling', 'Flustered', 'My Place', 'A Part of Me', 'And One Day You\'ll Know', 
      'Mysterious You', 'Why', 'Blue Eyes', 'What Do You Do?', 'Back To My Soul', 'Child In Me Reprise'],
    tracksNumbered: true,
  },
  {
    title: 'A Part of Me',
    type: 'EP',
    year: 2008,
    description: 'Written and produced by Kiyomi Hawley',
    imageUrl: '/images/a-part-of-me-cover.jpg',
    tracks: ['A Part of Me', 'Flustered', 'Little Girl Smiling', 'Mysterious You', 'My Place'],
    tracksNumbered: true,
  },
];