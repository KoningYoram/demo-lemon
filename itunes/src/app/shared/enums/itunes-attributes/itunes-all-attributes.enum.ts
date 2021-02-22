import { ItunesAudiobookAttributes, ItunesMovieAttributes, ItunesMusicAttributes, ItunesMusicvideoAttributes, ItunesPodcastAttributes, ItunesShortfilmAttributes, ItunesSoftwareAttributes, ItunesTvshowAttributes } from "./";

export const ItunesAllAttributes = {
    ...ItunesAudiobookAttributes,
    ...ItunesMovieAttributes,
    ...ItunesMusicAttributes,
    ...ItunesMusicvideoAttributes,
    ...ItunesPodcastAttributes,
    ...ItunesShortfilmAttributes,
    ...ItunesSoftwareAttributes,
    ...ItunesTvshowAttributes
}