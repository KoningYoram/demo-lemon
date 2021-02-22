import { Action } from '@ngrx/store';
import { ItunesMusicResponseDto } from '../shared/dtos/itunes-music-response.dto';
import { ItunesMusicResponseObjectDto } from '../shared/interfaces/itunes-music-response.interface';

export enum StoreActionTypes {
    SetCurrent = '[store] set current selected item',
    ClearCurrent = '[store] clear currently selected item',
    SetSearchResults = '[store] set search results',
    ClearSearchResults = '[store] clear search results',
    SetLoading = '[store] set loading state',
    clear = '[store] clear store'
}

export class SetCurrentAction implements Action{
    readonly type = StoreActionTypes.SetCurrent;

    constructor(public current: ItunesMusicResponseObjectDto){}
};

export class ClearCurrentAction implements Action {
    readonly type = StoreActionTypes.ClearCurrent;
}

export class SetSearchResultsAction implements Action {
    readonly type = StoreActionTypes.SetSearchResults;

    constructor(public results: ItunesMusicResponseDto){ }
}

export class ClearSearchResultsAction implements Action{
    readonly type = StoreActionTypes.ClearSearchResults;
}

export class SetLoadingAction implements Action{
    readonly type = StoreActionTypes.SetLoading;

    constructor(public loading: boolean) { }
}

export class ClearAction implements Action{
    readonly type = StoreActionTypes.clear;
}

export type StoreActions = SetCurrentAction
    | ClearCurrentAction
    | SetSearchResultsAction
    | ClearSearchResultsAction
    | SetLoadingAction
    | ClearAction;