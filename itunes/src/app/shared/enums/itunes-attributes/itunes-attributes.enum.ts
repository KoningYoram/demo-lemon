import {
    ItunesAudiobookAttributes, ItunesMovieAttributes, ItunesTvshowAttributes
, ItunesSoftwareAttributes, ItunesShortfilmAttributes, ItunesPodcastAttributes, ItunesMusicvideoAttributes, ItunesMusicAttributes} from './';
import { ItunesAllAttributes } from './itunes-all-attributes.enum';

export const ItunesAttributes = {
    audiobook: ItunesAudiobookAttributes,
    movie: ItunesMovieAttributes,
    tvShow: ItunesTvshowAttributes,
    software: ItunesSoftwareAttributes,
    shortFilm: ItunesShortfilmAttributes,
    podcast: ItunesPodcastAttributes,
    musicVideo: ItunesMusicvideoAttributes,
    music: ItunesMusicAttributes,
    all: ItunesAllAttributes,
    ebook: null
}