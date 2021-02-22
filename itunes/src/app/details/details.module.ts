import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { DetailsRoutingModule } from "./details-routing.module";
import { DetailsComponent } from "./page/details.component";

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        DetailsRoutingModule
    ],
    exports: [],
    declarations: [
        DetailsComponent
    ]
})
export class DetailModule { }