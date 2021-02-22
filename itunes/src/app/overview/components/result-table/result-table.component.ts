import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ItunesMusicResponseObjectDto } from "src/app/shared/interfaces/itunes-music-response.interface";
import { ItunesResponseObjectDto } from "src/app/shared/interfaces/itunes-repsonse-object.interface";

@Component({
    selector: 'app-result-table',
    styleUrls: ['./result-table.component.scss'],
    templateUrl: './result-table.component.html'
})
export class ResultTableComponent{
    @Input() queryString: string = null;
    @Input() results: ItunesMusicResponseObjectDto[];

    @Output() rowClicked: EventEmitter<ItunesMusicResponseObjectDto['trackId']> = new EventEmitter<ItunesMusicResponseObjectDto['trackId']>(null);

    onRowClicked(trackId: ItunesMusicResponseObjectDto['trackId']): void {
        this.rowClicked.emit(trackId);
    }
}