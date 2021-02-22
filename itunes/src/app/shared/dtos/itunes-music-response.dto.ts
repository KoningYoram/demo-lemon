import { ItunesMusicResponseObjectDto } from "../interfaces/itunes-music-response.interface";
import { ItunesResponseDto } from "./itunes-response.dto";

export interface ItunesMusicResponseDto extends ItunesResponseDto{
    results: ItunesMusicResponseObjectDto[]
}