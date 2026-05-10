export interface Release {
  title: string;
  type: 'Album' | 'EP' | 'Single';
  year: number;
  description: string;
  link?: string;
}

export interface MediaItem {
  outlet: string;
  detail?: string;
  link?: string;
}

export const releases: Release[] = [
  {
    title: 'Meet You There',
    type: 'EP',
    year: 2018,
    description: 'Five-track release written by Kiyomi and produced by Kevin Bents. Includes "Wedding Song" and "Shine".',
    link: 'https://soundcloud.com/kiyomi/03-meet-you-there',
  },
  {
    title: 'Miss You Love You',
    type: 'Single',
    year: 2018,
    description: 'Standalone single produced by Kevin Bents.',
  },
  {
    title: 'Child In Me',
    type: 'Album',
    year: 2011,
    description: 'Twelve-track album — "the story of my life, in chronological order."',
  },
  {
    title: 'A Part of Me',
    type: 'EP',
    year: 2008,
    description: 'Five-song EP.',
  },
];

export const airplay: MediaItem[] = [
  { outlet: 'Spotify', link: 'https://open.spotify.com/artist/' },
  { outlet: 'Pandora' },
  { outlet: 'WXCI 91.7 FM', detail: 'College radio' },
  { outlet: 'WUSB', detail: 'College radio' },
  { outlet: 'iTunes' },
  { outlet: 'Amazon Music' },
  { outlet: 'CD Baby' },
];

export const interviews: MediaItem[] = [
  { outlet: 'The Yo Show', detail: 'Radio interview' },
];

export const press: MediaItem[] = [
  { outlet: 'Guitar Girl Magazine' },
  { outlet: 'Broadway World' },
  { outlet: 'LA Music Critic' },
];
