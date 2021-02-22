import { StoreActions, StoreActionTypes } from "./app.actions";
import { initialStoreState, StoreState } from "./app.state";

export function storeReducer(
    state: StoreState = initialStoreState,
    action: StoreActions
): StoreState {
    switch (action.type) {
        case StoreActionTypes.SetCurrent: {
            return {
                ...state,
                current: action.current
            };
        }
            
        case StoreActionTypes.ClearCurrent: {
            return {
                ...state,
                current: null
            };
        }
            
        case StoreActionTypes.SetSearchResults: {
            return {
                ...state,
                count: action.results.resultCount,
                searchResults: action.results.results
            };
        }
            
        case StoreActionTypes.ClearSearchResults: {
            return {
                ...state,
                count: null,
                searchResults: null
            };
        }
            
        case StoreActionTypes.SetLoading: {
            return {
                ...state,
                loading: action.loading
            }
        }
            
        case StoreActionTypes.clear: {
            return initialStoreState;
        }

        default: {
            return {
                ...state
            };
        }
    }
}