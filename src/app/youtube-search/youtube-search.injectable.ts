import {
    YoutubeSearchService,
    YOUTUBE_API_KEY,
    YOUTUBE_API_URL
} from './youtube-search.service';
import { ClassProvider, ValueProvider } from '@angular/core';


export const youtubeSearchInjectables: any[] | ClassProvider[] | ValueProvider[] = [
    { provide: YoutubeSearchService, useClass: YoutubeSearchService },
    { provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY },
    { provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL }
];
