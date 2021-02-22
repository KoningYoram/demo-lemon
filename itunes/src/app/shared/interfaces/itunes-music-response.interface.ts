import { ItunesResponseObjectDto } from "./itunes-repsonse-object.interface";

export interface ItunesMusicResponseObjectDto extends ItunesResponseObjectDto {
    previewUrl?: string,
    trackTimeMillis?: number
}