import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoreState } from './app.state';

export const StoreStateIdentifier: string = 'store';

const storeState = createFeatureSelector<StoreState>(StoreStateIdentifier);

export const StoreSelectors = {
    all: storeState,
    current: createSelector(storeState, (state: StoreState) => state && state.current),
    count: createSelector(storeState, (state: StoreState) => state && state.count),
    searchResults: createSelector(storeState, (state: StoreState) => state && state.searchResults),
    loading: createSelector(storeState, (state: StoreState) => state && state.loading)
};
