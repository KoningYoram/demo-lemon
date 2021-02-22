import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { OverviewComponent } from "./page/overview.component";

const routes = [
    {
        path: '',
        component: OverviewComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OverviewRoutingModule{}