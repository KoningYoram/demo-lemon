import { ItunesAudiobookEntities, ItunesEbookEntities, ItunesMovieEntities, ItunesMusicEntities, ItunesMusicvideoEntities, ItunesPodcastEntities, ItunesShortfilmEntities, ItunesSoftwareEntities, ItunesTvshowEntities, } from '.';

export const ItunesAllEntities = {
    ...ItunesMovieEntities,
    ...ItunesPodcastEntities,
    ...ItunesMusicEntities,
    ...ItunesMusicvideoEntities,
    ...ItunesAudiobookEntities,
    ...ItunesShortfilmEntities,
    ...ItunesTvshowEntities,
    ...ItunesSoftwareEntities,
    ...ItunesSoftwareEntities,
    ...ItunesEbookEntities
}