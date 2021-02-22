import { Injectable } from "@angular/core";
import { Action, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";
import { RequestService } from "../services/request.service";
import { ItunesMusicResponseObjectDto } from "../shared/interfaces/itunes-music-response.interface";
import { ClearCurrentAction, ClearSearchResultsAction, SetCurrentAction, SetLoadingAction, SetSearchResultsAction } from "./app.actions";
import { StoreSelectors } from "./app.selectors";
import { StoreState } from "./app.state";

@Injectable({
    providedIn: 'root'
})
export class StoreStore {

    get current(): Observable<ItunesMusicResponseObjectDto>{
        return this.select(StoreSelectors.current);
    }

    get searchResultCount(): Observable<number> {
        return this.select(StoreSelectors.count);
    }

    get searchResults(): Observable<ItunesMusicResponseObjectDto[]>{
        return this.select(StoreSelectors.searchResults);
    }

    get loading(): Observable<boolean> {
        return this.select(StoreSelectors.loading);
    }

    constructor(
        private store: Store<StoreState>,
        private requestService: RequestService
    ) { }
    
    setCurrent(track: ItunesMusicResponseObjectDto): void {
        this.dispatch(new SetCurrentAction(track));
    }

    async searchForMusic(searchString: string): Promise<void>{
        this.SetLoading();
        const result = await this.requestService.searchMusic(searchString).pipe(take(1)).toPromise();
        this.dispatch(new SetSearchResultsAction(result));
        this.SetNotLoading();
    }

    clearSearch(): void{
        this.dispatch(new ClearSearchResultsAction());
    }

    clearCurrent(): void{
        this.dispatch(new ClearCurrentAction());
    }

    SetLoading(): void{
        this.dispatch(new SetLoadingAction(true));
    }

    SetNotLoading(): void{
        this.dispatch(new SetLoadingAction(false));
    }

    private dispatch(action: Action): void {
        this.store.dispatch(action);
    }

    private select<K>(mapFn: (state: StoreState) => K): Observable<K> {
        return this.store.select(mapFn);
    }
}