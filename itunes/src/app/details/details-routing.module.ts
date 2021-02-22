import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HasIdGuard } from "../shared/guards/hasId.interceptor";
import { DetailsComponent } from "./page/details.component";

const routes: Routes = [
    {
        path: ':id',
        component: DetailsComponent,
        canActivate: [HasIdGuard]
    },
    {
        path: '',
        redirectTo: '/'
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [HasIdGuard]
})
export class DetailsRoutingModule { }