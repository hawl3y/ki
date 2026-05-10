export interface MediaItem {
  outlet: string;
  detail?: string;
  link?: string;
}

export const airplay: MediaItem[] = [
  { outlet: 'Spotify' },
  { outlet: 'Pandora' },
  { outlet: 'WXCI 91.7 FM', detail: 'College radio' },
  { outlet: 'WUSB', detail: 'College radio' },
  { outlet: 'iTunes' },
  { outlet: 'Amazon Music' },
  { outlet: 'CD Baby' },
];

export const interviews: MediaItem[] = [
  { outlet: 'Guitar Girl Magazine', detail: 'Interview', 
    link: 'https://guitargirlmag.com/interviews/kiyomi-hawley-chats-new-ep-music-production-favorite-music-more/' },
  { outlet: 'UpFrontNY', detail: 'Interview', 
    link: 'https://upfrontny.com/ny-entertainer-of-the-week-kiyomi-hawley/' },
  { outlet: 'Skope Magazine', detail: 'Interview', 
    link: 'https://skopemag.com/2018/08/20/skopemag-qa-featuring-singer-songwriter-kiyomi-halwey' },
  { outlet: 'VENTS Magazine', detail: 'Artist Interview', 
    link: 'https://ventsmagazine.com/2018/07/19/interview-kiyomi-hawley/' }
];

export const press: MediaItem[] = [
  { outlet: 'Broadway World', detail: 'Show Feature/Preview', 
    link: 'https://www.broadwayworld.com/cabaret/article/Kiyomi-Hawley-Celebrates-The-Release-Of-MEET-YOU-THERE-At-The-Bitter-End-20181012' },
  { outlet: 'AudioFuzz', detail: 'Music Video Feature', 
    link: 'https://www.audiofuzz.com/2018/10/28/beauty-kiyomi-hawley-meet-you-there/' },
  { outlet: 'No Depression', detail: 'EP Review', 
    link: 'https://nodepression.org/nine-sample-eps-folk-swedish-americana-rockabilly-dark-cabaret-sludge-pop/' },
  { outlet: 'Do NYC.com', detail: 'Show Listing', 
    link: 'https://donyc.com/events/2018/10/15/kiyomi-hawley-vice-corey-glover-michael-ciro-booker-king-nat-townsley' },
  { outlet: 'AudioFuzz', detail: 'Track Review/Feature', 
    link: 'https://www.audiofuzz.com/2018/08/19/beauty-under-pressure-kyomi-hawley-miss-you-love-you/' },
  { outlet: 'Divine Magazine', detail: 'EP Feature', 
    link: 'https://thedivinemagazine.com/singer-songwriter-kiyomi-hawley-release-new-ep-meet-you-there-september-28/' },
  { outlet: 'Broadway World', detail: 'Track Feature', 
    link: 'https://www.broadwayworld.com/bwwmusic/article/Kiyomi-Hawley-Returns-With-New-Single-Miss-You-Love-You-20180806' },
];
