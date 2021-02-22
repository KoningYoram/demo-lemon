import { ItunesAudiobookEntities, ItunesEbookEntities, ItunesMovieEntities, ItunesMusicEntities, ItunesMusicvideoEntities, ItunesPodcastEntities, ItunesShortfilmEntities, ItunesSoftwareEntities, ItunesTvshowEntities, } from './';
import { ItunesAllEntities } from './itunes-all-entities.enum';

export const ItunesEntities = {
    movie: ItunesMovieEntities,
    podcast: ItunesPodcastEntities,
    music: ItunesMusicEntities,
    musicVideo: ItunesMusicvideoEntities,
    audiobook: ItunesAudiobookEntities,
    shortFilm: ItunesShortfilmEntities,
    tvShow: ItunesTvshowEntities,
    software: ItunesSoftwareEntities,
    ebook: ItunesEbookEntities,
    all: ItunesAllEntities
}