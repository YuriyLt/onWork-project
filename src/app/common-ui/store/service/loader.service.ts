import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class LoaderService {
    getLoader(): Observable<any> {
        return of({ isLoading: true });
    }
}