import { createReducer, on } from "@ngrx/store";
import { loaderStateInterface } from "../state/loaderState.interface";
import * as LoaderActions from '../action/loader.action';

export const initialState: loaderStateInterface = {
    isLoading: true,
    error: null,
    loader: null,
};

export const LoaderReducers = createReducer(
    initialState,
    on(LoaderActions.getLoader, (state) => ({
        ...state,
        isLoading: true
    })),
    on(LoaderActions.getLoaderSuccess, (state) => ({
        ...state,
        isLoading: false
    }))
)