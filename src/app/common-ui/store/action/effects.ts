import { Injectable } from "@angular/core";
import * as LoaderActions from '../action/loader.action';
import { delay, catchError, of, switchMap } from "rxjs";
import { LoaderService } from "../service/loader.service";
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class LoaderEffects {
    getLoader$ = createEffect(() => 
    this.LoaderAction$.pipe(
        ofType(LoaderActions.getLoader), 
        switchMap(() => {
        return this.loaderService.getLoader().pipe(
            delay(5000),
            switchMap(loader => [
                LoaderActions.setLoading({ isLoading: false}),
                LoaderActions.getLoaderSuccess({ loader })
            ]),
            catchError(error => of(LoaderActions.getLoaderFail({loader: error})))
        );
    })
    )
    );

    constructor (private LoaderAction$: Actions, private loaderService: LoaderService) {}
}