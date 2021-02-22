import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { catchError, filter, map } from 'rxjs/operators';
import { ItunesMusicResponseDto } from "../shared/dtos/itunes-music-response.dto";
import { ItunesMusicEntities } from "../shared/enums/itunes-entities";
import { ItunesMusicResponseObjectDto } from "../shared/interfaces/itunes-music-response.interface";
import { ItunesResponseObjectDto } from "../shared/interfaces/itunes-repsonse-object.interface";

interface HttpOptions {
    headers?: HttpHeaders | {
        [header: string]: string | string[]
    };
    observe?: 'body';
    params?: HttpParams | {
        [params: string]: string | string[]
    };
    reportProgress?: boolean;
    responseType?: any
    withCredentials?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class RequestService {
    private http: HttpClient;
    private base: string = 'https://itunes.apple.com/search';
    constructor(httpClient: HttpClient) {
        this.http = httpClient
    }

    searchMusic(searchString: string): Observable<ItunesMusicResponseDto> {
        const params = new URLSearchParams();
        params.append('term', searchString);
        params.append('entity', ItunesMusicEntities.musicTrack);
        const url = `${this.base}?${params.toString()}`
        return this.get(url);
    }

    searchMusicById(trackId: ItunesMusicResponseObjectDto['trackId']): Observable<ItunesResponseObjectDto> {
        const params = new URLSearchParams();
        params.append('term', trackId.toString());
        params.append('entity', ItunesMusicEntities.musicTrack);
        const url = `${this.base}?${params.toString()}`;
        return this.get(url).pipe(
            filter((track => !!track)),
            map((value: ItunesMusicResponseDto) => {
                if (value.resultCount === 1) {
                    return value.results.reduce((a, b) => a);
                }
                return null
            })
        );
    }

    private get(url: string, options?: HttpOptions): Observable<any> {
        const result$ = this.http.get(url, {
            ...options,
            responseType: options?.responseType ?? 'json'
        }).pipe(
            catchError((e: HttpErrorResponse) => throwError(e))
        );

        return result$;
    };

    private post(url: string, body: any, options?: HttpOptions): Observable<any> {
        const result$ = this.http.post(url, body, {
            ...options,
            responseType: options?.responseType ?? 'json'
        }).pipe(
            catchError((e: HttpErrorResponse) => throwError(e))
        );

        return result$;
    };
}