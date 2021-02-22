import { ActionReducerMap } from '@ngrx/store';
import { storeReducer } from './store/app.reducer';
import { StoreState } from './store/app.state';

export interface AppState {
    store: StoreState
};

export const appReducers: ActionReducerMap<AppState> = {
    store: storeReducer
};