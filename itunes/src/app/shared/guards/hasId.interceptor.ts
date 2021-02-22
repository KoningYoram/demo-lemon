import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";
import { RequestService } from "src/app/services/request.service";
import { StoreStore } from "src/app/store/app.store";

@Injectable()
export class HasIdGuard implements CanActivate{
    constructor(
        private store: StoreStore,
        private requestservice: RequestService,
        private router: Router
    ) { }
    async canActivate(
        { params }: ActivatedRouteSnapshot
    ): Promise<boolean> {
        this.store.SetLoading();
        const track = await this.requestservice.searchMusicById(params.id).pipe(take(1)).toPromise();
        if (!track) {
            this.store.SetNotLoading();
            return false;
        }
        this.store.setCurrent(track);
        this.store.SetNotLoading();
        return true;
    }
}