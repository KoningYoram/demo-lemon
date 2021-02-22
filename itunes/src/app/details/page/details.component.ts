import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { ItunesMusicResponseObjectDto } from "src/app/shared/interfaces/itunes-music-response.interface";
import { StoreStore } from "src/app/store/app.store";

@Component({
    selector: 'app-details',
    styleUrls: ['./details.component.scss'],
    templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit, OnDestroy{
    current$: Observable<ItunesMusicResponseObjectDto>;
    constructor(
        private router: Router,
        private store: StoreStore
    ) { }

    goBack(): void{
        this.router.navigate(['/']);
    }
    
    ngOnInit(): void {
        this.current$ = this.store.current;
    }

    ngOnDestroy(): void {
        this.store.clearCurrent();
    }
}