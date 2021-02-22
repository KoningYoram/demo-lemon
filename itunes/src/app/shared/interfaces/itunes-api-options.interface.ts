import { CountryCodes } from "../enums/country-codes.enum";
import { ItunesMedia } from "../enums/itunes-media.enum";
import { ItunesAttributes } from "../enums/itunes-attributes/itunes-attributes.enum";
import { ItunesEntities } from "../enums/itunes-entities";
export interface ItunesOptions{
    term: string,
    country: CountryCodes,
    media?: ItunesMedia,
    entity?: typeof ItunesEntities[ItunesMedia],
    attribute?: typeof ItunesAttributes[ItunesMedia],
    callback?: Function,
    limit?: number,
    lang?: 'en_us' | 'ja_jp',
    version?: 1 | 2,
    explicit?: 'Yes' | 'No'
}