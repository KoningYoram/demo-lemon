export interface ItunesResponseObjectDto {
    wrapperType: 'track' | 'collection' | 'artistFor',
    trackExplicitness: 'explicit' | 'cleaned' | 'notExplicit',
    kind: 'book' | 'album' | 'coached-audio' | 'feature-movie' | 'interactive-booklet' | 'music-video' | 'pdf' | 'podcast' | 'podcast-episode' | 'software-package' | 'song' | 'tv-episode' | 'artistFor',
    trackName: string,
    trackViewUrl: string,
    trackId: number,
    artistName: string,
    collectionName: string,
    artworkUrl100?: string,
    artworkUrl60?: string,
    viewURL?: string
}