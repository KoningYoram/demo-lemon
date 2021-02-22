import { ItunesEntities } from "../enums/itunes-entities";
import { ItunesMedia } from "../enums/itunes-media.enum";
import { ItunesOptions } from "./itunes-api-options.interface";

export interface ItunesMusicOptions extends ItunesOptions {
    media: ItunesMedia.music,
    entity: typeof ItunesEntities[ItunesMedia.music],
    attribute: typeof ItunesEntities[ItunesMedia.music]
}