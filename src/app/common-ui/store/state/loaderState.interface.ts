import { ActionReducerMap } from "@ngrx/store";
import { AppStateInterfaces } from "../../../app-state-interfaces";
import { LoaderReducers } from "../reducer/loader.reducer";
import { MetaReducer } from "@ngrx/store";

export interface loaderStateInterface {
    isLoading: boolean;
    error: string | null;
    loader: null;
}

export const reducers: ActionReducerMap<AppStateInterfaces> = {
    posts: LoaderReducers,
}
export const metaReducers: MetaReducer<AppStateInterfaces>[] = [] ;