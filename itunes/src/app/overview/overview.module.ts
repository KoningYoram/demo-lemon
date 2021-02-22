import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoaderComponent } from "./components/loader/loader.component";
import { ResultTableComponent } from "./components/result-table/result-table.component";
import { OverviewRoutingModule } from "./overview-routing.module";
import { OverviewComponent } from "./page/overview.component";

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        OverviewRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [],
    declarations: [
        OverviewComponent,
        LoaderComponent,
        ResultTableComponent
    ]
})
export class OverviewModule{}