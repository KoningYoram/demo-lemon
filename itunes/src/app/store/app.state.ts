import { ItunesMusicResponseDto } from "../shared/dtos/itunes-music-response.dto";
import { ItunesMusicResponseObjectDto } from "../shared/interfaces/itunes-music-response.interface";

export interface StoreState {
    current: ItunesMusicResponseObjectDto;
    count: number;
    searchResults: ItunesMusicResponseObjectDto[];
    loading: boolean;
}

export const initialStoreState: StoreState = {
    current: null,
    count: null,
    searchResults: null,
    loading: false
}