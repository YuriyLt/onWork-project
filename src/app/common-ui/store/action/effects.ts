import { Injectable } from "@angular/core";
import { Actions} from "@ngrx/store-devtools/src/reducer";
import * as LoaderActions from '../action/loader.action';
import { mergeMap } from "rxjs";

@Injectable()
export class LoaderEffects {
    getLoader$ = createEffect(() => 
    this.LoaderAction$.pipe(ofType(LoaderActions.getLoader), mergeMap(() => {
        return this.loaderService.getLoader().pipe(map(loader => LoaderActions.getLoader(loader)));
    }))
    );

    constructor (private LoaderAction$: Actions, private loaderService: LoaderService) {}
}