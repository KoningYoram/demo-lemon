import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { debounceTime, filter, tap } from "rxjs/operators";
import { RequestService } from "src/app/services/request.service";
import { ItunesMusicResponseDto } from "src/app/shared/dtos/itunes-music-response.dto";
import { ItunesMusicResponseObjectDto } from "src/app/shared/interfaces/itunes-music-response.interface";
import { ItunesResponseObjectDto } from "src/app/shared/interfaces/itunes-repsonse-object.interface";
import { StoreStore } from "src/app/store/app.store";

@Component({
    selector: 'app-overview',
    styleUrls: ['./overview.component.scss'],
    templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit, OnDestroy {

    loading$: Observable<boolean>;
    searchQuery: FormControl;
    searchCount$: Observable<number>;
    searchResults$: Observable<ItunesMusicResponseObjectDto[]>;
    sub$: Subscription = new Subscription();

    constructor(
        private store: StoreStore,
        private requestservice: RequestService,
        private router: Router
    ) { }

    ngOnInit(): void{
        this.loading$ = this.store.loading;
        this.searchCount$ = this.store.searchResultCount;
        this.searchResults$ = this.store.searchResults;
        this.searchQuery = new FormControl('');

        this.sub$.add(
            this.searchQuery.valueChanges.pipe(
                filter((query: string) => !!query),
                debounceTime(400),
                tap((query: string) => this.store.searchForMusic(query))
            ).subscribe()
        );
    }

    goToDetails(trackId: ItunesResponseObjectDto['trackId']): void{
        this.router.navigate(['/details', trackId]);
    }

    ngOnDestroy(): void{
        this.sub$.unsubscribe();
    }
}