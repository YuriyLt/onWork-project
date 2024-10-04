import { createReducer, on } from "@ngrx/store";
import { loaderStateInterface } from "../state/loaderState.interface";
import * as LoaderActions from '../action/loader.action';

export const initialState: loaderStateInterface = {
    isLoading: false,
    error: null,
}

export const reducers = createReducer(
    initialState,
    on(LoaderActions.getLoader, (state) => ({...state, isLoading: true})));
